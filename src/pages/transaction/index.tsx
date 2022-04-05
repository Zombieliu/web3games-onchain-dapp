import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Transaction = () =>{

    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-md relative px-5 py-16 lg:py-32 sm:px-6  mx-auto ">
                            <div className="bg-gray-900 p-3 rounded-2xl">
                                <div className="p-5 text-white text-2xl font-semibold">
                                    Transactions
                                </div>
                                <div className="mt-5 pt-16 p-5 border-t border-gray-500 mx-auto text-center">
                                    <img className="mx-auto" src="https://app.everpay.io/img/fantasmas.cd1cc378.svg" alt=""/>
                                    <div className="text-gray-200 mt-4">
                                        No data found
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

export default Transaction
