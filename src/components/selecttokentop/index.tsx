import {useAtom} from "jotai";
import {token_list_and_balance, Select_TokenTop, SwapTokenTail, SwapTokenTop, Token_Lists, W3G_info} from "../../jotai";
import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, useEffect} from "react";
import { BUSD, DAI, USDC, USDT } from "../../assets";



const SelectTokenTop = () =>{
    const [selectToken,setSelectToken] = useAtom(Select_TokenTop)
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [swapTokenTail,setSwapTokenTail] = useAtom(SwapTokenTail)
    const [tokenList,setTokenListData] = useAtom(token_list_and_balance)
    const [,setTokenList] = useAtom(Token_Lists)
    const [W3GInfo,setW3GInfo] = useAtom(W3G_info)
    const openTokenLists = ()=>{
        setSelectToken(false)
        setTokenList(true)
    }
    const select = (item) =>{
        setSwapTokenTop(item)
        setSelectToken(false)
    }



    return(
        <>
            <Transition.Root show={selectToken} as={Fragment}>
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto " onClose={()=>{return false}}>
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl  sm:block sm:p-0">
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
                                <div className="inline-block align-bottom p-0.5 rounded-lg bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3 w-11/12 md:w-5/12 2xl:w-4/12  rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">
                                   <div className="bg-black px-4 py-5 sm:px-6 lg:px-12 rounded-md">
                                    <div className='flex justify-between text-xl font-light text-white 	mb-5'>
                                        <div className=" font-light text-base text-white font-semibold ">
                                            Select a token
                                        </div>
                                        <button  onClick={() => setSelectToken(false)}
                                                 className="fa fa-times " aria-hidden="true"></button>
                                    </div>
                                    <div className="flex ">
                                        <div className="flex w-72">
                                            <input type="text"
                                                   className=" bg-W3GInfoBG  text-xs md:text-sm text-white  rounded-lg p-2 w-full  border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
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
                                        <button className="ml-4 p-0.5 w-32 rounded-lg text-white bg-gradient-to-r from-[#DA6081] via-[#8D6BCD]  to-[#7092E7]">Add Token</button>

                                    </div>
                                    <div className="my-5 text-white font-semibold">
                                        Common bases
                                    </div>
                                    <div className="my-5 h-28 pr-4 scrollbar-thin scrollbar-thumb-custom  scrollbar-thumb-rounded-full  overflow-y-scroll">
                                        <div className="flex grid md:grid-cols-2 xl:grid-cols-3  gap-4">
                                            {/*<div  key={W3GInfo.name} className="rounded-full ">*/}
                                            {/*    <button onClick={() => select(W3GInfo)} className="flex">*/}
                                            {/*        <div id={W3GInfo.name} className="flex items-center">*/}
                                            {/*            <img  className="w-9 mr-1 rounded-full" src={W3GInfo.img} alt=""/>*/}
                                            {/*            <div className="text-sm ml-1">*/}
                                            {/*                <div  className="text-white text-left">{W3GInfo.name}</div>*/}
                                            {/*                <div  className="text-gray-400">$ {W3GInfo.data}</div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </button>*/}
                                            {/*</div>*/}
                                            {tokenList.map((item=>(
                                            <div  key={item.name} className="rounded-full ">
                                                <button onClick={() => select(item)} className="flex">
                                                    <div id={item.name} className="flex items-center">
                                                        <img  className="w-9 mr-1 rounded-full" src={item.img} alt=""/>
                                                        <div className="text-sm ml-1">
                                                            <div  className="text-white text-left">{item.name}</div>
                                                            <div  className="text-gray-400 text-left">$ {item.data}</div>

                                                        </div>

                                                    </div>

                                                </button>
                                            </div>
                                            )))}
                                        </div>
                                    </div>
                                    <div className="my-3  text-gray-400 flex justify-between">
                                        <div>
                                       Asset
                                        </div>

                                        <div>
                                          Balance
                                        </div>
                                    </div>
                                    <div className="overflow-y-auto border-t border-gray-700 h-64 pr-3  scrollbar-thin scrollbar-thumb-custom  scrollbar-thumb-rounded-full  overflow-y-scroll ">
                                        {/*<div key={W3GInfo.name} onClick={() => select(W3GInfo)} className="cursor-pointer flex justify-between mr-2 items-center">*/}
                                        {/*    <div className="flex my-2">*/}
                                        {/*        <img className="w-9 rounded-full" src={W3GInfo.img} alt=""/>*/}
                                        {/*        <div className="ml-1.5">*/}
                                        {/*            <div className="text-gray-200 text-xs">*/}
                                        {/*                {W3GInfo.name}*/}
                                        {/*            </div>*/}
                                        {/*            <div className="text-gray-400 text-sm">*/}
                                        {/*                ${W3GInfo.data}*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="mt-3 text-gray-300">*/}
                                        {/*        {W3GInfo.data}*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {tokenList.map(item=>(
                                        <div key={item.name} onClick={() => select(item)} className="cursor-pointer flex justify-between mr-2 items-center">
                                            <div className="flex my-2">
                                                <img className="w-9 rounded-full" src={item.img} alt=""/>
                                                <div className="ml-1.5">
                                                    <div className="text-gray-200 text-xs">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        ${item.data}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-gray-300">
                                                {item.data}
                                            </div>
                                        </div>
                                        ))}
                                    </div>

                                    <div className="mt-2 flex justify-center text-gray-300 font-semibold ">
                                        <button onClick={openTokenLists}>
                                        Manage Token Lists
                                        </button>
                                    </div>
                                   </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export  default SelectTokenTop
