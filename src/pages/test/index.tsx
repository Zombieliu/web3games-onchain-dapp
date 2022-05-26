import React, {Fragment, useEffect, useState } from 'react'
import { BN, nToHex } from '@polkadot/util';
import {ApiPromise,WsProvider} from "@polkadot/api";
import { useAtom } from 'jotai';
import { IntactWalletAddress } from '../../jotai';

const Test = () =>{
    const [intactWalletAddress,] = useAtom(IntactWalletAddress)
    const substrate = async (intactWalletAddress:string) =>{
        const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
        await web3Enable('my cool dapp');
        const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
        const injector = await web3FromAddress(intactWalletAddress);
        const provider = new WsProvider('ws://127.0.0.1:9944');
        const api = await ApiPromise.create({
            provider,
        });
        // const transferExtrinsic = api.tx.exchange.createPool(1,2)
        // const transferExtrinsic = api.tx.exchange.addLiquidity(0,50000000,50000000,0,0,"5CcgM2vkikJv6utQaS6jWDhV6DgnoyacKE81qzXZ52FSxkY8")
        // const transferExtrinsic = api.tx.exchange.swapExactTokensForTokens(0,10000,0,[1,2],"5CcgM2vkikJv6utQaS6jWDhV6DgnoyacKE81qzXZ52FSxkY8")
        // transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ status }) => {
        //     if (status.isInBlock) {
        //         console.log(`Completed at block hash #${status.asInBlock.toString()}`);
        //     } else {
        //         console.log(`Current status: ${status.type}`);
        //     }
        // }).catch((error: any) => {
        //     console.log(':( transaction failed', error);
        // });
    }


    return (
        <div className='relative pt-16'>
            <button onClick={()=>substrate(intactWalletAddress)}>11111</button>
        </div>
    )
}

export default Test
