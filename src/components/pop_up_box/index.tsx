import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, useEffect} from "react";
import {CheckCircleIcon, CheckIcon, XCircleIcon,} from "@heroicons/react/solid";
import {atom, useAtom} from "jotai";
import {CreatePollFail, CreatePollSuccess, SwapFail, SwapSuccess} from "../../jotai";
import Link from "next/link";


const SwapSuccessPop_up_box = () =>{
    const [swapSuccess,setSwapSuccess] = useAtom(SwapSuccess)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(swapSuccess){
            time = setTimeout(()=>{
                setSwapSuccess(false)
            },5000)
        }
        const Pop_up_box = document.getElementById('SwapSuccessPop_up_box');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setSwapSuccess(false)
            },2000)
        }
    },[swapSuccess])
    return(
        <div
            id="SwapSuccessPop_up_box"
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 top-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={swapSuccess}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="pointer-events-auto w-full max-w-xs overflow-hidden rounded-lg bg-[#2B2B2B] shadow-lg shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-black">
                        <div className="p-4">
                            <div className="flex items-start">
                                <img className="w-10  mt-1" src="/successful.svg" alt=""/>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-white ">Token exchange successful</p>
                                    <Link href="https://explorer-devnet.web3games.org/" >
                                        <a className="mt-1 text-sm text-white underline font-semibold hover:text-blue-400">
                                        View on Explorer
                                    </a></Link>
                                </div>
                                <div className=" flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md  text-white hover:text-gray-500 focus:outline-none "
                                        onClick={() => {
                                            setSwapSuccess(false)
                                        }}
                                    >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}

const SwapFailPop_up_box = () =>{
    const [swapFail,setSwapFail] = useAtom(SwapFail)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(swapFail){
            time = setTimeout(()=>{
                setSwapFail(false)
                    },5000)
        }
        const Pop_up_box = document.getElementById('SwapFailPop_up_box');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setSwapFail(false)
            },2000)
        }
    },[swapFail])

    return(
        <div
            id="SwapFailPop_up_box"
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 top-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={swapFail}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="pointer-events-auto w-full  max-w-xs overflow-hidden rounded-lg bg-[#2B2B2B] shadow-lg shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-black">
                        <div className="p-4">
                            <div className="flex items-start">
                                <img className="w-10  mt-1" src="/fail.svg" alt=""/>
                                <div className="ml-3 w-0 flex-1 pt-0.5 text-white">
                                    <p className="text-sm font-medium ">Swap Failed</p>
                                    <p className="mt-1 text-sm ">Please try again</p>
                                </div>
                                <div className=" flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md  text-white hover:text-gray-500 focus:outline-none "
                                        onClick={() => {
                                            setSwapFail(false)
                                        }}
                                    >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}

const CreatePollSuccessPop_up_box = () =>{
    const [createPollSuccess,setCreatePollSuccess] = useAtom(CreatePollSuccess)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(createPollSuccess){
            time = setTimeout(()=>{
                setCreatePollSuccess(false)
            },5000)
        }
        const Pop_up_box = document.getElementById('SwapSuccessPop_up_box');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setCreatePollSuccess(false)
            },2000)
        }
    },[createPollSuccess])
    return(
        <>
            <div
                id="SwapSuccessPop_up_box"
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 top-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={createPollSuccess}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-xs overflow-hidden rounded-lg bg-[#2B2B2B] shadow-lg shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-black">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <img className="w-10  mt-1" src="/successful.svg" alt=""/>
                                    <div className="ml-3 w-0 flex-1 pt-2.5 text-white">
                                        <p className="text-sm font-medium  ">Pool created successfully</p>
                                    </div>
                                    <div className=" flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md  text-white hover:text-gray-500 focus:outline-none "
                                            onClick={() => {
                                                setCreatePollSuccess(false)
                                            }}
                                        >
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                            <span className="sr-only">Close</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}

const CreatePollFailPop_up_box = () =>{
    const [createPollFail,setCreatePollFail] = useAtom(CreatePollFail)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(createPollFail){
            time = setTimeout(()=>{
                setCreatePollFail(false)
            },5000)
        }
        const Pop_up_box = document.getElementById('CreatePollFailPop_up_box');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setCreatePollFail(false)
            },2000)
        }
    },[createPollFail])

    return(
        <div
            id="CreatePollFailPop_up_box"
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 top-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={createPollFail}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="pointer-events-auto w-full  max-w-xs overflow-hidden rounded-lg bg-[#2B2B2B] shadow-lg shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-black">
                        <div className="p-4">
                            <div className="flex items-start">
                                <img className="w-10  mt-1" src="/fail.svg" alt=""/>
                                <div className="ml-3 w-0 flex-1 pt-0.5 text-white">
                                    <p className="text-sm font-medium ">Swap Failed</p>
                                    <p className="mt-1 text-sm ">Please try again</p>
                                </div>
                                <div className=" flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md  text-white hover:text-gray-500 focus:outline-none "
                                        onClick={() => {
                                            setCreatePollFail(false)
                                        }}
                                    >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}


export {SwapSuccessPop_up_box,SwapFailPop_up_box,CreatePollSuccessPop_up_box,CreatePollFailPop_up_box}
