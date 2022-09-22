import Header from "../../../components/header/index.";
import Tail from "../../../components/tail";
import React, {Fragment, useState ,useEffect, useCallback} from 'react'
import Link from "next/link";
import {Dialog, RadioGroup, Tab, Transition} from "@headlessui/react";
import {useAtom} from "jotai";
import Error from "../../../components/error";
import {
    IntactWalletAddress, PopUpBoxInfo,
    PopUpBoxState,
    token_pool_pair,
    WalletButtonShowState,
    WalletListShowState
} from "../../../jotai";
import {CheckCircleIcon, CheckIcon, ExclamationIcon} from "@heroicons/react/solid";
import {
    chain_api,
    substrate_EstimateOutToken,
    substrate_getEstimateLpToken,
    substrate_wallet_injector
} from "../../../chain/web3games";
import axios from "axios";
import { useRouter } from "next/router";
import { address_slice } from "../../../utils/chain/address";
import { add_liquidity } from "../../../utils/chain/pool";
import { checkNumber } from "../../../utils/math";
import {Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Heads from "../../../components/head";
import {PoolSkeleton} from "../../../components/skeleton";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const deliveryMethods = [
    { id: 1, title: '0.1%'},
    { id: 2, title: '0.5%'},
    { id: 3, title: '1%'},
]

const data = [
    {
        name: "1",
        TVL: 4000,
        Volume: 2400,
        amt: 2400
    },
    {
        name: "2",
        TVL: 3000,
        Volume: 1398,
        amt: 2210
    },
    {
        name: "3",
        TVL: 2000,
        Volume: 9800,
        amt: 2290
    },
    {
        name: "4",
        TVL: 2780,
        Volume: 3908,
        amt: 2000
    },
    {
        name: "5",
        TVL: 1890,
        Volume: 4800,
        amt: 2181
    },
    {
        name: "6",
        TVL: 2390,
        Volume: 3800,
        amt: 2500
    },
    {
        name: "7",
        TVL: 3490,
        Volume: 4300,
        amt: 2100
    },
    {
        name: "8",
        TVL: 4000,
        Volume: 2400,
        amt: 2400
    },
    {
        name: "9",
        TVL: 3000,
        Volume: 1398,
        amt: 2210
    },
    {
        name: "10",
        TVL: 2000,
        Volume: 9800,
        amt: 2290
    },
    {
        name: "11",
        TVL: 2780,
        Volume: 3908,
        amt: 2000
    },
    {
        name: "12",
        TVL: 1890,
        Volume: 4800,
        amt: 2181
    },
    {
        name: "13",
        TVL: 2390,
        Volume: 3800,
        amt: 2500
    },
    {
        name: "14",
        TVL: 4000,
        Volume: 2400,
        amt: 2400
    },
    {
        name: "15",
        TVL: 3000,
        Volume: 1398,
        amt: 2210
    },
    {
        name: "16",
        TVL: 2000,
        Volume: 9800,
        amt: 2290
    },
    {
        name: "17",
        TVL: 2780,
        Volume: 3908,
        amt: 2000
    },
    {
        name: "18",
        TVL: 1890,
        Volume: 4800,
        amt: 2181
    },
    {
        name: "19",
        TVL: 2390,
        Volume: 3800,
        amt: 2500
    },
    {
        name: "20",
        TVL: 4000,
        Volume: 2400,
        amt: 2400
    },
    {
        name: "21",
        TVL: 3000,
        Volume: 1398,
        amt: 2210
    },
    {
        name: "22",
        TVL: 2000,
        Volume: 9800,
        amt: 2290
    },
    {
        name: "23",
        TVL: 2780,
        Volume: 3908,
        amt: 2000
    },
    {
        name: "24",
        TVL: 1890,
        Volume: 4800,
        amt: 2181
    },
    {
        name: "25",
        TVL: 2390,
        Volume: 3800,
        amt: 2500
    },
];

const Recharts =() => {
    const Title = [
        {
            title:"TVL"
        },
        {
            title:"Volume"
        },

    ]

    return (
        <div className="w-full  p-2 sm:px-0">
            <Tab.Group>
                <div className="flex justify-end">
                    <Tab.List className="grid grid-cols-2 gap-4   rounded-xl  p-1">
                        {Title.map((items) => (
                            <div   key={items.title} className="flex mx-auto flex  items-center">
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full  py-1.5 rounded-full  px-4 font-medium leading-5  text-gray-400 outline-none ',
                                            selected
                                                ? ' text-white   border border-gray-300  '
                                                : '  hover:text-white '
                                        )
                                    }
                                >
                                    <div className="">
                                        {items.title}
                                    </div>

                                </Tab>
                            </div>
                        ))}
                    </Tab.List>
                </div>

                <Tab.Panels className="mt-2">

                    <Tab.Panel>
                        <Recharts1/>
                    </Tab.Panel>

                    <Tab.Panel>
                        <Recharts2/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

const Recharts1 = () =>{
    return (
        <div className="hidden xl:block bg-[#1F1F1F] text-center font-serif">
            <AreaChart width={800}
                       height={360}
                       data={data}
                       margin={{
                           top: 10,
                           right: 2,
                           left: 30,
                           bottom: 0
                       }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6F9BE7" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#9669C3" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <Tooltip />
                <Area type="monotone" dataKey="TVL" stroke="#8E6CCD" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>

        </div>
    );
}

const Recharts2 = () => {
    return(
        <div className="hidden xl:block bg-[#1F1F1F] text-center  font-serif">
            <BarChart
                width={800}
                height={360}
                data={data}
                margin={{
                    top: 10,
                    right: 2,
                    left: 40,
                    bottom: 0
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point"  />
                <Tooltip />
                <Legend />
                <Bar dataKey="Volume" fill="#7573EA" background={{ fill: "#1F1F1F" }} />
            </BarChart>
        </div>
    )
}


const Detail = () =>{
    const router = useRouter()
    const [WalletButtonShow,]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [openAdd,setOpenAdd] = useState(false)
    const [openRemove,setOpenRemove] = useState(false)
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
    // token pool pair info
    const [tokenPoolPair,setTokenPoolPair] = useAtom(token_pool_pair)

    const [token_b_number,setToken_b_number] =useState("0")

    const [token_a_number,setToken_a_number] = useState("0")

    const [yourLP,setYourLP] = useState("0")

    const poolDetails={
        pool_id:"",
        assets_a:"",
        assets_b:"",
        assets_a_id:"",
        assets_b_id:"0",
        assets_a_image_url:"",
        assets_b_image_url:"",
        assets_a_address:"",
        assets_b_address:"",
        tvl:"",
        volume:"",
        volume_days:"",
        total_lp:"",
        your_lp:"",
    }
    const [PoolDetails,setPoolDetails] = useState(poolDetails)
    const [tokenABalance,setTokenABalance] = useState('')
    const [tokenBBalance,setTokenBBalance] = useState('')
    const [tokenAAccountBalance,setTokenAccountABalance] = useState('')
    const [tokenBAccountBalance,setTokenAccountBBalance] = useState('')
    // const [Add_liquidity,set_add_liquidity] = useState('Add Liquidity')

    const [,setPop_up_boxData] =useAtom(PopUpBoxInfo)
    const [,setSop_up_boxState] = useAtom(PopUpBoxState)


    useEffect(()=>{
        if (router.isReady){
            const token_detail = async ()=>{
                const token_id_a = router.query.slug[0]
                const token_id_b = router.query.slug[1]
                console.log(token_id_a,token_id_b)
                const result = tokenPoolPair.filter(token => token.pool_id = token_id_a)
                console.log(result[0].assets_a_address)
                console.log(tokenPoolPair)
                const api = await chain_api(intactWalletAddress)
                const balance = await api.query.exchange.reserves([result[0].assets_b_id,result[0].assets_a_id])
                const pair_lp_token_result:any = await api.query.exchange.pools([token_id_b,token_id_a])
                // const pair_lp_token_owner = pair_lp_token_result.toJSON().lpTokenAccountId
                // // const pair_lp_token_owner = pair_lp_token_result.toJSON()
                // console.log('1',pair_lp_token_result.toJSON().lpToken)

                const pair_lp_token_address = pair_lp_token_result.toJSON().lpToken
                // console.log(pair_lp_token_address)
                    // .lpToken
                const pair_lp_token_balance_result:any = await api.query.tokenFungible.tokens(pair_lp_token_address)
                const user_lp_token_balance_result:any = await api.query.tokenFungible.balances(pair_lp_token_address,intactWalletAddress)
                const poolDetails={
                    pool_id : token_id_a,
                    assets_a: result[0].assets_a,
                    assets_b:result[0].assets_b,
                    assets_a_id:result[0].assets_a_id,
                    assets_b_id:result[0].assets_b_id,
                    assets_a_image_url:result[0].assets_a_image_url,
                    assets_b_image_url:result[0].assets_b_image_url,
                    assets_a_address:address_slice(result[0].assets_a_address),
                    assets_b_address:address_slice(result[0].assets_b_address),
                    tvl:result[0].tvl,
                    volume:result[0].volume,
                    volume_days:result[0].volume_days,
                    total_lp:(pair_lp_token_balance_result.toJSON().totalSupply/Math.pow(10,18)).toString(),
                    your_lp:user_lp_token_balance_result.toString(),
                }

                setPoolDetails(poolDetails)
                setTokenABalance(balance.toJSON()[0])
                setTokenBBalance(balance.toJSON()[1])
                const account_token_a_balance = await api.query.tokenFungible.balances(result[0].assets_a_id,intactWalletAddress)
                const account_token_b_balance = await api.query.tokenFungible.balances(result[0].assets_b_id,intactWalletAddress)
                setTokenAccountABalance(account_token_a_balance.toString())
                setTokenAccountBBalance(account_token_b_balance.toString())
            }
            token_detail()
        }
    },[router.isReady])

    // if (typeof amount == 'string'){
    //   alert(amount)
    // }else{
    //   console.log(amount);
    // }

    const token_balance_check = (value,token_balance,id_name,assets_name,site_id) =>{
        if (value > token_balance){
            const button = document.getElementById(id_name);
            button.innerText = `Insufficient ${assets_name} balance`;
            (document.getElementById(site_id) as HTMLInputElement).value = value.slice(0,value.length - 1)
            button.setAttribute('disabled','true');
        }else{
            const button = document.getElementById(id_name);
            button.innerText = `Add Liquidity`;
            button.removeAttribute('disabled')
        }
    }

    const first_add_liquidity_check = () =>{
        return PoolDetails.total_lp == '0'
    }

    const checkNumber_token_a = async (e,token_a,token_b) =>{
        const value = e;
        e = e.toString().match(/^\d+(?:\.\d{0,8})?/)
        if (e.indexOf('.') < 0 && e != '') {
            e = parseFloat(e);
        }
        token_balance_check(value,Number(tokenAAccountBalance),'add_liquidity_button',PoolDetails.assets_a,'amount_a')
        const result = first_add_liquidity_check()
        if (!result){
            const amount = await substrate_EstimateOutToken(intactWalletAddress,value,token_a,token_b)
            if (typeof amount == 'string'){
                setToken_b_number(amount)
               const lp_number = await  substrate_getEstimateLpToken(intactWalletAddress,token_b,amount,token_a,value)
                setYourLP(lp_number)


            }else{
                // console.log(amount);
                (document.getElementById('amount_a') as HTMLInputElement).value = amount[0].toString();
                (document.getElementById('amount_b') as HTMLInputElement).value = amount[1].toString();
            }
        }
    }

    // const checkNumber_token_b = async (e) =>{
    //     const value = e.target.value;
    //     e.target.value = e.target.value.toString().match(/^\d+(?:\.\d{0,8})?/)
    //     if (e.target.value.indexOf('.') < 0 && e.target.value != '') {
    //         e.target.value = parseFloat(e.target.value);
    //     }
    //     token_balance_check(value,Number(tokenBAccountBalance),'add_liquidity_button',PoolDetails.assets_b,'amount_b')
    //     const result = first_add_liquidity_check()
    //     if (!result){
    //         const amount = await add_liquidity(intactWalletAddress,poolDetails.pool_id,value,value)
    //         if (typeof amount == 'string'){
    //             alert(amount)
    //         }else{
    //             (document.getElementById('amount_a') as HTMLInputElement).value = amount[0].toString();
    //             // (document.getElementById('amount_b') as HTMLInputElement).value = amount[1].toString();
    //         }
    //     }
    // }

    const addLiquidity = async ()=>{
        const token_a = Number((document.getElementById('amount_a') as HTMLInputElement).value)
        const token_b = Number((document.getElementById('amount_b') as HTMLInputElement).value)
        console.log(token_a,token_b);
        const api = await chain_api(intactWalletAddress)
        const injector = await substrate_wallet_injector(intactWalletAddress)
        console.log(poolDetails.pool_id,poolDetails.assets_a_id,poolDetails.assets_b_id,token_a,token_b,intactWalletAddress);
        const transferExtrinsic = api.tx.exchange.addLiquidity(poolDetails.pool_id,token_a,token_b,0,0,intactWalletAddress)
        transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ events = [],status }) => {
            if (status.isInBlock) {
                const liquidity_add_event_name = 'exchange.LiquidityAdded'
                const token_fungible_mint_event_name = 'tokenFungible.Mint'
                // console.log(`Completed at block hash #${status.asInBlock.toString()}`);
                events.forEach(({ event: { data, method, section }, phase }) => {
                    if (liquidity_add_event_name == `${section}.${method}`){
                        // const pool_id = data.toJSON()[0]
                        // const
                        // console.log(data.toJSON()[0],data.toJSON()[3])
                        setOpenAdd(false)
                        setSop_up_boxState(true)
                        setPop_up_boxData({
                            state:true,
                            type:"Add liquidity",
                            hash:""
                        })

                    }else{
                        setSop_up_boxState(true)
                        setPop_up_boxData({
                            state:false,
                            type:"Add liquidity",
                            hash:""
                        })
                    }
                });
            } else {
                console.log(`Current status: ${status.type}`)
            }
        }).catch((error: any) => {
            console.log(':( transaction failed', error);
            setSop_up_boxState(true)
            setPop_up_boxData({
                state:false,
                type:"Transaction ",
                hash:""
            })
        });
    }
    const closeOpen = () =>{
        setOpenAdd(false)
        setToken_a_number("0")
        setToken_b_number("0")
        setYourLP("0")
    }

    const max_balance_a = async (token_a,token_b) => {
        await checkNumber_token_a(tokenAAccountBalance,token_a,token_b);
        setToken_a_number(tokenAAccountBalance);
        (document.getElementById("amount_a") as  HTMLInputElement).value  = tokenAAccountBalance
        // const data = await add_liquidity(intactWalletAddress,poolDetails.pool_id,tokenAAccountBalance,1)
        // console.log(data)
        // const result = first_add_liquidity_check()
        //
        //
        // if (!result){
        //     const amount = await substrate_EstimateOutToken(intactWalletAddress,data,token_a,token_b)
        //     if (typeof amount == 'string'){
        //         setToken_b_number(amount)
        //         const lp_number = await  substrate_getEstimateLpToken(intactWalletAddress,token_b,amount,token_a,data)
        //         setYourLP(lp_number);
        //         (document.getElementById('amount_a') as HTMLInputElement).value = data[0].toString();
        //     }else{
        //         // console.log(amount);
        //
        //         (document.getElementById('amount_b') as HTMLInputElement).value = data[1].toString();
        //     }
        // }
    }

    const max_balance_b = async() => {
        const amount = await add_liquidity(intactWalletAddress,poolDetails.pool_id,1,tokenBAccountBalance)
        if (typeof amount == 'string'){
            alert(amount)
        }else{
            console.log(amount);
            (document.getElementById('amount_a') as HTMLInputElement).value = amount[0].toString();
            (document.getElementById('amount_b') as HTMLInputElement).value = amount[1].toString();
        }

    }

    const max_balance_c = (e) => {
        (document.getElementById('amount_c') as HTMLInputElement).value = PoolDetails.your_lp
    }
    if(PoolDetails.assets_a){
        return (
            <div className="bg-W3GBG">
                <Heads/>
                <Header/>
                <div className="relative pt-16">
                    <div className="absolute inset-x-0 bottom-0    " />
                    <div className=" mx-auto  ">
                        <div className="">
                            <div className="max-w-7xl relative px-5 pt-16 pb-32 sm:px-6  mx-auto ">
                                <div className="flex justify-center xl:justify-start">
                                    <Link href="/pools">
                                        <a  className="p-0.5 rounded-lg bg-gradient-to-r from-W3G1  via-W3G2 to-W3G3  mb-10">
                                            <div className="bg-black rounded-lg text-white p-2 w-90 text-center" >
                                                View Pools
                                            </div>

                                        </a>
                                    </Link>
                                </div>
                                <div className="xl:flex ">
                                    <div className="p-0.5 rounded-lg bg-gradient-to-br from-W3G1 via-W3G2  to-W3G3  h-full xl:w-4/12">
                                        <div className="bg-[#151515]  p-5 rounded-lg  w-full">
                                            <div className="flex mb-4">
                                                <div className=" rounded-full text-white py-0.5 px-6 bg-gradient-to-r from-W3G1 via-W3G2  to-W3G3">
                                                    Farms
                                                </div>
                                            </div>
                                            <div className="flex justify-between bg-[#2B2B2B] rounded-md p-1 items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="w-10 rounded-full" src={PoolDetails.assets_a_image_url} alt=""/>
                                                    </div>
                                                    <div className="ml-2 text-white font-semibold">
                                                        <div>
                                                            {PoolDetails.assets_a}
                                                        </div>
                                                        <Link href="/">
                                                            <a className="text-xs text-gray-300">
                                                                Owner:{PoolDetails.assets_a_address}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="text-white">
                                                    {tokenABalance}
                                                </div>
                                            </div>
                                            <div className="flex mt-4 justify-between bg-[#2B2B2B] rounded-md p-1 items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="w-10 rounded-full" src={PoolDetails.assets_b_image_url} alt=""/>
                                                    </div>
                                                    <div className="ml-2 text-white font-semibold  ">
                                                        <div>
                                                            {PoolDetails.assets_b}
                                                        </div>
                                                        <Link href="/">
                                                            <a className="text-xs text-gray-300">
                                                                Owner:{PoolDetails.assets_b_address}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="text-white">
                                                    {tokenBBalance}
                                                </div>
                                            </div>
                                            <div className="flex justify-between my-5 ">
                                                <div className="border border-[#8E6CCD] rounded-full text-white py-0.5  px-2 text-sm ">
                                                    1 {PoolDetails.assets_a} ≈ {(Number(tokenBBalance)/Number(tokenABalance)).toFixed(2)} {PoolDetails.assets_b}
                                                </div>

                                                <div className="border border-[#8E6CCD] rounded-full text-white py-0.5 px-2 text-sm">
                                                    1 {PoolDetails.assets_b} ≈ {(Number(tokenABalance)/Number(tokenBBalance)).toFixed(2)} {PoolDetails.assets_a}
                                                </div>
                                            </div>
                                            <div className="border-b border-[#2E2E2E]"></div>
                                            <div className=" pt-5">
                                                <div className="flex justify-between items-center">
                                                    <div className="text-gray-400">
                                                        Fee
                                                    </div>
                                                    <div className=" border-[#8E6CCD] border text-white text-sm px-1 rounded-md">
                                                        0.3%
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mt-4">
                                                    <div className="text-gray-400">
                                                        TVL
                                                    </div>
                                                    <div className="text-white text-sm px-1">
                                                        $ {PoolDetails.tvl}M
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mt-4">
                                                    <div className="text-gray-400">
                                                        24h Volume
                                                    </div>
                                                    <div className="text-white text-sm px-1">
                                                        {PoolDetails.volume_days}
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mt-4">
                                                    <div className="text-gray-400">
                                                        Total LP Token
                                                    </div>
                                                    <div className="text-white text-sm px-1">
                                                        {PoolDetails.total_lp}
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mt-4">
                                                    <div className="text-gray-400">
                                                        LP Token
                                                    </div>
                                                    <div className="text-white text-sm px-1">
                                                        {PoolDetails.your_lp} ( {Number(PoolDetails.your_lp)/Number(PoolDetails.total_lp)* 100}% )
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" xl:w-9/12 mt-5 xl:ml-8  xl:mt-0">
                                        <div className="flex justify-center xl:justify-end">

                                            <button onClick={()=>{
                                                setOpenAdd(true)}
                                            } className="lg:mt-0 bg-gradient-to-r from-W3G1 via-W3G2  to-W3G3 px-8 py-2 rounded-lg  text-white">
                                                Add Liquidity
                                            </button>
                                            <button onClick={()=>{setOpenRemove(true)}} className="ml-5 lg:mt-0  px-8 py-2 rounded-lg bg-gradient-to-r from-W3G1 via-W3G2  to-W3G3 text-white">
                                                Remove Liquidity
                                            </button>
                                        </div>
                                        <div className="py-5 rounded-2xl">
                                            <Recharts/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition.Root show={openAdd} as={Fragment}>
                        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={closeOpen}>
                            <div className="flex items-center justify-center min-h-screen    px-4  text-center ">
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

                                     <div className="inline-block align-bottom p-0.5 rounded-lg bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3 w-11/12 md:w-9/12 xl:w-6/12 2xl:w-4/12  rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">
                                            <div className="bg-black px-4 py-5 sm:px-6 lg:px-12 rounded-md">

                                        <div className="w-full  ">
                                            <div className="flex justify-between text-xl text-white w-full">
                                                <div>
                                                    Add Liquidity
                                                </div>
                                                <button onClick={closeOpen} >
                                                    <i className="fa fa-times" aria-hidden="true"></i>
                                                </button></div>
                                        </div>
                                        <div className="mt-5 ">
                                            <div className="flex items-center justify-between mt-4 ">
                                                <div className="text-sm  mt-5 flex items-center text-white font-semibold">
                                                    <img className="w-10 mr-2"   src={PoolDetails.assets_a_image_url} alt=""/>
                                                    {PoolDetails.assets_a}
                                                </div>
                                                <div className="items-center">
                                                    <div className="flex justify-end text-gray-400 text-sm mb-2 pr-5">
                                                        Balance: {tokenAAccountBalance}
                                                    </div>
                                                    <div className="flex mx-4">
                                                        <input type="text"
                                                               className="text-xs md:text-sm placeholder-gray-500 bg-[#1F1F1F] rounded-lg p-2 py-3 xl:w-80 text-white border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                                               placeholder={token_a_number}

                                                               maxLength={14}
                                                               onInput={(e)=>
                                                                   checkNumber_token_a((e.target as HTMLInputElement).value
                                                                   ,PoolDetails.assets_a_id
                                                                   ,PoolDetails.assets_b_id)}
                                                               // onInput={(e)=>checkNumber_token_a(e.target,PoolDetails.assets_a_id,PoolDetails.assets_b_id)}
                                                               id="amount_a"
                                                               autoComplete="off"
                                                        />
                                                        <button onClick={()=>
                                                            max_balance_a(PoolDetails.assets_a_id,PoolDetails.assets_b_id)} className="rounded-lg py-1 px-5 ml-2 bg-gradient-to-r from-W3G1 via-W3G2 to-W3G3 text-sm flex items-center  text-white ">
                                                            MAX
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 ">
                                            <div className="flex items-center justify-between mt-4 ">
                                                <div className="text-sm  mt-5 flex items-center text-white font-semibold">
                                                    <img className="w-10 mr-2" src={PoolDetails.assets_b_image_url} alt=""/>
                                                    {PoolDetails.assets_b}
                                                </div>
                                                <div className="items-center">
                                                    <div className="flex justify-end text-gray-400 text-sm mb-2 pr-5">
                                                        Balance: {tokenBAccountBalance}
                                                    </div>
                                                    <div className="flex mx-4">
                                                        <input type="text"
                                                               className="text-xs md:text-sm placeholder-gray-500 bg-[#1F1F1F] rounded-lg p-2 py-3 xl:w-80 text-white    outline-none"
                                                               placeholder={token_b_number}
                                                               maxLength={14}
                                                               id="amount_b"
                                                               autoComplete="off"
                                                               readOnly={true}
                                                        />
                                                        {/*<button onClick={max_balance_b} className="rounded-lg py-1 px-5 ml-2 bg-gradient-to-r from-W3G1 via-W3G2 to-W3G3 text-sm flex items-center  text-white ">*/}
                                                        {/*    MAX*/}
                                                        {/*</button>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex justify-between mx-4" >
                                            <div className="text-gray-600">
                                                LP Tokens
                                            </div>
                                            <div className="text-white">
                                                {yourLP}
                                            </div>
                                        </div>
                                        <div className="text-center mt-5" >
                                            <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                                <button  onClick={()=>{SetOpenWalletListState(true)}} className="w-full py-1.5 text-gray-200 rounded-lg bg-blue-500">
                                                    Connect Wallet
                                                </button>
                                            </div>
                                            <div className={WalletButtonShow  ? "mt-1": "hidden"}>
                                                <button  id='add_liquidity_button' onClick={addLiquidity} className=" lg:mt-0  w-56 px-3 py-2 rounded-lg bg-gradient-to-r from-W3G1 via-W3G2 to-W3G3 text-white">
                                                    Add Liquidity
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                     </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>
                    <Transition.Root show={openRemove} as={Fragment}>
                        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenRemove}>
                            <div className="flex items-center justify-center min-h-screen   px-4  text-center ">
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
                                      <div className="inline-block align-bottom p-0.5 rounded-lg bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3 w-11/12 md:w-9/12 xl:w-1/3 xl:w-1/4  rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">
                                            <div className="bg-black px-4 py-5 sm:px-6 lg:px-12 rounded-md">

                                            <div className="w-full  ">
                                            <div className="flex justify-between text-xl text-white w-full">
                                                <div>
                                                    Remove Liquidity
                                                </div>
                                                <button onClick={()=>{setOpenRemove(false)}} >
                                                    <i className="fa fa-times" aria-hidden="true"></i>
                                                </button></div>
                                        </div>
                                        <div className="mt-5 ">
                                            <div className="flex items-center justify-between mt-4 ">
                                                <div className="items-center w-full">
                                                    <div className="flex justify-end text-gray-400 text-sm mb-2">
                                                        LP Token Balance:{PoolDetails.your_lp}
                                                    </div>
                                                    <div className="flex  w-full">
                                                        <input type="text"
                                                               className="text-xs md:text-sm placeholder-gray-500 bg-[#1F1F1F] rounded-lg p-2 py-3 w-full text-white   border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                                               placeholder="0"
                                                               maxLength={21}
                                                               onInput={checkNumber}
                                                               id="amount_c"
                                                               autoComplete="off"
                                                        />
                                                        <button onClick={max_balance_c} className="rounded-lg py-1 px-5 ml-2 bg-gradient-to-r from-W3G1 via-W3G2 to-W3G3 text-sm flex items-center  text-white ">
                                                            MAX
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex justify-between items-center" >
                                            <div className="text-gray-500">
                                                Slippage tolerance
                                            </div>
                                            <div className="text-white">
                                                <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                                    <div className=" grid grid-cols-3 gap-4">
                                                        {deliveryMethods.map((deliveryMethod) => (
                                                            <RadioGroup.Option
                                                                key={deliveryMethod.id}
                                                                value={deliveryMethod}
                                                                className={({ checked, active }) =>
                                                                    classNames(
                                                                        checked ? 'border-transparent' : 'border-gray-300',
                                                                        active ? '' : '',
                                                                        'relative bg-black bg-opacity-80 border border-gray-700 rounded-lg shadow-sm items-center mx-auto  flex cursor-pointer focus:outline-none'
                                                                    )
                                                                }
                                                            >
                                                                {({ checked, active }) => (
                                                                    <>
                                                                        <div className=" flex items-center">
                                                                            <div className="flex justify-center">
                                                                                <RadioGroup.Label as="span" className={classNames(
                                                                                    active ? 'bg-gradient-to-r  from-W3G1 via-W3G2 to-W3G3' : '',
                                                                                    checked ? 'bg-gradient-to-r from-W3G1 via-W3G2 to-W3G3' : '',
                                                                                    '" text-center  rounded-lg pointer-events-none px-2 font-medium text-white"'
                                                                                )}>
                                                                                    {deliveryMethod.title}
                                                                                </RadioGroup.Label>
                                                                            </div>
                                                                        </div>
                                                                        {/*<div*/}
                                                                        {/*    className={classNames(*/}
                                                                        {/*        active ? 'bg-gradient-to-b from-W3G2  to-W3G3' : '',*/}
                                                                        {/*        checked ? 'bg-gradient-to-b from-W3G2  to-W3G3' : '',*/}
                                                                        {/*        'absolute -inset-px rounded-lg pointer-events-none'*/}
                                                                        {/*    )}*/}
                                                                        {/*    aria-hidden="true"*/}
                                                                        {/*/>*/}
                                                                    </>
                                                                )}
                                                            </RadioGroup.Option>
                                                        ))}
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </div>

                                        <div className="text-center mt-5" >
                                            <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                                <button  onClick={()=>{SetOpenWalletListState(true)}} className="w-full py-1.5 text-gray-200 rounded-lg bg-blue-500">
                                                    Connect Wallet
                                                </button>
                                            </div>
                                            <div className={WalletButtonShow ? "mt-1": "hidden"}>
                                                <button   className=" lg:mt-0  w-56 px-3 py-2 rounded-lg bg-gradient-to-r from-W3G1 via-W3G2  to-W3G3 text-white">
                                                    Remove Liquidity
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </div>
                <Tail/>
            </div>
        )
    }else {
        return (
            <div className="h-screen bg-W3GBG py-16">
          <PoolSkeleton/>
            </div>
        )

    }

}

export default Detail

