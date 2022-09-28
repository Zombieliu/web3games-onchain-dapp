import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/header/index.";
import Swap from "../swap";
import Tail from "../../components/tail";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, SelectorIcon } from "@heroicons/react/solid";
import {Dialog, Listbox, RadioGroup, Transition} from "@headlessui/react";
import Sort from "../../components/sort";
import {useAtom} from "jotai";
import {
    AccountChooseValue,
    token_list_and_balance,
    IntactWalletAddress,
    Select_TokenTail,
    Select_TokenTop,
    SwapTokenTail, SwapTokenTop,
    WalletButtonShowState,
    WalletListShowState,
    token_pool_pair, TOKENWATCHPOOLPAIR, PopUpBoxInfo, PopUpBoxState, AwaitPopUpBoxState,
} from '../../jotai';
import { useRouter } from "next/router";
import Link from "next/link";
import { chain_api, substrate_wallet_injector } from "../../chain/web3games";
import axios from "axios";
import { BUSD, DAI, USDC, USDT } from "../../assets";
import TokenList from "../../components/token_lists";
import SelectTokenTop from "../../components/selecttokentop";
import SelectTokenTail from "../../components/selecttokentail";
import {address_slice, evm_address_to_sub_address} from "../../utils/chain/address";
import {AwaitPop_Up_box, Pop_up_box} from "../../components/pop_up_box";
import Heads from "../../components/head";
import {cropData} from "../../utils/math";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const deliveryMethods = [
    { id: 1, title: '0.20%'},
    { id: 2, title: '0.30%'},
    { id: 3, title: '0.60%'},
]
const types = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Stablecion' },
    { id: 3, name: 'W3G ecosystem' },
    { id: 4, name: 'Gaming' },
    { id: 5, name: 'NFT' },
    { id: 6, name: 'Bridged tokens' },
]
const tokenstitle=[
    {
        title:"#"
    },
    {
        title:"Assets"
    },
    {
        title:"Fee"
    },
    {
        title:"TVL "
    },
    {
        title:"Pools "
    },

]

const Pools = () =>{
    const router = useRouter()
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
    const [selected, setSelected] = useState(types[0])
    // account info show
    const [WalletButtonShow,SetWalletButtonShow] = useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [openCreate,setOpenCreate] = useState(false)
    const [openAlert,setOpenAlert] = useState(false)
    const [,setSelectTokenTail] = useAtom(Select_TokenTail)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [swapTokenTop,] = useAtom(SwapTokenTop)
    const [swapTokenTail,] = useAtom(SwapTokenTail)
    // local address
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
    // token pool pair info

    const [token_watchlist_pool_pair,set_token_watchlist_pool_pair] = useAtom(TOKENWATCHPOOLPAIR)
    const [tokenPoolPair,setTokenPoolPair] = useAtom(token_pool_pair)

    const [localTokenPoolPair,setLocalTokenPoolPair] = useState([])
    // all pages number
    const [pages,setPages] = useState(1)
    // last pages number
    const [pagesLast,setPagesLast] = useState(0)
    // wallet type
    const [AccountChoose,] = useAtom(AccountChooseValue)
    // token list
    const [tokenlist,settokenList] = useAtom(token_list_and_balance)
    // success

    const [,setAwait_pop_up_boxState] = useAtom(AwaitPopUpBoxState)

    const [,setPop_up_boxData] =useAtom(PopUpBoxInfo)
    const [,setSop_up_boxState] = useAtom(PopUpBoxState)


    useEffect(()=>{
        if (router.isReady) {
            let intactWalletAddress_local = intactWalletAddress

            // evm to substrate
            if (AccountChoose == 1){
                intactWalletAddress_local = evm_address_to_sub_address(intactWalletAddress_local)
            }

            // setTokenPoolPair(token_pair)
            // set pages last number
            const pagesLast = Math.ceil(tokenPoolPair.length/6)
            // set last pages number
            setPagesLast(pagesLast)


            //frist page
            firstPage()

            //check token balance
            const query_token_balance = async () =>{
                const api = await chain_api(intactWalletAddress)
                const times = tokenlist.length
                let token_list = tokenlist.concat()
                let token_balance = []
                for (let i =0;i<times;i++){
                    const account_token_balance_result = await api.query.tokenFungible.balances(tokenlist[i].tokenId,intactWalletAddress_local);
                    const account_token_balance_decimals = await api.query.tokenFungible.tokens(tokenlist[i].tokenId)
                    const baseNumber = Math.pow(10,account_token_balance_decimals.toJSON().decimals)
                    const token_balance =  Number(account_token_balance_result.toString())
                    const token_balance_real_number = parseFloat(String(cropData((token_balance / baseNumber), 4)))
                    token_list[i].data = token_balance_real_number.toString()
                    console.log(account_token_balance_decimals.toJSON().decimals)

                }
                console.log(token_list)
                settokenList(token_list)
            }
            query_token_balance()
        }
    },[router.isReady])

    let time
    const createPool = async ()=>{
        if (swapTokenTop.tokenId === swapTokenTail.tokenId){
            setOpenCreate(false)
            setPop_up_boxData({
                state:false,
                type:"Create Pool",
                hash:"",
            })
            setSop_up_boxState(true)
        }else{
            const creat_pool_event_name = 'exchange.PoolCreated'
            const creat_pool_event_name2 = 'system.ExtrinsicFailed'
            const api = await chain_api(intactWalletAddress)
            const injector = await substrate_wallet_injector(intactWalletAddress)
            const token_a = Number(swapTokenTop.tokenId)
            const token_b = Number(swapTokenTail.tokenId)
            const transferExtrinsic = api.tx.exchange.createPool(token_a,token_b)
            const assets_balance = async ()=>{
                const assets_a_address = await api.query.tokenFungible.tokens(swapTokenTop.tokenId);
                const assets_b_address = await api.query.tokenFungible.tokens(swapTokenTail.tokenId);
                return [assets_a_address.toString(),assets_b_address.toString()]
            }
            const assets_balance_result = await assets_balance()
            const result = await transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ events= [],status }) => {
                setOpenCreate(false)
                if (status.isInBlock){
                    setAwait_pop_up_boxState(true)
                    events.forEach(({ event: { data, method, section }, phase }) => {
                        if(creat_pool_event_name2 == `${section}.${method}`){
                            setPop_up_boxData({
                                state:false,
                                type:"Create Pool",
                                hash:"",
                            })
                                setAwait_pop_up_boxState(false)
                                setSop_up_boxState(true)
                        }
                        if (creat_pool_event_name == `${section}.${method}`){
                            const before_pool_id = data.toString()
                            const index = before_pool_id.indexOf(',')
                            const pool_id = before_pool_id.substring(1,index)
                            let before_token_pool_pair = tokenPoolPair
                            let new_token_pool_pair = tokenPoolPair
                            let new_user_token_pool_pair = token_watchlist_pool_pair
                            if(swapTokenTop.tokenId > swapTokenTail.tokenId){
                            const input = {
                                assets_a: swapTokenTop.name,
                                assets_a_address: assets_balance_result[0],
                                assets_a_id: swapTokenTop.tokenId,
                                assets_a_image_url: swapTokenTop.img,
                                assets_b: swapTokenTail.name,
                                assets_b_address: assets_balance_result[1],
                                assets_b_id: swapTokenTail.tokenId,
                                assets_b_image_url: swapTokenTail.img,
                                pool_id,
                                total_lp: "0",
                                tvl: "0",
                                volume: "0",
                                volume_days: "0",
                                your_lp: "0"
                            }
                            new_token_pool_pair.push(input)
                                new_user_token_pool_pair.push(input)
                            }else {
                                const input = {
                                    assets_a: swapTokenTail.name ,
                                    assets_a_address: assets_balance_result[1],
                                    assets_a_id: swapTokenTail.tokenId  ,
                                    assets_a_image_url:swapTokenTail.img ,
                                    assets_b:swapTokenTop.name,
                                    assets_b_address: assets_balance_result[0],
                                    assets_b_id: swapTokenTop.tokenId,
                                    assets_b_image_url:swapTokenTop.img,
                                    pool_id,
                                    total_lp: "0",
                                    tvl: "0",
                                    volume: "0",
                                    volume_days: "0",
                                    your_lp: "0"
                                }
                                new_token_pool_pair.push(input)
                                new_user_token_pool_pair.push(input)
                            }
                            let fix = before_token_pool_pair.concat(new_token_pool_pair)
                            let new_result = []
                            for ( let item1 of fix){
                                let flag = true
                                for(let item2 of new_result){
                                    if (item1.pool_id == item2.pool_id){
                                        flag = false
                                    }
                                }
                                if (flag){
                                    new_result.push(item1)
                                }
                            }
                            setTokenPoolPair(new_result)

                            set_token_watchlist_pool_pair(new_user_token_pool_pair)
                            // success
                            setPop_up_boxData({
                                state:true,
                                type:"Create Pool",
                                hash:"",
                            })
                            setTimeout(()=>{
                                setAwait_pop_up_boxState(false)
                                setSop_up_boxState(true)
                            },2500)
                        }
                    });
                }
            }).catch((error: any) => {
                alert(error)
            });
        }

    }

    const get_token_pool_pair_info = (pages)=>{
        let token_pair_info = []
        const start_index = pages * 5 - 5
        let index = pages * 5
        if (index > tokenPoolPair.length){
            index = tokenPoolPair.length
        }
        for (let i=start_index;i<index;i++){
            token_pair_info.push(tokenPoolPair[i])
        }
        return token_pair_info
    }

    const toDetail = (tokenA_id,tokenB_id)=>{
        router.push(`/pools/detail/${tokenA_id}/${tokenB_id}`)
    }

    const firstPage = async () =>{
        const token_pool_pair_info = get_token_pool_pair_info(1)
        setLocalTokenPoolPair(token_pool_pair_info)
        setPages(1)
    }

    const lastsPage = async () =>{
        const token_pool_pair_info = get_token_pool_pair_info(pagesLast)
        setLocalTokenPoolPair(token_pool_pair_info)
        setPages(pagesLast)
    }

    const leftPage = async (pages) =>{
        if( pages >= 1 ){
            const token_pool_pair_info = get_token_pool_pair_info(pages)
            setLocalTokenPoolPair(token_pool_pair_info)
            setPages(pages)
        }
    }
    const rightPage = async (pages) =>{
        if( pages <= pagesLast){
            const token_pool_pair_info = get_token_pool_pair_info(pages)
            setLocalTokenPoolPair(token_pool_pair_info)
            setPages(pages)
        }
    }
    // @ts-ignore
    return(
        <div className="bg-W3GBG">
            <AwaitPop_Up_box/>
            <Pop_up_box/>
            <Heads/>
            <Header/>
            <div className=" relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="  ">
                        <Transition
                            show={openAlert}
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                        <div className={openAlert?"flex fixed z-20   inset-x-0 px-6 pt-4  justify-end ":"hidden "}>
                            <div className="bg-green-100 rounded-lg py-5 px-4  text-base text-green-700 inline-flex " role="alert">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
                                     className="w-6 h-6 mr-2 mt-1 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                </svg>
                                <div>
                                    Swap Confirmed
                                    <div className="flex text-gray-600">
                                        View on
                                        <div className="ml-0.5 text-blue-400 font-semibold">
                                            <Link href='https://explorer-devnet.web3games.org/'>
                                                Web3Games Explorer
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={()=>{setOpenAlert(false)}} className="ml-6 text-gray-800 -mt-8">
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                            </Transition>
                            <div className="mx-auto max-w-7xl relative px-5 pt-16  ">
                                <div className="flex justify-center items-center">
                                    <div className="mt-10 md:mt-0  text-center" >
                                        <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                            <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-12 py-1.5 text-gray-200 rounded-lg bg-[#2C2C2C]">
                                                Connect Wallet
                                            </button>
                                        </div>
                                        <div className={WalletButtonShow ? "mt-1 p-0.5 rounded-full bg-gradient-to-r from-[#DB5E7F]  via-[#876BD2] to-[#6E93E8]  shadow-xl": "hidden"}>
                                            <button onClick={()=>{setOpenCreate(true)}}  className=" lg:mt-0 bg-black px-24 py-2 rounded-full  text-white font-semibold">
                                               View Pools
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                        <div className="max-w-7xl relative px-5 pb-16 pt-4 sm:px-6   mx-auto ">

                                <div className="text-white">
                                    Liquidity Pools
                                </div>
                                {/*Liquidity Pools*/}
                                <div className="text-white mt-4 p-5 rounded-lg bg-W3GInfoBG">
                                    <div className="flex ">
                                        <div className="text-gray-400 ">
                                            My Watchlist
                                        </div>
                                        <div>
                                            <i className="fa fa-question-circle ml-2 mt-1.5 text-gray-300"
                                               aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    <div className="w-full mt-2   ">
                                        <table className="min-w-full divide-y divide-W3GInfoBorderBG">
                                            <thead className=" text-neutral-300 ">
                                            <tr>
                                                {tokenstitle.map(title => (
                                                    <th key={title.title}
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-500  "
                                                    >
                                                        {title.title}
                                                    </th>
                                                ))}
                                            </tr>
                                            </thead>
                                            <tbody className="  divide-y divide-W3GInfoBorderBG">
                                            {token_watchlist_pool_pair.map(item => (
                                                <tr key={item.pool_id}  onClick={()=>{toDetail(item.assets_a_id,item.assets_b_id)}} className="cursor-pointer hover:bg-neutral-800">
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        {item.pool_id}
                                                    </td>
                                                    <td className="px-6 py-4 pr-12 md:w-96 md:pr-0  whitespace-nowrap text-sm font-medium text-gray-200 font-medium">
                                                        <div className="flex items-center">
                                                            <img className="w-8 rounded-full" src={item.assets_a_image_url} alt=""/>
                                                            <img className="w-8 rounded-full -ml-1" src={item.assets_b_image_url} alt=""/>
                                                            <div className="ml-2 ">
                                                                {item.assets_a}-{item.assets_b}
                                                            </div>
                                                            <div className="ml-2 px-3 py-0.5 rounded-lg bg-gradient-to-r from-[#DB5E7F] via-[#876BD2]  to-[#6E93E8]">
                                                                Farms
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        {/*{item.fee}*/} 0.3%
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        ${item.tvl}M
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        {item.pool_id}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                {/*TopPools*/}
                                <div className="text-white mt-10 p-5 rounded-lg bg-W3GInfoBG">
                                    <div className="flex items-center justify-between">

                                    <div className="flex ">
                                        <div className=" ">
                                           Top Pools
                                        </div>
                                        <div>
                                            <i className="fa fa-question-circle ml-2 mt-1.5 text-gray-300"
                                               aria-hidden="true"></i>
                                        </div>
                                    </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <div className="text-gray-500 mr-1">
                                                    Filter by
                                                </div>
                                                <Listbox value={selected} onChange={setSelected}>
                                                    {({ open }) => (
                                                        <>
                                                            <div className=" relative">
                                                                <Listbox.Button className="bg-neutral-700 relative w-full rounded-full w-40  pl-3 pr-10  text-left cursor-default focus:outline-none border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    sm:text-sm">
                                                                    <span className="block truncate text-gray-500">{selected.name}</span>
                                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-neutral-800  max-h-60 rounded-md py-1 text-base border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300   overflow-auto focus:outline-none sm:text-sm">
                                                                        {types.map((type) => (
                                                                            <Listbox.Option
                                                                                key={type.id}
                                                                                className={({ active }) =>
                                                                                    classNames(
                                                                                        active ? 'text-[#9D76E3] ' : 'text-gray-400',
                                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                                    )
                                                                                }
                                                                                value={type}
                                                                            >
                                                                                {({ selected, active }) => (
                                                                                    <>
                                                                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                            {type.name}
                                                                                        </span>
                                                                                    </>
                                                                                )}
                                                                            </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox>

                                            </div>

                                            {/* CheckBox*/}
                                            <div className="mx-4 flex items-center">
                                                <input type="checkbox" className="accent-[#8E6CCD] mx-2" />
                                            <div className="text-gray-500">
                                                Hide low TVL
                                            </div>
                                            </div>


                                    {/*Search*/}
                                    <div className="flex items-center text-gray-400 hover:text-white">
                                        <div >
                                            <input type="text"
                                                   className="  bg-neutral-700 text-white text-xs md:text-sm  pr-6 rounded-lg p-2 w-full   border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                                   placeholder="Search by token "
                                                   id="Pools"
                                            />
                                        </div>
                                        <div className="text-xl ml-2  -ml-7  ">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-2  mb-12 ">
                                        <table className="min-w-full divide-y divide-W3GInfoBorderBG">
                                            <thead className=" text-neutral-300 ">
                                            <tr>
                                                {tokenstitle.map(title => (
                                                    <th key={title.title}
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-500  "
                                                    >
                                                        {title.title}
                                                    </th>
                                                ))}
                                            </tr>
                                            </thead>
                                            <tbody className="  divide-y divide-W3GInfoBorderBG">
                                            {tokenPoolPair.map(item => (
                                                <tr key={item.pool_id}  onClick={()=>{toDetail(item.assets_a_id,item.assets_b_id)}} className="cursor-pointer hover:bg-neutral-800">
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        {item.pool_id}
                                                    </td>
                                                    <td className="px-6 py-4 pr-12 md:w-96 md:pr-0  whitespace-nowrap text-sm font-medium text-gray-200 font-medium">
                                                        <div className="flex items-center">
                                                            <img className="w-8 rounded-full" src={item.assets_a_image_url} alt=""/>
                                                            <img className="w-8 rounded-full -ml-1" src={item.assets_b_image_url} alt=""/>
                                                            <div className="ml-2 ">
                                                                {item.assets_a}-{item.assets_b}
                                                            </div>
                                                            <div className="ml-2 px-3 py-0.5 rounded-lg bg-gradient-to-r from-[#DB5E7F] via-[#876BD2]  to-[#6E93E8]">
                                                                Farms
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        {/*{item.fee}*/} 0.3%
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        ${item.tvl}M
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        0
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div className="rounded-md   flex justify-end my-5" aria-label="Pagination">
                                            <button onClick={()=>firstPage()}>
                                                <div className="relative inline-flex items-center px-2 py-2 mr-2 rounded-md bg-[#3F3F3F]   text-sm font-medium text-white "
                                                >
                                                    <span className="">First</span>
                                                </div>
                                            </button>
                                            <button onClick={()=>leftPage(pages - 1)}>
                                                <div className="relative inline-flex items-center px-2 py-2 mr-2 rounded-md bg-[#3F3F3F]  text-sm font-semibold  ">
                                                    <span className="sr-only">Previous</span>
                                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                            </button>
                                            <div className="  text-white relative inline-flex rounded-md items-center px-4 py-2 bg-[#3F3F3F] text-sm font-medium">
                                                Page {pages} of {pagesLast}
                                            </div>

                                            <button onClick={()=>rightPage(pages + 1)}>
                                                <a className="relative inline-flex items-center mx-2 px-2 py-2 rounded-md  bg-[#3F3F3F] text-sm font-semibold">
                                                    <span className="sr-only">Next</span>
                                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                                </a>
                                            </button>
                                            <button onClick={ ()=>{
                                                lastsPage()
                                            }}>
                                                <div className="relative inline-flex items-center px-2 py-2 ml-2 rounded-md bg-[#3F3F3F] text-sm font-medium text-white ">
                                                    <span className="">Last</span>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                </div>
            </div>
            <Transition.Root show={openCreate} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={()=>{return false}}>
                    <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
              </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                              <div className="inline-block align-bottom p-0.5 rounded-lg bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3  w-11/12 md:w-10/12 xl:w-1/3  rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">
                                    <div className="bg-black px-4 py-5 sm:px-6 lg:px-12 rounded-md">
                                    <div className="w-full  ">
                                    <div className="flex justify-between text-xl text-white w-full items-center  font-semibold">
                                        <div>
                                            Create New Pool
                                        </div>
                                        <button onClick={()=>{setOpenCreate(false)}} className="text-white text-3xl">
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button></div>
                                </div>
                                <div className="mt-5 ">
                                    <div className="flex items-center justify-between mt-4 ">
                                        <div className="items-center w-full">
                                            <div className="text-gray-400 text-sm mb-2">
                                                Token
                                            </div>
                                            <div className="flex  w-full">
                                                <div className="flex bg-[#1F1F1F] p-2 w-full rounded-lg">
                                                    <div className="flex w-full">
                                                        <button onClick={()=>{setSelectTokenTop(true)}} className="flex w-full px-2 items-center justify-between">
                                                            <div className="flex w-full items-center">
                                                            <div>
                                                                <img className="w-7 rounded-full mr-2" src={swapTokenTop.img} alt=""/>
                                                            </div>
                                                            <div className="text-gray-200">
                                                                {swapTokenTop.name}
                                                            </div>
                                                            </div>
                                                            <i className="fa fa-angle-down text-white ml-3 " aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                               </div>
                                        </div>
                                    </div>
                                    <div className="items-center w-full mt-10">
                                        <div className="text-gray-400 text-sm mb-2">
                                           Pair
                                        </div>
                                        <div className="flex  w-full">
                                            <div className="flex bg-[#1F1F1F]  p-2 w-full rounded-lg">
                                                <div className="flex w-full">
                                                    <button onClick={()=>{setSelectTokenTail(true)}} className="flex w-full px-2 items-center justify-between">
                                                        <div className="flex w-full items-center">
                                                            <div>
                                                                <img className="w-7 rounded-full mr-2" src={swapTokenTail.img} alt=""/>
                                                            </div>
                                                            <div className="text-gray-200">
                                                                {swapTokenTail.name}
                                                            </div>
                                                        </div>
                                                        <i className="fa fa-angle-down text-white ml-3 " aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*<div className="mt-5 flex justify-between items-center" >*/}
                                {/*    <div className=" text-gray-100 font-medium">*/}
                                {/*        Total fee*/}
                                {/*    </div>*/}
                                {/*    <div className="text-white">*/}
                                {/*        <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>*/}
                                {/*            <div className=" grid grid-cols-3 gap-4">*/}
                                {/*                {deliveryMethods.map((deliveryMethod) => (*/}
                                {/*                    <RadioGroup.Option*/}
                                {/*                        key={deliveryMethod.id}*/}
                                {/*                        value={deliveryMethod}*/}
                                {/*                        className={({ checked, active }) =>*/}
                                {/*                            classNames(*/}
                                {/*                                checked ? 'border-transparent' : 'border-gray-300',*/}
                                {/*                                active ? 'ring-2 ring-indigo-500' : '',*/}
                                {/*                                'relative bg-black bg-opacity-80 border border-gray-700 rounded-lg shadow-sm items-center mx-auto px-2 flex cursor-pointer focus:outline-none'*/}
                                {/*                            )*/}
                                {/*                        }*/}
                                {/*                    >*/}
                                {/*                        {({ checked, active }) => (*/}
                                {/*                            <>*/}
                                {/*                                <div className=" flex items-center">*/}
                                {/*                                    <div className="flex justify-center">*/}
                                {/*                                        <RadioGroup.Label as="span" className=" text-center   font-medium text-gray-200">*/}
                                {/*                                            {deliveryMethod.title}*/}
                                {/*                                        </RadioGroup.Label>*/}
                                {/*                                    </div>*/}
                                {/*                                </div>*/}
                                {/*                                <div*/}
                                {/*                                    className={classNames(*/}
                                {/*                                        active ? 'border' : 'border-2',*/}
                                {/*                                        checked ? 'border-indigo-500' : 'border-transparent',*/}
                                {/*                                        'absolute -inset-px rounded-lg pointer-events-none'*/}
                                {/*                                    )}*/}
                                {/*                                    aria-hidden="true"*/}
                                {/*                                />*/}
                                {/*                            </>*/}
                                {/*                        )}*/}
                                {/*                    </RadioGroup.Option>*/}
                                {/*                ))}*/}
                                {/*            </div>*/}
                                {/*        </RadioGroup>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="text-white flex items-center justify-end mt-2">*/}
                                {/*    <input type="text"*/}
                                {/*           className=" bg-black placeholder-white text-right bg-opacity-10 text-white text-xs md:text-sm  w-20 rounded-lg px-2 py-0.5   border border-indigo-500   outline-none"*/}
                                {/*           id="fee"*/}
                                {/*           placeholder="0.20"*/}
                                {/*    />*/}
                                {/*    <div className="ml-1">*/}
                                {/*        %*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className=" mt-10 bg-[#1F1F1F] rounded-lg p-3 text-base">
                                    <div className="flex justify-between">
                                        <div className="text-gray-400 ">
                                            LP fee
                                        </div>
                                        <div className="text-white font-semibold ">
                                            0.3%
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-7" >
                                    <div className={WalletButtonShow  ? "hidden": "mt-1"}>
                                        <button  onClick={()=>{SetOpenWalletListState(true)}} className="w-full py-1.5 text-gray-200 rounded-lg bg-[#2C2C2C]">
                                            Connect Wallet
                                        </button>
                                    </div>
                                    <div className={WalletButtonShow  ? "mt-1": "hidden"}>
                                        <button  onClick={createPool} className=" lg:mt-0  w-56 px-3 py-2 rounded-lg bg-gradient-to-r from-[#DB5E7F]  via-[#876BD2] to-[#6E93E8] text-white">
                                           Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                              </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Pop_up_box/>
            <SelectTokenTail/>
            <SelectTokenTop/>
            <TokenList/>
            <Tail/>
        </div>
    )
}
export default Pools


