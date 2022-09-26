import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {CheckIcon, XCircleIcon} from "@heroicons/react/solid";


export default function Example() {
    const [openAdd,setOpenAdd] = useState(false)
    const Show = () =>{

        // let new_result = [1,2]
        // const a = new_result.splice(0,1)
        // console.log(a)

        const arr = (12.0001.toFixed(6)).toString().split(".");
        const integer_length = arr[0].length

        console.log(integer_length)
        // const token_balance_real_number = (12.000001).toFixed(5-integer_length)
        // console.log(token_balance_real_number)

    }
    return (
        <>
        <div onClick={Show}>
            1
        </div>
            <div className="flex  justify-center">
                <div className="pr-4">
                    2
                </div>
                <div>3</div>
            </div>
            <Transition.Root show={openAdd} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenAdd}>
                    <div className="flex items-center justify-center min-h-screen    px-4  text-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                             </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root></>

    )
}
