import React, { Fragment, useState } from 'react'
import {Dialog, Listbox, Menu, Popover, Tab, Transition} from '@headlessui/react'
import { CheckIcon, MenuIcon, SelectorIcon, XIcon } from '@heroicons/react/solid'
import Link from "next/link";
import SelectTokenTail from "../selecttokentail";
import SelectTokenTop from "../selecttokentop";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

 const  Trident = () => {

    const navigation = [
        {
         title: "DeFi",
         contents: [
             { name: 'Swap', href: '/home', },
             {  name: 'Pools ', href: '/pools',},
             { name: 'Create', href: '/create',}
         ]},
        {
            title: "NFT",
            contents: [
                { name: 'Marketplaces', href: '/marketplaces', },
                { name: 'Details', href: '/details', },
                { name: 'Rankings', href: '/ranking', },
                { name: 'Drops', href: '/home', },

            ]},
        {
            title: "Dao",
            contents: [
                { name: 'Democracy', href: '/', },
                { name: 'Council', href: '/', },
                { name: 'Treasury', href: '/', },
                { name: 'Bounties', href: '/', },
                { name: 'Technology', href: '/', },

            ]},
        {
            title: "Browser",
            contents: [
                { name: 'Explore', href: 'https://explorer-devnet.web3games.org/', },
                { name: 'Portal', href: 'https://portal.web3games.org/', },
            ]},

    ]


    return (
        <div className=" grid grid-cols-3  md:grid-cols-7 xl:grid-cols-12 ">
            {navigation.map(item=>(
         <Menu as="div" key={item.title} className="relative inline-block text-left font-semibold mr-5">
            <div>
                <Menu.Button className=" py-2.5 text-sm leading-5  rounded-lg text-base font-medium text-gray-100
                                  focus: ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-90 flex justify-center">
                    {item.title}      <div><i className="fa fa-angle-down ml-2" aria-hidden="true"></i></div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute  mt-1 -mr-10 z-20   border-2 border-gray-800 rounded-md shadow-lg bg-black  focus:outline-none">
                    <div className="py-1  text-gray-400">
                        {item.contents.map((contents)=>(
                        <Menu.Item key={contents.name}>
                            <Link href={contents.href}>
                                <a className=" hover:bg-gray-800 hover:text-white  block px-4 py-2 text-sm" >
                                    {contents.name}</a>
                            </Link>
                        </Menu.Item>
                            ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
            ))}
        </div>
    )
}

const Header = () =>{
    // { name: 'Company', href: '#',current:false },
    return (
        <div className=" bg-black">
            <header>
                <Popover className="relative bg-white  ">
                    <div className="flex  fixed z-20 inset-x-0 bg-black    transition duration-700 mb-10 pl-5  justify-between items-center  p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10  xl:px-32">

                        <div className=" flex w-full justify-between lg:justify-start">
                            <div className="flex justify-start items-center ">
                                <Link  href="/home">
                                    <a>
                                        <span className="sr-only">Workflow</span>
                                        <img
                                            className="w-auto h-10  "
                                            src="/logo.png"
                                            alt=""
                                        />
                                    </a></Link>
                            </div>
                            <Tab.Group as="nav" className="hidden  lg:flex  space-x-10 mt-1 pl-10">
                                <Trident/>
                            </Tab.Group>
                        </div>

                        <div className="-mr-2  my-0.5 lg:hidden">
                            <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>


                        <div className="hidden lg:flex w-full mt-1  md:flex-1 ">
                            <div >
                                <button  className="bg-blue-600 transition duration-700  w-36 px-4 py-2 text-white rounded-lg  flex justify-center">
                                    Connect Wallet
                                </button>
                            </div>
                            {/*<div className={WalletButtonShow ? "": "hidden"}>*/}
                            {/*    <div className="flex bg-gray-800 rounded-full p-1 justify-center">*/}
                            {/*        <div className="flex items-center mr-4 p-2">*/}
                            {/*            <img className="w-6 h-6 rounded-lg mx-1"*/}
                            {/*                 src='https://portal.web3games.org/_next/image?url=%2Fnetworks%2Fethereum-network.jpg&w=48&q=75' alt='' />*/}
                            {/*            <div className=" text-white w-16">*/}
                            {/*                Ethereum*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <button  onClick={accountConfig} className=" bg-gray-600 rounded-full truncate  w-40 px-4 py-2 text-white rounded-lg  flex  ">*/}
                            {/*            {AfterEVMAddress}*/}
                            {/*        </button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="fixed z-20 inset-x-0">
                        <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute my-auto  fixed z-20 inset-x-0  min-h-screen  inset-y-auto    transition transform origin-top-right lg:hidden"
                            >
                                <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-black    transition duration-700 divide-y-2 divide-gray-400">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-10 w-auto"
                                                    src='/logo.png'
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="py-6 px-8">
                                        <Trident/>
                                    </div>
                                    <div className="flex justify-center p-5 items-center">
                                        <div className=" w-full   ">
                                            <div className="flex justify-center ">
                                                <button  className="bg-gray-800 w-36 p-2 text-center text-white rounded-lg   ">
                                                    Connect Wallet
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>

                        </Transition>
                    </div>
                </Popover>
            </header>
           <SelectTokenTail/>
            <SelectTokenTop/>

        </div>
    )
}
export default Header
