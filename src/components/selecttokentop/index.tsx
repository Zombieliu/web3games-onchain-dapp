import {useAtom} from "jotai";
import {Select_TokenTop, SwapTokenTail, SwapTokenTop} from "../../jotai";
import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment} from "react";

const bases = [
    {
        name:"W3G",
        img:"/img.png",
    },
    {
        name:"USDC",
        img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_48,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/logos/main/network/ethereum/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.jpg",
    },
    {
        name:"USDT",
        img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_48,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/logos/main/network/ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7.jpg",
    },

]

const tokenList = [
    {
        img:"/img.png",
        title:"W3G",
        name:"W3G",
        data:"0.00",
    },
    {
        img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_64,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png",
        title:"AAVE",
        name:"AAVE",
        data:"0.00",
    },
    {
        img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_48,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/logos/main/network/ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7.jpg",
        title:"USDT",
        name:"USDT",
        data:"0.00",
    },
    {
        img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_64,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg",
        title:"Dai Stablecoin",
        name:"DAI",
        data:"0.00",
    },
    {
        img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_64,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x0f51bb10119727a7e5eA3538074fb341F56B09Ad/logo.png",
        title:"DAO Maker",
        name:"DAO",
        data:"0.00",
    },
]


const SelectTokenTop = () =>{
    const [selectToken,setSelectToken] = useAtom(Select_TokenTop)
    const [,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [,setSwapTokenTail] = useAtom(SwapTokenTail)
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
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto " onClose={setSelectToken}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl  sm:block sm:p-0">
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
                            <div className="inline-block align-bottom bg-gray-900 w-11/12 md:w-9/12 xl:w-1/2  rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:px-6 lg:px-12 ">
                                <div>
                                    <div className='flex justify-between text-xl font-light text-white 	mb-5'>
                                        <div className=" font-light  text-xl ">
                                            Select a token
                                        </div>
                                        <button  onClick={() => setSelectToken(false)}
                                                 className="fa fa-times " aria-hidden="true"></button>
                                    </div>
                                    <input type="text"
                                           className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 py-4 w-full border-gray-700 border   focus:border-blue-400 transition duration-300  outline-none"
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
