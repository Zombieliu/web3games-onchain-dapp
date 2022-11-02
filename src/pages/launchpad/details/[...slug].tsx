import Header from "../../../components/header/index.";
import Heads from "../../../components/head";
import React, {useState} from "react";
import {Tab} from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Content = () =>{
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
    const categories = [
        {
        title:"Swap"
        },
        {
            title:"Claim"
        },
    ]

    return (
        <div className='bg-W3GBG px-4 md:px-10 xl:px-0'>
            <div className='text-white py-32'>
                <div className=" max-w-7xl mx-auto" >
                    <div className="relative rounded-xl ">
                        <img className="hidden  xl:flex absolute w-full h-full z-10 opacity-80" src="/cryptoempire.png" alt=""/>
                        <div className='flex flex-col xl:flex-row justify-between  p-3 md:p-10 bg-[#3E4459]/40 rounded-xl  xl:bg-W3GBG  bg-cover	relative'  >
                            <div className='xl:w-6/12 z-10 xl:mr-10'>
                                <div className='mb-6'>
                                    <div className="flex xl:block">
                                    <img className=' h-20 mr-5 rounded-full' src={show_project.project_logo_url} alt=""/>
                                    <div className="hidden xl:flex my-2 text-sm  justify-center w-20 rounded-md items-center py-0.5 px-0.5 bg-[#313543]">
                                        <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                        <div className="ml-2 ">
                                        Closed
                                    </div>
                                    </div>
                                    <div >
                                        <div className='text-2xl'>
                                            {show_project.project_name}
                                        </div>
                                        <div className='text-xs text-gray-400  mt-2'>
                                            {show_project.project_h1}
                                        </div>
                                    </div>
                                    </div>
                                    <div className="flex justify-between p-2 pr-4 items-center my-2 bg-[#313543] rounded-md">
                                        <div className="text-xs md:text-sm">
                                            0xuhdnUBY049520n9c28fh489ndnX8s034hk234
                                        </div>
                                        <div>
                                            <i className="fa fa-external-link" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    Progress
                                </div>
                                <div className="flex mt-1  bg-[#313543]  h-4 rounded-full items-center justify-start">
                                    <div className="bg-[#327FCC] h-4 rounded-full pl-5" style={{width:`20%`}}></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className='flex items-center mb-2 mt-4'>
                                        8%
                                        <div className="text-gray-300 ml-0.5 text-sm"> Tokens sold</div>
                                    </div>
                                    <div className='flex  mb-2 mt-4 text-sm'>
                                        <div className="text-[#4C84DC] mr-1">{show_project.project_token_schedule}</div> / 7,500,000
                                    </div>
                                </div>

                            </div>
                            <div className="z-10 xl:w-6/12">
                                <div className=' xl:bg-[#3E4459]/40 rounded-xl xl:p-4 xl:shadow-2xl  '>
                                    <div className="xl:flex justify-between">
                                        <div>
                                            Enrollment Tier 0
                                        </div>
                                        <div className="px-4 py-2 bg-[#313543] rounded-lg mt-2 xl:mt-0 xl:text-xs shadow-xl text-center">
                                            Not Enrolled
                                        </div>
                                    </div>
                                    <div className="flex  text-sm mt-2 xl:mt-4 justify-center md:justify-start ">
                                        <div className="text-gray-400">
                                            Enrollment closes:
                                        </div>
                                        <div className="ml-1">
                                            15 Jul 2022 18:00, +08:00
                                        </div>
                                    </div>
                                    <Tab.Group>
                                        <Tab.List className="mt-2 md:p-1 space-x-1  rounded-xl mx-auto  xl:flex justify-between ">
                                            <div className="rounded-lg bg-[#3E4459] p-0.5 shadow-xl  flex justify-between  ">
                                                {categories.map((item) => (
                                                    <Tab
                                                        key={item.title}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                ' w-full xl:w-24 py-1.5 md:py-1  font-medium text-gray-500 bg-[#3E4459] rounded-lg ',
                                                                selected
                                                                    ? ' text-yellow-50  border-gray-400 shadow bg-[#616884]'
                                                                    : '  hover:text-white')}>
                                                        {item.title}
                                                    </Tab>
                                                ))}
                                            </div>
                                        </Tab.List>
                                        {/*Recent*/}
                                        <Tab.Panels className="mt-2 ">
                                            <Tab.Panel
                                                className={classNames(' rounded-xl md:p-1  w-full ')}>
                                                <div className="rounded-lg bg-[#313543] p-4">
                                                    <div className="text-sm">
                                                        Swap currency
                                                    </div>
                                                    <div className="flex justify-between  items-center my-1">
                                                        <div>
                                                            <input type="text"
                                                                   className="bg-[#616884] text-white text-xs xl:text-sm w-44 md:w-96 xl:w-full  rounded-lg p-2       hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                                                   placeholder=""
                                                                   id=""
                                                            />
                                                        </div>
                                                        <div className="flex ">
                                                            <div className="rounded-lg py-1 px-1 md:px-3 text-blue-400 bg-[#616884] mr-2">
                                                                MAX
                                                            </div>
                                                            <div className="rounded-lg py-1 px-1 md:px-3 text-blue-400 bg-[#616884]">
                                                                Swap
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex justify-between text-sm mt-2">
                                                        <div>
                                                            Rate
                                                        </div>
                                                        <div className="flex">
                                                            1 MYRA = 1.0000USDT.e
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                            {/*Popular*/}
                                            <Tab.Panel className={classNames('text-gray-300 rounded-xl md:p-1 ')}>

                                                <div className="rounded-lg bg-[#313543] p-4">
                                                    <div className="text-sm">
                                                        Claim your MYRA tokens
                                                    </div>
                                                    <div className="flex justify-between items-center my-4">
                                                        <div className="flex w-full mr-10 items-center relative">
                                                            <input type="text"
                                                                   className=" bg-[#616884] text-white text-xs md:text-sm pr-14 md:pr-24 rounded-lg p-2 w-full hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                                                   placeholder=""
                                                                   id=""
                                                            />
                                                            <span className="pointer-events-none absolute inset-y-0 text-xs md:text-base right-0 flex items-center pr-2">
                                                                W3G
                                                            </span>
                                                        </div>
                                                        <div className=" w-full  ">
                                                            <div className="rounded-lg py-1.5 px-3 text-blue-400 bg-[#616884] mr-2 text-center">
                                                                Claim
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                    <div className="rounded-lg bg-[#313543] px-4 py-2 mt-4 flex justify-between items-center ">
                                        <div>
                                            Social Media:
                                        </div>
                                        <div className="flex text-white text-xl ">
                                            <div className="mx-2">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="mx-2">
                                                <i className="fa fa-telegram" aria-hidden="true"></i>
                                            </div>
                                            <div className="mx-2">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="mx-2">
                                                <i className="fa fa-telegram" aria-hidden="true"></i>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex text-sm mt-4 items-center justify-center md:justify-start">
                                        <i className="fa fa-calendar-o mr-1 text-gray-400" aria-hidden="true"></i>
                                        <div className="text-gray-400 mr-0.5">
                                            Token Claim Date:
                                        </div>
                                        <div>
                                            08 Aug 2022 18:00, +08:00
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="mt-10 text-2xl ">
                            Details
                        </div>
                        <div className="mt-5 bg-[#1C1D24] shadow sm:rounded-xl">
                            <div className="px-4 py-5 sm:px-6 xl:px-12">
                                <h3 className="text-lg font-medium leading-6 text-gray-400">INFORMATION</h3>
                            </div>
                            <div className="border-t border-[#313543] px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-[#313543] text-left">
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Sale Start</dt>
                                        <dd className="mt-1 text-sm text-gray-400  sm:mt-0">15 Jul 2022 18:00, +08:00</dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Sale Start</dt>
                                        <dd className="text-left  text-sm text-gray-400  ">16 Jul 2022 18:00, +08:00</dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Token Claim</dt>
                                        <dd className=" text-sm text-gray-400 ">08 Aug 2022 18:00, +08:00</dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Amount of tokens to sell</dt>
                                        <dd className="text-sm text-gray-400">MYRA 200,000,000</dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Token Price</dt>
                                        <dd className="text-sm text-gray-400 flex items-center">
                                            <div className="mr-1">
                                            USDT.e 1.0000
                                        </div>
                                            <i className="fa fa-external-link" aria-hidden="true"></i>
                                        </dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Total Raise Amount</dt>
                                        <dd className="text-sm text-gray-400">USDT.e 5438.9091</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div className="mt-10 bg-[#1C1D24] shadow sm:rounded-xl">
                            <div className="px-4 py-5 sm:px-6 xl:px-12">
                                <h3 className="text-lg font-medium leading-6 text-gray-400">Token INFORMATION</h3>
                            </div>
                            <div className="border-t border-[#313543] px-4 py-5 sm:p-0">
                                <dl className="divide-y divide-[#313543] text-left">
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Project Name</dt>
                                        <dd className="mt-1 text-sm text-gray-400  sm:mt-0">MYRA</dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Token Symbol</dt>
                                        <dd className="text-sm text-gray-400 flex items-center">
                                            <div className="mr-1">
                                                MYRA
                                            </div>
                                            <i className="fa fa-external-link" aria-hidden="true"></i>
                                        </dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Token Address</dt>
                                        <dd className="text-sm text-gray-400 flex items-center">
                                            <div className="mr-1">
                                                0x765...234
                                            </div>
                                            <i className="fa fa-external-link" aria-hidden="true"></i>
                                        </dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Token Decimals</dt>
                                        <dd className="text-sm text-gray-400">21</dd>
                                    </div>
                                    <div className="py-4 flex justify-between  sm:py-5 sm:px-6 xl:px-12">
                                        <dt className="text-sm font-medium text-white">Total Supply</dt>
                                        <dd className="text-sm text-gray-400">44</dd>
                                    </div>

                                </dl>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


const Detail = () =>{
    return (
        <>
            <Heads/>
            <Header/>
            <Content/>
        </>
    )

}

export default Detail

