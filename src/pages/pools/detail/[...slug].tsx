import Header from "../../../components/header/index.";
import Tail from "../../../components/tail";
import React, {Fragment, useState ,useEffect} from 'react'
import Link from "next/link";
import {Dialog, RadioGroup, Transition} from "@headlessui/react";
import {useAtom} from "jotai";
import {IntactWalletAddress, token_pool_pair, WalletButtonShowState, WalletListShowState} from "../../../jotai";
import {CheckCircleIcon} from "@heroicons/react/solid";
import { add_liquidity, chain_api, substrate_wallet_injector } from "../../../chain/web3games";
import axios from "axios";
import { useRouter } from "next/router";
import { address_slice } from "../../../utils/chain/address";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const deliveryMethods = [
    { id: 1, title: '0.1%'},
    { id: 2, title: '0.5%'},
    { id: 3, title: '1%'},
]

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
    useEffect(()=>{
        if (router.isReady){
            const token_detail = async ()=>{
                const pool_id = router.query.slug[0]
                const result = tokenPoolPair.filter(token => token.pool_id = pool_id)
                console.log(result[0]);
                const poolDetails={
                    pool_id : pool_id,
                    assets_a: result[0].assets_a,
                    assets_b:result[0].assets_b,
                    assets_a_id:result[0].assets_a_id,
                    assets_b_id:result[0].assets_b_id,
                    assets_a_image_url:result[0].assets_a_image_url,
                    assets_b_image_url:result[0].assets_b_image_url,
                    assets_a_address:address_slice(result[0].assets_a_address.owner),
                    assets_b_address:address_slice(result[0].assets_b_address.owner),
                    tvl:result[0].tvl,
                    volume:result[0].volume,
                    volume_days:result[0].volume_days,
                    total_lp:result[0].total_lp,
                    your_lp:result[0].your_lp,
                }
                setPoolDetails(poolDetails)
                const api = await chain_api(intactWalletAddress)
                const balance = await api.query.exchange.reserves(pool_id);
                setTokenABalance(balance.toJSON()[0])
                setTokenBBalance(balance.toJSON()[1])
                const account_token_a_balance = await api.query.tokenFungible.balances(result[0].assets_a_id,intactWalletAddress);
                const account_token_b_balance = await api.query.tokenFungible.balances(result[0].assets_b_id,intactWalletAddress);
                setTokenAccountABalance(account_token_a_balance.toString())
                setTokenAccountBBalance(account_token_b_balance.toString())
            }
            token_detail()

        }
    },[router.isReady])

    const addLiquidity = async ()=>{
        const api = await chain_api(intactWalletAddress)
        const injector = await substrate_wallet_injector(intactWalletAddress)
        const transferExtrinsic = api.tx.exchange.addLiquidity(poolDetails.pool_id,poolDetails.assets_a_id,poolDetails.assets_b_id,0,0,intactWalletAddress)
        transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ status }) => {
            if (status.isInBlock) {
                console.log(`Completed at block hash #${status.asInBlock.toString()}`);
            } else {
                console.log(`Current status: ${status.type}`);
            }
        }).catch((error: any) => {
            console.log(':( transaction failed', error);
        });
    }
    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="xl:flex ">
                                <div className="bg-gray-800  py-5 rounded-2xl  xl:w-4/12">
                                    <div className="flex justify-between px-3 items-center">
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
                                    <div className="flex mt-4 justify-between px-3 items-center">
                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-10 rounded-full" src={PoolDetails.assets_b_image_url} alt=""/>
                                            </div>
                                            <div className="ml-2 text-white font-semibold">
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
                                    <div className="flex justify-between my-5 px-3">
                                        <div className="border border-gray-100 text-white px-1 text-sm">
                                            1 {PoolDetails.assets_a} ≈ 0.2 {PoolDetails.assets_b}
                                        </div>

                                        <div className="border border-gray-100 text-white px-1 text-sm">
                                            1 {PoolDetails.assets_b} ≈ 4.00 {PoolDetails.assets_a}
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-500"></div>
                                    <div className="p-3 pt-5">
                                        <div className="flex justify-between">
                                            <div className="text-gray-400">
                                                Fee
                                            </div>
                                            <div className="border-green-500 border text-white text-sm px-1 rounded-md">
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
                                                {PoolDetails.your_lp}({PoolDetails.your_lp}%)
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className=" xl:w-9/12 mt-5  xl:mt-0">
                                    <div className="flex justify-end">

                                            <button onClick={()=>{
                                                setOpenAdd(true)}
                                            } className="lg:mt-0 bg-blue-500 px-8 py-2 rounded-lg bg-indigo-500 text-white">
                                               Add Liquidity
                                            </button>
                                            <button onClick={()=>{setOpenRemove(true)}} className="ml-5 lg:mt-0  px-8 py-2 rounded-lg border border-indigo-500 text-white">
                                                Remove Liquidity
                                            </button>
                                    </div>
                                    <div className="py-5 rounded-2xl">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Transition.Root show={openAdd} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenAdd}>
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
                                                Add Liquidity
                                            </div>
                                            <button onClick={()=>{setOpenAdd(false)}} >
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button></div>
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="flex items-center justify-between mt-4 ">
                                            <div className="text-sm  mt-5 flex items-center text-white font-semibold">
                                                <img className="w-10 mr-2" src={PoolDetails.assets_a_image_url} alt=""/>
                                                {PoolDetails.assets_a}
                                            </div>
                                            <div className="items-center">
                                                <div className="flex justify-end text-gray-400 text-sm mb-2">
                                                    Balance:{tokenAAccountBalance}
                                                </div>
                                            <div className="flex mx-4">
                                                <input type="number"
                                                       className="text-xs md:text-sm placeholder-gray-50 bg-gray-600 rounded-lg p-2 py-3 xl:w-80 text-white    outline-none"
                                                       placeholder="0"
                                                       id="amount"
                                                />
                                                <button  className="-ml-12 text-sm flex items-center ">
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
                                                <div className="flex justify-end text-gray-400 text-sm mb-2">
                                                    Balance:{tokenBAccountBalance}
                                                </div>
                                                <div className="flex mx-4">
                                                    <input type="number"
                                                           className="text-xs md:text-sm placeholder-gray-50 bg-gray-600 rounded-lg p-2 py-3 xl:w-80 text-white    outline-none"
                                                           placeholder="0"
                                                           id="amount"
                                                    />
                                                    <button  className="-ml-12 text-sm flex items-center ">
                                                        MAX
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex justify-between " >
                                        <div className="text-gray-500">
                                            LP Token
                                        </div>
                                        <div className="text-white">
                                            -
                                        </div>
                                    </div>
                                    <div className="text-center mt-5" >
                                        <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                            <button  onClick={()=>{SetOpenWalletListState(true)}} className="w-full py-1.5 text-gray-200 rounded-lg bg-blue-500">
                                                Connect Wallet
                                            </button>
                                        </div>
                                        <div className={WalletButtonShow  ? "mt-1": "hidden"}>
                                            <button  onClick={addLiquidity} className=" lg:mt-0 bg-blue-500 w-full px-3 py-2 rounded-lg bg-indigo-500 text-white">
                                                Add Liquidity
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openRemove} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenRemove}>
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
                                                    LP Token Balance:0
                                                </div>
                                                <div className="flex  w-full">
                                                    <input type="text"
                                                           className="text-xs md:text-sm placeholder-gray-50 bg-gray-600 rounded-lg p-2 py-3 w-full text-white    outline-none"
                                                           placeholder="0"
                                                           id="amount"
                                                    />
                                                    <div  className="-ml-12 text-sm flex items-center ">
                                                        MAX
                                                    </div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex justify-between items-center" >
                                        <div className="text-gray-500">
                                            Slippage tolerance
                                        </div>
                                        <div className="text-white">
                                            <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                                <div className="mt-4 grid grid-cols-3 gap-4">
                                                    {deliveryMethods.map((deliveryMethod) => (
                                                        <RadioGroup.Option
                                                            key={deliveryMethod.id}
                                                            value={deliveryMethod}
                                                            className={({ checked, active }) =>
                                                                classNames(
                                                                    checked ? 'border-transparent' : 'border-gray-300',
                                                                    active ? 'ring-2 ring-indigo-500' : '',
                                                                    'relative bg-black bg-opacity-80 border border-gray-700 rounded-lg shadow-sm items-center mx-auto px-2 flex cursor-pointer focus:outline-none'
                                                                )
                                                            }
                                                        >
                                                            {({ checked, active }) => (
                                                                <>
                                                                    <div className=" flex items-center">
                                                                        <div className="flex justify-center">
                                                                            <RadioGroup.Label as="span" className=" text-center   font-medium text-gray-200">
                                                                                {deliveryMethod.title}
                                                                            </RadioGroup.Label>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={classNames(
                                                                            active ? 'border' : 'border-2',
                                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                                            'absolute -inset-px rounded-lg pointer-events-none'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
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
                                            <button   className=" lg:mt-0 bg-blue-500 w-full px-3 py-2 rounded-lg bg-indigo-500 text-white">
                                                Remove Liquidity
                                            </button>
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
}

export default Detail

