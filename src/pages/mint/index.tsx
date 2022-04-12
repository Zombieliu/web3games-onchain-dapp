import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {Listbox, RadioGroup, Tab, Transition} from '@headlessui/react'
import {CheckCircleIcon, CheckIcon, SelectorIcon} from "@heroicons/react/solid";
import {useAtom} from "jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const deliveryMethods = [
    { id: 1, title: 'Single', turnaround: 'Create an Unique NFT (Non-Fungible-)', show:()=>{}},
    { id: 2, title: 'Multiple', turnaround: 'Create an Unique NFT (Multi Token)', show:()=>{}},
]

const Mint = () =>{

    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
    const [ chooseImg,setChooseImg] = useState(true)
    const [imgUrl,setImgUrl] = useState("")
    const inputImg = () =>{
        let fileInput =  (document.getElementById('file') as HTMLInputElement).files[0]
        const reader = new FileReader()
        reader.readAsDataURL(fileInput)
        reader.onload = function (e) {
            console.log(e);
            console.log(e.target.result);
            setImgUrl(  `${e.target.result}`)
            setChooseImg(false)
            // pic.src = this.result;
        }
            // const data = window.URL.createObjectURL(fileInput);
        // console.log(data)
        // setImgUrl(data)
        // setChooseImg(false)
        // if(imgUrl){
        //     setChooseImg(false)
        // }
    }

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
                                <div className="mt-3 md:flex">
                                    <div className="md:mr-4">
                                        <div className="text-gray-400 text-sm">
                                            1. Select Your Files
                                        </div>

                                        <div>
                                            <form action="" encType="multipart/form-data">
                                            <div className="md:w-72 h-64 mt-2 rounded-xl text-center text-gray-200 border-gray-500 border border-dashed ">
                                                <img className={chooseImg?"hidden":"md:w-72 h-64 rounded-xl"}
                                                     src={imgUrl} alt=""/>
                                                <div className={chooseImg?"":"hidden"}>
                                                <div className="text-xs mt-24">
                                                    Supports JPG, PNG, GIF (Maximum 40MB)
                                                </div>
                                                <div className="flex justify-center   mt-5">
                                                    <button className="absolute bg-gray-500 rounded-lg px-8 py-1">
                                                    Select Your Files
                                                    </button>
                                                </div>
                                                <input onChange={inputImg} type="file" id="file" className="opacity-0"  accept="image/*"/>
                                            </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 mt-5 md:mt-0">
                                        <div>
                                            <div className="text-gray-400 text-sm">
                                                2. NFT Name
                                            </div>
                                            <div>
                                                <input type="text"
                                                       className=" bg-gray-700 bg-opacity-30 text-xs mt-2  placeholder-gray-600 md:text-sm text-white  rounded-xl  p-4  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                                       placeholder="Please enter the name"
                                                       id=""
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-gray-400 text-sm">
                                                3. Vault Name
                                            </div>
                                            <div>
                                                <input type="text"
                                                       className=" bg-gray-700 bg-opacity-30 text-xs mt-2  placeholder-white md:text-sm text-white  rounded-xl  p-4  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                                       placeholder="W3G"
                                                       readOnly={true}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-gray-400 text-sm">
                                                4. Quantity (Optional)
                                            </div>
                                            <div>
                                                <input type="text"
                                                       className=" bg-gray-700 bg-opacity-30 text-xs mt-2  placeholder-gray-600 md:text-sm text-white  rounded-xl  p-4  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                                       placeholder="Please enter the quantity"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-10 ">
                                    <button className="px-16 py-3 bg-indigo-500 text-gray-200 rounded-xl ">
                                        Confirm the Creation
                                    </button>
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


