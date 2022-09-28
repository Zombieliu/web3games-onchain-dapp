import {Tab} from "@headlessui/react";
import React, {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {
    AccountChooseValue,
    AwaitPopUpBoxState,
    IntactWalletAddress, PopUpBoxInfo, PopUpBoxState,
    Select_TokenTail,
    Select_TokenTop,
    SwapTokenTail,
    SwapTokenTop, token_list_and_balance,
    WalletButtonShowState, WalletListShowState
} from "../../jotai";
import SelectTokenTail from "../../components/selecttokentail";
import SelectTokenTop from "../../components/selecttokentop";
import axios from "axios";
import {substrate_getAmountOutPrice,} from "../../chain/web3games";
import TokenList from "../../components/token_lists";
import {add_liquidity} from "../../utils/chain/pool";
import { chain_api } from "../../chain/web3games";
import {Simulate} from "react-dom/test-utils";
import doubleClick = Simulate.doubleClick;
import {AwaitPop_Up_box, Pop_up_box} from "../../components/pop_up_box";
import {LOGICAL_OPERATORS} from "@babel/types";
import {evm_address_to_sub_address} from "../../utils/chain/address";
import {router} from "next/client";
import {useRouter} from "next/router";
import {cropData} from "../../utils/math";
import BigNumber from "bignumber.js";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Recent = ()=>{
    const [,setSelectTokenTail] = useAtom(Select_TokenTail)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [swapTokenTail,setSwapTokenTail] = useAtom(SwapTokenTail)
    const [WalletButtonShow,]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [swapOutPutValue,setSwapOutPutValue] = useState(0)
    const [swapTimes,setSwapTimes] = useState(0)
    const [rotate,setRotate] = useState(false)
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)

    const [,setPop_up_boxData] =useAtom(PopUpBoxInfo)
    const [,setSop_up_boxState] = useAtom(PopUpBoxState)

    const [,setAwait_pop_up_boxState] = useAtom(AwaitPopUpBoxState)

    const exchange = () =>{
        setRotate(!rotate)
        setSwapTokenTop(swapTokenTail)
        setSwapTokenTail(swapTokenTop)
    }
    const selectTokenTop = () =>{
        setSelectTokenTop(true)
    }
    const selectTokenTail = () =>{
        setSelectTokenTail(true)
    }


    const get_swap_number = async (input_data)=>{
        let pool = [swapTokenTop.tokenId,swapTokenTail.tokenId]

        const token_number = input_data
        if(input_data!== ""){
        const api = await chain_api(intactWalletAddress)

        const account_token_balanceA_decimals = await api.query.tokenFungible.tokens(swapTokenTop.tokenId)
        const account_token_balanceB_decimals = await api.query.tokenFungible.tokens(swapTokenTail.tokenId)

        const baseNumberA = Math.pow(10,account_token_balanceA_decimals.toJSON().decimals)
        const baseNumberB = Math.pow(10,account_token_balanceB_decimals.toJSON().decimals)

        const token_a_real = new BigNumber(token_number).times(BigNumber(baseNumberA))
        // const token_b_real = new BigNumber(token_b).times(BigNumber(baseNumberB))

        let token_a_real_result
        let token_b_real_result

        if(token_a_real.c.length ==1 ){
            const data = token_a_real.c[0]
            const length = token_a_real.e - data.toString().length
            let string = ''
            for (let i = 0 ; i< length+1; i++){
                string = string +"0"
            }
            token_a_real_result = data.toString().concat(string)

        }else {
            token_a_real_result = api.createType("u128",token_a_real.c[0].toString().concat(token_a_real.c[1].toString()))

        }
        const result = await substrate_getAmountOutPrice(intactWalletAddress,pool,token_number)
        // //
        // //
            console.log(result.toString())
        //
        //
        if(result[1] == undefined){
            setSwapOutPutValue(0)
        }else {
            setSwapOutPutValue(cropData(Number(result[1]),6))
        }
        }
    }

    const check = async (e) => {
        e.target.value = e.target.value.toString().match(/^\d+(?:\.\d{0,8})?/)
        if (e.target.value.indexOf('.') < 0 && e.target.value != '') {
            e.target.value = parseFloat(e.target.value);
        }
        let input_data = e.target.value.replace(/\D/g, '')
        if(Number(e.target.value) > Number(swapTokenTop.data)){
            input_data=  swapTokenTop.data;
            (document.getElementById('token_input') as HTMLInputElement).value = input_data

        }
        get_swap_number(input_data)
    }

    const swapnow = async ()=>{
        const input = (document.getElementById('token_input') as any).value
        const output = (document.getElementById('token_output') as any).value
        const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
        await web3Enable('my cool dapp');
        const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
        const injector = await web3FromAddress(intactWalletAddress);
        const api = await chain_api(intactWalletAddress)
        // const result = await api.rpc.exchange.EstimateOutToken(4000,2,3)
        // const result2 = await api.rpc.exchange.EstimateLpToken(2,4000,3,result.toString())
        // console.log(result.toString())
        // console.log(result2.toString())
        const block = await api.rpc.chain.getHeader();
        const next_block = block.number.toNumber() + 3
        const transferExtrinsic = api.tx.exchange.swapExactW3gForTokens(input,0,[swapTokenTop.tokenId,swapTokenTail.tokenId],intactWalletAddress,next_block)
        transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ status  }) => {
            if (status.isInBlock) {
                setAwait_pop_up_boxState(true)
            }
            if (status.isFinalized) {
                // console.log(`Completed at block hash #${status.asInBlock.toString()}`);
                setPop_up_boxData({
                    state:true,
                    type:"Swap",
                    hash:status.asFinalized.toString(),
                })
                setTimeout(()=>{
                    setAwait_pop_up_boxState(false)
                    setSop_up_boxState(true)
                },2500)
            }
            else {
                console.log(`Current status: ${status.type}`);
            }
        }).catch((error: any) => {
            console.log(':( transaction failed', error);
            setPop_up_boxData({
                state:false,
                type:"Transaction",
                hash:"",
            })
            setSop_up_boxState(true)
        })
    }
        return (
            <>
                <Pop_up_box/>
                <AwaitPop_Up_box/>
                <div className="bg-W3GBG  p-3 rounded-2xl">
                    <div className="flex justify-between">
                        <div className="flex bg-W3GInfoBG p-1 rounded-full border border-W3GInfoBG hover:border-neutral-600 focus:border-neutral-600  transition duration-300 ">
                            <div className="flex">
                                <button onClick={selectTokenTop} className="flex items-center  ">
                                    <div>
                                        <img className="w-6 rounded-full mr-1" src={swapTokenTop.img} alt=""/>
                                    </div>
                                    <div className="text-gray-200">
                                        {swapTokenTop.name}
                                    </div>
                                    <i className="fa fa-angle-down text-white ml-3 " aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-gray-300 mt-2 text-xs mr-2">
                                Pay from
                            </div>
                            <div className="px-1.5 pt-1.5 text-center text-gray-200 text-sm bg-W3GInfoBG rounded-full ">
                                Wallet
                            </div>
                            {/*<div>*/}
                            {/*    <i className="fa fa-question-circle ml-2 mt-1.5 text-W3G3"*/}
                            {/*       aria-hidden="true"></i>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="flex ">
                            <input
                                   onKeyUp={check}
                                   className=" bg-W3GInfoBG  text-xs md:text-sm text-white  rounded-md p-2  md:w-48 border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300    outline-none"
                                   placeholder="0.0"
                                   id="token_input"
                                   maxLength={16}
                            />
                        </div>
                        <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance: <div className="">
                            {swapTokenTop.data}
                        </div></div>
                    </div>
                </div>
                <div className="flex justify-center -mt-2 ">
                    <button onClick={exchange} className={classNames(rotate?"rotate-180":"","items-center text-[#8B8EFA] text-base px-1.5 py-0.5  rounded-2xl  bg-W3GInfoBG  transition duration-300")}>
                        <i className="fa fa-arrow-down "
                           aria-hidden="true"></i>
                    </button>
                </div>
                <div className="-mt-2 bg-W3GBG p-3 rounded-2xl">
                    <div className="flex justify-between">
                        <div className="flex bg-W3GInfoBG p-1 rounded-full border border-W3GInfoBG hover:border-neutral-600 focus:border-neutral-600  transition duration-300  ">
                            <button onClick={selectTokenTail} className="flex items-center">
                                <div>
                                    <img className="w-6 rounded-full mr-1" src={swapTokenTail.img} alt=""/>
                                </div>
                                <div className="text-gray-200">
                                    {swapTokenTail.name}
                                </div>
                                <i className="fa fa-angle-down text-white ml-3 " aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="flex">
                            <div className="text-gray-300 mt-2 text-xs mr-2">
                                Pay from
                            </div>
                            <div className="px-1.5 pt-1.5 text-center text-gray-200 text-sm bg-W3GInfoBG rounded-full ">
                                Wallet
                            </div>
                            {/*<div>*/}
                            {/*    <i className="fa fa-question-circle ml-2 mt-1.5 text-W3G3"*/}
                            {/*       aria-hidden="true"></i>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <div className="flex justify-between mt-5">
                        <div className="flex">
                            <input
                                   className=" bg-W3GInfoBG text-xs md:text-sm text-white  rounded-lg p-2   md:w-48   border border-W3GInfoBG   hover:border-neutral-600 focus:border-neutral-600  transition duration-300  outline-none"
                                   placeholder='0.0'
                                   id="token_output"
                                   value={`${swapOutPutValue}`}

                            />
                        </div>
                        <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance:{swapTokenTail.data}</div>
                    </div>
                </div>
                <div className="text-center mt-5  text-white">
                    <div className={WalletButtonShow ? "hidden" : "mt-1"}>
                        <button onClick={() => {
                            SetOpenWalletListState(true)
                        }} className="px-24 py-1.5 rounded-lg bg-[#2C2C2C] text-white">
                            Connect Wallet
                        </button>
                    </div>
                    <div className={WalletButtonShow ? "mt-1" : "hidden"}>
                        <button onClick={swapnow} className="px-24 py-1.5 rounded-lg  font-semibold bg-gradient-to-r from-[#DB5E7F]  via-[#876BD2] to-[#6E93E8] ">
                            Swap
                        </button>
                    </div>
                </div>
            </>
        )


}
const Popular = ()=>{
    const [WalletButtonShow,]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [,setSelectTokenTail] = useAtom(Select_TokenTail)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [swapTokenTail,setSwapTokenTail] = useAtom(SwapTokenTail)

    const selectTokenTop = () =>{
        setSelectTokenTop(true)
    }
    const selectTokenTail = () =>{
        setSelectTokenTail(true)
    }
    return(
        <>
            <div className="bg-gray-900  bg-opacity-70 p-3 rounded-2xl">
                <div className="flex justify-between">
                    <div className="flex bg-gray-600 bg-opacity-70 p-1 rounded-full">
                        <div className="flex">
                            <button onClick={selectTokenTop} className="flex items-center">
                                <div>
                                    <img className="w-6 rounded-full mr-1" src={swapTokenTop.img} alt=""/>
                                </div>
                                <div className="text-gray-200">
                                    {swapTokenTop.name}
                                </div>
                                <i className="fa fa-angle-down text-white ml-3 " aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="text-gray-300 mt-2 text-xs mr-2">
                            Pay from
                        </div>
                        <div className="px-1.5 pt-1.5 text-center text-gray-200 text-sm bg-gray-700 rounded-full ">
                            Wallet
                        </div>
                        <div>
                            <i className="fa fa-question-circle ml-2 mt-1.5 text-gray-300"
                               aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <div className="flex">
                        <input type="text"
                               className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48    hover:border-black focus:border-black transition duration-300  outline-none"
                               placeholder="0.0"
                               id=""
                        />
                    </div>
                    <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance: 0</div>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-1 mt-2">
                        <div className="text-sm leading-5  font-medium px-2">
                            Rate
                        </div>
                        <div className="flex justify-between items-baseline bg-dark-900 rounded px-4 py-1.5 border border-dark-700 hover:border-dark-600">
                            <div className="text-lg leading-6 font-bold relative flex items-baseline flex-grow gap-3 overflow-hidden">
                                <input type="text" pattern="^[0-9]*[.,]?[0-9]*$"
                                       placeholder="0.0"
                                       className="relative font-bold outline-none  flex-auto overflow-hidden overflow-ellipsis  focus:placeholder:text-low-emphesis flex-grow w-20 md:w-24 text-left bg-transparent text-inherit disabled:cursor-not-allowed"/>
                                <div className="text-sm leading-5 font-medium cursor-pointer select-none currentColor">
                                    W3G
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mx-2 md:mx-6 mt-6">
                        <i className=" fa fa-exchange transform rotate-90 text-xs "  aria-hidden="true"></i>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        <div className="text-sm leading-5  font-medium px-2">
                            Expires in
                        </div>
                        <div className="flex justify-between items-baseline bg-dark-900 rounded px-4 py-1.5 border border-dark-700 hover:border-dark-600">
                            <div className="text-lg leading-6 font-bold relative flex items-baseline flex-grow gap-3 overflow-hidden">
                                <select className="relative font-bold outline-none  flex-auto overflow-hidden overflow-ellipsis  focus:placeholder:text-low-emphesis flex-grow w-24 text-left bg-transparent text-inherit disabled:cursor-not-allowed">
                                    <option value ="Never">Never</option>
                                    <option value ="1Hour">1 Hour</option>
                                    <option value="24Hours">24 Hours</option>
                                    <option value="1Week">1 Week</option>
                                    <option value="30Days">30 Days</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 bg-gray-900 p-3 rounded-2xl">
                <div className="flex justify-between">
                    <div className="flex bg-gray-600 bg-opacity-90 p-1 rounded-full">
                        <button onClick={selectTokenTail} className="flex items-center">
                            <div>
                                <img className="w-6 rounded-full mr-1" src={swapTokenTail.img} alt=""/>
                            </div>
                            <div className="text-gray-200">
                                {swapTokenTail.name}
                            </div>
                            <i className="fa fa-angle-down text-white ml-3 " aria-hidden="true"></i>
                        </button>
                    </div>

                </div>

                <div className="flex justify-between mt-5">
                    <div className="flex">
                        <input type="text"
                               className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48    hover:border-black focus:border-black transition duration-300  outline-none"
                               placeholder="0.0"
                               id="IC"
                        />
                    </div>
                    <div className="text-sm mt-2 flex ml-1 text-gray-400">Balance: 0</div>
                </div>
            </div>
            <div className="text-center mt-5  text-black" >
                <div className={WalletButtonShow ? "hidden": "mt-1"}>
                    <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-24 py-1.5 rounded-lg bg-[#2C2C2C] text-white">
                        Connect Wallet
                    </button>
                </div>
                <div className={WalletButtonShow ? "mt-1": "hidden"}>
                    <button onClick={()=>{
                    }} className="px-24 py-1.5 rounded-lg bg-indigo-400">
                        Swap
                    </button>
                </div>
            </div>
        </>
    )
}
const Swap = () =>{
    const router = useRouter()
    let [categories] = useState({
        Recent: [],
        // Popular: [],
    })
    // local address
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
    // token list
    const [tokenlist,settokenList] = useAtom(token_list_and_balance)
    // wallet type
    const [AccountChoose,] = useAtom(AccountChooseValue)
    useEffect(()=>{
        if (router.isReady) {
            let intactWalletAddress_local = intactWalletAddress

            // evm to substrate
            if (AccountChoose == 1){
                intactWalletAddress_local = evm_address_to_sub_address(intactWalletAddress_local)
            }

            //check token balance
            const query_token_balance = async () =>{
                const api = await chain_api(intactWalletAddress)
                const times = tokenlist.length
                let token_list = tokenlist.concat()
                let token_balance = []
                for (let i =0;i<times;i++){
                    const account_token_balance_result = await api.query.tokenFungible.balances(tokenlist[i].tokenId,intactWalletAddress_local);
                    const account_token_balance_decimals = await api.query.tokenFungible.tokens(tokenlist[i].tokenId)
                    const baseNumber = Math.pow(10,account_token_balance_decimals.toJSON().decimals)
                    const token_balance =  Number(account_token_balance_result.toString())
                    const token_balance_real_number = parseFloat(String(cropData((token_balance / baseNumber), 4)))
                    token_list[i].data = token_balance_real_number.toString()
                }
                console.log(token_list)
                settokenList(token_list)
            }
            query_token_balance()
        }
    },[router.isReady])


        // // const swapoutput = (document.getElementById("swapoutput") as HTMLInputElement)
        // // @ts-ignore
        // document.getElementById("swapoutput").value = data
        // // console.log(swapoutput);
    return(
        <div>
            <div className="flex  justify-center  mx-auto px-2 py-12 sm:px-0">
                <div className="p-0.5 rounded-xl bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3 shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-gray-500 ">
                    <div className="bg-black  px-5 py-7 rounded-xl">
                        <Tab.Group>
                            <Tab.List className=" p-1 space-x-1 bg-W3GBG rounded-xl mx-auto  flex justify-between ">
                                <div>
                                    {Object.keys(categories).map((category) => (
                                        <Tab
                                            key={category}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-24 py-3  leading-5 font-medium text-gray-600 ',
                                                    selected
                                                        ? ' text-yellow-50  border-gray-400 shadow'
                                                        : ' hover:bg-white/[0.12] hover:text-white')}>
                                            {category}
                                        </Tab>
                                    ))}
                                </div>
                                <div className="text-white px-2 py-1 text-xl">
                                    <i className="fa fa-cog " aria-hidden="true"></i>
                                </div>
                            </Tab.List>
                            {/*Recent*/}
                            <Tab.Panels className="mt-2 ">
                                <Tab.Panel
                                    className={classNames(' rounded-xl p-1  md:w-97 ')}>

                                    <Recent/>

                                </Tab.Panel>
                                {/*Popular*/}
                                <Tab.Panel className={classNames('text-gray-300 rounded-xl p-1 md:w-97')}>

                                    {/*<Popular/>*/}

                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>

                    </div>
                </div>

            </div>
            <div className="text-gray-600 text-sm flex justify-center text-center md:w-1/2 mx-auto">
                Limit orders use funds from BentoBox, to create a limit order depositing into BentoBox is required.
            </div>
            <div className="text-gray-600 text-sm flex justify-center text-center mt-2 md:w-1/2 mx-auto">
                Tip: When expert mode is enabled, balance isn`t checked when creating orders. You can use this to chain limit orders.
            </div>
            <SelectTokenTop/>
            <SelectTokenTail/>
            <TokenList/>

        </div>
    )
}
export default Swap

