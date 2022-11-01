import Header from "../../components/header/index.";
import Link from "next/link";
import Tail from "../../components/tail";
import React from "react";
import Sort from "../../components/sort";
import {router} from "next/client";
import Heads from "../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const tableTitle = [
    {
        name:" "
    },
    {
        name:"Collection"
    },
    {
        name:"Volume"
    },
    {
        name:"24h%"
    },
    {
        name:"7d%"
    },
    {
        name:"Floor Price"
    },
    {
        name:"Avg Closed Price"
    },
    {
        name:"Owners"
    },
    {
        name:"Items"
    },
]
const rankings = [
    {
        href:"/ranking",
        id:"1",
        img:"https://logo.nftscan.com/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
        name:"Azuki",
        volume:"24,580.67",
        daystate:"up",
        daydata: "111.36%",
        weekstate:"up",
        weekdata:"34.49%",
        floor:"21",
        avg:"30.573",
        owners:"5.5k",
        items:"10K",
    }
    ,{
        href:"/ranking",
        id:"2",
        img:"https://logo.nftscan.com/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
        name:"Azuki",
        volume:"24,580.67",
        daystate:"up",
        daydata: "111.36%",
        weekstate:"down",
        weekdata:"-34.49%",
        floor:"21",
        avg:"30.573",
        owners:"5.5k",
        items:"10K",
    },
    {
        href:"/ranking",
        id:"3",
        img:"https://logo.nftscan.com/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
        name:"Azuki",
        volume:"24,580.67",
        daystate:"down",
        daydata: "-111.36%",
        weekstate:"up",
        weekdata:"34.49%",
        floor:"21",
        avg:"30.573",
        owners:"5.5k",
        items:"10K",
    }
]
const rankStyle = {
    down:"text-red-400",
    up:"text-green-400",
}
const Ranking = () =>{

    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-16 bg-W3GTopBG">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="">
                        <div className="max-w-7xl  px-5 py-16  sm:px-6  mx-auto ">
                            <div className="text-white max-w-xl xl:max-w-2xl mx-auto">
                                <div className="flex justify-center text-gray-200  text-center text-2xl md:text-4xl xl:text-5xl font-semibold" >
                                    Collections
                                </div>
                                <div className="flex justify-center my-4 text-xs  md:text-sm text-center text-gray-300">
                                    Ranked by volume, avg closed price and other statistics.
                                </div>
                                <div className=" mx-auto w-24">
                                    <select className="relative  font-bold px-2 py-2.5 outline-none bg-gray-700 rounded-full flex-auto  overflow-ellipsis  focus:placeholder:text-low-emphesis flex-grow  text-left bg-transparent text-inherit disabled:cursor-not-allowed">
                                    <option value ="Never">All time </option>
                                    <option value ="1Hour">Last 24 hours</option>
                                    <option value="24Hours">Last 7 days</option>
                                    <option value="1Week">Last 30 days</option>
                                </select>
                                </div>
                            </div>
                            <div className=' mx-auto mt-10 rounded-lg mt-2'>
                                <div className='overflow-auto'>
                                    <table className="min-w-full divide-y divide-gray-200 mb-36">
                                        <thead className="overflow-auto">
                                        <tr>
                                            {tableTitle.map((item=>(
                                            <th key={item.name}
                                                scope="col"
                                                className="px-5   py-3 text-left  text-sm md:text-base  font-semibold text-gray-200 "
                                            >
                                                    {item.name}
                                            </th>
                                            )))}
                                        </tr>
                                        </thead>
                                        <tbody className=" divide-y divide-gray-200 ">
                                        {rankings.map(item=>(
                                            <Link  key={item.id} href="/collections">
                                            <tr className="hover:bg-gray-800 bg-opacity-80 cursor-pointer transition duration-300 " >
                                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-white">
                                                    {item.id}
                                                </td>
                                                <td className="px-6 py-4  whitespace-nowrap text-sm text-white">


                                                    <div className="flex">
                                                        <img className="w-10 rounded-full" src={item.img} alt=""/>
                                                        <div className="w-36 text-xl mt-1 mx-2 text-white">
                                                            {item.name}
                                                        </div>
                                                    </div>

                                                </td>
                                                <td className="px-6 py-4  whitespace-nowrap text-base text-white">
                                                    <div className="flex">
                                                        <img className="w-6 rounded-full border border-gray-700" src="/img.png" alt=""/>
                                                        <div className="ml-1">
                                                            {item.volume}
                                                        </div>
                                                    </div>

                                                </td>
                                                    <td className={classNames(rankStyle[item.daystate],"px-6 py-4 whitespace-nowrap text-base text-gray-500")}>
                                                        {item.daydata}
                                                    </td>

                                                    <td className={classNames(rankStyle[item.weekstate],"px-6 py-4 whitespace-nowrap text-base text-gray-500")}>
                                                        {item.weekdata}
                                                    </td>

                                                    <td className="px-6  py-4  whitespace-nowrap text-base text-white">
                                                        <div className="flex">
                                                            <img className="w-6 rounded-full border border-gray-700" src="/img.png" alt=""/>
                                                            <div className="ml-1 w-20">
                                                                {item.floor}
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4  whitespace-nowrap text-base text-white">
                                                        <div className="flex">
                                                            <img className="w-6 rounded-full border border-gray-700" src="/img.png" alt=""/>
                                                            <div className="ml-1 w-28">
                                                                {item.avg}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-base text-white">
                                                            {item.owners}
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-base text-white">
                                                        {item.items}
                                                    </td>
                                            </tr>

                                            </Link>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Sort/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Ranking
