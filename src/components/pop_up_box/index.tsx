import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, useEffect} from "react";
import {CheckCircleIcon, CheckIcon, XCircleIcon,} from "@heroicons/react/solid";
import {atom, useAtom} from "jotai";
import {PopUpBoxState,PopUpBoxInfo} from "../../jotai";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Pop_up_box = () =>{
    const [pop_up_boxState,setSop_up_boxState] = useAtom(PopUpBoxState)
    const [pop_up_boxData,] =useAtom(PopUpBoxInfo)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(pop_up_boxState){
            time = setTimeout(()=>{
                setSop_up_boxState(false)
            },5000)
        }
        const Pop_up_box = document.getElementById('SwapSuccessPop_up_box');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setSop_up_boxState(false)
            },2000)
        }
    },[pop_up_boxState])
    return(
        <div
            id="SwapSuccessPop_up_box"
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 top-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={pop_up_boxState}
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
                                <img className={pop_up_boxData.state?"w-10  mt-1":"hidden"} src="/successful.svg" alt=""/>
                                <img className={pop_up_boxData.state?"hidden":"w-10  mt-1"} src="/fail.svg" alt=""/>
                                <div className="ml-3 w-0 flex-1 pt-0.5 text-white text-sm">
                                    <p className=" font-medium  ">{pop_up_boxData.type} {classNames(pop_up_boxData.state?"successful":"Failed")}</p>
                                    <p className={pop_up_boxData.state?"hidden":"mt-1 "}>Please try again</p>
                                    <Link href={`https://explorer-devnet.web3games.org/${pop_up_boxData.hash}` }>
                                        <a className={pop_up_boxData.state?"mt-1 underline font-semibold hover:text-blue-400":"hidden"}>
                                        View on Explorer
                                    </a></Link>
                                </div>
                                <div className=" flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md  text-white hover:text-gray-500 focus:outline-none "
                                        onClick={() => {
                                            setSop_up_boxState(false)
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




export {Pop_up_box}
