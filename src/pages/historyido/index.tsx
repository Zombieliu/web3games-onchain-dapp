import Heads from "../../components/head";
import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React from "react";

const Content = () => {
    const project = [
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/media/FfaK2EFaUAE2GYO?format=jpg&name=medium',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1584795075196112901/FZh9zmzv_400x400.jpg',
            project_name: 'W3POKER',
            project_token_name: 'W3P',
            project_token_total_raise: '500,000',
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1432254043330686978/1664270422/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1448184453457530881/hk-z-Vuu_400x400.jpg',
            project_name: 'CryptoEmpire',
            project_token_name: 'CEMP',
            project_token_total_raise: '750,000',
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1570245205324103686/1663211092/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1570272205858295808/GWfo990Z_400x400.jpg',
            project_name: 'Debeats',
            project_token_name: 'DBT',
            project_token_total_raise: '1,200,000',
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/media/FfaK2EFaUAE2GYO?format=jpg&name=medium',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1584795075196112901/FZh9zmzv_400x400.jpg',
            project_name: 'W3POKER',
            project_token_name: 'W3P',
            project_token_total_raise: '500,000',},
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1432254043330686978/1664270422/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1448184453457530881/hk-z-Vuu_400x400.jpg',
            project_name: 'CryptoEmpire',
            project_token_name: 'CEMP',
            project_token_total_raise: '750,000',
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1570245205324103686/1663211092/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1570272205858295808/GWfo990Z_400x400.jpg',
            project_name: 'Debeats',
            project_token_name: 'DBT',
            project_token_total_raise: '1,200,000',
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/media/FfaK2EFaUAE2GYO?format=jpg&name=medium',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1584795075196112901/FZh9zmzv_400x400.jpg',
            project_name: 'W3POKER',
            project_token_name: 'W3P',
            project_token_total_raise: '500,000',},
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1432254043330686978/1664270422/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1448184453457530881/hk-z-Vuu_400x400.jpg',
            project_name: 'CryptoEmpire',
            project_token_name: 'CEMP',
            project_token_total_raise: '750,000',
        },
        {
            project_state: 'Coming Soon',
            project_image_url: 'https://pbs.twimg.com/profile_banners/1570245205324103686/1663211092/1500x500',
            project_logo_url: 'https://pbs.twimg.com/profile_images/1570272205858295808/GWfo990Z_400x400.jpg',
            project_name: 'Debeats',
            project_token_name: 'DBT',
            project_token_total_raise: '1,200,000',
        },
    ]
    return (
        <div className='bg-W3GBG px-4 md:px-10 xl:px-0'>
            <div className='text-white py-32'>
                <div className=" max-w-7xl mx-auto" >
                    <div className='flex justify-start flex-col mb-4'>
                        <div className='text-3xl mb-3'>
                            Funded Projests
                        </div>
                        <div className='text-lg'>
                            We bring new technologies to our community.
                        </div>
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3  gap-8 mt-5" >
                        {project.map((item =>(
                            <div key={item.project_name} className="rounded-lg   ">
                                <div className='relative '>
                                    <img className="rounded-lg md:rounded-t-lg w-full h-48"  src={item.project_image_url} alt=""/>
                                    <div className="absolute top-5 right-6 bg-gradient-to-r from-[#4B85DC] to-[#511D94] px-3 py-1.5 rounded-full text-xs">
                                        {item.project_state}
                                    </div>
                                </div>

                                <div className="rounded-b-lg p-5 relative bg-W3GNavigationBorder ">
                                    <img className="rounded-full  w-14 border md:-mt-12 " src={item.project_logo_url} alt=""/>
                                    <div className="mt-5">
                                        <div>
                                            {item.project_name}
                                        </div>
                                        <div className="text-xs text-[#A3A3A3] mt-1">
                                            $ {item.project_token_name}
                                        </div>
                                    </div>
                                    <div className="mt-5">
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

                    <div className="md:hidden mt-5 grid grid-cols-1 gap-8" >
                        {project.map((item =>(
                            <div key={item.project_name} className="rounded-lg flex p-1.5 bg-W3GNavigationBorder  ">
                                <div className='relative w-11/12'>
                                    <img className="rounded-lg md:rounded-t-lg  h-40"  src={item.project_image_url} alt=""/>
                                    <div className="absolute top-2 left-1  bg-gradient-to-r from-[#4B85DC] to-[#511D94] px-3 py-1.5 rounded-full text-xs">
                                        {item.project_state}
                                    </div>
                                </div>

                                <div className="rounded-b-lg  w-full flex flex-col justify-between p-2 relative">
                                    <div className="flex items-center">
                                        <img className="rounded-full  w-10 h-10 border  " src={item.project_logo_url} alt=""/>
                                        <div className="ml-2">
                                            <div>
                                                {item.project_name}
                                            </div>
                                            <div className="text-xs text-[#A3A3A3] mt-1">
                                                $ {item.project_token_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 text-xs w-full">
                                        <div className="flex justify-between mt-3 w-full">
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
                </div>
            </div>
        </div>
    )
}

const Historyido = () =>{
    return (
        <>
            <Heads/>
            <Header/>
            <Content/>
            <Tail/>
        </>
    )
}

export default Historyido
