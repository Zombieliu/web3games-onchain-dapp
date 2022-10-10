import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {bnToBn, nToBigInt} from "@polkadot/util";
import BN from 'bn.js';

export default function Example() {
    const [openAdd,setOpenAdd] = useState(false)
    const Show = () =>{

        // let new_result = [1,2]
        // const a = new_result.splice(0,1)
        // console.log(a)

        // var a = new BN('dead', 16);
        // const  b = new BN('1010101231232132131231231231');
        //
        // var res = a.add(b);
        const b = bnToBn('1010101231232132131231231231')
        console.log(nToBigInt(b));  // 57047

        // console.log(Number(token_a_real.toString()),Number(token_b_real.toString()))
        // const token_balance_real_number = (12.000001).toFixed(5-integer_length)
        // console.log(token_balance_real_number)
        // const account_token_balanceA_decimals = await api.query.tokenFungible.tokens(swapTokenTop.tokenId)
        // const account_token_balanceB_decimals = await api.query.tokenFungible.tokens(swapTokenTail.tokenId)
        //
        // const baseNumberA = Math.pow(10,account_token_balanceA_decimals.toJSON().decimals)
        // const baseNumberB = Math.pow(10,account_token_balanceB_decimals.toJSON().decimals)
        //
        // const token_a_real = new BigNumber(token_number).times(BigNumber(baseNumberA))
        // // const token_b_real = new BigNumber(token_b).times(BigNumber(baseNumberB))
        //
        // let token_a_real_result
        // let token_b_real_result
        //
        // if(token_a_real.c.length ==1 ){
        //     const data = token_a_real.c[0]
        //     const length = token_a_real.e - data.toString().length
        //     let string = ''
        //     for (let i = 0 ; i< length+1; i++){
        //         string = string +"0"
        //     }
        //     token_a_real_result = data.toString().concat(string)
        // }else {
        //     token_a_real_result = api.createType("u128",token_a_real.c[0].toString().concat(token_a_real.c[1].toString()))
        // }

    }
    return (
        <>
        <div onClick={Show}>
            1
        </div>
            <div className="flex  justify-center">
                <div className="pr-4">
                    2
                </div>
                <div>3</div>
            </div>
            <Transition.Root show={openAdd} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenAdd}>
                    <div className="flex items-center justify-center min-h-screen    px-4  text-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                             </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root></>

    )
}
