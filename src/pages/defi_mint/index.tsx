import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {useAtom} from "jotai";
import {WalletButtonShowState, WalletListShowState} from "../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Defi_Mint = () =>{
    const [WalletButtonShow,]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
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
                                    Create an Token
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
                                <div className="flex justify-center mt-10 " >
                                    <div className={WalletButtonShow ? "hidden": "mt-1"}>
                                        <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-24 py-1.5 rounded-lg bg-blue-500">
                                            Connect Wallet
                                        </button>
                                    </div>
                                    <div className={WalletButtonShow ? "mt-1": "hidden"}>
                                        <button  className="px-16 py-3 bg-indigo-500 text-gray-200 rounded-xl">
                                            Confirm the Creation
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

export default Defi_Mint


