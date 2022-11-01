import Heads from "../../components/head";
import Header from "../../components/header/index.";
import React from "react";
import Tail from "../../components/tail";
import Link from "next/link";

const Content = () => {
    const project_logo_url = 'https://cdn.discordapp.com/attachments/876498219885031424/1034736016097021963/unknown.png'

    const show_project = {
        project_bg_url:"cryptoempire.png",
        project_logo_url:"https://cdn.discordapp.com/attachments/876498219885031424/1034736016097021963/unknown.png",
        project_name:"CryptoEmpire",
        project_token_name : 'CEMP',
        project_h1 :'Collect, upgrade, and win in the exciting world of CryptoEmpire, a match-3 strategy battle game. Dive in and enjoy the perfect combination of match-3 and combat - start your journey today and show your skills and battle strategy with 32 unique heroes!',
        project_total_raise: "250,000",
        project_valuation:"190",
        project_token_price:"0.04",
        project_allocation:"71.2983",
        project_token_schedule:"4000",
        project_token_max_schedule:"7,500,000",

    }

    const project = [
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/media/FfaK2EFaUAE2GYO?format=jpg&name=medium',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1584795075196112901/FZh9zmzv_400x400.jpg',
            project_name: 'W3POKER',
            project_token_name: 'W3P',
            project_token_total_raise: '500,000',
            project_porsonal_allcation: '500'
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1432254043330686978/1664270422/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1448184453457530881/hk-z-Vuu_400x400.jpg',
            project_name: 'CryptoEmpire',
            project_token_name: 'CEMP',
            project_token_total_raise: '750,000',
            project_porsonal_allcation: '10000'
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1570245205324103686/1663211092/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1570272205858295808/GWfo990Z_400x400.jpg',
            project_name: 'Debeats',
            project_token_name: 'DBT',
            project_token_total_raise: '1,200,000',
            project_porsonal_allcation: '3000'
        }
    ]

    return (
      <div className="px-4 md:px-10 xl:px-0">
                <div className=" text-white py-24 md:py-32 border-b border-[#1F1F1F] ">
                    <div className=" max-w-7xl mx-auto " >
                        <div className='flex justify-start flex-row mb-4 text-2xl'>
                            Upcoming IDOs
                        </div>
                        <div className="relative ">
                            <img className="absolute w-full h-full z-10 opacity-80" src="/cryptoempire.png" alt=""/>
                            {/*style={{backgroundImage:"url('/cryptoempire.png')"}}*/}
                            <div className='flex flex-col	 xl:flex-row justify-between bg-W3GBG p-4 py-10  md:p-10    bg-cover	relative'  >
                                <div className='xl:w-7/12 z-10'>
                                    <div className='flex mb-3 xl:mb-6 '>
                                        <img className=' h-20 mr-5 rounded-full' src={show_project.project_logo_url} alt=""/>
                                        <div >
                                            <div className='text-2xl'>
                                                {show_project.project_name}
                                            </div>
                                            <div className='font-light'>
                                                $ {show_project.project_token_name}
                                            </div>
                                            <div className='text-xs text-gray-400 line-clamp-3 '>
                                                {show_project.project_h1}
                                                </div>
                                        </div>
                                    </div>
                                    <div className='z-10 block xl:hidden'>
                                        <div className=' flex  mb-3 xl:mb-6'>
                                            Coming Soon:
                                        </div>
                                        <div className='grid grid-cols-4 gap-4  '>
                                            <div className='bg-[#222A35]/40 p-1.5  rounded-lg text-center'>
                                                <div>
                                                    1
                                                </div>
                                                <div>
                                                    Days
                                                </div>
                                            </div>
                                            <div className='bg-[#222A35]/40 p-1.5 rounded-lg text-center'>
                                                <div>
                                                    2
                                                </div>
                                                <div>
                                                    Hours
                                                </div>
                                            </div>
                                            <div className='bg-[#222A35]/40 p-1.5 rounded-lg text-center'>
                                                <div>
                                                    32
                                                </div>
                                                <div>
                                                    Minutes
                                                </div>
                                            </div>
                                            <div className='bg-[#222A35]/40 p-1.5 rounded-lg text-center'>
                                                <div>
                                                    44
                                                </div>
                                                <div>
                                                    Seconds
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-start text-lg my-4 xl:my-2'>
                                        Total Raise: $ {show_project.project_total_raise}
                                    </div>
                                    <div className='text-xs md:text-sm text-center xl:text-base flex justify-between mb-2'>
                                        <div>
                                            Initial valuation: {show_project.project_valuation}k
                                        </div>
                                        <div>
                                            Initial token price: ${show_project.project_token_price}
                                        </div>
                                        <div>
                                            Base allocation: ${show_project.project_allocation}
                                        </div>
                                    </div>
                                    <div className="flex mt-4  bg-[#222A35] h-6 rounded-full items-center justify-start">
                                        <div className="bg-[#327FCC] h-6 rounded-full pl-5" style={{width:`20%`}}>20%</div>
                                    </div>
                                    <div className='flex justify-start mb-2 mt-4'>
                                        {show_project.project_token_schedule} / 7,500,000 CEMP
                                    </div>
                                </div>
                                <div className='z-10 hidden xl:block'>
                                    <div className=' flex justify-end mb-6'>
                                        Coming Soon:
                                    </div>
                                    <div className='grid grid-cols-4 gap-4  mb-28'>
                                        <div className='bg-[#222A35]/40 p-1.5  rounded-lg text-center'>
                                            <div>
                                                1
                                            </div>
                                            <div>
                                                Days
                                            </div>
                                        </div>
                                        <div className='bg-[#222A35]/40 p-1.5 rounded-lg text-center'>
                                            <div>
                                                2
                                            </div>
                                            <div>
                                                Hours
                                            </div>
                                        </div>
                                        <div className='bg-[#222A35]/40 p-1.5 rounded-lg text-center'>
                                            <div>
                                                32
                                            </div>
                                            <div>
                                                Minutes
                                            </div>
                                        </div>
                                        <div className='bg-[#222A35]/40 p-1.5 rounded-lg text-center'>
                                            <div>
                                                44
                                            </div>
                                            <div>
                                                Seconds
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Link href={`/launchpad/details/${show_project.project_name}`}>
                                            <a >
                                                <button  className="w-24 h-10   rounded-3xl bg-gradient-to-r from-[#4B85DC] to-[#511D94] text-xs font-semibold">
                                                    Apply Now
                                                </button>
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                                <div className="z-10 xl:hidden mt-4 ">
                                    <Link href={`/launchpad/details/${show_project.project_name}`}>
                                        <a >
                                            <button  className=" px-10 py-3 text-xl  rounded-full bg-gradient-to-r from-[#4B85DC] to-[#511D94]  font-semibold">
                                                Apply Now
                                            </button>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className='mt-12 '>
                            <div className="flex justify-between items-center">
                                <div className='text-xl xl:text-2xl '>
                                    Next IDO
                                </div>
                                <Link href="/nextido">
                                <button className="px-8 py-2 text-[#4C83DB] border-2 xl:border border-[#4C83DB] rounded-3xl text-xs font-semibold">
                                    More
                                </button>
                                </Link>
                            </div>
                            <div className="hidden xl:grid md:grid-cols-3 xl:grid-cols-3  gap-8 mt-5" >
                                {project.map((item =>(
                                    <Link key={item.project_name} href={`/launchpad/details/${show_project.project_name}`}>
                                    <div  className="rounded-lg cursor-pointer">
                                        <div className='relative '>
                                            <img className="rounded-t-lg w-full h-48"  src={item.project_image_url} alt=""/>
                                            <div className="absolute top-5 right-6 bg-gradient-to-r from-[#4B85DC] to-[#511D94] px-3 py-1.5 rounded-full text-xs">
                                                {item.project_state}
                                            </div>
                                        </div>

                                        <div className="rounded-b-lg p-5 relative bg-W3GNavigationBorder">
                                            <img className="rounded-full w-14 border -mt-12 " src={item.project_logo_url} alt=""/>

                                            <div className="mt-5">
                                                <div>
                                                    {item.project_name}
                                                </div>
                                                <div className="text-xs text-[#A3A3A3] mt-1">
                                                    $ {item.project_token_name}
                                                </div>
                                                <div className="flex justify-between mt-3 text-sm">
                                                    <div className="text-[#A3A3A3]">
                                                        Total Raise
                                                    </div>
                                                    <div className="">
                                                        $ {item.project_token_total_raise}
                                                    </div>

                                                </div>
                                                <div className="flex justify-between mt-1 text-sm">
                                                    <div className="text-[#A3A3A3]">
                                                        Porsonal Allcation
                                                    </div>
                                                    <div>
                                                        $ {item.project_porsonal_allcation} Max
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    </Link>
                                )))}
                            </div>
                            <div className="w-full flex xl:hidden relative overflow-x-auto snap-x snap-mandatory mt-5" >
                                {project.map((item =>(
                                    <Link key={item.project_name} href={`/launchpad/details/${show_project.project_name}`}>
                                        <div  className="rounded-lg rounded-lg snap-always snap-center md:snap-start  mx-5 mb-3">
                                            <div className='relative w-96'>
                                                <img className="rounded-t-lg w-full h-48"  src={item.project_image_url} alt=""/>
                                                <div className="absolute top-5 right-6 bg-gradient-to-r from-[#4B85DC] to-[#511D94] px-3 py-1.5 rounded-full text-xs">
                                                    {item.project_state}
                                                </div>
                                            </div>

                                            <div className="rounded-b-lg p-5 relative bg-W3GNavigationBorder">
                                                <img className="rounded-full w-14 border -mt-12 " src={item.project_logo_url} alt=""/>

                                                <div className="mt-5">
                                                    <div>
                                                        {item.project_name}
                                                    </div>
                                                    <div className="text-xs text-[#A3A3A3] mt-1">
                                                        $ {item.project_token_name}
                                                    </div>
                                                    <div className="flex justify-between mt-3 text-sm">
                                                        <div className="text-[#A3A3A3]">
                                                            Total Raise
                                                        </div>
                                                        <div className="">
                                                            $ {item.project_token_total_raise}
                                                        </div>

                                                    </div>
                                                    <div className="flex justify-between mt-1 text-sm">
                                                        <div className="text-[#A3A3A3]">
                                                            Porsonal Allcation
                                                        </div>
                                                        <div>
                                                            $ {item.project_porsonal_allcation} Max
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </Link>
                                )))}
                            </div>
                        </div>
                        <div className='mt-6 xl:mt-12'>
                            <div className="flex justify-between">
                                <div>
                                <div className='text-2xl'>
                                    Funded Projects
                                </div>
                                <div className='text-white text-xs text-slate-500'>
                                    History successfully project
                                </div>
                                </div>
                                <div className="hidden xl:flex items-center text-gray-400 hover:text-white">
                                    <div className="">
                                        <input type="text"
                                               className="bg-neutral-700 text-white text-xs md:text-sm  pr-6 rounded-lg p-2 w-full   border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                               placeholder="Search"
                                               id=""
                                        />
                                    </div>
                                    <div className="text-xl ml-2  -ml-7">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden xl:grid md:grid-cols-3 xl:grid-cols-3  gap-8 mt-5" >
                                {project.map((item =>(
                                    <div key={item.project_name} className="rounded-lg ">
                                        <div className='relative '>
                                            <img className="rounded-t-lg w-full h-48"  src={item.project_image_url} alt=""/>
                                            <div className="absolute top-5 right-6 bg-gradient-to-r from-[#4B85DC] to-[#511D94] px-3 py-1.5 rounded-full text-xs">
                                                {item.project_state}
                                            </div>
                                        </div>

                                        <div className="rounded-b-lg p-5 relative bg-W3GNavigationBorder">
                                            <img className="rounded-full w-14 border -mt-12 " src={item.project_logo_url} alt=""/>

                                            <div className="mt-5">
                                                <div>
                                                    {item.project_name}
                                                </div>
                                                <div className="text-xs text-[#A3A3A3] mt-1">
                                                    $ {item.project_token_name}
                                                </div>
                                                <div className="flex justify-between mt-3 text-sm">
                                                    <div className="text-[#A3A3A3]">
                                                        Total Raise
                                                    </div>
                                                    <div className="">
                                                        $ {item.project_token_total_raise}
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                )))}
                            </div>
                            <div className="w-full flex xl:hidden relative overflow-x-auto snap-x snap-mandatory mt-5" >
                                {project.map((item =>(
                                    <div key={item.project_name} className="rounded-lg snap-always snap-center md:snap-start mx-5 mb-3">
                                        <div className='relative w-96'>
                                            <img className="rounded-t-lg w-full h-48"  src={item.project_image_url} alt=""/>
                                            <div className="absolute top-5 right-6 bg-gradient-to-r from-[#4B85DC] to-[#511D94] px-3 py-1.5 rounded-full text-xs">
                                                {item.project_state}
                                            </div>
                                        </div>

                                        <div className="rounded-b-lg p-5 relative bg-W3GNavigationBorder">
                                            <img className="rounded-full w-14 border -mt-12 " src={item.project_logo_url} alt=""/>

                                            <div className="mt-5">
                                                <div>
                                                    {item.project_name}
                                                </div>
                                                <div className="text-xs text-[#A3A3A3] mt-1">
                                                    $ {item.project_token_name}
                                                </div>
                                                <div className="flex justify-between mt-3 text-sm">
                                                    <div className="text-[#A3A3A3]">
                                                        Total Raise
                                                    </div>
                                                    <div className="">
                                                        $ {item.project_token_total_raise}
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                )))}
                            </div>

                            <Link href="/historyido">
                            <div className="flex justify-center mt-10">
                                <button className="px-8 py-2.5 text-[#4C83DB] border border-[#4C83DB] rounded-3xl text-xs font-semibold">
                                 Load   More
                                </button>
                            </div>
                            </Link>
                        </div>


                </div>
            </div>
      </div>
    )
}

const Lanuchpad = () =>{
    return <div className="bg-W3GBG">
        <Heads/>
        <Header/>
        <Content/>
        <Tail/>
    </div>
}

export default Lanuchpad
