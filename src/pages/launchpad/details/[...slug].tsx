import Header from "../../../components/header/index.";
import Heads from "../../../components/head";
import React from "react";

const Content = () =>{
    const project = {
        project_logo_url: 'https://pbs.twimg.com/profile_images/1570272205858295808/GWfo990Z_400x400.jpg',
    }

    return (
        <div className='bg-W3GBG'>
            <div className='text-white py-32'>
                <div className=" max-w-7xl mx-auto" >
                    <div className='flex flex-row p-10 bg-black rounded-3xl  bg-cover	' style={{backgroundImage:"url('/cryptoempire.png')"}}>
                        <div className='flex-col justify-start'>
                            <div>
                                <img className=' h-20 mr-5 rounded-full' src={project.project_logo_url} alt=""/>
                            </div>
                            <div>
                                Closed
                            </div>
                            <div>
                                Debeats
                            </div>
                            <div>
                                DEBEATS — #𝟏 decentralized Music NFT game built on Solana.
                            </div>
                            <div>
                                5GQXPhYodnaWLk4MxSsFqjCYhrZwwkbbiSU8fpDRdBU6V7bT
                            </div>
                            <div>
                                Progress
                            </div>
                            <div>
                                1
                            </div>
                            <div>
                                8% Tokens sold
                            </div>
                        </div>
                        <div className='flex-col justify-end' >
                            1
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

