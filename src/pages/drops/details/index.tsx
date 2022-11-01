import Header from "../../../components/header/index.";
import Tail from "../../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";
import Heads from "../../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const DetailsTop = () =>{
    return(
        <>
            <div className="xl:flex mt-8 justify-between">
                    <img  className="rounded-xl md:w-10/12 mx-auto xl:w-1/2 xl:mr-10" src="https://www.mintverse.com/images/pngs/games/hegemony/banner2.jpg" alt=""/>
                <div className="xl:w-1/2 mt-8 xl:mt-0">
                    <Link href="/">
                        <a className="text-indigo-400 text-2xl "> Wrath of Conquerors</a>
                    </Link>
                    <div className="text-3xl text-white mt-4 font-semibold">
                        Hegemony
                    </div>
                    <div className="flex md:w-1/2 justify-between text-white mt-5">
                        <div>
                            <div className="text-gray-300 text-sm">
                                Total quantity
                            </div>
                            <div className="font-semibold">
                                1000
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-300 text-sm">
                                Remaining quantity
                            </div>
                            <div  className="font-semibold">
                                1000
                            </div>
                        </div>

                    </div>

                    <div className=" xl:flex mt-8">
                        <div className="">
                            <div className="flex justify-center xl:justify-start text-gray-300 text-sm text-gray-200">
                                Price
                            </div>
                            <div className="text-4xl text-white font-semibold flex justify-center xl:justify-start">
                                48.8 BUSD
                                <div className="text-sm mt-3 ml-2">
                                    $48.79024
                                </div>
                            </div>

                        </div>
                        <div className="mt-3 xl:mt-0 md:ml-5">
                            <div>
                                <div className="text-gray-300  flex justify-center xl:justify-start  text-sm ">
                                    Sale starts in
                                </div>
                            </div>
                            <div className=" flex justify-center xl:justify-start text-white text-3xl">
                                00:00:00:00
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="text-gray-300 text-sm text-gray-200">
                            Contract Address
                        </div>
                        <div className="text-white hover:text-indigo-400 text-xs md:text-base font-semibold">
                            0x584f79E96D91a25878dD2d75c3D824c98AB64f34
                        </div>
                    </div>
                    <div className="">
                        <button  className=" py-1.5 mt-8 w-full xl:w-64  rounded-lg bg-indigo-500">
                           Buy now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}
const DetailsTable = () =>{
    const table = [
        {
           title:"NFT Name"
        },
        {
            title:"Rarity"
        },
        {
            title:"Amount"
        },
        {
            title:"Probability"
        },
    ]

    const tableDetail = [
        {
            name:"One Hero",
            rarity:"--",
            amount:"90",
            probability:"3%"
        },
        {
            name:"Two Keys",
            rarity:"--",
            amount:"300",
            probability:"10%"
        },
        {
            name:"Five Bottles of Potion",
            rarity:"--",
            amount:"300",
            probability:"10%"
        },
        {
            name:"Three Bottles of Potion",
            rarity:"--",
            amount:"510",
            probability:"17%"
        }
    ]

    const Description = {
        img:"https://www.mintverse.com/images/pngs/games/hegemony/logo.webp",
        h1:"Wrath of Conquerors: Hegemony is a brand new massive online game running on the Binance Smart Chain (BSC). Players will play the role of a mid-earth lord, recruit heroes, challenge PVP/PVE, level up in the game, obtain treasure chest fragments to synthesize NFT treasure chests.\n" +
            "Potion\n" +
            "The potion from the treasure chest can be used to upgrade the hero in category N. Potion can also be used to boost the damage of the hero. The player can choose to use potion to temporarily increase the damage of the hero when they are in the bad situation in the battle. It should be noted that potion is consumable and could not be stacked to increase its effect.\n" +
            "Key\n" +
            "The key will be needed to open the treasure chest.\n" +
            "Hero\n" +
            "The hero recruited by the player will be randomly assigned a class. At present, these classes include Warrior/Assassin/Wizard/Templar/Hunter."
    }




return(
    <>
        <div className="shadow overflow-auto border-b mt-20  border-gray-600 sm:rounded-lg">
            <div className="text-white text-xl  flex p-3  font-semibold">
                Series Content</div>
            <table className="min-w-full border-t border-gray-600 divide-y  divide-gray-600">
                <thead className="bg-gray-900 bg-opacity-60 ">
                <tr>
                    {table.map(title => (
                        <th key={title.title}
                            scope="col"
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-200  "
                        >
                            {title.title}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className=" divide-y divide-gray-600">
                {tableDetail.map(item => (
                    <tr key={item.name} className="hover:bg-gray-800">
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-white">
                            {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                            {item.rarity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                            {item.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                            {item.probability}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className="shadow overflow-auto border-b mt-20  border-gray-600 sm:rounded-lg">
            <div className="text-white text-xl  flex p-3  font-semibold">
                Product Description</div>
            <div className="xl:flex p-5">
                <div className="">
                <img className="w-32  mb-5 mx-auto" src={Description.img} alt=""/>
                </div>
                    <div className="xl:ml-8 text-gray-200 xl:w-10/12">
                       <div>
                       {Description.h1}
                       </div>
                         </div>
            </div>
        </div>
    </>
    )

}

const Details = () =>{

    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-20 bg-W3GTopBG">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="relative sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="https://www.mintverse.com/images/pngs/games/hegemony/banner-main2.jpg"
                                alt="People working on laptops"
                            />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24  mx-auto max-w-7xl">
                        </div>
                    </div>

                    <div className="">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                           <DetailsTop/>
                            <DetailsTable/>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Details
