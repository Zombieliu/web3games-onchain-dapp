import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";
import {Dialog, Listbox, Menu, Popover, Tab, Transition} from '@headlessui/react'
import { CheckIcon, MenuIcon, SelectorIcon, XIcon } from '@heroicons/react/solid'
import Sort from "../../components/sort";
import Heads from "../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const sort = [
    {type:"Price:High to Low",},
    {type:"Price:Low to High",},
]
const ListItems= ()=>{
    const [selected, setSelected] = useState(sort[0])
    const status=[
        {
            type:"Buy now",
        },
        {
            type:"On Auction",
        },
        {
            type:"Has Offers",
        }
    ]
    const items = [
        {
            img:"https://lh3.googleusercontent.com/rQ8AzvGYbK4VunpaT1hR8NTCvwZrJhxEa2jxiBwqAwpY_oaHutF2pWA-lFc46hsKRGCzdHOAsI5mQyVIobp3FRYNr4G5mMKSZN50",
            name:"Decentraland",
            parcel:"0,0",
            sellPrice:"--",
            bestOffer:"--",
            lastPrice:"--",
        },
        {
            img:"https://lh3.googleusercontent.com/9GQ8nBrsJwekG7NVEFh-J2Qcb2Hn8HDiA5DYNYTtSU3sCEDFqcP2GoqABMrJDYfzFxXKCJKaE0EVVqrs0zdbfJUWgRAUK0GGIcM0Ow",
            name:"Decentraland",
            parcel:"0,1",
            sellPrice:"--",
            bestOffer:"--",
            lastPrice:"--",
        },
        {
            img:"https://lh3.googleusercontent.com/hcN6S0tEBENjO32_8MbKC1BjaQnWi9HLEfqb61YoDQg6nwUJ-SZ2oa6dSdcWihTbZPaT9BGsEivY-XfuWvNik4mQL3VuLZNKDgMaiqQ",
            name:"Decentraland",
            parcel:"0,2",
            sellPrice:"--",
            bestOffer:"--",
            lastPrice:"--",
        },
    ]

    return(
        <>
            <div className="hidden md:inline-block md:flex justify-end">
                <div className="text-xl ml-2  -mr-8 mt-1 text-gray-300">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div >
                    <input type="text"
                           className="pl-10 bg-black bg-opacity-10 text-white text-xs md:text-sm   rounded-lg px-2 py-2  lg:w-56  border border-gray-800    outline-none"
                           placeholder="Search by token ID "
                           id="Pools"
                    />
                </div>
            </div>
            <div className="md:flex justify-between mt-3">
                <div className="flex text-sm md:text-lg ">
                    <div className="hidden md:inline-block mt-1 mr-8 text-gray-300">
                        Status
                    </div>
                    <Tab.Group>
                        <Tab.List className="">
                            <div>
                                {status.map(item=>(
                                <Tab key={item.type} className={({ selected }) =>
                                    classNames(
                                        'px-3 py-1 mr-3 text-gray-50 font-medium border border-gray-600 rounded-full',
                                        selected
                                            ? 'bg-red-500'
                                            : ' hover:bg-white/[0.12] hover:text-white'
                                    )
                                }>
                                    {item.type}
                                </Tab>
                                ))}
                            </div>
                        </Tab.List>
                    </Tab.Group>
                </div>
                <div className="mt-4 md:mt-0 flex justify-end">
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>
                    <Listbox.Button className="relative  bg-gray-700 mt-0.5 ml-2 rounded-full shadow-sm pl-3 pr-8 py-2 text-left cursor-default  text-sm">
                        <div className="flex items-center">
                            <span className="ml-3 block truncate text-gray-200  ">{selected.type}</span>
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

                            <Listbox.Options className="absolute z-10 mt-1  bg-white shadow-lg max-h-60 rounded-md py-1  ring-1 ring-black ring-opacity-5 overflow-auto  text-sm">
                            {sort.map((network) => (
                                <Listbox.Option
                                    key={network.type}
                                    className={({ active }) =>
                                        classNames(
                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={network}

                                >
                                    {({ selected, active }) => (
                                        <>
                                            <div className="flex items-center">

                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                >
                            {network.type}
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
                            </> )}
                        </Listbox>



                </div>

            </div>
            <div className="my-12 px-4">
                <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
                    {items.map((item=>
                <Link href="/#" key={item.img}>
                    <a className="transition duration-300 transform hover:scale-105 ">
                    <div>
                        <img className="rounded-2xl" src={item.img} alt=""/>
                    </div>
                    <div className="mt-3 ">
                        <div className="text-white font-semibold text-sm w-48 truncate">
                            {item.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                            Parcel {item.parcel}
                        </div>
                    </div>
                    <div className="flex mt-4 text-white justify-between text-sm text-center">
                        <div>
                            <div className="text-gray-400">Sell Price</div>
                            <div>{item.sellPrice}</div>
                        </div>
                        <div>
                            <div className="text-gray-400">
                                Best Offer
                            </div>
                            <div>
                                {item.bestOffer}
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-400">Last Price</div>
                            <div>{item.lastPrice}</div>
                        </div>
                    </div>
                    </a>
                </Link>
                    ))}
                </div>
            </div>
            <Sort></Sort>
        </>
    )
}
const Activity= ()=>{
    const type=[
        {
            type:"Sales",
        },
        {
            type:"Listing",
        },
        {
            type:"Transfers",
        },
        {
            type:"Bids",
        }
    ]
    const table = [
        {
            title:"Type"
        },
        {
            title:"Item"
        },
        {
            title:"Price"
        },
        {
            title:"Quantity"
        },
        {
            title:"From"
        },
        {
            title:"To"
        },
        {
            title:"Time"
        },
    ]

    const tableDetail = [
        {
          id:"1",
          type:"Sales",
          img:"https://lh3.googleusercontent.com/z5jhEq12WFvUJyexDI2m4rgwNp6NN49Tfn0wOjSfjliaAmJmdN3ZuBfKPGa-22n_3pLKLLpWwP5_maGjFN7ieoRbKR2OEF6c612r2A",
          item:"Great high traffic corner location !!!",
          price:"3",
          quantity:"1",
          from:"0x68...dac9",
          to:"0xao...d347",
          time:"15 hours ago",
        },

    ]
    return(
        <>
            <div className="flex text-sm md:text-base md:mt-5">
                <div className="hidden md:inline-block  mt-1 mr-8 text-gray-300">
                    Event Type
                </div>
                <Tab.Group>
                    <Tab.List className="">
                        <div>
                            {type.map(item=>(
                                <Tab key={item.type} className={({ selected }) =>
                                    classNames(
                                        'px-3 py-1  mr-3 text-gray-50 font-medium border border-gray-600 rounded-full',
                                        selected
                                            ? 'bg-red-500'
                                            : ' hover:bg-white/[0.12] hover:text-white'
                                    )
                                }>
                                    {item.type}
                                </Tab>
                            ))}
                        </div>
                    </Tab.List>
                </Tab.Group>
            </div>

            <div className="shadow overflow-auto border-b my-10  border-gray-600 sm:rounded-lg">
                <table className="min-w-full border-t border-gray-600 divide-y  divide-gray-600">
                    <thead className="bg-gray-900 bg-opacity-60 ">
                    <tr>
                        {table.map(title => (
                            <th key={title.title}
                                scope="col"
                                className="px-6 py-3 text-left text-sm font-semibold text-gray-200  "
                            >
                                {title.title}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-600">
                    {tableDetail.map(item => (
                        <Link key={item.id} href="/">
                        <tr  className="hover:bg-gray-800">
                            <td className="px-6 py-6 whitespace-nowrap text-sm font-semibold text-white">
                                {item.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                                <div className="flex">
                                    <img className="w-7 rounded-full mr-1"
                                         src={item.img} alt=""/>
                                   <div className="w-48 truncate">{item.item}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                                <div className="flex  ">
                                    <img className="w-6 mr-1 rounded-full border border-gray-500" src="img.png" alt=""/>
                                   <div> {item.price} </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                                {item.quantity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                                {item.from}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                                {item.to}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                                {item.time}
                            </td>
                        </tr>
                        </Link>
                    ))}
                    </tbody>
                </table>
            </div>
            <Sort></Sort>

        </>
    )
}

const CollectionsList = () =>{
    let [List] = useState({
        Items: [],
        Activity: [],
    })
    return(
        <> <Tab.Group>
            <Tab.List className=" p-1 space-x-1 bg-blue-900/20 rounded-xl mx-auto mt-10  flex justify-between ">
                <div>
                    {Object.keys(List).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-24 py-2 text-sm leading-5 font-medium text-gray-600 ',
                                    selected
                                        ? ' text-yellow-50 border-b shadow'
                                        : ' hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </div>
            </Tab.List>
            <Tab.Panels className="mt-2 ">
                <Tab.Panel>
                    <ListItems/>
                </Tab.Panel>
                <Tab.Panel>
                    <Activity/>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
        </>
    )
}

const Collections = () =>{

    const message = {
        img:"https://storage.opensea.io/static/banners/dclwearables-banner.png",
        avatar:"https://logo.nftscan.com/logo/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d.png",
        name:"Decentraland",
        h1:"Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Join a growing community of virtual world inhabitants who are building the world's largest alternate reality economy on the blockchain. In this store, you can buy and sell land assets in MANA, DCL`s native currency.",
        items:"80.269K",
        owners:"4.434K",
        price:"--",
        traded:"60.534K",
        network:"",
        networkLogo:" text-gray-300 fa fa-chrome",
        telegram:"",
        telegramLogo:"text-blue-400 mr-4 fa fa-telegram",
        twitter:"",
        twitterLogo:"text-blue-400 mr-4  fa fa-twitter-square",

    }

    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="relative sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src={message.img}
                                alt="People working on laptops"
                            />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24  mx-auto max-w-7xl">
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="-mt-24">
                                <img className="w-16 border-2 rounded-full " src={message.avatar} alt=""/>
                            </div>
                            <div className="xl:flex mt-10">
                                <div className="xl:w-8/12">
                                    <div className="text-white text-4xl">
                                        {message.name}
                                        <i className="fa fa-check-circle-o ml-2 text-blue-400" aria-hidden="true"></i>
                                    </div>
                                    <div className="mt-5 text-gray-300 h-24 overflow-hidden">
                                        {message.h1}
                                    </div>
                                    <div className="flex text-2xl mt-5">
                                        <Link href={message.network}>
                                            <a className="text-gray-400 mr-4">
                                                <i className={message.networkLogo} aria-hidden="true"></i>
                                            </a>
                                        </Link>
                                        <Link href={message.telegram}>
                                            <a className="">
                                                <i className={message.telegramLogo} aria-hidden="true"></i>
                                            </a>
                                        </Link>
                                        <Link href={message.twitter}>
                                            <a className="">
                                                <i className={message.twitterLogo} aria-hidden="true"></i>
                                            </a>
                                        </Link>
                                    </div>

                                </div>
                                <div className="xl:w-4/12   rounded-xl border border-gray-400 mt-10 xl:mt-0 xl:ml-10 overflow-hidden">
                                    <div>
                                    <div className="flex">
                                        <div className="w-1/2 text-center  border-r border-b   border-gray-400 py-5">
                                            <div className="mb-2 text-gray-300 ">
                                                Items
                                            </div>
                                            <div className="text-white font-semibold text-2xl">
                                                {message.items}
                                            </div>
                                        </div>
                                        <div className="w-1/2 text-center border-b border-gray-300 py-5 ">
                                            <div className="mb-2 text-gray-300 ">
                                                Owners
                                            </div>
                                            <div className="text-white font-semibold text-2xl">
                                                {message.owners}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-1/2 text-center border-r border-gray-400  py-5">
                                            <div className="mb-2 text-gray-300 ">
                                                Avg Closed Price (24h)
                                            </div>
                                            <div className="text-white font-semibold text-2xl">
                                                {message.price}
                                            </div>
                                        </div>
                                        <div className="w-1/2 text-center py-5 ">
                                            <div className="mb-2 text-gray-300 ">
                                                Volume Traded
                                            </div>
                                            <div className="text-white font-semibold text-2xl flex justify-center">
                                                <img className="w-8 rounded-full border border-gray-500 mr-1" src="/img.png" alt=""/>  {message.traded}
                                            </div>
                                        </div>

                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CollectionsList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Collections
