import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {Dialog, Listbox, Tab, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Swap from "../swap";
import Heads from "../../components/head";
import {useAtom} from "jotai";
import {IntactWalletAddress, Select_TokenTail, WalletAddress} from "../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const tokenList =  [
    {
        tokenId:'0',
        img:"/img.png",
        title:"wW3G",
        name:"wW3G",
        data:"0.00",
    },
    {
        tokenId:'1',
        img:"/token/USDT.png",
        title:"USDT",
        name:"USDT",
        data:"0.00",
    },
    {
        tokenId:'2',
        img:"/token/USDC.png",
        title:"USDC",
        name:"USDC",
        data:"0.00",
    },
    {
        tokenId:'3',
        img:"/token/BUSD.png",
        title:"BUSD",
        name:"BUSD",
        data:"0.00",
    },
    {
        tokenId:'4',
        img:'/token/BNB.png',
        title:"BNB",
        name:"BNB",
        data:"0.00",
    },
    {
        tokenId:'5',
        img:'/token/SOL.png',
        title:"SOL",
        name:"SOL",
        data:"0.00",
    },
    {
        tokenId:'6',
        img:'/token/ETH.png',
        title:"ETH",
        name:"ETH",
        data:"0.00",
    },
]
const chainList =  [
    {
        tokenId:'0',
        img:"/img.png",
        name:"wW3G",
    },
    {
        tokenId:'1',
        img:"/token/USDT.png",
        name:"USDT",
    },
    {
        tokenId:'2',
        img:"/token/USDC.png",
        name:"USDC",
    },
    {
        tokenId:'3',
        img:"/token/BUSD.png",
        name:"BUSD",
    },
    {
        tokenId:'4',
        img:'/token/BNB.png',
        name:"BNB",
    },
    {
        tokenId:'5',
        img:'/token/SOL.png',
        name:"SOL",
    },
    {
        tokenId:'6',
        img:'/token/ETH.png',
        name:"ETH",
    },
]
const Multipay = () =>{
    const [walletAddress,] =useAtom(WalletAddress)
    const [selectTokenList,setSelectTokenList] = useState(false)
    const [selectTokenChain,setSelectTokenChain] = useState(false)
    const [selectToken,setSelectToken] = useState(tokenList[0])
    const [selectChain,setSelectChain] = useState(chainList[0])
    const SelectToken = (item) =>{
        setSelectToken(item)
        setSelectTokenList(false)
    }
    const SelectChain = (item) =>{
        setSelectChain(item)
        setSelectTokenChain(false)
    }
    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-20 bg-W3GTopBG">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className=" bg-gradient-to-b from-[#202136]  to-[#151515] ">
                        <div className="max-w-xl xl:max-w-lg relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="  px-2 py-12 sm:px-0">
                                    <div className="bg-[#323232]/40 shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-black  px-5 py-7 rounded-xl text-white">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                            <div>
                                                From:
                                            </div>
                                            <div className="flex ml-1 p-0.5 md:p-1 bg-black rounded-full items-center">
                                                <img className="w-6 " src="/img.png" alt=""/>
                                                <div className="mx-1 text-xs md:text-sm">
                                                    Web3Games
                                                </div>
                                            </div>
                                            </div>
                                            <div className="bg-[#2D2D2D] p-1 text-[#979797] rounded-full px-2 md:px-4 text-sm" >
                                                {walletAddress}
                                            </div>
                                        </div>
                                        <div className="bg-[#181818] rounded-lg mt-2 px-4 py-2 items-center">
                                            <div className="flex justify-between items-center">
                                                <div className="text-sm">
                                                    Send:
                                                </div>
                                                <div>
                                                    Max: 0
                                                </div>
                                            </div>
                                            <div className="mt-4 flex justify-between items-center">
                                                <input
                                                    className=" bg-[#181818]   md:text-2xl text-white  rounded-md w-32 md:w-48  outline-none"
                                                    placeholder="0.0"
                                                    maxLength={16}
                                                    autoComplete="off"
                                                />
                                                <div className="bg-[#5F5F5F]/30 py-1 px-2 rounded-lg">
                                                    <button onClick={()=>setSelectTokenList(true)}  className="flex items-center ">
                                                           <div>
                                                               <img className="w-5 md:w-6 rounded-full " src={selectToken.img} alt=""/>
                                                           </div>
                                                        <div className="text-xs text-gray-200 ml-1">
                                                            {selectToken.name}
                                                        </div>
                                                        <i className="fa fa-angle-down  ml-2 " aria-hidden="true"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-20">
                                            <div className="flex items-center">
                                                <div>
                                                    To:
                                                </div>
                                                <button onClick={()=>{setSelectTokenChain(true)}} className="flex ml-1 px-0.5 md:p-1 bg-black rounded-full items-center">
                                                    <img className="w-6 " src={selectChain.img} alt=""/>
                                                    <div className="mx-1 text-sm">
                                                        {selectChain.name}
                                                    </div>
                                                    <i className="fa fa-angle-down  ml-2 " aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <div className="bg-[#2D2D2D] p-1 text-[#979797] rounded-full px-2 md:px-4 text-sm">
                                                {walletAddress}
                                            </div>
                                        </div>
                                        <div className="bg-[#181818] rounded-lg mt-2 px-4 py-2 items-center">
                                            <div className="flex justify-between items-center">
                                                <div className="text-sm">
                                                    Receive (estimated):
                                                </div>

                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <input
                                                    className=" bg-[#181818]   md:text-2xl text-white  rounded-md  md:w-48 xl:w-96  outline-none"
                                                    placeholder="0.0"
                                                    maxLength={16}
                                                    autoComplete="off"
                                                />
                                                <div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>

            <Transition.Root show={selectTokenList} as={Fragment}>
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto  " onClose={setSelectTokenList}>
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl mx-auto  sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom rounded-lg p-4 bg-[#282828] w-11/12 md:w-5/12 2xl:w-3/12 bg-white  rounded-lg  text-left overflow-hidden shadow-xl border transform transition-all border-[#545454] sm:y-8 sm:align-middle   ">
                                   <div className="text-white">
                                    <div className="flex justify-center">
                                        Select a token
                                    </div>
                                      <div className="flex justify-end -mt-6 text-2xl">
                                          <button  onClick={() => setSelectTokenList(false)}
                                                   className="fa fa-times " aria-hidden="true"></button>
                                      </div>
                                   </div>
                                <div className="flex mt-5 items-center">
                                    <input type="text"
                                           className=" bg-W3GInfoBG border-[#4F4F4F] text-xs md:text-sm text-white  rounded-full pl-4 p-2 w-full  border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                           placeholder="Search token"
                                           autoComplete="off"
                                           id="address"
                                    />
                                    <div className="flex justify-center z-10 text-white  rounded-lg m-1   -ml-7 ">
                                        <button >
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4 overflow-y-auto h-80 pr-3  scrollbar-thin scrollbar-thumb-multipay  scrollbar-thumb-rounded-full  overflow-y-scroll">
                                    {tokenList.map(item=>(
                                   <div key={item.tokenId} onClick={()=>SelectToken(item)}  className="cursor-pointer bg-[#414141] rounded-md px-2 py-3 mb-3 flex justify-between text-white items-center">
                                       <div className="flex items-center">
                                           <img className="w-6 mr-1" src={item.img} alt=""/>
                                           <div className="text-sm">
                                               {item.name} Coin
                                           </div>
                                       </div>
                                       <div className="text-sm">
                                           {item.data} {item.name}
                                       </div>

                                   </div>
                                    ))}
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={selectTokenChain} as={Fragment}>
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto  " onClose={setSelectTokenChain}>
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl mx-auto  sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom rounded-lg p-4 bg-[#282828] w-11/12 md:w-5/12 2xl:w-3/12 bg-white  rounded-lg  text-left overflow-hidden shadow-xl border transform transition-all border-[#545454] sm:y-8 sm:align-middle   ">
                                <div className="text-white">
                                    <div className="flex justify-center">
                                        Select a token
                                    </div>
                                    <div className="flex justify-end -mt-6 text-2xl">
                                        <button  onClick={() => setSelectTokenChain(false)}
                                                 className="fa fa-times " aria-hidden="true"></button>
                                    </div>
                                </div>
                                <div className="flex mt-5 items-center">
                                    <input type="text"
                                           className=" bg-W3GInfoBG border-[#4F4F4F] text-xs md:text-sm text-white  rounded-full pl-4 p-2 w-full  border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                           placeholder="Search token"
                                           autoComplete="off"
                                           id="address"
                                    />
                                    <div className="flex justify-center z-10 text-white  rounded-lg m-1   -ml-7 ">
                                        <button >
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4  overflow-y-auto h-80 pr-3  scrollbar-thin scrollbar-thumb-multipay  scrollbar-thumb-rounded-full  overflow-y-scroll">
                                    <div className="grid md:grid-cols-2 gap-4">
                                    {chainList.map(item=>(
                                        <div key={item.tokenId} onClick={()=>SelectChain(item)}  className="cursor-pointer bg-[#414141] rounded-md px-2 py-3  flex justify-between text-white items-center">
                                            <div className="flex items-center">
                                                <img className="w-8 mr-2 rounded-full" src={item.img} alt=""/>
                                                <div className="text-sm">
                                                    {item.name} Mainnet
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Multipay

