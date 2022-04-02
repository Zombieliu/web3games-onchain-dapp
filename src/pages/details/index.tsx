import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";
import Sort from "../../components/sort";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const  Hot = () =>{
    const hot = [
        {
            img:"https://dm2zb8bwza29x.cloudfront.net/0xed5af388653567af2f388e6224dc7c4b3241c544/0x0000000000000000000000000000000000000000000000000000000000000000.png",
            name:"Azuki",
            avatar:"https://logo.nftscan.com/logo/0x4a8c9d751eeabc5521a68fb080dd7e72e46462af.png",
            token:"21",
        },
        {
            img:"https://lh3.googleusercontent.com/zrNIg8oeWpOsQ1DfgIpFhApldQyTkt8rdA40Urb3Vb1w6TAtKbN2zugbzUGWhUv2hNT8jPhxOYqJ2abctY-tSN3i87ci9OHb8Qvi4g=w199",
            name:"Something Official",
            avatar:"https://logo.nftscan.com/logo/0x4a8c9d751eeabc5521a68fb080dd7e72e46462af.png",
            token:"4.38",
        },
        {
            img:"https://mintverse.mypinata.cloud/ipfs/QmSEq4oTQYeaun5RUtaLs8H99eZ71dhfZ1nn9wzV33kjUU",
            name:"Arcade Land V2",
            avatar:"https://logo.nftscan.com/logo/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png",
            token:"0.108",
        },
    ]
    return(
        <>
            <div className="text-2xl text-white font-semibold mb-10">
                🔥 Hot Collections
            </div>
            <div className="flex overflow-auto xl:overflow-hidden py-2 px-4  grid-cols-3 gap-9 xl:grid">
                {hot.map((item=>(
                    <div className="flex w-72 mr-36  rounded-xl p-2  transform scale-100 hover:scale-105 transition duration-300">
                        <img className="md:w-40 md: h-40 rounded-lg" src={item.img} alt=""/>
                        <div className="ml-4   ">
                            <div className="flex mb-4 w-32 ">
                                <div className="text-gray-100 text-xl font-semibold  truncate">
                                    {item.name}
                                </div>
                                <div className="text-blue-400 ml-1">
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="my-3">
                                <img className="w-9 rounded-full" src={item.avatar} alt=""/>
                            </div>
                            <div className="text-gray-400 text-base mb-3 font-semibold">
                                Floor Price
                            </div>
                            <div className="flex">
                                <img className="w-6 rounded-full border border-gray-500" src="/img.png" alt=""/>
                                <div className="text-red-400 ml-2">
                                    {item.token}
                                </div>
                            </div>

                        </div>
                    </div>
                )))}
            </div>

        </>
    )
}

const Detail = () =>{
  const  collections = [
      {
          img:"https://clonex-assets.rtfkt.com/images/3413.png",
          name:"CloneX #1552",
          address:"0xba...66c3",
          sell:"16",
          offer:"--",
          last:"--",
      },
      {
          img:"https://mintverse.mypinata.cloud/ipfs/QmcxUttngspPwbJuPb2xrqi2idA2ib5dkXYFChNszsJWWs",
          name:"#17492",
          address:"0xba...66c3",
          sell:"16",
          offer:"--",
          last:"--",
      },
      {
          img:"https://mintverse.mypinata.cloud/ipfs/QmcfwvJTWwTsfNwGN7g5BwuFz669EvXQmkPPZNC7wT3DHa",
          name:"Doodle #1244",
          address:"0xba...66c3",
          sell:"16",
          offer:"--",
          last:"--",
      },
      {
          img:"https://mintverse.mypinata.cloud/ipfs/Qmc99brKHznBbnTAN6CPyE2foUr1ApPjTqR8FfjzP71xbo",
          name:"APEZTAVERSE",
          address:"0xba...66c3",
          sell:"16",
          offer:"--",
          last:"--",
      },
      {
          img:"https://clonex-assets.rtfkt.com/images/3543.png",
          name:"CloneX #7081",
          address:"0xba...66c3",
          sell:"16",
          offer:"--",
          last:"--",
      },
      {
          img:"https://clonex-assets.rtfkt.com/images/12027.png",
          name:"CloneX #7049",
          address:"0xba...66c3",
          sell:"16",
          offer:"--",
          last:"--",
      }
  ]
    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                            <div>
                                <Hot/>
                                <div className="md:flex justify-between mt-16">
                                    <div className="text-2xl text-white font-semibold ">
                                        All Collections
                                    </div>
                                    <div className="mt-5 md:mt-0 flex justify-center">
                                        <div className="text-xl  -mr-8   mt-0.5 text-gray-300">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                        <input type="text"
                                               className=" bg-gray-400 bg-opacity-30 text-xs md:text-sm text-white  rounded-full px-9 py-2 w-96 border border-black  hover:border-gray-200 focus:border-gray-200 transition duration-300  outline-none"
                                               placeholder="Search items, collections, and accounts"
                                               id=""
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 my-10">
                                    {collections.map((item=>(
                                        <Link key={item.name} href="/#">
                                    <div  className="transform scale-100 hover:shadow hover:scale-105 transition duration-300 cursor-pointer" >
                                        <div>
                                            <img  className=" rounded-xl" src={item.img} alt=""/>
                                        </div>
                                        <div className="mt-4">
                                            <div className="text-base font-semibold text-gray-200 truncate">
                                                {item.name}
                                            </div>
                                            <div className="flex ">
                                                <div className="text-gray-400 text-sm mr-1">
                                                    Owned by
                                                </div>
                                                <div className="text-red-500 font-light text-sm">
                                                    {item.address}
                                                </div>
                                            </div>
                                            <div className="flex mt-4 justify-between">
                                                <div>
                                                    <div className="text-gray-500 text-sm">
                                                        Sell Price
                                                    </div>
                                                    <div className="flex">
                                                        <img className="w-6 border border-gray-700 rounded-full" src="/img.png" alt=""/>
                                                        <div className="ml-1 text-gray-100">
                                                            {item.sell}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-500 text-sm">
                                                        Best Offer
                                                    </div>
                                                    <div className="flex">
                                                        <img className="w-6 border border-gray-700 rounded-full" src="/img.png" alt=""/>
                                                        <div className="ml-1 text-gray-100">
                                                            {item.offer}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="text-gray-500 text-sm">
                                                        Last Price
                                                    </div>
                                                    <div className="flex">
                                                        <img className="w-6 border border-gray-700 rounded-full" src="/img.png" alt=""/>
                                                        <div className="ml-1 text-gray-100">
                                                            {item.last}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </Link>)))}

                                </div>
                                <Sort/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Detail

