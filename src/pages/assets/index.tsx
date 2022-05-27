import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import {Dialog, Transition} from "@headlessui/react";
import {useAtom} from "jotai";
import {
    AssetsOpenPopup,
    EVMAddressValue,
    AccountChooseValue,
    WalletAddress,
    IntactWalletAddress,
    WalletListShowState
} from "../../jotai";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AssetsTop = () =>{
    const router = useRouter()
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [copyStyle,SetCopyStyle] = useState(false)
    const [AccountChooseValueType,] = useAtom(AccountChooseValue)
    const [walletAddress,] = useAtom(WalletAddress)
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
    const Copy = (span) => {
        const spanText = document.getElementById(span).innerText;
        const oInput = document.createElement('input');
        oInput.value = spanText;
        document.body.appendChild(oInput);
        oInput.select();
        document.execCommand('Copy');
        oInput.className = 'oInput';
        oInput.style.display = 'none';
        document.body.removeChild(oInput);
        SetCopyStyle(true)
        setTimeout( function (){
            SetCopyStyle(false)},2000)
    }
    if (AccountChooseValueType === 1){
        return(
          <>
              <div>
                  <div className="flex">
                      <img className="w-16 rounded-full border border-gray-600" src="/img.png" alt=""/>
                      <div className="ml-4 flex-col justify-between">
                          {/**/}
                          <Link href={`https://explorer-devnet.web3games.org/address/${intactWalletAddress}`}>
                              <a className="text-gray-300 text-2xl flex hover:text-indigo-400 transition duration-150">
                                  {walletAddress}
                                  <div className="ml-1 text-xl">
                                      <i className="fa fa-link transform rotate-90" aria-hidden="true"></i></div>
                              </a>
                          </Link>
                          <div>
                              <button onClick={() => {Copy('address') }} className="text-gray-400 font-light flex transition duration-300">
                                  <div className="hidden" id="address">
                                      {intactWalletAddress}
                                  </div>
                                  <div  id="address">
                                      {walletAddress}
                                  </div>
                                  <i className={copyStyle?"":"fa fa-clone mt-1 ml-2"} aria-hidden="true"></i>
                                  <i className={copyStyle?"fa fa-check  mt-1 ml-2 text-green-400":"hidden"} aria-hidden="true"></i>
                              </button>
                          </div>
                      </div>
                  </div>
                  <div className="lg:flex justify-between text-gray-400 mt-5">
                      <div>
                          <div className="text-sm"> Net Worth </div>
                          <div className="text-2xl text-gray-100">
                              $0.00
                          </div>
                      </div>
                      <div className="mt-5 lg:mt-0 flex ">
                          <div className="mr-10">
                              <div className="text-sm"> Available </div>
                              <div className="text-gray-200 text-xl font-light">
                                  $0.00
                              </div>
                          </div>
                          <div className="mr-10">
                              <div className="text-sm"> Temporarily Unavailable </div>
                              <div className="text-gray-200 text-xl font-light">
                                  $0.00
                              </div>
                          </div>
                          <div>
                              <div  className="text-sm"> Assets </div>
                              <div  className="text-gray-200 text-xl font-light">
                                  1
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </>
        )
    }else if (AccountChooseValueType === 2){
        return(
          <>
              <div>
                  <div className="flex">
                      <img className="w-16 rounded-full border border-gray-600" src="/img.png" alt=""/>
                      <div className="ml-4 flex-col justify-between">
                          {/**/}
                          <Link href={`https://explorer-devnet.web3games.org/account/${intactWalletAddress}`}>
                              <a className="text-gray-300 text-2xl flex hover:text-indigo-400 transition duration-150">
                                  {walletAddress}
                                  <div className="ml-1 text-xl">
                                      <i className="fa fa-link transform rotate-90" aria-hidden="true"></i></div>
                              </a>
                          </Link>
                          <div>
                              <button onClick={() => {Copy('address') }} className="text-gray-400 font-light flex transition duration-300">
                                  <div className="hidden" id="address">
                                      {intactWalletAddress}
                                  </div>
                                  <div  id="address">
                                      {walletAddress}
                                  </div>
                                  <i className={copyStyle?"":"fa fa-clone mt-1 ml-2"} aria-hidden="true"></i>
                                  <i className={copyStyle?"fa fa-check  mt-1 ml-2 text-green-400":"hidden"} aria-hidden="true"></i>
                              </button>
                          </div>
                      </div>
                  </div>
                  <div className="lg:flex justify-between text-gray-400 mt-5">
                      <div>
                          <div className="text-sm"> Net Worth </div>
                          <div className="text-2xl text-gray-100">
                              $0.00
                          </div>
                      </div>
                      <div className="mt-5 lg:mt-0 flex ">
                          <div className="mr-10">
                              <div className="text-sm"> Available </div>
                              <div className="text-gray-200 text-xl font-light">
                                  $0.00
                              </div>
                          </div>
                          <div className="mr-10">
                              <div className="text-sm"> Temporarily Unavailable </div>
                              <div className="text-gray-200 text-xl font-light">
                                  $0.00
                              </div>
                          </div>
                          <div>
                              <div  className="text-sm"> Assets </div>
                              <div  className="text-gray-200 text-xl font-light">
                                  1
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </>
        )
    }else {
        return (
          <div>
              <div className="flex">
                  <img className="w-16 rounded-full border border-gray-600" src="/img.png" alt=""/>
                  <div className="ml-4 flex-col justify-end">

                  </div>
              </div>
              <div className="lg:flex justify-between text-gray-400 mt-5">
                  <div>
                      <div className="text-sm"> Net Worth </div>
                      <div className="text-2xl text-gray-100">
                          $0.00
                      </div>
                  </div>
                  <div className="mt-5 lg:mt-0 flex ">
                      <div className="mr-10">
                          <div className="text-sm"> Available </div>
                          <div className="text-gray-200 text-xl font-light">
                              $0.00
                          </div>
                      </div>
                      <div className="mr-10">
                          <div className="text-sm"> Temporarily Unavailable </div>
                          <div className="text-gray-200 text-xl text-center font-light">
                              $0.00
                          </div>
                      </div>
                      <div>
                          <div  className="text-sm"> Assets </div>
                          <div  className="text-gray-200 text-xl font-light">
                              0
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        )
    }
}
const AssetsWallet = () =>{
    const [selectopen,setSelectopen] = useAtom(AssetsOpenPopup)


    const openassets = () =>{
        setSelectopen(true)
    }
    const walletTitle = [
        {
            name:"Assets"
        },

        {
            name:"Balance"
        },
        {
            name:"Locked"
        },
        {
            name:"Reserve"
        },
        {
            name:"Value"
        },


    ]
    const walletInfo = [
        // {
        //     id:"1",
        //     assets:"$3,524.58",
        //     balance:"999999",
        //     locked:"20",
        //     value:"0.00",
        //     xx:"xx"
        // },
        // {
        //     id:"1",
        //     assets:"$3,524.58",
        //     balance:"999999",
        //     locked:"20",
        //     value:"0.00",
        // }, {
        //     id:"1",
        //     assets:"$3,524.58",
        //     balance:"999999",
        //     locked:"20",
        //     value:"0.00",
        // }, {
        //     id:"1",
        //     assets:"$3,524.58",
        //     balance:"999999",
        //     locked:"20",
        //     value:"0.00",
        // }, {
        //     id:"1",
        //     assets:"$3,524.58",
        //     balance:"999999",
        //     locked:"20",
        //     value:"0.00",
        // }, {
        //     id:"1",
        //     assets:"$3,524.58",
        //     balance:"999999",
        //     locked:"20",
        //     value:"0.00",
        // },
    ]
    return(
        <>
            <div className="my-20 ">
                <div>
                    <div className="text-white text-xl">
                        Chain Wallet
                    </div>
                    <div className='w-full mt-6    h-96 '>
                        <div className='overflow-auto  h-full '>
                            <table className=" divide-y min-w-full   border border-gray-800    divide-gray-800 mb-4">
                                <thead className="overflow-auto">
                                <tr>
                                    {walletTitle.map((item=>(
                                        <th key={item.name}
                                            scope="col"
                                            className="px-6  py-2 text-left  text-sm  md:font-semibold text-gray-300"
                                        >
                                            {item.name}
                                        </th>
                                    )))}
                                </tr>
                                </thead>
                                <tbody className={walletInfo.length?"divide-y  divide-gray-800  ":"hidden"}>
                                {walletInfo.map(item=>(
                                    <tr key={item.id} onClick={openassets} className="hover:bg-gray-800 bg-opacity-80  cursor-pointer transition duration-300 " >
                                        <td className="px-6 py-4  whitespace-nowrap text-sm text-white">
                                            <div className="flex ">
                                                <img className="w-10 rounded-full border border-gray-600" src="/img.png" alt=""/>
                                                <div className="ml-2  ">
                                                    <div>
                                                        W3G
                                                    </div>
                                                    <div className="text-gray-400 ">
                                                    {item.assets}
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td className="px-6  py-1  whitespace-nowrap text-base text-white ">
                                            {item.balance}
                                        </td>
                                        <td className="px-6  py-1  whitespace-nowrap text-base text-white ">
                                            {item.locked}
                                        </td>
                                        <td className="px-6  py-1  whitespace-nowrap text-base text-white ">
                                            <div>
                                                XX
                                            </div>
                                        </td>
                                        <td className="px-6  py-1  whitespace-nowrap text-base text-white ">
                                            <div>
                                               ${item.value}
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className={walletInfo.length?"hidden":"flex justify-center w-full  "}>
                                <div className=" pt-4 text-3xl text-center text-gray-400">
                                    <i className="fa fa-archive " aria-hidden="true"></i>
                                    <div className="text-xl">
                                        No Data
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
const AssetsBentoBox = () =>{
    const router = useRouter()
    const [AccountChooseValueType,] = useAtom(AccountChooseValue)
    const [addressType,SetaddressType] = useState('')

    useEffect(()=>{
        if (router.isReady){
            if (AccountChooseValueType == 2){
                SetaddressType('WASM')
            }else{
                SetaddressType('EVM')
            }
        }
    },[router.isReady])
    const BentoBoxTitle = [
        {
            name:"Assets"
        },

        {
            name:"Balance"
        },
        {
            name:"Locked"
        },
        {
            name:"Value"
        },
    ]
    const BentoBoxInfo = [
        {
            id:"1",
            asset:"$3,524.58",
            balance:"6532231.20",
            locked:"20",
            value:"0.00",
        },
        {
            id:"1",
            asset:"$3,524.58",
            balance:"6532231.20",
            locked:"20",
            value:"0.00",
        },
        {
            id:"1",
            asset:"$3,524.58",
            balance:"6532231.20",
            locked:"20",
            value:"0.00",
        },
        {
            id:"1",
            asset:"$3,524.58",
            balance:"6532231.20",
            locked:"20",
            value:"0.00",
        },
        {
            id:"1",
            asset:"$3,524.58",
            balance:"6532231.20",
            locked:"20",
            value:"0.00",
        }, {
            id:"1",
            asset:"$3,524.58",
            balance:"6532231.20",
            locked:"20",
            value:"0.00",
        },


    ]
    return(
        <>
            <div className="mt-20">
                <div>
                    <div className="text-white text-xl">
                        {addressType} Contract
                    </div>
                    <div className='mt-6 mx-auto   '>
                        <div className='overflow-auto  h-96'>
                            <table className=" divide-y   border border-gray-800    divide-gray-800 mb-4">
                                <thead className="overflow-auto">
                                <tr>
                                    {BentoBoxTitle.map((item=>(
                                        <th key={item.name}
                                            scope="col"
                                            className="px-6  py-2 text-left  text-sm  md:font-semibold text-gray-300"
                                        >
                                            {item.name}
                                        </th>
                                    )))}
                                </tr>
                                </thead>
                                <tbody className={BentoBoxInfo.length?"divide-y  divide-gray-800":"hidden"}>
                                {BentoBoxInfo.map(item=>(
                                    <tr key={item.id} className="hover:bg-gray-800 bg-opacity-80  cursor-pointer transition duration-300 " >
                                        <td className="px-6 py-4  w-56 whitespace-nowrap text-sm text-white">
                                            <div className="flex ">
                                                <img className="w-10  rounded-full border border-gray-600" src="https://cryptoempire.games/logo-cryptoempire.png" alt=""/>
                                                <div className="ml-2  ">
                                                    <div>
                                                        EMP
                                                    </div>
                                                    <div className="text-gray-400 ">
                                                        {item.asset}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6  py-1  whitespace-nowrap text-base text-white ">
                                                {item.balance}
                                        </td>
                                        <td className="px-6  py-1  whitespace-nowrap text-base text-white ">
                                            {item.locked}
                                        </td>
                                        <td className="px-6  py-1  whitespace-nowrap text-base text-white ">
                                            <div>
                                                ${item.value}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className={BentoBoxInfo.length?"hidden":"flex justify-center w-full lg:w-1/2 "}>
                                <div className=" pt-4 text-3xl text-center text-gray-400">
                                    <i className="fa fa-archive " aria-hidden="true"></i>
                                    <div className="text-xl">
                                        No Data
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
const AssetsOpen = () =>{
    const [selectopen,setSelectopen] = useAtom(AssetsOpenPopup)
    return(
        <>
            <Transition.Root show={selectopen} as={Fragment}>
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto " onClose={setSelectopen}>
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl  sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-gray-900 lg:w-3/12  rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:px-6 lg:px-12 ">
                                <div>
                                    <div className='flex justify-between text-xl font-light text-white 	mb-5'>
                                        <div className=" font-light  text-xl ">
                                            Available actions
                                        </div>
                                        <button  onClick={() => setSelectopen(false)}
                                                 className="fa fa-times " aria-hidden="true"></button>
                                    </div>
                                    <div className="my-5 ">

                                        <Link href="/home">
                                            <a>
                                    <div className="text-gray-500 p-3 mb-4 border border-gray-600 rounded-xl flex">
                                        <div className="text-lg">
                                        <i className="fa fa-exchange text-gray-300 mr-4" aria-hidden="true"></i>
                                        </div>
                                        <div className="text-sm mt-1 text-gray-200 font-semibold">
                                            Swap W3G
                                        </div>
                                    </div>
                                            </a>
                                        </Link>

                                        <Link href="/transfer">
                                            <a>
                                        <div  className="text-gray-500 p-3  mb-4 border border-gray-600 rounded-xl flex">
                                            <div className="text-lg">
                                                <i className="fa fa-exchange text-gray-300 mr-4" aria-hidden="true"></i>
                                            </div>
                                            <div className="text-sm mt-1 text-gray-200 font-semibold">
                                                Transfer
                                            </div>
                                        </div>
                                            </a>
                                        </Link>
                                        <Link href="/transaction">
                                            <a>
                                                <div  className="text-gray-500 p-3  mb-4 border border-gray-600 rounded-xl flex">
                                                    <div className="text-lg">
                                                        <i className="fa fa-exchange text-gray-300 mr-4" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="text-sm mt-1 text-gray-200 font-semibold">
                                                        Transaction
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root></>
    )
}


const Assets = () =>{
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
        return (
          <div>
              <Header/>
              <div className="relative pt-16">
                  <div className="absolute inset-x-0 bottom-0    " />
                  <div className=" mx-auto  ">
                      <div className="bg-black bg-opacity-95 ">
                          <div className="max-w-7xl relative px-5 py-24  sm:px-6  mx-auto ">
                              <AssetsTop/>
                              <div className="">
                                  <AssetsWallet/>
                                  {/*<AssetsBentoBox/>*/}
                              </div>
                              <AssetsOpen/>
                          </div>
                      </div>
                  </div>
              </div>
              <Tail/>
          </div>
        )


}

export default Assets
