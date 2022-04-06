import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Auction = () =>{
    const auction =[
        {
            img:"https://app.everpay.io/img/wonderland.81f2ad05.png",
            distribution:"723.93W3G",
            total:"21,351.49W3G",
            floor:"111.45AR",
            starttime:"03-31 22:00",
            endtime:"04-02 22:00",
        },
        {
            img:"https://app.everpay.io/img/tiger.7f9423cb.png",
            distribution:"723.93W3G",
            total:"21,351.49W3G",
            floor:"111.45AR",
            starttime:"03-31 22:00",
            endtime:"04-02 22:00",
        },
        {
            img:"https://app.everpay.io/img/art.edfa4095.png",
            distribution:"723.93W3G",
            total:"21,351.49W3G",
            floor:"111.45AR",
            starttime:"03-31 22:00",
            endtime:"04-02 22:00",
        },
        {
            img:"https://app.everpay.io/img/winston.5e4e7792.png",
            distribution:"723.93W3G",
            total:"21,351.49W3G",
            floor:"111.45AR",
            starttime:"03-31 22:00",
            endtime:"04-02 22:00",
        },

    ]

    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-5xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="md:mx-20">
                                <div className="text-center">
                                <div className="text-xl md:text-3xl text-indigo-500 font-semibold">
                                   W3G NFT Auction
                                </div>
                                <div className=" text-white font-semibold">
                                    Collect W3G NFTs and connect with W3G Future!
                                </div>
                                    <div className="text-sm md:text-base text-gray-200">
                                        When entering the auction, you must bid 5% above the current price. Proceeds from the auction will be distributed to users, the artist and past NFT Holders. Come be apart of the bid wars!
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 ">
                                {auction.map((item=>(
                                <Link key={item.img} href="/#">
                                    <a>
                                <div className="relative mb-10 lg:mx-28">
                                    <div className="absolute inset-0">
                                        <img
                                            className="h-full  w-full  object-cover rounded-xl"
                                            src={item.img}
                                            alt="People working on laptops"
                                        />
                                    </div>
                                    <div className="pt-36 relative  ">
                                        <div className="bg-gray-100 opacity-90 px-6 lg:px-10 rounded-b-xl py-4 flex justify-between">
                                           <div>
                                               <div className="flex">
                                               <div className="text-sm md:text-base">
                                                Distribution
                                            </div>
                                            <div className="ml-1 md:ml-0 -mt-0.5 md:-mt-0 lg:text-3xl text-indigo-600 font-semibold">
                                                {item.distribution}
                                            </div>
                                               </div>
                                            <div className="md:flex text-xs text-sm">
                                                <div className="flex md:mr-10">Total Volume:
                                                    <div className="text-indigo-400 ml-1">{item.total}</div></div>
                                                <div className="flex">Floor Price:
                                                    <div className="text-indigo-400 ml-1"> {item.floor}</div></div>
                                            </div>
                                        </div>
                                            <div className="flex">
                                                <div className="md:border-r pr-5 md:mt-2 text-xs">
                                                    <div>
                                                        Closed
                                                    </div>
                                                    <div>
                                                        {item.starttime}
                                                    </div>
                                                    <div className="text-center">
                                                        |
                                                    </div>
                                                    <div>
                                                        {item.endtime}
                                                    </div>
                                                </div>
                                                <div className="hidden md:inline-block pl-6 mt-6">
                                                    <div className="px-6 py-1.5 rounded-full bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-700">
                                                        Enter
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                </div>
                                    </a>
                                </Link>
                                )))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Auction
