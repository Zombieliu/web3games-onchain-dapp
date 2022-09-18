import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useEffect, useState } from 'react'
import {useAtom} from "jotai";
import {
    AccountChooseValue,
    IntactWalletAddress,
    Select_TokenTop,
    SwapTokenTail,
    SwapTokenTop,
    WalletButtonShowState, WalletListShowState
} from "../../jotai";
import { BN, nToHex } from '@polkadot/util';
import { useRouter } from "next/router";
import { check_balance } from "../../utils/chain/balance";
import { evm_address_to_sub_address } from "../../utils/chain/address";
import {ApiPromise,WsProvider} from "@polkadot/api";
import SelectTokenTop from "../../components/selecttokentop";
import Heads from "../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function insertStr(source, start, newStr){
    return source.slice(0, start) + newStr + source.slice(start);
}

const substarte_send = async (intactWalletAddress:string) =>{
    const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
    await web3Enable('my cool dapp');
    const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
    const injector = await web3FromAddress(intactWalletAddress);
    const provider = new WsProvider('wss://devnet.web3games.org');
    const api = await ApiPromise.create({
        provider,
    });
    const transferExtrinsic = api.tx.balances.transfer('5GrhDF1nyvr2nwgvXtY96RoFs5xr15W7WyHg32LkQRz6X8Pk', 123456)
    transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ status }) => {
        if (status.isInBlock) {
            console.log(`Completed at block hash #${status.asInBlock.toString()}`);
        } else {
            console.log(`Current status: ${status.type}`);
        }
    }).catch((error: any) => {
        console.log(':( transaction failed', error);
    });


    // api.tx.balances
    //   .transfer('5GrhDF1nyvr2nwgvXtY96RoFs5xr15W7WyHg32LkQRz6X8Pk', 123456)
    //   .signAndSend(intactWalletAddress, { signer: injector.signer });
}

const token_transfer = async (AccountChooseValueType:number,intactWalletAddress:string) =>{
    if (AccountChooseValueType === 1){
        const transfer_number  = (document.getElementById('transfer') as HTMLInputElement).value
        const transfer_price_bn = new BN(transfer_number).mul(new BN('1000000000000000000'));
        const transfer_price_hex = nToHex(transfer_price_bn);
        const transfer_address  = (document.getElementById('Receiver') as HTMLInputElement).value
        console.log(transfer_price_hex)
        let accounts = [];
        // @ts-ignore
        async function getAccount() {
            // @ts-ignore
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts)
        }
        await getAccount()
        // @ts-ignore
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: accounts[0],
                    to: transfer_address,
                    value: transfer_price_hex,
                    gasPrice: '0x09184e72a000',
                    gas: '0x5208',
                    chainId:0x69,
                },
            ],
        })
          .then((txHash) => console.log(txHash))
          .catch((error) => console.error);
    }else if (AccountChooseValueType === 2){
       await substarte_send(intactWalletAddress)
    }
}

const Transfer = () =>{
    const router = useRouter()
    const [AccountChooseValueType,] = useAtom(AccountChooseValue)
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [balance,setBalance] = useState('0')
    const [WalletButtonShow,]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const ChooseToken = () =>{
        setSelectTokenTop(true)
    }

    useEffect(()=>{
        if (router.isReady){
            if (AccountChooseValueType === 1){
                const query_balance = async ()=>{
                    // @ts-ignore
                    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                    const account = accounts[0];
                    const substrate = evm_address_to_sub_address(account)
                    const balance = await check_balance(substrate)
                    const unit = new BN(balance).div(new BN('10000000000000000')).toString();
                    const new_data = unit.substring(0,3)
                    const result = insertStr(new_data,1,'.')
                    setBalance(result)
                }
            }else{
                console.log('1');
            }
        }
    },[router.isReady])

    return (
        <div>
            <Heads/>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-md relative px-5 py-16 lg:py-32 sm:px-6  mx-auto ">
                            <div className="bg-gray-900 bg-opacity-60 p-3 rounded-2xl">
                                <div className="p-5 text-white text-2xl font-semibold">
                                    Transfer on Web3Games
                                </div>
                                <div className="mt-5 p-5 border-t border-gray-500">
                                    <div className="flex justify-between">
                                    <div className="text-white font-semibold">
                                        Asset
                                    </div>
                                    <div className="text-indigo-500 flex">
                                        Balance:
                                        <div>{balance}</div>
                                    </div></div>
                                    <div className="flex mt-5">
                                        <div className="flex  -mr-3">
                                            <button onClick={ChooseToken} className="flex -mr-36 mt-2.5 z-20">
                                                <div>
                                                    <img className="w-6 rounded-full mr-1" src={swapTokenTop.img} alt=""/>
                                                </div>
                                                <div className="text-gray-200">
                                                    {swapTokenTop.name}
                                                </div>
                                                <i className="fa fa-angle-down text-white ml-3 mt-1" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <input type="text"
                                               className="pl-40 bg-gray-700 bg-opacity-30 text-xs text-right md:text-sm text-white  rounded-lg  p-3  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                               placeholder="Input transfer amount"
                                               id="transfer"
                                        />
                                    </div>
                                    <div className="mt-5 ">
                                        <div className="text-white font-semibold">
                                            Receiver
                                        </div>
                                        <div className="mt-5 -ml-3 mr-3">
                                        <input type="text"
                                               className=" bg-gray-700 bg-opacity-30 text-xs  md:text-sm text-white  rounded-lg  p-3  w-full  hover:border-black focus:border-black transition duration-300  outline-none"
                                               placeholder="Support ethereum,substrate address"
                                               id="Receiver"
                                        />
                                        </div>
                                    </div>
                                    <div className="text-center mt-5 " >
                                        <div className={WalletButtonShow  ? "hidden": "mt-1"}>
                                            <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-24 py-1.5 rounded-lg bg-[#2C2C2C] text-white ">
                                                Connect Wallet
                                            </button>
                                        </div>
                                        <div className={WalletButtonShow  ? "mt-1": "hidden"}>
                                            <button onClick={()=>{
                                                token_transfer(AccountChooseValueType,intactWalletAddress)
                                            }} className="px-24 py-1.5 rounded-lg bg-indigo-400">
                                                Transfer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SelectTokenTop/>
            <Tail/>
        </div>
    )
}

export default Transfer
