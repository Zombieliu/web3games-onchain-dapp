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
    base_token_list_and_balance,
    IntactWalletAddress,
    Select_TokenTail,
    Select_TokenTop,
    SetSubstrateShowState, SwapTokenTail, SwapTokenTop,
    WalletButtonShowState,
    WalletListShowState
} from "../../jotai";
import { useRouter } from "next/router";
import Link from "next/link";
import { create_pool } from "../../chain/web3games";
import axios from "axios";
import { BUSD, DAI, USDC, USDT } from "../../assets";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const deliveryMethods = [
    { id: 1, title: '0.20%'},
    { id: 2, title: '0.30%'},
    { id: 3, title: '0.60%'},
]
const types = [
    { id: 1, name: 'EVM' },
    { id: 2, name: 'Substrate' },
]
const tokenstitle=[
    {
        title:"Assets"
    },
    {
        title:"TVL"
    },
    {
        title:"Volume "
    },

]

const Pools = () =>{
    const router = useRouter()
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
    const [selected, setSelected] = useState(types[0])
    const [WalletButtonShow,SetWalletButtonShow]=useAtom(WalletButtonShowState)
    const [substrateShow,SetSubstrateShow] =useAtom(SetSubstrateShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [openCreate,setOpenCreate] = useState(false)
    const [openAlert,setOpenAlert] = useState(false)
    const [,setSelectTokenTail] = useAtom(Select_TokenTail)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [swapTokenTop,] = useAtom(SwapTokenTop)
    const [swapTokenTail,] = useAtom(SwapTokenTail)
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
    const [Etrinsic,setExtrinsic] = useState([])
    const [pages,setPages] = useState(1)
    const [pagesLast,setPagesLast] = useState(0)
    const [AccountChoose,] = useAtom(AccountChooseValue)
    const [,settokenList] = useAtom(base_token_list_and_balance)

    useEffect(()=>{
        if (router.isReady) {
            const fetchUserBounty = async () => {
                const Pages = await axios.get("http://127.0.0.1:7001/api/swap/get_swap_pools_all", {})
                setPagesLast(Math.ceil(Pages.data.length / 5))
                const data = await axios.get("http://127.0.0.1:7001/api/swap/get_swap_pools", {
                    params: {
                        pages
                    }
                })
                setExtrinsic(data.data)
            }
            const query_w3g_token_balance = async () =>{
                const w3g_token_result = await axios.get('http://127.0.0.1:7001/api/token/fungible_token_balance', {
                    params: {
                        token_id:'0',
                        // address:'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
                        address:intactWalletAddress
                    }
                })
                return w3g_token_result.data
            }
            const query_usdt_token_balance = async () =>{
                const usdt_token_result = await axios.get('http://127.0.0.1:7001/api/token/fungible_token_balance', {
                    params: {
                        token_id:'1',
                        // address:'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
                        address:intactWalletAddress
                    }
                })
                return usdt_token_result.data
            }
            const query_usdc_token_balance = async () =>{
                const usdc_token_result = await axios.get('http://127.0.0.1:7001/api/token/fungible_token_balance', {
                    params: {
                        token_id:'2',
                        address:intactWalletAddress
                        // address:'intactWalletAddress'
                    }
                })
                return usdc_token_result.data
            }
            const query_busd_token_balance = async () =>{
                const busd_token_result = await axios.get('http://127.0.0.1:7001/api/token/fungible_token_balance', {
                    params: {
                        token_id:'3',
                        address:intactWalletAddress
                        // address:'intactWalletAddress'
                    }
                })
                return busd_token_result.data
            }
            const query_dai_token_balance = async () =>{
                const dai_token_result = await axios.get('http://127.0.0.1:7001/api/token/fungible_token_balance', {
                    params: {
                        token_id:'4',
                        address:intactWalletAddress
                        // address:'intactWalletAddress'
                    }
                })
                return dai_token_result.data
            }
            axios.all([query_w3g_token_balance(),query_usdt_token_balance(),query_busd_token_balance(),query_usdc_token_balance(),query_dai_token_balance()]).then(
              axios.spread((w3g,usdt,busd,usdc,dai)=>{
                  settokenList([
                      {
                          img:"/img.png",
                          title:"W3G",
                          name:"W3G",
                          data:w3g,
                      },
                      {
                          img:USDT,
                          title:"USDT",
                          name:"USDT",
                          data:usdt,
                      },
                      {
                          img:BUSD,
                          title:"BUSD",
                          name:"BUSD",
                          data:busd,
                      },
                      {
                          img:USDC,
                          title:"USDC",
                          name:"USDC",
                          data:usdc,
                      },
                      {
                          img:DAI,
                          title:"Dai Stablecoin",
                          name:"DAI",
                          data:dai,
                      },
                  ])
              })
            )
            fetchUserBounty()
        }
    },[router.isReady])

    let time
    const createPool = async ()=>{
        console.log("1");
        console.log(swapTokenTop.name,swapTokenTop.name);
        
        // clearTimeout(time)
        // await create_pool(intactWalletAddress)
        // console.log(swapTokenTail.img,);
        // await axios.post("http://127.0.0.1:7001/api/swap/create_new_pool",{
        //     pool_id:"0",
        //     assets_a:swapTokenTop.name,
        //     assets_b:swapTokenTail.name,
        //     assets_a_image_url:swapTokenTop.img,
        //     assets_b_image_url:swapTokenTail.img,
        //     assets_a_id:"1",
        //     assets_b_id:"2",
        //     assets_a_address:"assets_a_address",
        //     assets_b_address:"assets_b_address",
        //     tvl:"1231231",
        //     volume:"231231",
        //     volume_days:"0",
        //     total_lp :"0",
        //     your_lp :"0",
        // }).then(function (response) {
        //     setOpenCreate(false)
        //     setOpenAlert(true)
        //     time = setTimeout(()=>{
        //         setOpenAlert(false)
        //         location.reload()
        //     },2000)

        // })
        //   .catch(function (error) {
        //    alert("Please try again")
        //   });

    }
    const toDetail = (e)=>{
        router.push(`/pools/detail/${e}`)
    }
    const firstPage = async (pages) =>{
        const data= await axios.get("http://127.0.0.1:7001/api/swap/get_swap_pools", {
            params:{
                pages
            }
        })
        setPages(1)
        setExtrinsic(data.data)
    }

    const lastsPage = async (pages) =>{
        const data= await axios.get("http://127.0.0.1:7001/api/swap/get_swap_pools", {
            params:{
                pages
            }
        })
        setPages(pagesLast)
        setExtrinsic(data.data)
    }
    const leftPage = async (pages) =>{
        if( pages >= 1 ){
            const data= await axios.get("http://127.0.0.1:7001/api/swap/get_swap_pools", {
                params:{
                    pages
                }
            })
            setPages(pages)
            setExtrinsic(data.data)
        }
    }
    const rightPage = async (pages) =>{
        if( pages <= pagesLast){
            const data= await axios.get("http://127.0.0.1:7001/api/swap/get_swap_pools", {
                params:{
                    pages
                }
            })
            setPages(pages)
            setExtrinsic(data.data)
        }
    }

    return(
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-90 ">
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
                        <div className={openAlert?"flex fixed z-20  motion-safe:animate-spin inset-x-0 px-6 pt-4  justify-end ":"hidden "}>
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
                            <div className="mx-auto max-w-7xl relative px-5 py-16  ">
                                <div className="md:flex justify-between items-center">
                                <div>
                                    <div className="text-3xl text-gray-200 tracking-[-0.02em] font-bold text-high-emphesis"> Provide liquidity & earn.</div>
                                    <div className="text-sm leading-5 font-medium currentColor text-gray-300">Earn LP fees by depositing tokens to the platform.</div>
                                </div>
                                    <div className="mt-10 md:mt-0  text-center" >
                                        <div className={WalletButtonShow || substrateShow ? "hidden": "mt-1"}>
                                            <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-12 py-1.5 text-gray-200 rounded-lg bg-blue-500">
                                                Connect Wallet
                                            </button>
                                        </div>
                                        <div className={WalletButtonShow || substrateShow ? "mt-1": "hidden"}>
                                            <button onClick={()=>{setOpenCreate(true)}}  className=" lg:mt-0 bg-blue-500 px-3 py-2 rounded-lg bg-indigo-500 text-white">
                                                Create Pool
                                            </button>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>

                    <div  className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6   mx-auto ">
                    <div className="">
                        <div className="flex justify-between">
                            <div className="text-gray-400 hidden lg:inline-block ">
                                <div>
                                    <div>TWAP Oracles </div>
                                    <div className="flex mt-2">
                                        <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <div className="text-gray-600 w-36 font-light text-sm ml-2 -mt-0.5"> Show oracle pairs only</div>
                                    </div>
                                </div>
                                {/*<div>*/}
                                {/*    <div className="mt-5">Fee Tiers </div>*/}
                                {/*    <div className="flex mt-2">*/}
                                {/*        <input*/}
                                {/*            id="candidates"*/}
                                {/*            aria-describedby="candidates-description"*/}
                                {/*            name="candidates"*/}
                                {/*            type="checkbox"*/}
                                {/*            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"*/}
                                {/*        />*/}
                                {/*        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">1%</div>*/}
                                {/*    </div>*/}
                                {/*    <div className="flex mt-2">*/}
                                {/*        <input*/}
                                {/*            id="candidates"*/}
                                {/*            aria-describedby="candidates-description"*/}
                                {/*            name="candidates"*/}
                                {/*            type="checkbox"*/}
                                {/*            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"*/}
                                {/*        />*/}
                                {/*        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">0.3%</div>*/}
                                {/*    </div>*/}
                                {/*    <div className="flex mt-2">*/}
                                {/*        <input*/}
                                {/*            id="candidates"*/}
                                {/*            aria-describedby="candidates-description"*/}
                                {/*            name="candidates"*/}
                                {/*            type="checkbox"*/}
                                {/*            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"*/}
                                {/*        />*/}
                                {/*        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">0.05%</div>*/}
                                {/*    </div>*/}
                                {/*    <div className="flex mt-2">*/}
                                {/*        <input*/}
                                {/*            id="candidates"*/}
                                {/*            aria-describedby="candidates-description"*/}
                                {/*            name="candidates"*/}
                                {/*            type="checkbox"*/}
                                {/*            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"*/}
                                {/*        />*/}
                                {/*        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">0.01%</div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                            <div className="lg:ml-10 lg:w-10/12 overflow-auto">
                                <div className="lg:flex w-full">
                                    <div className="flex ">
                                        <div className="text-xl ml-2  -mr-6 mt-1 text-gray-300">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <input type="text"
                                                   className="pl-8 bg-black bg-opacity-10 text-white text-xs md:text-sm   rounded-lg px-2 py-2 w-60 lg:w-96  border border-gray-800    outline-none"
                                                   placeholder="Search by token or pair "
                                                   id="Pools"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 lg:mt-0 lg:ml-10">
                                        {/*<Listbox value={selected} onChange={setSelected} >*/}
                                        {/*    {({ open }) => (*/}
                                        {/*        <>*/}
                                        {/*            <div className=" relative ">*/}
                                        {/*                <Listbox.Button className="relative lg:ml-4 border-gray-300 bg-gray-900 px-6 py-1  rounded-xl  xl:pl-12    text-left cursor-default flex  sm:text-base">*/}
                                        {/*                    <span className="block text-gray-300 truncate text-lg w-18 xl:w-24 mr-5 xl:mr-2"> {selected.name}</span>*/}
                                        {/*                    <span className="text-gray-200 mt-0.5">*/}
                                        {/*           <i className="fa fa-angle-down" aria-hidden="true"></i>*/}
                                        {/*        </span>*/}
                                        {/*                </Listbox.Button>*/}

                                        {/*                /!*<Transition*!/*/}
                                        {/*                /!*    show={open}*!/*/}
                                        {/*                /!*    as={Fragment}*!/*/}
                                        {/*                /!*    leave="transition ease-in duration-100"*!/*/}
                                        {/*                /!*    leaveFrom="opacity-100"*!/*/}
                                        {/*                /!*    leaveTo="opacity-0"*!/*/}
                                        {/*                /!*>*!/*/}
                                        {/*                /!*    <Listbox.Options className="absolute z-10 mt-1 w-36 xl:w-44 bg-gray-900 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  sm:text-sm">*!/*/}
                                        {/*                /!*        {types.map((type) => (*!/*/}
                                        {/*                /!*            <Listbox.Option*!/*/}
                                        {/*                /!*                key={type.id}*!/*/}
                                        {/*                /!*                className={({ active }) =>*!/*/}
                                        {/*                /!*                    classNames(*!/*/}
                                        {/*                /!*                        active ? 'text-white bg-gray-600' : 'text-gray-400',*!/*/}
                                        {/*                /!*                        'cursor-default selecttokentop-none relative py-2 pl-8 pr-4'*!/*/}
                                        {/*                /!*                    )*!/*/}
                                        {/*                /!*                }*!/*/}
                                        {/*                /!*                value={type}*!/*/}
                                        {/*                /!*            >*!/*/}
                                        {/*                /!*                {({ selected, active }) => (*!/*/}
                                        {/*                /!*                    <>*!/*/}
                                        {/*                /!*                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>*!/*/}
                                        {/*                /!*                  {type.name}*!/*/}
                                        {/*                /!*                </span>*!/*/}

                                        {/*                /!*                        {selected ? (*!/*/}
                                        {/*                /!*                            <span*!/*/}
                                        {/*                /!*                                className={classNames(*!/*/}
                                        {/*                /!*                                    active ? 'text-white' : ' text-gray-400',*!/*/}
                                        {/*                /!*                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'*!/*/}
                                        {/*                /!*                                )}*!/*/}
                                        {/*                /!*                            >*!/*/}
                                        {/*                /!*                    <CheckIcon className="h-5 w-5" aria-hidden="true" />*!/*/}
                                        {/*                /!*                  </span>*!/*/}
                                        {/*                /!*                        ) : null}*!/*/}
                                        {/*                /!*                    </>*!/*/}
                                        {/*                /!*                )}*!/*/}
                                        {/*                /!*            </Listbox.Option>*!/*/}
                                        {/*                /!*        ))}*!/*/}
                                        {/*                /!*    </Listbox.Options>*!/*/}
                                        {/*                /!*</Transition>*!/*/}
                                        {/*            </div>*/}
                                        {/*        </>*/}
                                        {/*    )}*/}
                                        {/*</Listbox>*/}
                                    </div>
                                </div>
                                <div className="text-gray-400 mt-10">
                                    Top Liquidity Pools
                                    <div className="mt-2 overflow-auto mb-12">
                                        <table className=" w-full divide-y divide-gray-700 overflow-auto">
                                            <thead className="bg-black ">
                                            <tr>
                                                {tokenstitle.map(title => (
                                                    <th key={title.title}
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-300  "
                                                    >
                                                        {title.title}
                                                    </th>
                                                ))}
                                            </tr>
                                            </thead>
                                            <tbody className="bg-black  divide-y divide-gray-700">
                                            {Etrinsic.map(item => (
                                                <tr key={item.assets} onClick={()=>{toDetail(item.pool_id)}}className="cursor-pointer hover:bg-gray-900">
                                                    <td className="px-6 py-4 pr-24 md:pr-0  whitespace-nowrap text-sm font-medium text-gray-200 font-medium">
                                                        <div className="flex items-center">
                                                            <img className="w-8 rounded-full" src={item.assets_a_image_url} alt=""/>
                                                            <img className="w-8 rounded-full -ml-4" src={item.assets_b_image_url} alt=""/>
                                                            <div className="ml-2 ">
                                                                {item.assets_a}-{item.assets_b}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        ${item.tvl}
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-200">
                                                        ${item.volume}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div className="rounded-md   flex justify-end my-5" aria-label="Pagination">
                                            <button onClick={()=>firstPage(1)}>
                                                <div className="relative inline-flex items-center px-2 py-2 mr-2 rounded-md bg-gray-500 border border-gray-300  text-sm font-medium text-white "
                                                >
                                                    <span className="">First</span>
                                                </div>
                                            </button>
                                            <button onClick={()=>leftPage(pages-1)}>
                                                <div className="relative inline-flex items-center px-2 py-2 rounded-l-md  bg-gray-500 border border-gray-400 text-sm font-medium text-white ">
                                                    <span className="sr-only">Previous</span>
                                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                            </button>
                                            <div className="bg-gray-500  text-white relative inline-flex items-center px-4 py-2 border border-gray-400 text-sm font-medium">
                                                Page {pages} of {pagesLast}
                                            </div>

                                            <button onClick={()=>rightPage(pages+1)}>
                                                <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-400 bg-gray-500 text-sm font-medium text-white">
                                                    <span className="sr-only">Next</span>
                                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                                </a>
                                            </button>
                                            <button onClick={ ()=>{
                                                lastsPage(pagesLast)
                                            }}>
                                                <div className="relative inline-flex items-center px-2 py-2 ml-2 rounded-md border border-gray-300 bg-gray-500 text-sm font-medium text-white ">
                                                    <span className="">Last</span>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
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
                            <div className="inline-block align-bottom bg-gray-900 rounded-lg w-11/12 md:w-9/12 xl:w-1/3 px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8  sm:p-6">
                                <div className="w-full  ">
                                    <div className="flex justify-between text-xl text-white w-full">
                                        <div>
                                            Create New Pool
                                        </div>
                                        <button onClick={()=>{setOpenCreate(false)}} >
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
                                                <div className="flex bg-gray-600 bg-opacity-90 p-2 w-full rounded-lg">
                                                    <div className="flex w-full">
                                                        <button onClick={()=>{setSelectTokenTop(true)}} className="flex w-full px-2 items-center justify-between">
                                                            <div className="flex w-full items-center">
                                                            <div>
                                                                <img className="w-7 rounded-full mr-1" src={swapTokenTop.img} alt=""/>
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
                                            <div className="flex bg-gray-600 bg-opacity-90 p-2 w-full rounded-lg">
                                                <div className="flex w-full">
                                                    <button onClick={()=>{setSelectTokenTail(true)}} className="flex w-full px-2 items-center justify-between">
                                                        <div className="flex w-full items-center">
                                                            <div>
                                                                <img className="w-7 rounded-full mr-1" src={swapTokenTail.img} alt=""/>
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
                                <div className="bg-black mt-10 bg-opacity-50 rounded-lg p-3 text-base">
                                    <div className="flex justify-between">
                                        <div className="text-gray-400 ">
                                            LP fee
                                        </div>
                                        <div className="text-white font-semibold ">
                                            0.3%
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-5" >
                                    <div className={WalletButtonShow || substrateShow ? "hidden": "mt-1"}>
                                        <button  onClick={()=>{SetOpenWalletListState(true)}} className="w-full py-1.5 text-gray-200 rounded-lg bg-blue-500">
                                            Connect Wallet
                                        </button>
                                    </div>
                                    <div className={WalletButtonShow || substrateShow ? "mt-1": "hidden"}>
                                        <button  onClick={createPool} className=" lg:mt-0 bg-blue-500 w-full px-3 py-2 rounded-lg bg-indigo-500 text-white">
                                           Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Tail/>
        </div>
    )
}
export default Pools


