import Heads from "../../components/head";
import Header from "../../components/header/index.";
import React from "react";
import Tail from "../../components/tail";

const Content = () => {
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
        },
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
        },
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
        },
    ]
    return (
        <div className='bg-W3GBG'>
            <div className='text-white py-32'>
                <div className=" max-w-7xl mx-auto" >
                    <div className='flex justify-start flex-col mb-4'>
                        <div className='text-2xl mb-3'>
                            Next IDO
                        </div>
                        <div className='text-lg'>
                            This is the most complete debut game, you can enjoy browsing on this page!
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
    )
}


const Nextido = () =>{
    return (
        <>
            <Heads/>
            <Header/>
            <Content/>
            <Tail/>
        </>
    )
}

export default Nextido
