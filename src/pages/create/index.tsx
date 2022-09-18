import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid'
import {useAtom} from "jotai";
import {
    Select_TokenTail,
    Select_TokenTop,
    SwapTokenTail,
    SwapTokenTop,
    WalletButtonShowState, WalletListShowState
} from "../../jotai";
import Heads from "../../components/head";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const deliveryMethods = [
    { id: 1, title: '0.01%', turnaround: 'Best for stable pairs', },
    { id: 2, title: '0.05%', turnaround: 'Best for stable pairs', },
    { id: 3, title: '0.3%', turnaround: 'Best for stable pairs', },
    { id: 4, title: '1%',   turnaround: 'Best for stable pairs', },
]
const Create = () =>{
    const [WalletButtonShow,SetWalletButtonShow]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
    const [,setSelectTokenTail] = useAtom(Select_TokenTail)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [swapTokenTail,setSwapTokenTail] = useAtom(SwapTokenTail)
    const selectTokenTop = () =>{
        setSelectTokenTop(true)
    }
    const selectTokenTail = () =>{
        setSelectTokenTail(true)
    }
    return(
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-90 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="">
                                <div className="text-3xl text-gray-300 tracking-[-0.02em] font-bold text-high-emphesis">
                                    Create Liquidity Pool
                                </div>
                                <div className="text-sm leading-5 font-medium currentColor text-gray-300">
                                    Select a pool type, deposit assets, and create your pool on Sushi.
                                </div>
                        </div>
                    </div>
                </div>
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="">
                                <div className="text-xl text-gray-300 tracking-[-0.02em]">
                                    Select Two Assets
                                </div>
                                <div className="text-xs leading-5 font-medium currentColor text-gray-500 lg:w-3/5">
                                    Please select the two assets that this pool will consist of. When creating a pair, you are the first liquidity provider. Please note that the ratio of tokens you add will set the price of this pool.
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="bg-gray-900 p-3 rounded-2xl lg:w-1/2">
                                    <div className="flex justify-between">
                                        <div className="flex bg-gray-600 bg-opacity-90 p-1 rounded-full">
                                            <div className="flex">
                                                <button onClick={selectTokenTop} className="flex">
                                                    <div>
                                                        <img className="w-6 rounded-full mr-1" src={swapTokenTop.img} alt=""/>
                                                    </div>
                                                    <div className="text-gray-200">
                                                        {swapTokenTop.name}
                                                    </div>
                                                    <i className="fa fa-angle-down text-white ml-3 mt-1" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="text-gray-300 mt-2 text-xs mr-2">
                                                Pay from
                                            </div>
                                            <div className="px-1.5 pt-1.5 text-center text-gray-200 text-sm bg-gray-700 rounded-full ">
                                                Wallet
                                            </div>
                                            <div>
                                                <i className="fa fa-question-circle ml-2 mt-1.5 text-gray-300"
                                                   aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <div className="flex">
                                            <input type="text"
                                                   className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48    hover:border-black focus:border-black transition duration-300  outline-none"
                                                   placeholder="0.0"
                                                   id=""
                                            />
                                        </div>
                                        <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance: 0</div>
                                    </div>
                                </div>
                                <div  className="flex justify-center -mt-2 lg:w-1/2">
                                    <div >
                                        <i className="fa fa-plus text-gray-100 px-1.5 py-1  bg-gray-600 rounded-2xl" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="-mt-2 bg-gray-900 p-3 rounded-2xl lg:w-1/2">
                                    <div className="flex justify-between">
                                        <div className="flex bg-gray-600 bg-opacity-90 p-1 rounded-full">
                                            <button onClick={selectTokenTail} className="flex">
                                                <div>
                                                    <img className="w-6 rounded-full mr-1" src={swapTokenTail.img} alt=""/>
                                                </div>
                                                <div className="text-gray-200">
                                                    {swapTokenTail.name}
                                                </div>
                                                <i className="fa fa-angle-down text-white ml-3 mt-1" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className="flex">
                                            <div className="text-gray-300 mt-2 text-xs mr-2">
                                                Pay from
                                            </div>
                                            <div className="px-1.5 pt-1.5 text-center text-gray-200 text-sm bg-gray-700 rounded-full ">
                                                Wallet
                                            </div>
                                            <div>
                                                <i className="fa fa-question-circle ml-2 mt-1.5 text-gray-300"
                                                   aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mt-5">
                                        <div className="flex">
                                            <input type="text"
                                                   className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48    hover:border-black focus:border-black transition duration-300  outline-none"
                                                   placeholder="0.0"
                                                   id="IC"
                                            />
                                        </div>
                                        <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance: 0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="text-xl text-gray-300 tracking-[-0.02em]">
                                    Select Fee Tier
                                </div>
                                <div className="text-xs leading-5 font-medium currentColor text-gray-500 lg:w-3/5">
                                    Select the percentage of fee that this pool will take from a swap order. Higher fee tiers suit pairs with more volatility and less volume.
                                </div>
                            </div>
                            <div className="mt-10 ">
                                <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-4">
                                        {deliveryMethods.map((deliveryMethod) => (
                                            <RadioGroup.Option
                                                key={deliveryMethod.id}
                                                value={deliveryMethod}
                                                className={({ checked, active }) =>
                                                    classNames(
                                                        checked ? 'border-transparent' : 'border-gray-300',
                                                        active ? 'ring-2 ring-indigo-500' : '',
                                                        'relative bg-black bg-opacity-80 border border-gray-700 rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                                                    )
                                                }
                                            >
                                                {({ checked, active }) => (
                                                    <>
                                                        <div className="flex-1 flex">
                                                            <div className="flex flex-col">
                                                                <RadioGroup.Label as="span" className="block text-2xl font-medium text-gray-200">
                                                                    {deliveryMethod.title}
                                                                </RadioGroup.Label>
                                                                <RadioGroup.Description
                                                                    as="span"
                                                                    className="mt-1 flex items-center text-sm text-gray-400"
                                                                >
                                                                    {deliveryMethod.turnaround}
                                                                </RadioGroup.Description>
                                                            </div>
                                                        </div>
                                                        {checked ? <CheckCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" /> : null}
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
                            <div className="mt-10">
                                <div className="text-xl text-gray-300 tracking-[-0.02em]">
                                    Create Oracle for this Pair?
                                </div>
                                <div className="text-xs leading-5 font-medium currentColor text-gray-500 lg:w-3/5">
                                    Creating oracle enables the pool to store its price data and provides more accurate swap rate. However, the swap gas fee will be higher.
                                </div>
                            </div>
                            <div className="mt-10" >
                                <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                    <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-12 py-1.5 rounded-lg bg-blue-500">
                                        Connect Wallet
                                    </button>
                                </div>
                                <div className={WalletButtonShow ? "mt-1": "hidden"}>
                                    <button  className="mt-5 lg:mt-0 bg-blue-500 px-3 py-2 rounded-lg bg-indigo-500 text-white">
                                        Create Pool
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
            <Tail/>
        </div>

        </div>


    )
}
export default Create
