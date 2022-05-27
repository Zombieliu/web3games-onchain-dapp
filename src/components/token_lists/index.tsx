import {useAtom} from "jotai";
import {Select_TokenTail, Select_TokenTop, SwapTokenTail, SwapTokenTop, Token_Lists} from "../../jotai";
import {Dialog, Switch, Tab, Transition} from "@headlessui/react";
import React, {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const List = () =>{
    const router = useRouter()
    const [tokenList,set_token_list_data] = useState([])
    useEffect(()=>{
        if (router.isReady){
            const tokenData = [
                {
                    img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_48,f_auto,q_auto,fl_sanitize/https://cloudflare-ipfs.com/ipfs/QmWzL3TSmkMhbqGBEwyeFyWVvLmEo3F44HBMFnmTUiTfp1/",
                    token:"Aave Token List",
                    version:"v1.3.0",
                    tokenNumber:"42",
                    enabled:false
                },
                {
                    img:"/img.png",
                    token:"W3G Token List",
                    version:"v1.0.0",
                    tokenNumber:"96",
                    enabled:false
                },
            ]
            set_token_list_data(tokenData)
        }
    },[router.isReady])

    const setEnabled = (index)=>{
        let data = tokenList.concat()
        data[index].enabled = ! data[index].enabled
        set_token_list_data(data)
    }
    return(
        <>
            <input type="text"
                   className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 py-4 w-full border-gray-700 border z-40  focus:border-blue-400 transition duration-300  outline-none"
                   placeholder="http:// or ipfs:// or ENS name"
                   id="token"
            />

            <div className="overflow-y-auto border border-gray-700 h-96 mt-7 p-3 rounded-xl">
                {tokenList.map(((item,index)=>(
                <div key={item.token} className="flex mb-5 justify-between items-center">
                    <div className="flex ">
                        <img className="w-10" src={item.img} alt=""/>
                        <div className="text-white ml-4 ">
                            <div className="flex items-center">
                                {item.token}
                                <div className="text-sm ml-2">
                                    {item.version}
                                </div>
                            </div>
                            <div className="text-xs text-gray-300">
                                {item.tokenNumber} tokens
                            </div>
                        </div>
                    </div>
                    <Switch
                        checked={item.enabled}
                        onChange={()=>{
                            setEnabled(index)
                        }}
                        className={classNames(
                            item.enabled ? 'bg-indigo-600' : 'bg-gray-600',
                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out '
                        )}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            className={classNames(
                                item.enabled ? 'translate-x-5' : 'translate-x-0',
                                'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                        >

        <span
            className={classNames(
                item.enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
            className={classNames(
                item.enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
                    </Switch>
                </div>
                )))}
            </div>

        </>
    )
}

const Tokens = () =>{
    const [valuable,setValuable] = useState(true)
    const [importToken,setImportToken] = useState(false)
    const [,setCloseTokenList] = useAtom(Token_Lists)
    const  back= () =>{
        setImportToken(false)
        setCloseTokenList(true)
    }
    const tokenInfo = {
        img:"/img.png",
        token:"mBTCB",
        h1:"mushrooming BTCB Token",
        address:"0xa283...d304",

    }
    const CustomToken = [
        {
            img:"/img.png",
            token:"W3G",
        },
    ]
    return(
        <>

            <input type="text"
                   className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg px-3 p-2 py-4 w-full border-gray-700 border z-40  focus:border-blue-400 transition duration-300  outline-none"
                   placeholder="0x..."
                   id="token"
            />
            <button onClick={()=>{setImportToken(true)}} className={valuable?"flex mt-5 w-full border border-gray-700 bg-gray-700 bg-opacity-30 p-2 px-3 rounded-xl":"hidden"}>
                <div className="flex  items-center  ">
                    <img className="w-10" src={tokenInfo.img} alt=""/>
                    <div className="text-white ml-4 ">
                        <div className="flex items-center">
                            {tokenInfo.address}

                            <div className="ml-2 text-xs py-1 px-2 bg-yellow-400 bg-opacity-70 rounded-full">
                                Unknown Source
                            </div>
                        </div>
                        <div className="text-xs mt-1 text-left text-gray-300">
                            {tokenInfo.token}   {tokenInfo.h1}
                        </div>
                    </div>
                </div>
            </button>
            <div className="my-5 rounded-xl px-3  bg-gray-700 bg-opacity-30 border-gray-700 border p-2 py-4">
                <div className="flex justify-between items-center">
               <div className="flex">
                   {CustomToken.length}
                   <div className="ml-1">
                       Custom Tokens
                   </div></div>
                <div   className=" text-sm rounded-full flex items-center text-white text-sm h-8 items-center px-1 pl-1.5 text-center bg-indigo-400 font-semibold">
                    <button className="mr-2">
                        Clear all</button>
                    </div>
                </div>
                <div className={CustomToken.length?"h-60 overflow-y-auto mt-2":"hidden"}>
                {CustomToken.map((item=>(
                    <div key={item.token} className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                            <img className="w-10" src={item.img} alt=""/>
                            <div className="ml-3">
                                {item.token}
                            </div>
                        </div>
                        <div className="flex text-xl mr-2">
                            <button className="mr-5">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>

                            <button>
                                <i className="fa fa-share-square-o" aria-hidden="true"></i>
                            </button>

                        </div>


                    </div>
                )))}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="text-center text-gray-400 text-sm  fixed   bottom-4">
                    Custom tokens are stored locally in your browser
                </div>
            </div>



            <Transition.Root show={importToken} as={Fragment}>
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto " onClose={()=>{return false}}>
                    <div className="flex items-center  justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl  sm:block sm:p-0">
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
                            <div className="inline-block align-bottom bg-gray-900 w-11/12 md:w-9/12 xl:w-1/3 h-big  rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:px-6 lg:px-12 ">
                                <div>
                                    <div className='flex justify-between text-xl font-light text-white 	mb-5'>
                                        <div className=" flex items-center">
                                            <button onClick={back}>
                                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                            </button>
                                            <div  className="font-light ml-4 text-xl">
                                                Import token
                                            </div>
                                        </div>
                                        <button onClick={()=>{setImportToken(false)}}>
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    <div  className=" mt-5 w-full border border-gray-700 bg-gray-700 bg-opacity-30 p-2 px-4 rounded-xl">
                                        <div className="text-yellow-400 p-2 py-4  border-b border-gray-500">
                                            This token doesn`t appear on the active token list(s).Make sure this is the token that you want to trade.
                                        </div>
                                        <div className="flex  items-center my-4 ">
                                            <img className="w-10" src={tokenInfo.img} alt=""/>
                                            <div className="text-white ml-4 ">
                                                <div className="flex items-center">
                                                     {tokenInfo.address}

                                                    <div className="ml-2 text-xs py-1 px-2 bg-yellow-400 bg-opacity-70 rounded-full">
                                                        Unknown Source
                                                    </div>
                                                </div>
                                                <div className="text-xs mt-1 text-left text-gray-300">
                                                    {tokenInfo.token}   {tokenInfo.h1}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button  className="px-24 py-2 w-full mt-6 rounded-lg bg-indigo-400">
                                        Import
                                    </button>

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

const TokenList = () =>{
    const [TokenList,setCloseTokenList] = useAtom(Token_Lists)
    const [selectToken,setSelectToken] = useAtom(Select_TokenTop)
    const  back= () =>{
        setCloseTokenList(false)
        setSelectToken(true)
    }
    let [categories] = useState({
        List: [],
        Tokens: [],
    })
    return(
        <>
            <Transition.Root show={TokenList} as={Fragment}>
                <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto " onClose={()=>{return false}}>
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
                            <div className="inline-block align-bottom bg-gray-900 w-11/12 md:w-6/12 xl:w-1/3  h-big rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:px-6 lg:px-12 ">
                                <div>
                                    <div className='flex justify-between text-xl font-light text-white 	mb-5'>
                                        <div className=" flex items-center">
                                            <button onClick={back}>
                                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                            </button>
                                            <div  className="font-light ml-4 text-xl">
                                                Select a token
                                            </div>

                                        </div>
                                        <button onClick={()=>{setCloseTokenList(false)}}>
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    <Tab.Group>
                                        <Tab.List className=" p-1  bg-blue-900/20 rounded-xl mx-auto   ">
                                            <div className="flex justify-between">
                                                {Object.keys(categories).map((category) => (
                                                    <Tab
                                                        key={category}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                'w-full py-2 text-sm leading-5 rounded-lg font-medium text-gray-600 ',
                                                                selected
                                                                    ? ' text-yellow-50 border border-blue-400 shadow'
                                                                    : ' hover:bg-white/[0.12] hover:text-white')}>
                                                        {category}
                                                    </Tab>
                                                ))}
                                            </div>
                                        </Tab.List>
                                        {/*Recent*/}
                                        <Tab.Panels className="mt-2 ">
                                            <Tab.Panel
                                                className={classNames(' rounded-xl p-1')}>

                                                <List/>

                                            </Tab.Panel>
                                            {/*Popular*/}
                                            <Tab.Panel className={classNames('text-gray-300  rounded-xl p-1')}>

                                               <Tokens/>

                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>



                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export  default TokenList
