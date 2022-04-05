import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {useAtom} from "jotai";
import {Select_TokenTop, SwapTokenTail, SwapTokenTop} from "../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Transfer = () =>{
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const ChooseToken = () =>{
        setSelectTokenTop(true)
    }
    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-md relative px-5 py-16 lg:py-32 sm:px-6  mx-auto ">
                            <div className="bg-gray-900 p-3 rounded-2xl">
                                <div className="p-5 text-white text-2xl font-semibold">
                                    Transfer on Web3Games
                                </div>
                                <div className="mt-5 p-5 border-t border-gray-500">
                                    <div className="text-white font-semibold">
                                        Asset
                                    </div>
                                    <div className="flex mt-5">
                                        <div className="flex  -mr-3">
                                            <button onClick={ChooseToken} className="flex -mr-24 mt-2 z-20">
                                                <div>
                                                    <img className="w-6 rounded-full mr-1" src={swapTokenTop.img} alt=""/>
                                                </div>
                                                <div className="text-gray-200">
                                                    {swapTokenTop.name}
                                                </div>
                                                <i className="fa fa-angle-down text-white ml-3 mt-1" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <input type="text"
                                               className=" bg-gray-700 bg-opacity-30 text-xs text-right md:text-sm text-white  rounded-lg  p-3  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                               placeholder="Input transfer amount"
                                               id=""
                                        />
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="text-white font-semibold">
                                            Receiver
                                        </div>
                                        <div className="mt-5 -ml-3 mr-3">
                                        <input type="text"
                                               className=" bg-gray-700 bg-opacity-30 text-xs  md:text-sm text-white  rounded-lg  p-3  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                               placeholder="Support ethereum,arweave account"
                                               id=""
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Transfer
