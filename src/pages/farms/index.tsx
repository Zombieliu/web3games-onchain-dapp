import { RadioGroup } from "@headlessui/react";
import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import Heads from "../../components/head";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const farmType = [
    {
        name: 'TVL',
    },
    {
        name: 'APR',

    },
]
const Farms = () =>{

    const farms = [
        {
            id:"1",
            tokenName1:"ETH",
            tokenImg1:"/web3gsmall.png",
            tokenName2:"W3G",
            tokenImg2:"/web3gsmall.png",
            tokenWeek:"30.28K",
            totalStaked:"4.40M",
            apr:"26.83",
        },
        {
            id:"2",
            tokenName1:"ETH",
            tokenImg1:"/web3gsmall.png",
            tokenName2:"W3G",
            tokenImg2:"/web3gsmall.png",
            tokenWeek:"30.28K",
            totalStaked:"4.40M",
            apr:"26.83",
        },
        {
            id:"3",
            tokenName1:"ETH",
            tokenImg1:"/web3gsmall.png",
            tokenName2:"W3G",
            tokenImg2:"/web3gsmall.png",
            tokenWeek:"30.28K",
            totalStaked:"4.40M",
            apr:"26.83",
        },
        {
            id:"4",
            tokenName1:"ETH",
            tokenImg1:"/web3gsmall.png",
            tokenName2:"W3G",
            tokenImg2:"/web3gsmall.png",
            tokenWeek:"30.28K",
            totalStaked:"4.40M",
            apr:"26.83",
        },
        {
            id:"5",
            tokenName1:"ETH",
            tokenImg1:"/web3gsmall.png",
            tokenName2:"W3G",
            tokenImg2:"/web3gsmall.png",
            tokenWeek:"30.28K",
            totalStaked:"4.40M",
            apr:"26.83",
        },
        {
            id:"6",
            tokenName1:"ETH",
            tokenImg1:"/web3gsmall.png",
            tokenName2:"W3G",
            tokenImg2:"/web3gsmall.png",
            tokenWeek:"30.28K",
            totalStaked:"4.40M",
            apr:"26.83",
        },
    ]

    const [selected, setSelected] = useState(farmType[0])
    return(
        <div className="bg-W3GBG">
            <Heads/>
            <Header/>
            <div className=" relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">


                    <div className="max-w-7xl relative px-5 py-16  sm:px-6   mx-auto ">

                        <div className="text-center border-b border-[#325253] pb-8">
                            <div className="flex justify-center">
                            <div className="text-white text-3xl font-semibold px-5 pt-6 pb-16 -mb-16  rounded-full bg-gradient-to-b from-[#74C7C7]  via-[#151515] to-[#151515] ">
                                Farms
                            </div>
                            </div>
                            <div className="text-gray-500 font-light">
                                Here is the farmers channel of w3g. On this special page, you may find more.
                            </div>
                            <button className="text-[#74C7C7] text-sm font-semibold">
                                Learn more
                            </button>
                        </div>


                        <div className="text-white    ">
                            <div className="flex items-center md:justify-end">

                                <div className="md:flex justify-between items-center py-7">

                                    {/*Search*/}
                                    <div className="flex items-center hover:text-[#76FFFF]">
                                        <div >
                                            <input type="text"
                                                   className="  bg-neutral-700 text-white text-xs md:text-sm  pr-6 rounded-lg p-2  w-96 md:w-48   border border-gray-800 hover:border-[#76FFFF]/40 focus:border-[#76FFFF]/40
                                                    focus:shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] focus:shadow-[#76FFFF]/50  outline-none"
                                                   placeholder="Search by token "
                                                   id="Farms"
                                            />
                                        </div>
                                        <div className="text-xl ml-2  -ml-6  ">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    <div className="w-full md:px-4 mt-4 md:mt-0">
                                        <div className="mx-auto w-full max-w-md">

                                            <RadioGroup value={selected} onChange={setSelected}>
                                                <div className="flex items-center">
                                                    <div className="text-neutral-400 font-medium text-sm mr-2">
                                                      Sort by
                                                    </div>
                                                    {farmType.map((type) => (
                                                        <RadioGroup.Option
                                                            key={type.name}
                                                            value={type}
                                                            className={({ active, checked }) =>
                                                                `${
                                                                checked ? 'bg-[#5E9AD2]  text-white' : 'hover:bg-neutral-700'} 
                                                                relative flex cursor-pointer rounded-lg px-5 py-2  focus:outline-none `
                                                            }>
                                                            {({ active, checked }) => (
                                                                <>
                                                                    <div className="flex w-full items-center justify-between">
                                                                        <div className="flex items-center">
                                                                            <div className="text-sm">
                                                                                <RadioGroup.Label
                                                                                    as="p"
                                                                                    className={`font-medium  ${
                                                                                        checked ? 'text-white' : 'text-neutral-400'}`}>
                                                                                    {type.name}
                                                                                </RadioGroup.Label>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </RadioGroup.Option>
                                                    ))}
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full   mb-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                                {farms.map(items=>(
                                    <div key={items.id} className="rounded-lg   bg-gradient-to-b from-[#7ADFD6]/80  to-[#6A91E7]/80">
                                        <div className="pb-5 p-4">
                                        <div className="flex">
                                            <img className="w-8 rounded-full border-2 border-white/20" src={items.tokenImg1} alt=""/>
                                            <img className="w-8 rounded-full  border-2 border-white/20" src={items.tokenImg2} alt=""/>
                                        </div>
                                        <div className="flex my-2 font-semibold">
                                            <div>
                                                {items.tokenName1}
                                            </div>
                                            -
                                            <div>
                                                {items.tokenName2}
                                            </div>
                                        </div>
                                        <div className="flex">
                                        <div className="rounded-md bg-[#FFFFFF]/30 p-1 flex items-center pr-4">

                                            <img className="w-5 rounded-full border border-[#76FFFF]" src={items.tokenImg1} alt=""/>
                                            <img className="w-5 rounded-full border border-[#76FFFF] -ml-0.5" src={items.tokenImg2} alt=""/>
                                            <div className="ml-2 text-xs">
                                                $ {items.tokenWeek} / week
                                            </div>

                                        </div>
                                        </div>
                                        </div>
                                        <div className="flex justify-between p-4 bg-[#1D1D1D]/80 text-xs" >
                                            <div className="">
                                                <div className="text-gray-500 mb-2">
                                                    Total Staked
                                                </div>
                                                <div>
                                                    ${items.totalStaked}
                                                </div>

                                            </div>
                                            <div className="">
                                                <div className="text-gray-500 mb-2">
                                                 APR
                                                </div>
                                                <div >
                                                    {items.apr}%
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Tail/>
        </div>
    )
}
export default Farms


