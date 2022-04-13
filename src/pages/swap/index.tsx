import {Tab} from "@headlessui/react";
import React, {useState} from "react";
import {useAtom} from "jotai";
import {
    Select_TokenTail,
    Select_TokenTop,
    SetSubstrateShowState,
    SwapTokenTail,
    SwapTokenTop,
    WalletButtonShowState, WalletListShowState
} from "../../jotai";
import SelectTokenTail from "../../components/selecttokentail";
import SelectTokenTop from "../../components/selecttokentop";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Swap = () =>{
    const [,setSelectTokenTail] = useAtom(Select_TokenTail)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [swapTokenTail,setSwapTokenTail] = useAtom(SwapTokenTail)
    const [WalletButtonShow,]=useAtom(WalletButtonShowState)
    const [substrateShow,] =useAtom(SetSubstrateShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    let [categories] = useState({
        Recent: [],
        Popular: [],
    })
    const exchange = () =>{
        setSwapTokenTop(swapTokenTail)
        setSwapTokenTail(swapTokenTop)
    }
    const selectTokenTop = () =>{
        setSelectTokenTop(true)
    }
    const selectTokenTail = () =>{
        setSelectTokenTail(true)
    }
    return(
        <div>
            <div className="flex  justify-center  mx-auto px-2 py-12 sm:px-0">
                <div className="bg-black bg-opacity-90 p-5 rounded-2xl">
                    <Tab.Group>
                        <Tab.List className=" p-1 space-x-1 bg-blue-900/20 rounded-xl mx-auto  flex justify-between ">
                            <div>
                                {Object.keys(categories).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-24 py-2 text-sm leading-5 font-medium text-gray-600 ',
                                                selected
                                                    ? ' text-yellow-50 border-b shadow'
                                                    : ' hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </div>
                            <div className="text-white px-2 py-1 text-xl">
                                <i className="fa fa-cog " aria-hidden="true"></i>

                            </div>
                        </Tab.List>
                       {/*Recent*/}
                        <Tab.Panels className="mt-2 ">
                            <Tab.Panel
                                className={classNames(
                                    ' rounded-xl p-1 w-80 md:w-96')}
                            >
                                <div className="bg-gray-900 p-3 rounded-2xl">
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
                                                   className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2  md:w-48    hover:border-black focus:border-black transition duration-300  outline-none"
                                                   placeholder="0.0"
                                                   id=""
                                            />
                                        </div>
                                        <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance: 0</div>
                                    </div>
                                </div>
                                <div  className="flex justify-center -mt-2 ">
                                    <button onClick={exchange}>
                                        <i className="fa fa-arrow-down text-gray-100 p-1.5  bg-gray-600 rounded-2xl" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div className="-mt-2 bg-gray-900 p-3 rounded-2xl">
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
                                                   className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2   md:w-48    hover:border-black focus:border-black transition duration-300  outline-none"
                                                   placeholder="0.0"
                                                   id="IC"
                                            />
                                        </div>
                                        <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance: 0</div>
                                    </div>
                                </div>
                                <div className="text-center mt-5  text-black" >
                                    <div className={WalletButtonShow || substrateShow ? "hidden": "mt-1"}>
                                        <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-24 py-1.5 rounded-lg bg-blue-500">
                                            Connect Wallet
                                        </button>
                                    </div>
                                    <div className={WalletButtonShow || substrateShow ? "mt-1": "hidden"}>
                                        <button  className="px-24 py-1.5 rounded-full bg-indigo-300">
                                            Swap
                                        </button>
                                    </div>
                                </div>

                            </Tab.Panel>

                            {/*Popular*/}
                            <Tab.Panel
                                className={classNames(
                                    'text-gray-300 rounded-xl p-1 w-80 md:w-96')}
                            >
                                <div className="bg-gray-900 p-3 rounded-2xl">
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

                                <div className="flex gap-3">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col gap-1 mt-2">
                                            <div className="text-sm leading-5  font-medium px-2">
                                                Rate
                                            </div>
                                            <div className="flex justify-between items-baseline bg-dark-900 rounded px-4 py-1.5 border border-dark-700 hover:border-dark-600">
                                                <div className="text-lg leading-6 font-bold relative flex items-baseline flex-grow gap-3 overflow-hidden">
                                                    <input type="text" pattern="^[0-9]*[.,]?[0-9]*$"
                                                           placeholder="0.0"
                                                           className="relative font-bold outline-none  flex-auto overflow-hidden overflow-ellipsis  focus:placeholder:text-low-emphesis flex-grow w-20 md:w-24 text-left bg-transparent text-inherit disabled:cursor-not-allowed"/>
                                                    <div className="text-sm leading-5 font-medium cursor-pointer select-none currentColor">
                                                        W3G
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center mx-2 md:mx-6 mt-6">
                                            <i className=" fa fa-exchange transform rotate-90 text-xs "  aria-hidden="true"></i>
                                        </div>
                                        <div className="flex flex-col gap-1 mt-2">
                                            <div className="text-sm leading-5  font-medium px-2">
                                                Expires in
                                            </div>
                                            <div className="flex justify-between items-baseline bg-dark-900 rounded px-4 py-1.5 border border-dark-700 hover:border-dark-600">
                                                <div className="text-lg leading-6 font-bold relative flex items-baseline flex-grow gap-3 overflow-hidden">
                                                    <select className="relative font-bold outline-none  flex-auto overflow-hidden overflow-ellipsis  focus:placeholder:text-low-emphesis flex-grow w-24 text-left bg-transparent text-inherit disabled:cursor-not-allowed">
                                                        <option value ="Never">Never</option>
                                                        <option value ="1Hour">1 Hour</option>
                                                        <option value="24Hours">24 Hours</option>
                                                        <option value="1Week">1 Week</option>
                                                        <option value="30Days">30 Days</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 bg-gray-900 p-3 rounded-2xl">
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
                                <div className="text-center mt-5  text-black" >
                                <div className={WalletButtonShow || substrateShow ? "hidden": "mt-1"}>
                                    <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-24 py-1.5 rounded-lg bg-blue-500">
                                        Connect Wallet
                                    </button>
                                </div>
                                <div className={WalletButtonShow || substrateShow ? "mt-1": "hidden"}>
                                    <button  className="px-24 py-1.5 rounded-full bg-indigo-300">
                                        Swap
                                    </button>
                                </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                </div>
            </div>
            <div className="text-gray-600 text-sm flex justify-center text-center md:w-1/2 mx-auto">
                Limit orders use funds from BentoBox, to create a limit order depositing into BentoBox is required.
            </div>
            <div className="text-gray-600 text-sm flex justify-center text-center mt-2 md:w-1/2 mx-auto">
                Tip: When expert mode is enabled, balance isn`t checked when creating orders. You can use this to chain limit orders.
            </div>

            <SelectTokenTop/>
            <SelectTokenTail/>

        </div>
    )
}
export default Swap
