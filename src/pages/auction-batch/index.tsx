import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const auctionList = [
    {
        img:"https://app.everpay.io/img/miserable.70d79eaf.jpg",
        avatar:"https://app.everpay.io/img/hot.19a4785f.png",
        name:"Name",
        money:"113.67",
        state:"Closed",
        address:"0x5F008811D7f0650511111238a1b38f3c04e39a60C8CA28d",
    },
    {
        img:"https://app.everpay.io/img/spreader.e9abe0c8.jpg",
        avatar:"https://app.everpay.io/img/hot.19a4785f.png",
        name:"Name",
        money:"113.67",
        state:"Closed",
        address:"0x5F008811D7f0650511111238a1b38f3c04e39a60C8CA28d",
    },
    {
        img:"https://app.everpay.io/img/tyger.1c909754.jpg",
        avatar:"https://app.everpay.io/img/hot.19a4785f.png",
        name:"Name",
        money:"113.67",
        state:"Closed",
        address:"0x5F008811D7f0650511111238a1b38f3c04e39a60C8CA28d",
    },
    {
        img:"https://app.everpay.io/img/maniac.f45496b1.jpg",
        avatar:"https://app.everpay.io/img/hot.19a4785f.png",
        name:"Name",
        money:"113.67",
        state:"Closed",
        address:"0x5F008811D7f0650511111238a1b38f3c04e39a60C8CA28d",
    },
]
const ListStateStyle=
    {
    Closed:"text-red-400",
    Conduct:"text-green-500",
}
const AuctionList = () =>{
    return(
        <>
            <div className="mt-10  ">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {auctionList.map((item=>(
                   <Link key={item.img} href="/auction-detail">
                       <a className="transition duration-300 transform hover:scale-105">
                   <div className="text-white p-2 bg-gray-700 rounded-xl">
                       <img   src={item.img} alt=""/>
                       <div className="p-1 pt-3 px-2">
                           <div className="flex justify-between">
                               <div className="flex">
                                   <img className="rounded-full w-6 mr-2"
                                        src={item.avatar} alt=""/>
                               <div className="tex">
                                   {item.name}
                               </div>
                               </div>
                               <div className="flex  ">
                                   <img className="rounded-full  ml-4 mr-1 w-6" src="/img.png" alt=""/>
                                   <div className="text-red-400 ">
                                       {item.money}
                                   </div>
                               </div>
                           </div>
                           <div className="flex justify-between mt-2">
                               <div className={classNames(ListStateStyle[item.state],"font-semibold")}> {item.state}</div>
                               <div className="w-16 truncate">
                                   {item.address}
                               </div>
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

const AuctionBatch = () =>{

    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-5xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className=" mx-4 lg:mx-28">
                                <div className="text-center">
                                    <div className="text-xl md:text-3xl text-indigo-500 font-semibold">
                                        W3G NFT Auction
                                    </div>
                                    <div className=" text-white font-semibold">
                                        Wonderland and the Funny Fellows
                                    </div>
                                </div>
                                <div className="mt-7 ">
                                    <div className="px-4 md:px-8 lg:px-16 py-3 flex rounded-t-xl text-white text-xs md:text-sm justify-between bg-gradient-to-r from-purple-500 to-purple-800 ">
                                        <div className="mt-3 ">
                                            Closed
                                        </div>
                                        <div>
                                            <div className="text-center">
                                                --
                                            </div>
                                            <div className="text-gray-400">
                                                Days
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-center">
                                                --
                                            </div>
                                            <div className="text-gray-400">
                                                Hours
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-center">
                                                --
                                            </div>
                                            <div className="text-gray-400">
                                                Minutes
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-center">
                                                --
                                            </div>
                                            <div className="text-gray-400">
                                                 Seconds
                                            </div>
                                        </div>

                                    </div>
                                    <div className="px-4 md:px-8 lg:px-16 py-4 md:flex justify-between rounded-b-xl bg-gradient-to-r from-gray-500 to-gray-700">
                                        <div className="mb-3 md:mb-0 flex text-gray-100">
                                           <div className="text-xs mt-2">Auction Proceeds</div>
                                            <div className="flex">
                                                <img className="rounded-full mt-1 ml-4 mr-1 w-6" src="/img.png" alt=""/>
                                                <div className="text-red-400 mt-1">
                                                    0
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex text-gray-100">
                                            <div className="text-xs mt-2">Recommend Earnings</div>
                                            <div className="flex">
                                                <img className="rounded-full mt-1 ml-4 mr-1 w-6" src="/img.png" alt=""/>
                                                <div className="text-red-400 mt-1">
                                                    0
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <AuctionList/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default AuctionBatch
