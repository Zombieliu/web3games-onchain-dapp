import React, {Fragment, useEffect, useState} from 'react';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import {
  AccountChooseValue,
  AccountConfigPageState,
  WalletButtonShowState,
  WalletListShowState,
  HiddenClaim, WalletAddress, AfterSubstrateAddressList, IntactWalletAddress
} from '../../jotai';
import { CheckCircleIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const FunctionList = () =>{
  // substrate rechoose account
  const [,SetAccountConfig] = useAtom(AccountConfigPageState)
  // account info show
  const [,SetWalletButtonShow]=useAtom(WalletButtonShowState)
  // rechoose account list
  const [,SetOpenWalletListState] = useAtom(WalletListShowState)
  // wall type 1 evm 2 substrate
  const [,SetAccountChooseValue] = useAtom(AccountChooseValue)
  const [,setHidden] = useAtom(HiddenClaim)
  // address show
  const [walletAddress,setWalletAddress] =useAtom(WalletAddress)
  // substrate address list
  const [SubstrateAddressList,SetSubstrateAddressList] = useAtom(AfterSubstrateAddressList)
  // local address
  const [intactWalletAddress,SetIntactWalletAddress] = useAtom(IntactWalletAddress)

  function closewallet(){
    setHidden(true)
    SetAccountConfig(false)
    SetWalletButtonShow(false)
    SetAccountChooseValue(0)
    SetIntactWalletAddress("")
    location.reload();
  }
  function ChangeWallet() {
    SetOpenWalletListState(true)
    setHidden(true)
    SetAccountConfig(false)
    SetWalletButtonShow(false)
    SetAccountChooseValue(0)
    SetIntactWalletAddress("")
  }

  return (
      <>
        <div className="mt-5 flex-col  justify-between ">
          <div className="flex  justify-between  ">
            <div>
              <div className="hidden" id="address">
                {walletAddress}
              </div>
              <button  onClick={closewallet} className="flex text-sm text-gray-300 transition duration-500 hover:text-blue-400 ">
                <i className="fa fa-times mt-0.5 mr-1" aria-hidden="true"></i>
                <div>Close Wallet</div></button>
            </div>
            <button onClick={ChangeWallet} className="flex text-sm text-gray-300 transition duration-500 hover:text-blue-400 w-28">
              <i className="fa fa-list-ul mt-0.5 mr-1 " aria-hidden="true"></i>
              <div>Change Wallet</div>
            </button>
          </div>
        </div>
      </>
  )
}

const Account=()=>{
  const Copy=(span)=>{
    console.log(span)
    const spanText = span;
    const oInput = document.createElement('input');
    oInput.value = spanText;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand('Copy');
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    document.body.removeChild(oInput);
    // if(oInput){
    //   setIsOpen(true)
    // }
  }

  const [AccountConfig,SetAccountConfig] = useAtom(AccountConfigPageState)
  const [walletAddress,] =useAtom(WalletAddress)
  const [token,setToken] = useState("0")
  const [intactWalletAddress,SetIntactWalletAddress] = useAtom(IntactWalletAddress)
  let [isOpen, setIsOpen] = useState(false)



  return(
      <>
    <Transition.Root show={AccountConfig} as={Fragment}>
      <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto -mt-64 md:-mt-32" onClose={SetAccountConfig}>
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
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
            <div className="inline-block align-bottom p-0.5 rounded-lg bg-gradient-to-br from-W3G1  via-W3G2 to-W3G3 rounded-lg   text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">
               <div className="bg-black px-4 py-5 sm:px-6 lg:px-12 rounded-md text-white">
                <div className='flex justify-between text-xl font-light	'>

                  <div className=" font-bold  text-2xl ">
                    Account
                  </div>
                  <button  onClick={() => SetAccountConfig(false)}
                           className="fa fa-times " aria-hidden="true"></button>
                </div>
                <div className="flex justify-between">
                <div className="text-gray-400 mt-2">
                  Your wallet address
                </div>
                </div>
                <div className="mt-5">
                  <button
                      onClick={() => {
                        // @ts-ignore
                        Copy(`${intactWalletAddress}`);}} className="bg-gray-600 p-3 text-white rounded-full w-72 md:w-96 bg-gradient-to-r from-[#DA6081] via-[#8D6BCD]  to-[#7092E7]">
                   <div>
                     {walletAddress}
                   </div>
                  </button>
                  <div id={intactWalletAddress} className="hidden" >
                    {intactWalletAddress}
                  </div>
                </div>
                <FunctionList/>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>

    </Transition.Root>
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog
        as="div"
        className="fixed inset-0 z-40  -mt-72"
        onClose={setIsOpen}
    >
      <div className="min-h-screen px-4 text-center ">
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0"/>
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
        >
              &#8203;
            </span>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
          <div
              className="inline-block  text-center max-w-md p-3  overflow-hidden text-left align-middle transition-all transform bg-green-50 shadow-xl rounded-2xl">

            <div className="flex justify-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true"/>
            </div>
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
            >
              Copy successfully !
            </Dialog.Title>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>

  </>
  )
}
export default Account
