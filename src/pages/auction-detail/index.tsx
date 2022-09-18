import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";
import Heads from "../../components/head";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ListStateStyle=
    {
        Closed:"text-red-400",
        Conduct:"text-green-500",
    }

 const DetailLife= ()=>{
        const detailLife={
            img:"https://app.everpay.io/img/spreader.f1e5a0ac.gif",
            state:"Closed",
            days:"--",
            hours:"--",
            minutes:"--",
            seconds:"--",
        }

    return(
        <>
            <div className="p-2 rounded-xl bg-gray-700 md:w-8/12">
                <img className="rounded-xl " src={detailLife.img} alt=""/>
                <div className="mt-5 text-sm mx-3">
                    <div className={classNames(ListStateStyle[detailLife.state],"text-white font-semibold")}>
                        Closed
                    </div>
                    <div className="flex justify-between text-white mt-3 py-2 ">
                        <div>
                            <div className="text-center">
                                {detailLife.days}
                            </div>
                            <div className="text-gray-400">
                                Days
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                {detailLife.hours}
                            </div>
                            <div className="text-gray-400">
                                Hours
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                {detailLife.minutes}
                            </div>
                            <div className="text-gray-400">
                                Minutes
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                {detailLife.seconds}
                            </div>
                            <div className="text-gray-400">
                                Seconds
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
    }

const DetailRight= ()=>{
    const detailRight = {
        name:"Miserable",
        frequency:"434",
        h1:"Miserable is from series Wonderland and the Funny Fellows. A very unfortunate funny fellow who is trying to run away from a disastrous fire.",
        current:"116.72",
        bidderAccount:"0x5F008811D7f0650511111238a1b38f3c04e39a60C8CA28d",
        address:"0x5F008811D7f0650511111238a1b38f3c04e39a60C8CA28d",
        bid:"",
    }
    return(
        <>
            <div className="mt-5 md:mt-0 md:ml-8 text-white w-11/12 ">
                <div className="flex">
                    <div className="text-2xl font-semibold mr-5"> {detailRight.name} </div>
                    <img className="w-6 rounded-full" src="https://app.everpay.io/img/hot.19a4785f.png" alt=""/>
                </div>
                <div className="flex text-sm w-40 p-1 px-1.5 mt-2 rounded-md bg-pink-500">
                    <div>Already did</div>
                    <div className="mx-1">
                        {detailRight.frequency}
                    </div>
                    <div>
                        times
                    </div>
                </div>
                <div className="mt-3 text-sm  text-gray-400 h-20 overflow-hidden mb-1">
                    {detailRight.h1}
                </div>
                <div className="text-sm ">
                    <div className="flex mb-5 ">
                        <div className="text-gray-300">
                            Current prices：
                        </div>
                        <div className="flex">
                            <img className="rounded-full w-6 border border-gray-600 mr-2" src="/img.png" alt=""/>
                            <div>
                                {detailRight.current}
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-5 ">
                        <div className="text-gray-300">
                            Highest bidder account:
                        </div>
                        <div className="truncate ml-1.5 w-28  ">
                            {detailRight.bidderAccount}
                        </div>
                    </div>
                    <div className="flex mb-2 ">
                        <div className="text-gray-300">
                            ETH Address：
                        </div>
                        <div className="w-44 md:w-72 ">
                            <input type="text"
                                   className=" bg-gray-700 bg-opacity-30 text-xs py-2 -mt-2 select-all   placeholder-gray-600 md:text-sm text-white  rounded-lg  px-4  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                   placeholder="Please input ethereum address"
                                   id="address"
                                   value={detailRight.address}
                            />
                        </div>
                    </div>
                    <div className="flex mb-5 ">
                        <div className="mr-16 mt-6 text-gray-300">
                            My bid:
                        </div>
                        <div className="text-right text-xs ">
                            <button className="text-blue-400 mr-3">
                                Click here to bid the minimum</button>
                            <div className="w-44 md:w-72 flex mt-1">
                                <img className="rounded-full z-10 border border-gray-600 w-6 h-6 -mr-9 mt-1 " src="/img.png" alt=""/>
                                <input type="text"
                                       className="pl-10 bg-gray-700 bg-opacity-30 text-xs py-2 select-all -mt-0.5  placeholder-gray-600 md:text-sm text-white  rounded-lg  px-4  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                       placeholder="Balance:0"
                                       id="bid"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="w-full flex flex-row items-center py-2  justify-center rounded-lg text-base focus:outline-none bg-indigo-500 text-white">
                        Auction ends
                    </button>
                </div>
                <div className="text-right text-xs mt-0.5">
                    <Link href="/assets">
                        <a className="text-blue-400">
                            Top up now
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

const Detail = () =>{

    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-5xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="md:flex justify-center mx-4 pb-12 lg:mx-28">
                                <DetailLife/>
                                <DetailRight/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Detail
