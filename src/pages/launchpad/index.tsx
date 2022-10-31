import Heads from "../../components/head";
import Header from "../../components/header/index.";
import React from "react";
import Tail from "../../components/tail";

const Content = () => {
    const project_logo_url = 'https://cdn.discordapp.com/attachments/876498219885031424/1034736016097021963/unknown.png'
    const project_chain_type_logo_url = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
    const project_chain_type = 'Binance Smart Chain'
    const project_name = 'CryptoEmpire'
    const project_token_name = 'CEMP'
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


    // const project_rasing_amount = '10000'
    return (
      <>
                <div className=" text-white  py-32">
                    <div className=" max-w-7xl mx-auto" >
                        <div className='flex justify-start flex-row mb-4 text-2xl'>
                            Upcoming IDOs
                        </div>
                            <div className='flex justify-between   p-10 bg-black rounded-3xl  bg-cover	' style={{backgroundImage:"url('/cryptoempire.png')"}} >
                                <div className='w-7/12 z-10'>
                                    <div className='flex mb-2 '>
                                        <img className=' h-20 mr-5 rounded-full' src={project_logo_url} alt=""/>
                                        <div >
                                            <div className='text-2xl'>
                                                CryptoEmpire
                                            </div>
                                            <div className='font-light'>
                                                $ CEMP
                                            </div>
                                            <div className='text-xs text-slate-500 line-clamp-3 '>
                                                Collect, upgrade, and win in the exciting world of CryptoEmpire, a match-3 strategy battle game. Dive in and enjoy the perfect combination of match-3 and combat - start your journey today and show your skills and battle strategy with 32 unique heroes!
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-start text-lg mb-2'>
                                        Total Raise: $250,000
                                    </div>
                                    <div className='flex justify-between mb-2'>
                                        <div>
                                            Initial valuation: 190k
                                        </div>
                                        <div>
                                            Initial token price: $0.04
                                        </div>
                                        <div>
                                            Base allocation: $71.2983
                                        </div>
                                    </div>
                                    <div className='flex justify-start mb-2'>
                                        0%
                                    </div>
                                    <div className='flex justify-start mb-2'>
                                        0 / 7,500,000 CEMP
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex justify-end mb-2'>
                                        Coming Soon:
                                    </div>
                                    <div className='grid grid-cols-4 gap-4 border-2 mb-28'>
                                        <div className='bg-[#222A35]/40  rounded-lg text-center'>
                                            <div>
                                                1
                                            </div>
                                            <div>
                                                Days
                                            </div>
                                        </div>
                                        <div className='bg-[#222A35]/40 rounded-lg text-center'>
                                            <div>
                                                2
                                            </div>
                                            <div>
                                                Hours
                                            </div>
                                        </div>
                                        <div className='bg-[#222A35]/40 rounded-lg text-center'>
                                            <div>
                                                32
                                            </div>
                                            <div>
                                                Minutes
                                            </div>
                                        </div>
                                        <div className='bg-[#222A35]/40 rounded-lg text-center'>
                                            <div>
                                                44
                                            </div>
                                            <div>
                                                Seconds
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="w-24 h-10  rounded-3xl bg-gradient-to-r from-[#4B85DC] to-[#511D94] text-xs font-semibold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        <div className='mt-12'>
                            <div className="flex justify-between">
                                <div className='text-2xl'>
                                    Next IDO
                                </div>
                                <button className="w-16 h-8 text-[#4C83DB] border border-[#4C83DB] rounded-3xl text-xs font-semibold">
                                    More
                                </button>
                            </div>
                            <div className="grid grid-cols-3  gap-4 mt-5" >
                                {project.map((item =>(
                                    <div key={item.project_name} className="rounded-lg w-96">
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
                                                <div className="text-xs text-gray-500 mt-1">
                                                    $ {item.project_token_name}
                                                </div>
                                                <div className="flex justify-between mt-3 text-sm">
                                                    <div>
                                                        Total Raise
                                                    </div>
                                                    <div className="">
                                                        $ {item.project_token_total_raise}
                                                    </div>

                                                </div>
                                                <div className="flex justify-between mt-1 text-sm">
                                                    <div>
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
                                )))}
                            </div>
                        </div>
                        <div className='mt-12'>
                            <div className="flex justify-start flex-col">
                                <div className='text-2xl'>
                                    Funded Projests
                                </div>
                                <div className='text-white text-xs text-slate-500'>
                                    History successfully project
                                </div>
                            </div>
                            <div className="grid grid-cols-3  gap-4 mt-5" >
                                {project.map((item =>(
                                    <div key={item.project_name} className="rounded-lg w-96">
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
                                                <div className="text-xs text-gray-500 mt-1">
                                                    $ {item.project_token_name}
                                                </div>
                                                <div className="flex justify-between mt-3 text-sm">
                                                    <div>
                                                        Total Raise
                                                    </div>
                                                    <div className="">
                                                        $ {item.project_token_total_raise}
                                                    </div>

                                                </div>
                                                <div className="flex justify-between mt-1 text-sm">
                                                    <div>
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
                                )))}
                            </div>
                        </div>
                </div>
            </div>
      </>
    )
}

const Lanuchpad = () =>{
    return <div className="bg-black">
        <Heads/>
        <Header/>
        <Content/>
        <Tail/>
    </div>
}

export default Lanuchpad
