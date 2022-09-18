import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {Listbox, Tab, Transition} from "@headlessui/react";
import Link from "next/link";
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";
import Heads from "../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const from = [
    {
        id: 1,
        name: 'Binance',
        avatar:
            'data:image/png;base64,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',
    },
    {
        id: 2,
        name: 'Ethereum ',
        avatar:
            'data:image/png;base64,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',
    },

]
const Send = () =>{
    const [selectedfrom, setSelectedfrom] = useState(from[0])
    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="text-white text-center text-3xl font-semibold">
                                Connect your wallets to get started.
                            </div>
                            <div className="flex  justify-center  mx-auto px-2 py-12 sm:px-0">
                                <div className="bg-black bg-opacity-90 p-5 rounded-2xl">
                                    <div className="flex border-b border-gray-500 pl-6 ">
                                        <Link href="/bridge">
                                            <a className="text-gray-400 font-semibold py-4 mr-8  hover:text-white">
                                                Bridge
                                            </a>
                                        </Link>
                                        <Link href="/send">
                                            <a className="text-white py-4 pb-2 border-b font-semibold hover:text-white  ">
                                                Send
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="p-2 md:p-5">
                                        <div className="text-white text-xl">
                                            Transfer from
                                        </div>
                                        <div className="flex mt-5 py-2 border border-gray-400 px-4 rounded-lg ">
                                            <Listbox value={selectedfrom} onChange={setSelectedfrom}>
                                                {({ open }) => (
                                                    <>
                                                        <div className="mt-1 relative">
                                                            <Listbox.Button className="relative w-full bg-gray-600 border border-gray-300 rounded-md shadow-sm pl-3 pr-12 md:pr-48 py-2 text-left cursor-default  sm:text-sm">
              <span className="flex items-center ">
                <img src={selectedfrom.avatar} alt="" className="flex-shrink-0 h-8 w-8 rounded-lg" />
                <span className="ml-3 block text-gray-200 truncate w-20">{selectedfrom.name}</span>
              </span>
                                                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-200" aria-hidden="true" />
              </span>
                                                            </Listbox.Button>

                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-gray-600 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                    {from.map((from) => (
                                                                        <Listbox.Option
                                                                            key={from.id}
                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    active ? 'text-white bg-gray-800' : 'text-gray-900',
                                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                                )
                                                                            }
                                                                            value={from}
                                                                        >
                                                                            {({ selected, active }) => (
                                                                                <>
                                                                                    <div className="flex items-center">
                                                                                        <img src={from.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                                                        <span
                                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                        >
                            {from.name}
                          </span>
                                                                                    </div>

                                                                                    {selected ? (
                                                                                        <span
                                                                                            className={classNames(
                                                                                                active ? 'text-white' : 'text-gray-800',
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
                                            <div className="border-r w-5 h-10 mt-2 border-gray-400"></div>
                                            <div className="pl-4 ">
                                                <button className="bg-blue-500 py-2 mt-2 rounded-xl text-white px-6  flex items-center">
                                                    Connect
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 md:p-5">
                                        <div className="text-white text-xl">
                                            Destination on W3G
                                        </div>
                                        <div className="mt-6">
                                        <input type="text"
                                               className=" bg-gray-700 bg-opacity-30 text-xs py-3 select-all -mt-0.5  placeholder-gray-600 md:text-sm text-white  rounded-lg  px-4  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                               placeholder="Destination address"
                                               id="bid"
                                        />
                                        </div>

                                    </div>

                                    <div className="mt-5 pl-5">
                                        <button className="px-8 flex flex-row items-center py-2  justify-center rounded-lg text-base focus:outline-none bg-indigo-500 text-white transition duration-300 transform hover:translate-x-2 ">
                                            Begin new transfer <i className="fa fa-arrow-right ml-2 " aria-hidden="true"></i>
                                        </button>
                                    </div>

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

export default Send
