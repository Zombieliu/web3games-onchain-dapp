import {useAtom} from "jotai";
import {base_token_list_and_balance, Select_TokenTop, SwapTokenTail, SwapTokenTop, Token_Lists} from "../../jotai";
import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment} from "react";
import { BUSD, DAI, USDC, USDT } from "../../assets";

const bases = [
    {
        name:"W3G",
        img:"/img.png",
    },
    {
        name:"USDT",
        img:USDT,
    },
    {
        name:"BUSD",
        img:BUSD,
    },
    {
        name:"USDC",
        img:USDC
    },
    {
        name:"DAI",
        img:DAI
    },
]




const SelectTokenTop = () =>{
    const [selectToken,setSelectToken] = useAtom(Select_TokenTop)
    const [,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [,setSwapTokenTail] = useAtom(SwapTokenTail)
    const [tokenList,] = useAtom(base_token_list_and_balance)
    const [,setTokenList] = useAtom(Token_Lists)
    const openTokenLists = ()=>{
        setSelectToken(false)
        setTokenList(true)
    }
    const select = (e) =>{
      const name= e[0]
      const img = e[1]
        setSwapTokenTop({
            img,
            name,
        })
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
                            <div className="inline-block align-bottom bg-gray-900 w-11/12 md:w-9/12 xl:w-1/3  rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:px-6 lg:px-12 ">
                                <div>
                                    <div className='flex justify-between text-xl font-light text-white 	mb-5'>
                                        <div className=" font-light  text-xl ">
                                            Select a token
                                        </div>
                                        <button  onClick={() => setSelectToken(false)}
                                                 className="fa fa-times " aria-hidden="true"></button>
                                    </div>
                                    <input type="text"
                                           className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 py-4 w-full border-gray-700 border z-40  focus:border-blue-400 transition duration-300  outline-none"
                                           placeholder="Search name or paste address"
                                           id="address"
                                    />
                                    <div className="my-5 text-gray-500 text-sm">
                                        Common bases
                                    </div>
                                    <div className="my-5">
                                        <div className="flex flex-wrap">
                                            {bases.map((item=>(
                                            <div  key={item.name} className="mr-3 mb-2  px-2 p-1 bg-gray-800 rounded-full ">
                                                <button onClick={() => select([item.name,item.img])} className="flex">
                                                    <div id={item.name} className="flex">
                                                        <img  className="w-6 h-6 mr-1 rounded-full" src={item.img} alt=""/>
                                                        <div  className="text-gray-300">{item.name}</div>
                                                    </div>

                                                </button>
                                            </div>
                                            )))}
                                        </div>
                                    </div>
                                    <div className="overflow-y-auto border border-gray-700 h-96 p-3 rounded-xl">
                                        {tokenList.map(item=>(
                                        <div key={item.name} onClick={() => select([item.name,item.img])} className="cursor-pointer flex justify-between">
                                            <div className="flex my-2">
                                                <img className="w-9 rounded-full" src={item.img} alt=""/>
                                                <div className="ml-1.5">
                                                    <div className="text-gray-400 text-xs">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-gray-200 text-sm">
                                                        {item.name}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-gray-500">
                                                {item.data}
                                            </div>
                                        </div>
                                        ))}
                                    </div>

                                    <div className="mt-2 flex justify-center text-blue-500 font-semibold hover:text-blue-400">
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
