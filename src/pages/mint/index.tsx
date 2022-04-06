import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {Listbox, RadioGroup, Tab, Transition} from '@headlessui/react'
import {CheckCircleIcon, CheckIcon, SelectorIcon} from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const deliveryMethods = [
    { id: 1, title: 'Single', turnaround: 'Create an Unique NFT (ERC-721)', show:()=>{}},
    { id: 2, title: 'Multiple', turnaround: 'Create an Unique NFT (ERC-721)', show:()=>{}},
]

const Mint = () =>{
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])


    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div>
                                <div className="text-white text-3xl font-semibold">
                                    Create an NFT
                                </div>
                                <div className="text-white mt-10">
                                    Select the NFT Type:
                                </div>
                                <div className="mt-3 ">
                                    <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-4">
                                            {deliveryMethods.map((deliveryMethod) => (
                                                <RadioGroup.Option
                                                    key={deliveryMethod.id}
                                                    value={deliveryMethod}
                                                    className={({ checked, active }) =>
                                                        classNames(
                                                            checked ? 'border-transparent' : 'border-gray-300',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'relative bg-black bg-opacity-80 border border-gray-700 rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                                                        )
                                                    }
                                                    onClick={deliveryMethod.show}
                                                >
                                                    {({ checked, active }) => (
                                                        <>
                                                            <div className="flex-1 flex">
                                                                <div className="flex flex-col">
                                                                    <RadioGroup.Label as="span" className="block text-2xl font-medium text-gray-200">
                                                                        {deliveryMethod.title}
                                                                    </RadioGroup.Label>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className="mt-1 flex items-center text-sm text-gray-400"
                                                                    >
                                                                        {deliveryMethod.turnaround}
                                                                    </RadioGroup.Description>
                                                                </div>
                                                            </div>
                                                            {checked ? <CheckCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" /> : null}
                                                            <div
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                                    'absolute -inset-px rounded-lg pointer-events-none'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="text-white mt-10">
                                    Populate the Fields:
                                </div>
                                <div className="mt-3 ">

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

export default Mint
