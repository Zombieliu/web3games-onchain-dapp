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
  SubstrateAddress,
  AfterSubstrateAddressValue,
  AfterSubstrateAddressList,
  IntactWalletAddress,
  CurrentWallet,
} from '../../jotai/index';
import {ExclamationIcon} from "@heroicons/react/solid";


const Login=()=>{
  const [OpenWalletListState, SetOpenWalletListState] = useAtom(WalletListShowState)
  const [,SetWalletButtonShow] = useAtom(WalletButtonShowState)
  const [,ChangeEVMAddress] = useAtom(EVMAddressValue)
  const [,SetAfterEVMAddress] = useAtom(AfterEvmAddressValue)
  const [,SetAccountChooseValue] = useAtom(AccountChooseValue)
  const [walletAddress,SetWalletAddress] =useAtom(WalletAddress)
  const [openSubstrateAddress,SetOpenSubstrateAddress] =useAtom(SubstrateAddress)
  const [AfterSubstrateAddress,SetAfterSubstrateAddress] =useAtom(AfterSubstrateAddressValue)
  const [SubstrateAddressList,SetSubstrateAddressList] = useAtom(AfterSubstrateAddressList)
  const [intactWalletAddress,SetIntactWalletAddress] = useAtom(IntactWalletAddress)
  const [InstallSubstrate,setInstallSubstrate] = useState(false)
  const [InstallMeatMask,setInstallMeatMask] = useState(false)
  const [ currentWallet,SetCurrentWallet] =useAtom(CurrentWallet)
  //
  // //展示地址
  // const [loginEvmAddress,setLoginEvmAddress]=useAtom(loginevmaddress)
  // //是否登陆钱包
  // const [Wallet,setWallet]=useAtom(wallet)
  async function  sdasd () {

    // @ts-ignore
    if ( window.ethereum == 'undefined') {
      console.log('MetaMask is installed!');
    }
  }

  async function  loginMeatMask () {
    // @ts-ignore
   const install =  await  window.ethereum
    if(install){
      // @ts-ignore
      const accountArray = await ethereum.request({method: 'eth_requestAccounts'});
      SetWalletButtonShow(true)
      if (accountArray) {
        ChangeEVMAddress(accountArray[0])
        const first = accountArray[0].slice(0, 6)
        const last = accountArray[0].slice(-5, -1)
        const AfterEVMAddress = first + "...." + last
        SetAccountChooseValue(1)
        SetAfterEVMAddress(accountArray[0])
        SetIntactWalletAddress(accountArray[0])
        SetWalletAddress(AfterEVMAddress)
        SetOpenWalletListState(false)
        SetCurrentWallet("MeatMask")
        location.reload();
      }
    }else {
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
        SetOpenSubstrateAddress(true)
        SetOpenWalletListState(false)
        SetSubstrateAddressList(allAccounts)
        console.log(allAccounts)
      }else{
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
      const first = substrateAddress.slice(0,6)
      const last = substrateAddress.slice(-5,-1)
      const substratePartAddress = first + "...." + last
      SetAfterSubstrateAddress(substrateAddress)
      SetIntactWalletAddress(substrateAddress)
      SetWalletAddress(substratePartAddress)
      SetCurrentWallet("Polkaditjs")
      SetOpenSubstrateAddress(false)
      location.reload();
      }


  }

  return(
      <>
        <Transition.Root show={OpenWalletListState} as={Fragment}>
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={SetOpenWalletListState}>
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
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 lg:p-12 ">
                  <div>
                    <div className='flex justify-between text-xl font-light	'>

                      <div className=" font-bold mb-2 text-2xl">
                        Connect your wallet
                      </div>
                      <button  onClick={() => SetOpenWalletListState(false)}
                               className="fa fa-times " aria-hidden="true"></button>
                    </div>
                    <div className="text-base text-gray-600 lg:w-96 mr-8">
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
                    <div className="text-sm text-gray-500 lg:w-96 ">
                      We do not own your private keys and cannot access your funds without your confirmation.
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={openSubstrateAddress} as={Fragment}>
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={()=>{SetOpenSubstrateAddress(false)}}>
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
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 ">
                  <div>
                    <div className='flex justify-end text-xl'>
                      <button  onClick={() => SetOpenSubstrateAddress(false)}
                               className="fa fa-times " aria-hidden="true"></button>
                    </div>
                    <div className="text-center font-bold mb-5 w-80 md:w-96">
                      Choose Account
                    </div>

                    {SubstrateAddressList.map((item) => (
                        <div key={item.address} onClick={getSubstrateAddressvalue} className=" flex justify-between px-5 py-3 sm: border-t ">
                          <label  htmlFor={item.address} id={item.address}  className="font-medium text-gray-700">
                            {item.meta.name}
                          </label>
                          <input
                              id={item.address}
                              aria-describedby="comments-description"
                              name="comments"
                              type="radio"

                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>   ))}

                    <div className="ml-3 text-sm">

                      <div className="mt-5 sm:mt-6 flex justify-center">
                        <button onClick={loginaccount}
                                type="button"
                                className="inline-flex justify-center px-10  rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
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
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={()=>{setInstallSubstrate(false)}}>
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
                      <button  onClick={() => setInstallSubstrate(false)}
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

                        <button onClick={()=>loginsubstrate()}>
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
          <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={()=>{setInstallMeatMask(false)}}>
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
                      <button  onClick={() => setInstallMeatMask(false)}
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

                        <button onClick={()=>loginMeatMask()}>
                          <div className="flex justify-center ">
                            <img className="w-10 h-10" src="https://portal.web3games.org/icon-wallet-metamask.svg" alt=""/>
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
      </>

  )
  }



 export default Login
