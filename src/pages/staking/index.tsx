import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Swap from "../swap";
import {useAtom} from "jotai";
import {WalletButtonShowState, WalletListShowState} from "../../jotai";
import Link from "next/link";
import {ChevronDownIcon, ChevronUpIcon, ExclamationIcon} from "@heroicons/react/solid";
import {Dialog, Disclosure, Transition} from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Staking = () =>{
    const [WalletButtonShow,]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [stakeShow,setStakeShow] = useState(false)
    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-lg relative px-5 py-16 lg:py-32 sm:px-6  mx-auto ">
                            <div className="bg-gray-900 bg-opacity-60 p-3 rounded-2xl">
                                <div className="p-5 text-white  flex justify-between">
                                   <div>
                                       <img className="w-10 rounded-full -mt-2 border border-gray-500" src="/img.png" alt=""/>
                                   </div>
                                    <div className="flex">
                                        <div className="text-gray-200 mr-1">Collateralized</div>
                                        <div className="text-white font-semibold">W3G</div>
                                    </div>
                                </div>
                                <div className=" p-5 ">
                                    <div className="rounded-2xl border mb-5 border-gray-500 p-4">
                                        <div className="flex justify-between mb-5">
                                            <div className="text-gray-200 text-sm  ">
                                                APR
                                            </div>
                                            <div className="text-indigo-500 flex font-semibold">
                                                9.82%
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="text-gray-200 text-sm ">
                                                Liquidity
                                            </div>
                                            <div className="text-white flex font-semibold">
                                                $56,112,781
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-gray-500 p-4">
                                        <div className=" mb-2">
                                            <div className="text-gray-200 text-sm   mb-1">
                                                Earned
                                            </div>
                                            <div className="text-white flex font-semibold">
                                               0 W3G
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="text-gray-200 text-sm mb-1">
                                                Staked W3G
                                            </div>
                                            <div className="text-white flex font-semibold">
                                              0 W3G
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-6 text-gray-200">
                                        <div className="flex">
                                            <div className="">
                                            Loyalty program ends in:
                                            </div>
                                            <div className="mx-0.5 underline ">507,107</div>
                                            <div className="underline">blocks</div>
                                        </div>

                                    </div>
                                    <div className="text-center mt-5 " >
                                        <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                            <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-24 py-1.5 rounded-lg bg-blue-500">
                                                Connect Wallet
                                            </button>
                                        </div>
                                        <div className={WalletButtonShow ? "mt-1": "hidden"}>
                                            <button onClick={()=>{setStakeShow(true)}}  className="px-12 py-1.5 rounded-lg bg-indigo-500">
                                                Stake / Unstake
                                            </button>
                                        </div>
                                    </div>
                                    <Link href="/">
                                    <a className="flex justify-center  mt-4 text-sm text-indigo-400">
                                        Learn More
                                    </a>
                                    </Link>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-center w-full px-4 py-2 text-sm  mt-5 border-t border-gray-600 text-indigo-400   ">
                                                    <span className={
                                                        open ? 'hidden':""
                                                    }>Details</span>
                                                    <span className={
                                                        open ? '':"hidden"
                                                    }>Hide</span>
                                                    <ChevronDownIcon
                                                        className={`${
                                                            open ? 'transform rotate-180' : ''
                                                        } w-5 h-5  text-indigo-400`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                                  <div>
                                                      Earn W3G
                                                  </div>
                                                    <div className="border p-5 mt-2 text-center rounded-2xl">
                                                        <div>
                                                            Reward Earned
                                                        </div>
                                                        <div className="text-white text-xl mt-2 font-semibold">
                                                            0 W3G
                                                        </div>

                                                        <div className="text-center mt-5 " >
                                                            <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                                                <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-24 py-1.5 rounded-lg bg-blue-500">
                                                                    Connect Wallet
                                                                </button>
                                                            </div>
                                                            <div className={WalletButtonShow ? "mt-1": "hidden"}>
                                                                <button  className="px-12 py-1.5 rounded-lg bg-indigo-500">
                                                                  Claim
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition.Root show={stakeShow} as={Fragment}>
                        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={()=>{setStakeShow(false)}}>
                            <div className="flex items-center justify-center min-h-screen pt-4 px-4   text-center sm:block sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                                    <div className="inline-block  align-bottom bg-gray-900 text-white rounded-lg py-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   sm:py-6 ">
                                        <div >
                                            <div className='flex justify-end text-xl px-5 '>
                                                <button  onClick={()=>{setStakeShow(false)}}
                                                         className="fa fa-times " aria-hidden="true"></button>
                                            </div>
                                            <div className="flex justify-start text-xl font-bold  px-8 py-3 w-96  sm:mr-32">
                                               W3G
                                            </div>
                                            <div className="mt-3 px-5 sm:mt-5 border-t border-gray-500 px-8 py-2 ">
                                                <div className="mt-5">
                                                <div className="flex my-3 justify-between ">
                                                    Free Balance
                                                    <div>0</div>
                                                </div>
                                                    <div className="flex mt-5">
                                                        <input type="text"
                                                               className=" bg-gray-500 bg-opacity-30 text-xs  md:text-sm text-white  rounded-lg  p-3  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                                               placeholder="0.0"
                                                               id="transfer"
                                                        />
                                                        <div className=" flex -ml-24 mt-2 z-20">
                                                            <div><button className="text-indigo-400 font-semibold mr-3">MAX</button></div>
                                                            <div className=" "> W3G</div>
                                                        </div>
                                                    </div>
                                                    <div className="rounded-2xl mt-5 border border-gray-500 p-3">
                                                        <div className="flex justify-between ">
                                                            <div className="text-gray-200 flex items-center    ">
                                                                Earned
                                                            </div>
                                                            <div className="text-white flex font-semibold">
                                                                0 ACA
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="mt-5 text-center  w-full py-1.5 rounded-xl bg-indigo-500 ">
                                                        Stake
                                                    </button>
                                                </div>
                                                <div className="my-8">
                                                    <div className="flex my-3 justify-between ">
                                                        Staked Balance
                                                        <div>0</div>
                                                    </div>
                                                    <div className="flex mt-5">
                                                        <input type="text"
                                                               className=" bg-gray-500 bg-opacity-30 text-xs  md:text-sm text-white  rounded-lg  p-3  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                                               placeholder="0.0"
                                                               id="transfer"
                                                        />
                                                        <div className=" flex -ml-24 mt-2 z-20">
                                                            <div><button className="text-indigo-400 font-semibold mr-3">MAX</button></div>
                                                            <div className=" "> W3G</div>
                                                        </div>
                                                    </div>
                                                    <div className="rounded-2xl mt-5 border border-gray-500 p-3">
                                                        <div className="flex justify-between ">
                                                            <div className="text-gray-200 flex items-center    ">
                                                                Earned
                                                            </div>
                                                            <div className="text-white flex font-semibold">
                                                                0 ACA
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="mt-5 text-center  w-full py-1.5 rounded-xl bg-indigo-500 ">
                                                        Unstake
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
            </div>
            <Tail/>
        </div>
    )
}

export default Staking
