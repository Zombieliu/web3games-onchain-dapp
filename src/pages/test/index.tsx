import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {CheckIcon, XCircleIcon} from "@heroicons/react/solid";


export default function Example() {
    const [openAdd,setOpenAdd] = useState(false)
    const Show = () =>{
        setOpenAdd(true)
    }
    return (
        <>
        <div onClick={Show}>
            1
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
