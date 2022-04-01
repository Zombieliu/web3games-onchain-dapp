import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const featured = [
    {
        img:"https://mintverse.mypinata.cloud/ipfs/Qma5rkTGC8Ps2A1mWk3nnvkqrXn8LPt7dX9gahGbB2tKqD",
        name:"Azuki",
        logo:"https://logo.nftscan.com/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
        address:"0xd4...e34a",
        data:"21",
        h1:"A brand for the metaverse. Built by the community. Azuki starts with a collection of ",
    },
    {
        img:"https://mintverse.mypinata.cloud/ipfs/Qma5rkTGC8Ps2A1mWk3nnvkqrXn8LPt7dX9gahGbB2tKqD",
        name:"Something Official",
        logo:"https://mintverse.mypinata.cloud/ipfs/QmPofedCSBHa879ZfVMLrjdKtSwwYWG7Phfynrjd8oP1qX",
        address:"0xd4...e34a",
        data:"4.28",
        h1:"Welcome to the home of Something Official on OpenSea. Discover the best items in this collection.Discover the best items in this collection.",
    },

]
const Featured = () =>{
    return(
        <>
            <div>
                <div className="flex justify-center md:justify-start text-white text-3xl mt-16 mb-10 font-semibold">
                    Featured
                </div>
                <div className="flex justify-between overflow-auto xl:overflow-hidden">
                    {featured.map((item=>(
                        <Link key={item.name} href="/marketplaces">
                        <a   className="md:flex md:h-72   xl:w-7/12  mb-10 md:mr-72 xl:mr-10 px-2.5">
                            <img className="w-96  md:w-72 rounded-2xl " src={item.img} alt=""/>
                            <div className="md:mx-5 my-5 w-72 md:w-96  xl:w-72 mx-5">
                                <div className="text-gray-100  truncate text-2xl font-semibold mb-5">
                                    {item.name}
                                </div>
                                <div className="flex mb-5">
                                    <img className="w-6 rounded-full" src={item.logo} alt=""/>
                                    <div className="text-gray-300 text-xs ml-2 mt-1">
                                        {item.address}
                                    </div>
                                </div>
                                <div className="text-gray-300 text-sm mb-5">
                                    Floor Price
                                </div>
                                <div className="flex mb-5">
                                    <img className="w-8 rounded-full border border-gray-400" src="/img.png" alt=""/>
                                    <div className="ml-3 text-red-400 text-xl font-semibold">
                                        {item.data}
                                    </div>
                                </div>
                                <div className="text-gray-200 h-20 pt-2 md:h-20 overflow-hidden">
                                    {item.h1}
                                </div>
                            </div>
                        </a>
                        </Link>
                    )))}
                </div>

            </div>
        </>
    )
}

const ranking = [
    {
        title:"Top Gainers (24H)",
        info:[
            {
                rank:"1",
                img:"https://logo.nftscan.com/logo/0x1dfe7ca09e99d10835bf73044a23b73fc20623df.png",
                name:"More",
                data:"173482.86%",
                textstyle:"text-green-400",
            },
            {

                rank:"2",
                img:"https://logo.nftscan.com/logo/0x1dfe7ca09e99d10835bf73044a23b73fc20623df.png",
                name:"More1",
                data:"173482.86%",
                textstyle:"text-green-400",
            },
            {
                rank:"3",
                img:"https://logo.nftscan.com/logo/0x1dfe7ca09e99d10835bf73044a23b73fc20623df.png",
                name:"More2",
                data:"173482.86%",
                textstyle:"text-green-400",
            }
            ]},

    {
        title:"Top Vol(24H)",
        info:[
            {
                rank:"1",
                img:"https://logo.nftscan.com/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
                name:"Azuki1",
                data:"6,187,71",
                token:'/img.png',
                textstyle:"",
            },
            {
                rank:"1",
                img:"https://logo.nftscan.com/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
                name:"Azuki2",
                data:"6,187,71",
                token:'/img.png',
                textstyle:"",
            },
            {
                rank:"1",
                img:"https://logo.nftscan.com/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
                name:"Azuki3",
                data:"6,187,71",
                token:'/img.png',
                textstyle:"",
            }
            ]},
    {
        title:"Top Marketcap(24H)",
        info:[
            {
                rank:"1",
                img:"https://logo.nftscan.com/logo/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png",
                name:"Bored Ape1  ",
                data:"1,152,982",
                token:'/img.png',
                textstyle:"",
            },
            {
                rank:"1",
                img:"https://logo.nftscan.com/logo/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png",
                name:"Bored Ape Yacht 2",
                data:"1,152,982",
                token:'/img.png',
                textstyle:"",
            },
            {
                rank:"1",
                img:"https://logo.nftscan.com/logo/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png",
                name:"Bored3  ",
                data:"1,152,982",
                token:'/img.png',
                textstyle:"",
            }]},
]
const Rank = () =>{
    return(
        <>
            <div className="mt-20">
                <div className="flex justify-between ">
                    <div className="text-white text-3xl">
                        NFT Ranking list
                    </div>
                    <div className="text-blue-400 text-xl mt-2">
                        <Link href="/home" >
                            <a>
                            View All
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between mt-10 overflow-auto text-white">
                    {ranking.map((item=>(
                    <div key={item.title} className="mt-10 mx-10">
                        <div className="mx-6">
                            {item.title}
                        </div>
                        {item.info.map(item=>(
                            <Link  href="/marketplaces" key={item.name} >
                            <a  className="flex mt-6 hover:bg-gray-800  py-2 px-6 pr-16 ">
                            <div className="text-2xl font-semibold mt-2 mr-8">
                                {item.rank}
                            </div>
                            <div className="flex">
                                <img className="w-14 rounded-lg border border-gray-400 mr-4" src={item.img} alt=""/>
                                <div>
                                    <div className="mb-2 font-semibold truncate w-32">
                                        {item.name}
                                    </div>
                                    <div className="flex">
                                        <img className={item.token?"w-6 border mr-2  border-gray-400 rounded-full":"hidden"} src={item.token} alt=""/>
                                        <div className={classNames([item.textstyle],'text-gray-400 text-sm mt-0.5')}>
                                            {item.data}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                            </Link>
                        ))}
                    </div>
                    )))}


                </div>
            </div>

        </>
    )

}
const trending = [
    {
        img:"https://lh3.googleusercontent.com/mafoZWK_Vol2rgxzbaWTZhPBFCkoHaeGJ4RWkKkQVjipUpM_p67cXq1rJGPHCBCPKQhvyAWoqq4vy9WYzdhuA0c4RxCkBbGKM0SkXQ=s300",
        name:"Arcade Land V2 ",
        avatar:"https://logo.nftscan.com/logo/0x4a8c9d751eeabc5521a68fb080dd7e72e46462af.png",
        volume:"2,755,383",
        items:"6,635",
    },
    {
        img:"https://lh3.googleusercontent.com/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA=s300",
        name:"BoredApeYachtCl",
        avatar:"https://logo.nftscan.com/logo/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png",
        volume:"2,271.548",
        items:"10,000",
    },
    {
        img:"https://lh3.googleusercontent.com/duFsfRauDX27H7KfMPNvrg7byLt5GW9MpsTaPEjpslYX9DgipDQgmdPtGwNkhS7ASjJ8IQlYKlrgvTujrDEdBblde5rv0adSsI88ptQ=s300",
        name:"CyerBrokers",
        avatar:"https://logo.nftscan.com/logo/0x892848074ddea461a15f337250da3ce55580ca85.png",
        volume:"1,281.21",
        items:"9,987",
    },
    {
        img:"https://lh3.googleusercontent.com/5vsyTHNos9vPJ4vATJCXefZXn8XiP8VWQQJam9OnlZ6BCMCQN14ze0F8iFCERHqsBn9ISRnmgruep5q1e95UAbU6i0NbWzdpXog_8Gw=s300",
        name:"Akuma V4",
        avatar:"https://logo.nftscan.com/logo/0xfa7e3f898c80e31a3aedeae8b0c713a3f9666264.png",
        volume:"771.468",
        items:"4,368",
    },

]
const Trending = () =>{
    return(
        <>
            <div className="mt-20">
                <div className="text-white text-3xl ">
                    Trending in all categories
                </div>
                <div className="mt-20 mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {trending.map((item=>(
                        <Link key={item.name} href="/home">
                    <a className="transition duration-300 transform  hover:scale-105">
                        <div className="">
                        <img className="w-full rounded-xl" src={item.img} alt=""/>
                        <div className="mt-2">
                            <div className="flex justify-between" >
                                <div className="flex text-gray-100 w-48 text-xl">
                                    <div className="mr-4  truncate">{item.name}</div>
                                    <img className="w-6 h-6 mt-1 border rounded-full border-gray-400" src="/img.png" alt=""/>
                                </div>
                                <img className="w-16 rounded-full -mt-9 border border-gray-300" src={item.avatar} alt=""/>
                            </div>
                            <div className="flex justify-between mt-5">
                                <div className="text-gray-400 text-sm">
                                    Volume(24h)
                                </div>
                                <div className="flex">
                                    <img className="w-6 mr-2 border rounded-full border-gray-400" src="/img.png" alt=""/>
                                    <div className="text-gray-100"> {item.volume}</div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-gray-400">
                                    items
                                </div>
                                <div className="text-gray-100">
                                    {item.items}
                                </div>
                            </div>
                        </div>
                        </div>
                    </a>
                        </Link>
                    )))}
                </div>

            </div>
        </>
    )
}

const MarketPlaces = () =>{
    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl  px-5 py-16  sm:px-6  mx-auto ">
                            <div className="text-white max-w-xl xl:max-w-2xl mx-auto">
                                <div className="flex justify-center text-gray-200  text-center text-2xl md:text-4xl xl:text-5xl font-semibold" >
                                    Exploring The Future of NFTs
                                </div>
                                <div className="flex justify-center my-4 text-xs  md:text-sm text-center text-gray-300">
                                    Most Extensive Liquidity For Millions Of NFT Assets Across The Web3 Universe
                                </div>
                                <div className="flex justify-center">
                                    <div className="text-xl  -mr-8   mt-7 text-gray-300">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                    <input type="text"
                                           className=" bg-gray-400 bg-opacity-30 text-xs md:text-sm text-white mt-3 rounded-full px-9 py-5 w-11/12 border border-black  hover:border-gray-200 focus:border-gray-200 transition duration-300  outline-none"
                                           placeholder="Search items, collections, and accounts"
                                           id=""
                                    />
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Link href="/home">
                                    <a className="px-10 py-2 rounded-full bg-red-400">
                                        Explore
                                    </a>
                                    </Link>
                                </div>
                            </div>
                            <Featured/>
                            <Rank/>
                            <Trending/>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default MarketPlaces
