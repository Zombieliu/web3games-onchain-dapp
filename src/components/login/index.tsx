import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import {
  AccountChooseValue,
  WalletButtonShowState,
  WalletListShowState,
  WalletAddress,
  AfterSubstrateAddressList,
  IntactWalletAddress,
} from '../../jotai/index';
import {ExclamationIcon} from "@heroicons/react/solid";
import { address_slice } from '../../utils/chain/address';


const Login=()=>{
  // open wallet choose list
  const [OpenWalletListState, SetOpenWalletListState] = useAtom(WalletListShowState)
  // open account info
  const [,SetWalletButtonShow] = useAtom(WalletButtonShowState)
  // null = 0 evm = 1 substrate = 2
  const [,SetAccountChooseValue] = useAtom(AccountChooseValue)
  // address
  const [walletAddress,setWalletAddress] =useAtom(WalletAddress)
  // open substrate list choose
  const [openSubstrateAddress,SetOpenSubstrateAddress] = useState(false)
  // substrate address list
  const [SubstrateAddressList,SetSubstrateAddressList] = useAtom(AfterSubstrateAddressList)
  // local address
  const [,SetIntactWalletAddress] = useAtom(IntactWalletAddress)
  // sub wallet install check
  const [InstallSubstrate,setInstallSubstrate] = useState(false)
  // metamask wallet instal check
  const [InstallMeatMask,setInstallMeatMask] = useState(false)
  // login metamask
  async function  loginMeatMask () {
    // @ts-ignore
   const install = await window.ethereum
    if(install){
      // @ts-ignore
      const accountArray = await ethereum.request({method: 'eth_requestAccounts'});
      if (accountArray) {
        // set choose type evm
        SetAccountChooseValue(1)
        // set local address
        const account = accountArray[0]
        SetIntactWalletAddress(account)
        // set show address
        setWalletAddress(address_slice(account))
        // close wallet choose list
        SetOpenWalletListState(false)
        //open wallet Button
        SetWalletButtonShow(true)
        // refresh page
        location.reload();
      }
    }else {
      // set account value
      SetAccountChooseValue(0)
      // metamask install page
      setInstallMeatMask(true)
    }
  }

  async function loginsubstrate() {
    // await LoginSubstrate()
    if (window){
      const isWeb3Injected = (await import("@polkadot/extension-dapp")).isWeb3Injected;
      const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
      const allInjected = await web3Enable('my cool dapp');
      const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
      const allAccounts = await web3Accounts();
      if (isWeb3Injected) {
        // input all substrate address
        SetSubstrateAddressList(allAccounts)
        // close wallet choose list
        SetOpenWalletListState(false)
        SetOpenSubstrateAddress(true)
      }else{
        // substrate wallet install page
        setInstallSubstrate(true)
      }
    }
  }

  let substrateName
  let substrateAddress
  const getSubstrateAddressvalue =(e)=>{
    substrateName =e.currentTarget.firstElementChild.innerHTML
    substrateAddress = e.currentTarget.firstElementChild.getAttribute('id')
  }
  const loginaccount=()=>{
    if (substrateAddress){
      SetAccountChooseValue(2);
      SetIntactWalletAddress(substrateAddress)
      SetOpenSubstrateAddress(false)
      SetWalletButtonShow(true)
      setWalletAddress(address_slice(substrateAddress))
      location.reload();
      }
  }

  const close_wallet_list = () =>{
    SetOpenWalletListState(false)
  }

  const metamask_install = () => {
    setInstallMeatMask(false)
  }

  const substrate_wallet_install = () => {
    setInstallSubstrate(false)
  }

  const rechoose_substrate_address = () => {
    SetOpenSubstrateAddress(false)
  }
  return(
      <>
        <Transition.Root show={OpenWalletListState} as={Fragment}>
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={close_wallet_list}>
            <div className="flex items-center justify-center min-h-screen  px-4 pb-20 text-center sm:block -mt-10">
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
                <div className="inline-block align-bottom p-0.5 rounded-lg bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">

                    <div className="bg-black px-4 py-5 sm:px-6 lg:px-12 rounded-md sm:p-6 lg:p-12">


                    <div className='flex justify-between text-xl font-light	'>

                      <div className=" font-bold mb-2 text-2xl text-white">
                        Connect your wallet
                      </div>
                      <button  onClick={close_wallet_list}
                               className="fa fa-times text-white text-2xl " aria-hidden="true"></button>
                    </div>
                    <div className="text-base text-gray-300 lg:w-96 mr-8">
                      Connect with one of available wallet providers or create a new wallet.</div>


                    <button onClick={loginMeatMask} className="bg-neutral-700 text-white flex justify-between  p-4 rounded-lg w-full my-8">
                      <div className="text-lg font-semibold">
                        MetaMask
                      </div>
                      <div>
                        <img className="w-8 h-8" src="https://portal.web3games.org/icon-wallet-metamask.svg" alt=""/>
                      </div>
                    </button>

                    <button className="bg-neutral-700 flex justify-between text-white p-4 rounded-lg w-full my-8">
                      <div className="text-lg font-semibold">
                        WalletConnect
                      </div>
                      <div>
                        <img className="w-8 h-8" src="https://portal.web3games.org/icon-wallet-walletconnect.svg" alt=""/>
                      </div>
                    </button>
                    <button onClick={loginsubstrate} className="bg-neutral-600 flex justify-between text-white p-4 rounded-lg w-full my-8">
                      <div className="text-lg font-semibold">
                        Polkadotjs
                      </div>
                      <div>
                        <img className="w-8 h-8 rounded-lg" src="https://cdn.discordapp.com/attachments/876498266550853642/908665467273613392/unknown.png" alt=""/>
                      </div>
                    </button>
                    <div className="text-sm text-gray-500 lg:w-96 ">
                      We do not own your private keys and cannot access your funds without your confirmation.
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* open substrate address list */}
        <Transition.Root show={openSubstrateAddress} as={Fragment}>
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={rechoose_substrate_address}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
                <div className="inline-block align-bottom p-0.5 rounded-lg bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle   ">
                  <div className="bg-black px-4 py-5 sm:px-6 lg:px-12 rounded-md sm:p-6">

                    <div className='flex justify-end text-xl'>
                      <button  onClick={rechoose_substrate_address}
                               className="fa fa-times " aria-hidden="true"></button>
                    </div>
                    <div className="text-center text-white font-bold mb-5 w-80 md:w-96">
                      Choose Account
                    </div>

                    {SubstrateAddressList.map((item) => (
                        <div key={item.address} onClick={getSubstrateAddressvalue} className=" flex justify-between px-5 py-3 sm: border-t items-center">
                          <label  htmlFor={item.address} id={item.address}  className="font-medium text-white">
                            {item.meta.name}
                          </label>
                          <input
                              id={item.address}
                              aria-describedby="comments-description"
                              name="comments"
                              type="radio"
                              className="accent-[#8E6CCD] h-4 w-4 text-white border-gray-300 rounded"
                          />
                        </div>   ))}

                    <div className="ml-3 text-sm">

                      <div className="mt-5 sm:mt-6 flex justify-center">
                        <button onClick={loginaccount}
                                type="button"
                                className="inline-flex justify-center px-10  rounded-md   shadow-sm px-4 py-2 bg-gradient-to-r from-W3G1  via-W3G2 to-W3G3 text-base font-medium text-white  sm:text-sm"
                        >
                          login
                        </button>
                      </div>


                      <div className="mt-2">

                      </div>
                    </div>
                  </div>

                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={InstallSubstrate} as={Fragment}>
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={substrate_wallet_install}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4  text-center sm:block sm:p-0">
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
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   sm:p-6 ">
                  <div>
                    <div className='flex justify-end text-xl'>
                      <button  onClick={substrate_wallet_install}
                               className="fa fa-times " aria-hidden="true"></button>
                    </div>

                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-2">
                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="text-center font-bold px-40">
                      Connection Failed
                    </div>
                    <div className="mt-3 px-5 sm:mt-5 border-t ">
                      <div className="flex my-3 justify-center ">Download Polkadot[js] Extension
                        <a  className="text-blue-400 ml-0.5" href="https://polkadot.js.org/extension/">here</a>.</div>
                      <Dialog.Title as="h3" className="mt-3 text-center text-lg leading-6 font-medium text-gray-900">

                        <button onClick={loginsubstrate}>
                          <div className="flex justify-center">
                            <img className="w-10 h-10" src="/substrate.svg" alt=""/>
                            <h1 className="ml-2 mt-2">Try Again</h1>
                            <div className="text-center mt-1.5 text-xl"><i className="ml-10  fa fa-arrow-right" aria-hidden="true"></i></div>
                          </div></button>
                      </Dialog.Title>
                      <div className="mt-2">

                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={InstallMeatMask} as={Fragment}>
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={metamask_install}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4  text-center sm:block sm:p-0">
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
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   sm:p-6 ">
                  <div>
                    <div className='flex justify-end text-xl'>
                      <button  onClick={metamask_install}
                               className="fa fa-times " aria-hidden="true"></button>
                    </div>

                    <div className="mx-auto flex-shrink-0 flex items-center  justify-center h-12 w-12 rounded-full bg-red-100 mb-2">
                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="text-center font-bold px-40">
                      Connection Failed
                    </div>
                    <div className="mt-3 px-5 sm:mt-5 border-t ">
                      <div className="flex my-3 justify-center ">Download MeatMask Extension
                        <a  className="text-blue-400 ml-0.5" href="https://metamask.io/download/">here</a>.</div>
                      <Dialog.Title as="h3" className="mt-3 text-center text-lg leading-6 font-medium text-gray-900">

                        <button onClick={loginMeatMask}>
                          <div className="flex justify-center ">
                            <img className="w-10 h-10" src="https://portal.web3games.org/icon-wallet-metamask.svg" alt=""/>
                            <h1 className="ml-2 mt-2">Try Again</h1>
                            <div className="text-center mt-1.5 text-xl"><i className="ml-10  fa fa-arrow-right" aria-hidden="true"></i></div>
                          </div>
                        </button>
                      </Dialog.Title>
                      <div className="mt-2">

                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </>

  )
  }



 export default Login
