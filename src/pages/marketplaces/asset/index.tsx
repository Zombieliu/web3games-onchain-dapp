import Header from "../../../components/header/index.";
import Tail from "../../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Sort from "../../../components/sort";
import Heads from "../../../components/head";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AssetTop = () =>{
    const info =
        {
            img:"https://mintverse.mypinata.cloud/ipfs/QmTXbvTKJjVuzbE36gsDboaASNnoSWpRsM71TnbLJiZX9R",
            name:"Doodles",
            nameHref:"/#",
            title:"Doodles #18",
            avatar:"https://mintverse.mypinata.cloud/ipfs/QmSrBBZ118HpXqyTdFdzWsMHKP7KuwrTsKC1sgU1W9zUTx",
            creator:"0xc2...b812",
            onwner:"0xc2...b812",
            type:"  Collectible",
            h1:"A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury. Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist.",
        }

    return(
        <>
            <div>
                <div className="xl:flex">
                    <img  className="w-9/12 md:w-4/12 mx-auto xl:w-1/3 rounded-xl"  src={info.img}alt=""/>
                    <div className="xl:ml-10 xl:w-2/3 mt-10 xl:mt-0">
                        <Link href="/">
                            <a className="text-white  md:text-xl flex mb-4">
                            <div>{info.name}</div>
                             <div className="ml-2"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                            </a></Link>
                        <div className="text-2xl md:text-4xl text-white font-semibold">
                            {info.title}
                        </div>
                        <div className="flex mt-4 justify-between md:w-3/5">
                            <div className="flex ">
                                <img className="w-8 h-8 rounded-full mt-1" src={info.avatar} alt=""/>
                                <div className="ml-2">
                                    <div className="text-gray-400 text-sm">
                                        Creator
                                    </div>
                                    <div className="text-white text-sm">
                                        {info.creator}
                                    </div>
                                </div>
                            </div>
                                <div className="">
                                    <div className="text-gray-400 text-sm">
                                        Owner
                                    </div>
                                    <div className="text-white text-sm">
                                        {info.onwner}
                                    </div>
                                </div>
                            <div className="">
                                <div className="text-gray-400 text-sm">
                                    Type
                                </div>
                                <div className="text-white text-sm">
                                    {info.type}
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-300 font-light my-10">
                            {info.h1}
                        </div>
                        <div className="flex justify-center xl:justify-start">
                            <button className="px-32 py-2 xl:px-48 bg-indigo-700 text-gray-200 rounded-full transform hover:text-white hover:scale-105 transition duration-500 cursor-pointer">
                                Make Offer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const AssetLeftAbout =() =>{
    const info =
        {
            img:"https://mintverse.mypinata.cloud/ipfs/QmSrBBZ118HpXqyTdFdzWsMHKP7KuwrTsKC1sgU1W9zUTx",
            h1:" A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles",
        }

    return(
        <>
                <div className="mt-10  bg-neutral-800 rounded-xl">
                    <div className="text-white px-6 p-4 font-semibold text-lg border-b border-gray-500">
                        About Collection
                    </div>
                    <div className="p-2 mt-5">
                        <img className="w-16 rounded-full mx-auto" src={info.img} alt=""/>
                        <div className="px-4 text-center text-sm text-gray-400 mt-4">
                            {info.h1}
                        </div>
                    </div>
                </div>


        </>
    )
}
const AssetLeftProperties = ()=>{
    const info = [
        {
        part:'Earring',
        style:"M1 Gold Hoop",
        own:"3.4443%",
    },
        {
            part:'Mouth',
            style:"M1 Jovial",
            own:"2.1668%",
        },
        {
            part:'Hat',
            style:"M1 Fisherman`s Hat",
            own:"2.6566%",
        },
    ]
    return(
        <>
            <div className="w-full mt-10  mx-auto  rounded-xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full bg-neutral-800 px-4 py-3 text-sm font-medium text-left text-white rounded-lg ">
                                <span className="text-xl">Properties</span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? '' : 'transform rotate-180'
                                    } w-5 h-5 text-gray-300`}
                                />
                            </Disclosure.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-300"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-300"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300 rounded-b-xl bg-neutral-800">
                                    <div className="grid grid-cols-2 gap-3 ">
                                        {info.map((item=>(
                                        <div key={item.part} className="text-center p-2 bg-indigo-700 rounded-xl ">
                                            <div className="text-red-300 text-sm">
                                                {item.part}
                                            </div>
                                            <div className="text-white  font-semibold">
                                                {item.style}
                                            </div>
                                            <div className="flex text-gray-400 text-xs justify-center">
                                               <div>{item.own} </div> <div className="ml-0.5 ">have this trait</div>
                                            </div>
                                        </div>
                                        )))}
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
const AssetLeftDetail = () =>{
    const info = {
        address:"  0x8a90...b8992e",
        token:"18",
        blockchain:"W3G",
        meta:" http://...YB4aS/18",
    }

    return(
        <>
            <div className="mt-10 bg-neutral-800 rounded-xl">
                <div className="text-white px-6 p-4 font-semibold text-lg border-b border-gray-500">
                    Detail
                </div>
                <div className="p-2 ">
                    <div className="px-4 text-center text-sm text-gray-400 ">
                        <div className="flex py-3 justify-between">
                            <div className="font-semibold">
                                Contract Address
                            </div>
                            <Link href="/#">
                                <a>
                                    <div className="text-red-400 font-semibold">
                                        {info.address}
                                    </div>
                                </a>
                            </Link>

                        </div>
                        <div className="flex py-3 justify-between">
                            <div className="font-semibold">
                                Token ID
                            </div>
                            <div className="font-semibold">
                                {info.token}
                            </div>
                        </div>
                        <div className="flex py-3 justify-between">
                            <div className="font-semibold">
                                BlockChain
                            </div>
                            <div className="font-semibold">
                                {info.blockchain}
                            </div>
                        </div>
                        <div className="flex py-3 justify-between">
                            <div className="font-semibold">
                                Metadata
                            </div>
                            <Link href="/#">
                                <a>
                                    <div className="text-red-400 font-semibold">
                                        {info.meta}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const AssetRightList =() =>{
    const listTitle = [

        {
            name:"Price"
        },
        {
            name:"USD Price"
        },
        {
            name:"Expiration"
        },
        {
            name:"From"
        },
        {
            name:""
        },

    ]
    const listInfo = [
      {
            id:"1",
            price:"17 W3G",
            usd:"$59,422.65",
            expiration:"in 8 days",
            from:"0x5a...b102",
        }
    ]

    return(
        <>
            <div className="w-full mt-10  mx-auto  rounded-xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full bg-neutral-800 px-4 py-3 text-sm font-medium text-left text-white rounded-lg ">
                             <div className="flex text-xl">
                                 <i className="fa fa-tag mt-1 mr-2" aria-hidden="true"></i>
                                 <span>Listings</span></div>
                                <ChevronUpIcon
                                    className={`${
                                        open ? '' : 'transform rotate-180'
                                    } w-5 h-5 mt-1 text-gray-300`}
                                />
                            </Disclosure.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-300"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-300"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300 rounded-b-xl bg-neutral-800">
                                    <div className=' mx-auto  rounded-lg '>
                                        <div className='overflow-auto'>
                                            <table className="min-w-full divide-y divide-neutral-700 mb-4">
                                                <thead className="overflow-auto">
                                                <tr>
                                                    {listTitle.map((item=>(
                                                        <th key={item.name}
                                                            scope="col"
                                                            className={listInfo.length?"px-6  py-2 text-left  text-sm  md:font-semibold text-gray-300":"px-2 py-2 text-left  text-sm  md:font-semibold text-gray-300"}
                                                        >
                                                            {item.name}
                                                        </th>
                                                    )))}
                                                </tr>
                                                </thead>
                                                <tbody className={listInfo.length?"divide-y divide-gray-200":"hidden"}>
                                                {listInfo.map(item=>(
                                                    <tr key={item.id} className="hover:bg-neutral-600 bg-opacity-80 bg-neutral-700 cursor-pointer transition duration-300 " >
                                                        <td className="px-6 py-4  whitespace-nowrap text-sm text-white">
                                                            {item.price}
                                                        </td>
                                                        <td className="px-6 py-4   whitespace-nowrap text-sm text-white">
                                                            {item.usd}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                            {item.expiration}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white hover:text-red-400 transition duration-300">
                                                            <Link href="/#">
                                                            {item.from}
                                                            </Link>
                                                        </td>
                                                        <td className="px-6  py-4  whitespace-nowrap text-base text-white">
                                                            <button className="flex bg-red-600 px-8 py-1 rounded-full hover:bg-red-500 transition duration-300">
                                                                Buy
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <div className={listInfo.length?"hidden":"flex justify-center "}>
                                                <div className=" pt-4 text-3xl text-center text-gray-400">
                                                    <i className="fa fa-archive " aria-hidden="true"></i>
                                                    <div className="text-xl">
                                                        No Data
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
const AssetRightOffers = () =>{
    const offersTitle = [
        {
            name:"Price"
        },

        {
            name:"USD Price"
        },
        {
            name:"Expiration"
        },
        {
            name:"From"
        },

    ]
    const offersInfo = [
        {
            id:"1",
            price:"17 W3G",
            usd:"$86,527.25",
            expiration:"in 0 days",
            from:"0x5a...b102",
        }
    ]

    return(
        <>
            <div className="w-full mt-10  mx-auto  rounded-xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full bg-neutral-800 px-4 py-3 text-sm font-medium text-left text-white rounded-lg ">
                                <div className="flex text-xl">
                                    <i className="fa fa-list mt-1 mr-2 " aria-hidden="true"></i>
                                    <span>Offers</span></div>
                                <ChevronUpIcon
                                    className={`${
                                        open ? '' : 'transform rotate-180'
                                    } w-5 h-5 mt-1 text-gray-300`}
                                />
                            </Disclosure.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-300"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-300"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300 rounded-b-xl bg-neutral-800">
                                    <div className=' mx-auto  rounded-lg '>
                                        <div className='overflow-auto'>
                                            <table className="min-w-full divide-y divide-neutral-800 mb-4">
                                                <thead className="overflow-auto">
                                                <tr>
                                                    {offersTitle.map((item=>(
                                                        <th key={item.name}
                                                            scope="col"
                                                            className={offersInfo.length?"px-6  py-2 text-left  text-sm  md:font-semibold text-gray-300":"px-2 py-2 text-left  text-sm  md:font-semibold text-gray-300"}
                                                        >
                                                            {item.name}
                                                        </th>
                                                    )))}
                                                </tr>
                                                </thead>
                                                <tbody className={offersInfo.length?"divide-y divide-gray-200":"hidden"}>
                                                {offersInfo.map(item=>(
                                                    <tr key={item.id} className="hover:bg-neutral-600 bg-opacity-80 bg-neutral-700 cursor-pointer transition duration-300 " >
                                                        <td className="px-6 py-4  whitespace-nowrap text-sm text-white">
                                                            {item.price}
                                                        </td>
                                                        <td className="px-6 py-4   whitespace-nowrap text-sm text-white">
                                                            {item.usd}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                            {item.expiration}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white hover:text-red-400 transition duration-300">
                                                            <Link href="/#">
                                                                <a className="hover:text-red-500 transition duration-300">
                                                                    {item.from}
                                                                </a>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <div className={offersInfo.length?"hidden":"flex justify-center "}>
                                                <div className=" pt-4 text-3xl text-center text-gray-400">
                                                    <i className="fa fa-archive " aria-hidden="true"></i>
                                                    <div className="text-xl">
                                                        No Data
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
const AssetRightHistory = () =>{
    const historyTitle = [
        {
            name:"Event"
        },
        {
            name:"Price"
        },

        {
            name:"From"
        },
        {
            name:"To"
        },
        {
            name:"Data"
        },

    ]
    const historyInfo = [
        {
            id:"1",
            event:"Sale",
            price:"17 W3G",
            from:"0x48...d642",
            to:"0x5a...b102",
            date:"2022-02-05 06:02:00",
        }
    ]
    return(
        <>
            <div className="w-full mt-10  mx-auto  rounded-xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full bg-neutral-800 px-4 py-3 text-sm font-medium text-left text-white rounded-lg ">
                                <div className="flex text-xl">
                                    <i className="fa fa-file-text mt-1 mr-2 " aria-hidden="true"></i>
                                    <span>Trading History</span></div>
                                <ChevronUpIcon
                                    className={`${
                                        open ? '' : 'transform rotate-180'
                                    } w-5 h-5 mt-1 text-gray-300`}
                                />
                            </Disclosure.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-300"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-300"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300 rounded-b-xl bg-neutral-800">
                                    <div className=' mx-auto  rounded-lg '>
                                        <div className='overflow-auto'>
                                            <table className="min-w-full divide-y divide-neutral-800 mb-4">
                                                <thead className="overflow-auto">
                                                <tr>
                                                    {historyTitle.map((item=>(
                                                        <th key={item.name}
                                                            scope="col"
                                                            className={historyInfo.length?"px-6  py-2 text-left  text-sm  md:font-semibold text-gray-300":"px-2 py-2 text-left  text-sm  md:font-semibold text-gray-300"}
                                                        >
                                                            {item.name}
                                                        </th>
                                                    )))}
                                                </tr>
                                                </thead>
                                                <tbody className={historyInfo.length?"divide-y divide-gray-200":"hidden"}>
                                                {historyInfo.map(item=>(
                                                    <tr key={item.id} className="hover:bg-neutral-600 bg-opacity-80 bg-neutral-700 cursor-pointer transition duration-300 " >
                                                        <td className="px-6 py-4  whitespace-nowrap text-sm text-white">
                                                            {item.event}
                                                        </td>
                                                        <td className="px-6 py-4   whitespace-nowrap text-sm text-white">
                                                            <div className="flex">
                                                                <img className="w-6 rounded-full border border-gray-600" src="/img.png" alt=""/>
                                                                <div className="ml-1 mt-0.5">
                                                                    {item.price}
                                                                </div>
                                                            </div>

                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                            <Link href="/#">
                                                                <a className="hover:text-red-500 transition duration-300">
                                                                    {item.from}
                                                                </a>
                                                            </Link>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white hover:text-red-400 transition duration-300">
                                                            <Link href="/#">
                                                                <a className="hover:text-red-500 transition duration-300">
                                                                    {item.to}
                                                                </a>
                                                            </Link>
                                                        </td>
                                                        <td className="px-6  py-4  whitespace-nowrap text-base text-red-500">
                                                            {item.date}
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <div className={historyInfo.length?"hidden":"flex justify-center "}>
                                                <div className=" pt-4 text-3xl text-center text-gray-400">
                                                    <i className="fa fa-archive " aria-hidden="true"></i>
                                                    <div className="text-xl">
                                                        No Data
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}

const Asset = () =>{

    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-neutral-900 bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                            <AssetTop/>
                            <div className="mt-20 lg:flex justify-between">
                                <div className="lg:w-3/6">
                                <AssetLeftAbout/>
                                    <AssetLeftProperties/>
                                    <AssetLeftDetail/>
                                </div>
                                <div className="lg:pl-10 w-full">
                                    <div className="mb-10">
                                        <AssetRightList/>
                                    </div>
                                    <div className="mb-10">
                                        <AssetRightOffers/>
                                    </div>
                                    <AssetRightHistory/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Asset
