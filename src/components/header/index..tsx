import React, { Fragment, useEffect, useState } from 'react'
import {Dialog, Listbox, Menu, Popover, Tab, Transition} from '@headlessui/react'
import { CheckIcon, MenuIcon, SelectorIcon, XIcon } from '@heroicons/react/solid'
import Link from "next/link";
import SelectTokenTail from "../selecttokentail";
import SelectTokenTop from "../selecttokentop";
import {
    AccountChooseValue,
    AfterEvmAddressValue,
    WalletButtonShowState,
    WalletListShowState,
    AccountConfigPageState,
    SetSubstrateShowState, AfterSubstrateAddressValue, WalletAddress
} from '../../jotai';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import Login from '../login';
import Account from "../account";




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

 const  Trident = () => {
    const navigation = [
        {
            title: "Wallet",
            contents: [
                { name: 'Assets', href: '/assets', },
                { name: 'Transfer', href: '/transfer',},
                { name: 'Transaction', href: '/transaction',},
            ]
        },
        {
         title: "DeFi",
         contents: [
             { name: 'Swap', href: '/home', },
             { name: 'Pools ', href: '/pools',},
             { name: 'Create', href: '/create',},
             { name: 'Bridge', href: '/bridge',},
             { name: 'Staking', href: '/staking',},
             { name: 'Mint', href: '/mint',}
         ]
        },
        {
            title: "NFT",
            contents: [
                { name: 'Marketplaces', href: '/marketplaces', },
                { name: 'Details', href: '/details', },
                { name: 'Rankings', href: '/ranking', },
                { name: 'Auction', href: '/auction', },
                { name: 'Drops', href: '/drops', },
                { name: 'Mint', href: '/mint', },

            ]
        },
        // {
        //     title: "Dao",
        //     contents: [
        //         { name: 'Democracy', href: '/home', },
        //         { name: 'Council', href: '/home', },
        //         { name: 'Treasury', href: '/home', },
        //         { name: 'Bounties', href: '/home', },
        //         { name: 'Technology', href: '/home', },
        //
        //     ]
        // },
        {
            title: "Browser",
            contents: [
                { name: 'Explore', href: 'https://explorer-devnet.web3games.org/', },
                { name: 'Portal', href: 'https://portal.web3games.org/', },
                { name: 'Docs', href: 'https://docs.web3games.org/', },
            ]
        },

    ]


    return (
        <div className=" grid grid-cols-3  md:grid-cols-7  ">
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

const SwitchNetWork = () =>{
    const people = [
        { id: 1, name: 'Mainnet', online: "bg-green-400" },
        { id: 2, name: 'Testnet', online: "bg-yellow-400" },
    ]
    const [selected, setSelected] = useState(people[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="py-1 relative">
                        <Listbox.Button className="relative w-full bg-gray-700 mt-0.5 ml-2 rounded-full shadow-sm pl-3 pr-8 py-2 text-left cursor-default  sm:text-sm">
                            <div className="flex items-center">
                <span
                    className={classNames(
                        selected.online,
                        'flex-shrink-0 inline-block h-2 w-2 rounded-full'
                    )}
                />
                                <span className="ml-3 block truncate text-gray-200 w-14 ">{selected.name}</span>
                            </div>
                            <span className="absolute inset-y-0 right-2 flex items-center text-gray-200 pr-2 pointer-events-none">
                       <i className="fa fa-chevron-down" aria-hidden="true"></i>
                     </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {people.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                          <span
                              className={classNames(
                                  person.online,
                                  'flex-shrink-0 inline-block h-2 w-2 rounded-full'
                              )}
                              aria-hidden="true"
                          />
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                            {person.name}
                                                        <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                          </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}

const Header = () =>{
    const router = useRouter()
    const [WalletButtonShow,SetWalletButtonShow]=useAtom(WalletButtonShowState)
    const [substrateShow,SetSubstrateShow] =useAtom(SetSubstrateShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [,SetAccountConfig] = useAtom(AccountConfigPageState)
    const [AfterEVMAddress,] = useAtom(AfterEvmAddressValue)
    const [AfterSubstrateAddress,SetAfterSubstrateAddress] =useAtom(AfterSubstrateAddressValue)
    const [AccountChoose,] = useAtom(AccountChooseValue)
    const [walletAddress,] =useAtom(WalletAddress)
    useEffect(()=>{
        if (AccountChoose === 1 ){
            SetWalletButtonShow(true)
        }
        if(AccountChoose === 2){
            SetSubstrateShow(true)
        }
    },[router.isReady])


    const WalletLogin = () =>{
        SetOpenWalletListState(true)
    }

    const accountConfig = () =>{
        SetAccountConfig(true)
    }


    return (
        <div className=" bg-black">
            <header>
                <Login/>
                <Account/>
                <Popover className="relative bg-white  ">
                    <div className="flex  fixed z-20 inset-x-0 bg-black    transition duration-700 mb-10 pl-5  justify-between items-center  p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10  xl:pl-32 xl:pr-24">

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



                        <div className="hidden lg:flex w-full  md:flex-1 ">
                            <div className={WalletButtonShow || substrateShow ? "hidden": "mt-1"}>
                                <button  onClick={WalletLogin} className="bg-blue-600 transition duration-700  w-36 px-4 py-2 text-white rounded-lg  flex justify-center">
                                    Connect Wallet
                                </button>
                            </div>
                            <div className={WalletButtonShow ? "": "hidden"}>
                                <div className="flex bg-gray-800 rounded-full p-1 justify-center">
                                    <div className="flex items-center mr-4 p-2">
                                        <img className="w-6 h-6 rounded-lg mx-1"
                                             src='https://portal.web3games.org/_next/image?url=%2Fnetworks%2Fethereum-network.jpg&w=48&q=75' alt='' />
                                        <div className=" text-white w-16">
                                            Ethereum
                                        </div>
                                    </div>
                                    <button  onClick={accountConfig} className=" bg-gray-600 rounded-full truncate  w-40 px-4 py-2 text-white rounded-lg  flex  ">
                                        {walletAddress}
                                    </button>
                                </div>
                            </div>
                            <div className={substrateShow ? "": "hidden"}>
                                <div className="flex bg-gray-800 rounded-full p-1 justify-center">
                                    <div className="flex items-center mr-4 p-2">
                                        <img className="w-6 h-6 rounded-lg mx-1"
                                             src='/substrate.svg' alt='' />
                                        <div className=" text-white w-16">
                                            Substrate
                                        </div>
                                    </div>
                                    <button  onClick={accountConfig} className=" bg-gray-600 rounded-full truncate  w-40 px-4 py-2 text-white rounded-lg  flex  ">
                                        {walletAddress}
                                    </button>
                                </div>
                            </div>
                            <SwitchNetWork/>
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


