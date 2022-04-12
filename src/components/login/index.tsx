import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import {
  AccountChooseValue,
  AfterEvmAddressValue,
  EVMAddressValue,
  WalletButtonShowState,
  WalletListShowState,
  WalletAddress,
} from '../../jotai/index';


const Login=()=>{
  const [OpenWalletListState, SetOpenWalletListState] = useAtom(WalletListShowState)
  const [,SetWalletButtonShow] = useAtom(WalletButtonShowState)
  const [,ChangeEVMAddress] = useAtom(EVMAddressValue)
  const [,SetAfterEVMAddress] = useAtom(AfterEvmAddressValue)
  const [,SetAccountChooseValue] = useAtom(AccountChooseValue)
  const [,SetWalletAddress] =useAtom(WalletAddress)

  //
  // //展示地址
  // const [loginEvmAddress,setLoginEvmAddress]=useAtom(loginevmaddress)
  // //是否登陆钱包
  // const [Wallet,setWallet]=useAtom(wallet)

  async function  loginMeatMask (){
    // @ts-ignore
    const accountArray = await ethereum.request({ method: 'eth_requestAccounts' });
    SetWalletButtonShow(true)

    if (accountArray){
      ChangeEVMAddress(accountArray[0])
      SetWalletAddress(accountArray[0])
      const first = accountArray[0].slice(0,6)
      const last = accountArray[0].slice(-5,-1)
      const AfterEVMAddress = first + "...." + last
      SetAccountChooseValue(1)
      SetAfterEVMAddress(AfterEVMAddress)
      SetOpenWalletListState(false)
      location.reload();
    }
    // const first = account[0].slice(0,6)
    // const last = account[0].slice(-5,-1)
    // const data = first + "...." + last
  }

  async function loginsubstrate() {
    // await LoginSubstrate()
    const isWeb3Injected = (await import("@polkadot/extension-dapp")).isWeb3Injected;
    const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
    const allInjected = await web3Enable('my cool dapp');
    const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
    const allAccounts = await web3Accounts();
    SetAccountChooseValue(2);
    SetOpenWalletListState(false);
    location.reload();
    // if (isWeb3Injected) {
    //   setWallet(true)
    //   setOpentrue(true)
    //   setOpentrue(allAccounts)
    //   console.log(allAccounts)
    // }
  }
  return(
      <Transition.Root show={OpenWalletListState} as={Fragment}>
        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={SetOpenWalletListState}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 lg:p-12 ">
                <div>
                  <div className='flex justify-between text-xl font-light	'>

                    <div className=" font-bold mb-2 text-2xl">
                      Connect your wallet
                    </div>
                    <button  onClick={() => SetOpenWalletListState(false)}
                             className="fa fa-times " aria-hidden="true"></button>
                  </div>
                  <div className="text-base text-gray-600 w-96 mr-8">
                    Connect with one of available wallet providers or create a new wallet.</div>


                  <button onClick={loginMeatMask} className="bg-black flex justify-between text-white p-4 rounded-lg w-full my-8">
                    <div className="text-lg font-semibold">
                      MetaMask
                    </div>
                    <div>
                      <img className="w-8 h-8" src="https://portal.web3games.org/icon-wallet-metamask.svg" alt=""/>
                    </div>
                  </button>

                  <button className="bg-black flex justify-between text-white p-4 rounded-lg w-full my-8">
                    <div className="text-lg font-semibold">
                      WalletConnect
                    </div>
                    <div>
                      <img className="w-8 h-8" src="https://portal.web3games.org/icon-wallet-walletconnect.svg" alt=""/>
                    </div>
                  </button>
                  <button onClick={loginsubstrate} className="bg-black flex justify-between text-white p-4 rounded-lg w-full my-8">
                    <div className="text-lg font-semibold">
                      Polkadotjs
                    </div>
                    <div>
                      <img className="w-8 h-8 rounded-lg" src="https://cdn.discordapp.com/attachments/876498266550853642/908665467273613392/unknown.png" alt=""/>
                    </div>
                  </button>
                  <div className="text-sm text-gray-500 w-96 ">
                    We do not own your private keys and cannot access your funds without your confirmation.
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
  )
  }



 export default Login
