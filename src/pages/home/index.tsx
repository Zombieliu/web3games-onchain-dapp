import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {Listbox, Tab, Transition } from '@headlessui/react'
import {CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Swap from "../swap";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Home = () =>{

    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                            <Swap/>
                           </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Home

