import Header from "../../../components/header/index.";
import Tail from "../../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";


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
const AssetLeft =() =>{
    return(
        <>
            <div className="mt-20">
                <div className="mt-10  bg-gray-800 rounded-xl">
                    <div className="text-white px-6 p-4 font-semibold text-lg border-b border-gray-500">
                        About Collection
                    </div>
                    <div className="p-2 mt-5">
                        <img className="w-16 rounded-full mx-auto" src="https://mintverse.mypinata.cloud/ipfs/QmSrBBZ118HpXqyTdFdzWsMHKP7KuwrTsKC1sgU1W9zUTx" alt=""/>
                        <div className="px-4 text-center text-sm text-gray-400 mt-4">
                            A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles
                        </div>
                    </div>
                </div>
                    <div className="w-full mt-10  mx-auto  rounded-xl">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full bg-gray-800 px-4 py-3 text-sm font-medium text-left text-white rounded-lg ">
                                        <span>What is your refund policy?</span>
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
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300 rounded-b-xl bg-gray-800">
                                        If you`re unhappy with your purchase for any reason, email us
                                        within 90 days and we`ll refund you in full, no questions asked.
                                    </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    </div>
                <div className="mt-10  bg-gray-800 rounded-xl">
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
                                            0x8a90...b8992e
                                        </div>
                                    </a>
                                </Link>

                            </div>
                            <div className="flex py-3 justify-between">
                                <div className="font-semibold">
                                   Token ID
                                </div>
                                <div className="font-semibold">
                                   18
                                </div>
                            </div>
                            <div className="flex py-3 justify-between">
                                <div className="font-semibold">
                                    BlockChain
                                </div>
                                <div className="font-semibold">
                                    ETH
                                </div>
                            </div>
                            <div className="flex py-3 justify-between">
                                <div className="font-semibold">
                                    Metadata
                                </div>
                                <Link href="/#">
                                    <a>
                                <div className="text-red-400 font-semibold">
                                    http://...YB4aS/18
                                </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
const AssetRight =() =>{
    return(
        <>
        </>
    )
}
const Asset = () =>{

    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                            <AssetTop/>
                            <AssetLeft/>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Asset
