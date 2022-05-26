import React, {Fragment, useEffect, useState} from 'react';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import {
  AccountChooseValue,
  AccountConfigPageState,
  AfterEvmAddressValue,
  EVMAddressValue,
  WalletButtonShowState,
  WalletListShowState,
  HiddenClaim, SetSubstrateShowState, WalletAddress, AfterSubstrateAddressList, IntactWalletAddress
} from '../../jotai';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const FunctionList = () =>{
  const [,SetAccountConfig] = useAtom(AccountConfigPageState)
  const [,ChangeEVMAddress] = useAtom(EVMAddressValue)
  const [,SetWalletButtonShow]=useAtom(WalletButtonShowState)
  const [,SetOpenWalletListState] = useAtom(WalletListShowState)
  const [,SetAccountChooseValue] = useAtom(AccountChooseValue)
  const [substrateShow,SetSubstrateShow] =useAtom(SetSubstrateShowState)
  const [,setHidden] = useAtom(HiddenClaim)
  const [walletAddress,setWalletAddress] =useAtom(WalletAddress)
  const [SubstrateAddressList,SetSubstrateAddressList] = useAtom(AfterSubstrateAddressList)
  const [intactWalletAddress,SetIntactWalletAddress] = useAtom(IntactWalletAddress)
  function closewallet(){
    setHidden(true)
    SetAccountConfig(false)
    ChangeEVMAddress("")
    SetWalletButtonShow(false)
    SetSubstrateShow(false)
    SetAccountChooseValue(0)
    SetSubstrateAddressList([])
    SetIntactWalletAddress("")
    setWalletAddress("")
  }
  function ChangeWallet() {
    SetOpenWalletListState(true)
    closewallet()
  }




  return (
      <>
        <div className="mt-5 flex-col  justify-between ">
          <div className="flex  justify-between  ">
            <div>
              <div className="hidden" id="address">
                {walletAddress}
              </div>
              <button  className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                <i className="fa fa-clone mt-0.5 mr-1" aria-hidden="true"></i>
                <div>Copy Address</div></button>
            </div>
            <button onClick={ChangeWallet} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
              <i className="fa fa-list-ul mt-0.5 mr-1 " aria-hidden="true"></i>
              <div>Change Wallet</div>
            </button>
          </div>
          <div className="mt-2 flex justify-between">
            <button  onClick={closewallet} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 ">
              <i className="fa fa-times mt-0.5 mr-1" aria-hidden="true"></i>
              <div>Close Wallet</div></button>

          </div>

        </div>
      </>
  )
}

const Account=()=>{
  const [AccountConfig,SetAccountConfig] = useAtom(AccountConfigPageState)
  const [walletAddress,] =useAtom(WalletAddress)
  const [token,setToken] = useState("0")
  const [intactWalletAddress,SetIntactWalletAddress] = useAtom(IntactWalletAddress)

  const CopyAddress = () => {
    const oInput = document.createElement('input');
    oInput.value = intactWalletAddress;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand('Copy');
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    document.body.removeChild(oInput);
    console.log(intactWalletAddress)
    // SetCopyStyle(true)
    // setTimeout( function (){
    //   SetCopyStyle(false)},2000)
  }


  // console.log(Address)

  return(
    <Transition.Root show={AccountConfig} as={Fragment}>
      <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto -mt-64 md:-mt-32" onClose={SetAccountConfig}>
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 lg:p-12 ">
              <div>
                <div className='flex justify-between text-xl font-light	'>

                  <div className=" font-bold  text-2xl ">
                    Account
                  </div>
                  <button  onClick={() => SetAccountConfig(false)}
                           className="fa fa-times " aria-hidden="true"></button>
                </div>
                <div className="flex justify-between">
                <div className="text-gray-400 mt-2">
                  Your waller address
                </div>
                  <div className="mt-2">
                    {token} Token
                  </div>
                </div>
                <div className="mt-5">
                  <button onClick={CopyAddress} className="bg-gray-600 p-3 text-white rounded-full w-72 md:w-96">
                    {walletAddress}
                    <div className="hidden" id="address">
                      {intactWalletAddress}
                    </div>
                  </button>
                </div>
                <FunctionList/>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Account
