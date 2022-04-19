import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const DropsList = () =>{
    const list =[
        {
            img:"https://www.mintverse.com/images/pngs/games/hegemony/banner3.jpg",
            name:"Hegemony",
            time:"2022-03-25 20:00:00 UTC",
            total:"1000",
            mint:"48.8 BUSD",
        },
        {
            img:"https://www.mintverse.com/images/pngs/games/kitty/coverpage.jpg",
            name:"Candy Kitty",
            time:"2022-02-8 20:00:00 UTC",
            total:"700",
            mint:"0.2 BNB",
        },
        {
            img:"https://www.mintverse.com/images/pngs/games/hegemony/banner2.jpg",
            name:"Candy Kitty",
            time:"2022-02-05 20:00:00 UTC",
            total:"300",
            mint:"free",
        },
        {
            img:"https://www.mintverse.com/images/pngs/games/hegemony/banner1.jpg",
            name:"LING CAGE: INCARNATION Genesis NFT Mystery Box Batch I",
            time:"2022-03-25 20:00:00 UTC",
            total:"2500",
            mint:"29 BUSD",
        },
    ]
    return(
        <>
            <div className="mt-20">
                <div className="mb-10 text-white text-3xl">
                    Drops List
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 mx-4">
                    {list.map((item=>(
                        <Link key={item.name} href="/drops/details"><a>
                    <div className="transform  hover:scale-105 transition duration-300">
                        <img className="rounded-xl" src={item.img} alt=""/>
                        <div className="text-gray-100 text-xl my-3 truncate  font-semibold">
                            {item.name}
                        </div>
                        <div className="text-gray-400 text-sm mb-4 md:mb-2 xl:mb-4">
                            {item.time}
                        </div>
                        <div className="flex justify-between  mb-4 md:mb-2 xl:mb-4">
                            <div className="text-gray-400 text-sm font-semibold " >
                                Total Supply
                            </div>
                            <div className="text-white text-sm font-semibold">
                                {item.total}
                            </div>
                        </div>
                        <div className="flex justify-between  mb-6 md:mb-2 xl:mb-6">
                            <div className="text-gray-400 text-sm font-semibold">
                                Mint Price
                            </div>
                            <div className="text-white text-sm font-semibold">
                                {item.mint}
                            </div>
                        </div>
                    </div>
                            </a>
                        </Link>
                    )))}
                </div>
            </div>

        </>
    )
}

const Drops = () =>{

    const drops = [
        {
            img:"https://www.mintverse.com/images/pngs/games/hegemony/banner3.jpg",
            logo:"https://www.mintverse.com/images/pngs/games/hegemony/logo.webp",
            name:"Hegemony",
            time:"2022-03-25 20:00:00 UTC",
            h1:"  Wrath of Conquerors: Hegemony is a brand new massive online game running on the Binance Smart Chain (BSC). Players will play the role of a mid-earth lord, recruit heroes, challenge PVP/PVE, level up in the game, obtain treasure chest fragments to synthesize NFT treasure chests.",
            total:"1000",
            mint:"48.8 BUSD",

        }
    ]
    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className=" mx-auto  ">
                    <div className="relative sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="https://cdn.discordapp.com/attachments/876498266550853642/949201321112780810/beij_.png"
                                alt="People working on laptops"
                            />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24  mx-auto">
                            <div className="text-center">
                                <span className="block text-white text-4xl font-semibold  tracking-tight  pb-10">
                                    MINTVERSE NFT Drops</span>
                                <span className="block text-2xl text-gray-300">Exclusive NFT offerings from the worlds best creators
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                            <div>
                                {drops.map((item=>(
                                <div key={item.name} className="lg:flex">
                                    <img className="mx-auto w-full md:w-10/12 xl:w-5/12 rounded-xl" src={item.img} alt=""/>
                                    <div className="mx-auto mt-5 lg:mt-0 md:ml-8">
                                        <div className="flex mb-4">
                                            <img className="w-16 md:w-24 rounded-full" src={item.logo} alt=""/>
                                            <div className="text-gray-100 text-2xl mt-3 ml-3 font-semibold">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="text-gray-400 mb-4 md:mb-2 xl:mb-4">
                                            {item.time}
                                        </div>
                                        <div className="text-gray-300  text-xl mb-6  font-light h-28 overflow-auto ">
                                            {item.h1}
                                        </div>
                                        <div className="md:flex justify-between ">
                                        <div className=" flex justify-between md:w-5/12 mb-4 ">
                                            <div className="text-gray-400 font-semibold " >
                                                Total Supply
                                            </div>
                                            <div className="text-white font-semibold">
                                                {item.total}
                                            </div>
                                        </div>
                                        <div className=" flex justify-between md:w-5/12 mb-6 ">
                                            <div className="text-gray-400 font-semibold">
                                                Mint Price
                                            </div>
                                            <div className="text-white font-semibold">
                                                {item.mint}
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex justify-center xl:justify-start">
                                            <Link href="/drops/details">
                                        <a className="px-28 py-2 bg-indigo-700 text-gray-200 rounded-full transform hover:scale-105 transition duration-500 cursor-pointer">
                                            Check Details
                                        </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                )))}
                            </div>
                            <div>
                            </div>
                            <DropsList></DropsList>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Drops
