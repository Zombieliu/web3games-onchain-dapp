import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const DropsList = () =>{
    return(
        <>
            <div className="mt-20">
                <div className="mb-10 text-white text-3xl">
                    Drops List
                </div>
                <div>
                    <div>

                    </div>
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
                                <span className="block text-2xl text-white">Exclusive NFT offerings from the worlds best creators
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                            <div>
                                {drops.map((item=>(
                                <div key={item.name} className="md:flex">
                                    <img className="w-full md:w-6/12 xl:w-5/12 rounded-xl" src={item.img} alt=""/>
                                    <div className="mt-5 md:mt-0 md:ml-8">
                                        <div className="flex mb-4">
                                            <img className="w-24 rounded-full" src={item.logo} alt=""/>
                                            <div className="text-gray-100 text-2xl mt-3 ml-3 font-semibold">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="text-gray-400 mb-4 md:mb-2 xl:mb-4">
                                            {item.time}
                                        </div>
                                        <div className="text-gray-300 md:text-sm xl:text-base mb-4 md:mb-2 font-light">
                                            {item.h1}
                                        </div>
                                        <div className="flex justify-between md:w-5/12 mb-4 md:mb-2 xl:mb-4">
                                            <div className="text-gray-400 font-semibold " >
                                                Total Supply
                                            </div>
                                            <div className="text-white font-semibold">
                                                {item.total}
                                            </div>
                                        </div>
                                        <div className="flex justify-between md:w-5/12 mb-6 md:mb-2 xl:mb-6">
                                            <div className="text-gray-400 font-semibold">
                                                Mint Price
                                            </div>
                                            <div className="text-white font-semibold">
                                                {item.mint}
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-start">
                                        <button className="px-28 py-2 bg-indigo-700 rounded-full transform hover:scale-105 transition duration-500 cursor-pointer">
                                            Check Details
                                        </button>
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
