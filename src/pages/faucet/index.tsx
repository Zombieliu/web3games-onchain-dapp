import React, {Fragment, useEffect, useRef, useState} from 'react'
import Tail from '../../components/tail'
import { Listbox, Dialog,Transition, RadioGroup } from '@headlessui/react';
import {ExclamationIcon } from "@heroicons/react/outline";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import axios from "axios";
import {useRouter} from "next/router";
import Header from "../../components/header/index.";
import check_address from "../../utils";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const types = [
    { id: 1, name: 'EVM' },
    { id: 2, name: 'Substrate' },
]

const token = [
    { id: 1, name: 'W3G' },
]

 const Faucet = ()  => {
    const cancelButtonRef = useRef(null)
    const [selected, setSelected] = useState(types[0])
    const [selectedToken,setSelectedToken] = useState(token[0])
    const [openload ,setOpenload]= useState(false)
    const [success, successchange] = useState(false)
    const [fail, failchange] = useState(false)
    const router=useRouter()

    useEffect(()=>{

    },[router.isReady])

    function sendtoken(){
        let inputValue = (document.getElementById('faucet') as HTMLInputElement).value;
        let check_result = check_address(inputValue);
        console.log(check_result)
        if (selected.id == check_result) {
            setOpenload(true);
            if (check_result == 1) {
                axios.get('https://pro.ip-api.com/json/?key=NyhIAYaqlelxAUZ&fields=status,message,country,city,query')
                    .then(function (response) {
                        if (response.data){
                            let {query,country,city} = response.data
                            // https://explorer-devnet-restful-api.web3games.org/api/insert/user
                            // http://47.242.8.196:3004/api/insert/user
                            // http://localhost:3004/api/insert/user
                            axios.post('https://explorer-devnet-restful-api.web3games.org/api/add_evm_address', {
                                address: inputValue,
                                ip: query,
                                country,
                                city
                            })
                                .then(function (response) {
                                    // let error = 'Invalid Parameters (you can not get w3g ,you know why!!!!)';
                                    let success_data = 'Success';
                                    // console.log(response.data.message)
                                    if (response.data.message == success_data){
                                        successchange(true)
                                        setOpenload(false);
                                    }else{
                                        failchange(true);
                                        setOpenload(false);
                                    }
                                })
                                .catch(function (error) {
                                    alert(error)
                                });
                        }else{
                            alert('no ip')
                        }
                    })
                    .catch(function (error) {
                        alert(error)
                    });
            } else if (check_result == 2) {
                axios.get('https://pro.ip-api.com/json/?key=NyhIAYaqlelxAUZ&fields=status,message,country,city,query')
                    .then(function (response) {
                        if (response.data){
                            let {query,country,city} = response.data
                            // https://explorer-devnet-restful-api.web3games.org/api/insert/user
                            // http://47.242.8.196:3004/api/insert/user
                            // http://localhost:3004/api/insert/user
                            axios.post('https://explorer-devnet-restful-api.web3games.org/api/add_sub_address', {
                                address: inputValue,
                                ip: query,
                                country,
                                city
                            })
                                .then(function (response) {
                                    // let error = 'Invalid Parameters (you can not get w3g ,you know why!!!!)';
                                    let success_data = 'Success';
                                    // console.log(response.data.message)
                                    if (response.data.message == success_data){
                                        successchange(true)
                                        setOpenload(false);
                                    }else{
                                        failchange(true);
                                        setOpenload(false);
                                    }
                                })
                                .catch(function (error) {
                                    alert(error)
                                });
                        }else{
                            alert('no ip')
                        }
                    })
                    .catch(function (error) {
                        alert(error)
                    });
            } else {
                alert("you input error address")
            }
        }
    }

    function alwaystrue(){
        return true
    }
    return (
      <div className="mx-auto bg-W3GBG transition duration-700">
          <Header/>
          <div className="max-w-4xl mx-auto py-16  px-4 ">
              <div className="p-1 rounded-md bg-gradient-to-r from-W3G1 my-10 via-W3G2 to-W3G3  backdrop-blur-sm">
                  <div className="p-10 bg-W3GBG  backdrop-blur-sm  rounded-md ">
                      <div className="mx-auto flex justify-between items-center">

                          <div className="text-xl my-2 lg:my-0 text-3xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-W3G1  via-W3G2 to-W3G3">
                              Get Test Tokens
                          </div>
                      </div>
                      <div className="text-white mt-5">
                          This faucet transfers TestToken on Matic testnets and parent chain. Confirm details before submitting.This faucet transfers TestToken on Matic testnets and parent chain. Confirm details before submitting.
                      </div>

                      <div className="mt-16  items-center">
                          <label htmlFor="location" className="block text-xl font-semibold text-white  mb-4">
                              Account Type
                          </label>
                          <RadioGroup value={selected} onChange={setSelected}>
                              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 ">
                                  {types.map((type) => (
                                      <RadioGroup.Option
                                          key={type.id}
                                          value={type}
                                          className={({ checked, active }) =>
                                              classNames(
                                                  checked ? 'border-transparent' : 'border-gray-300',
                                                  active ? '' : '',
                                                  'relative bg-neutral-800 border border-gray-200 rounded-lg shadow-sm p-2 flex cursor-pointer focus:outline-none '
                                              )
                                          }
                                      >
                                          {({ checked, active }) => (
                                              <>
                                                  <div className="flex-1 flex justify-center">
                                                      <div className="flex flex-col ">
                                                          <RadioGroup.Label  className="block text-xl text-white  ">
                                                              {type.name}
                                                          </RadioGroup.Label>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className={classNames(
                                                          active ? 'border-2 ' : 'border-2',
                                                          checked ? 'border-indigo-500' : 'border-transparent',
                                                          'absolute -inset-px rounded-lg pointer-events-none '
                                                      )}
                                                      aria-hidden="true"
                                                  />
                                              </>
                                          )}
                                      </RadioGroup.Option>
                                  ))}
                              </div>
                          </RadioGroup>
                      </div>

                      <div className="mt-5  items-center">
                          <label htmlFor="location" className="block text-xl font-semibold text-white  mb-4">
                              Seletct Token
                          </label>
                          <Listbox value={selectedToken} onChange={setSelectedToken} >
                              {({ open }) => (
                                  <>
                                      <div className=" relative ">
                                          <Listbox.Button className="relative bg-neutral-900 text-xs md:text-sm  2xl:text-lg rounded-lg p-3 text-white   w-full  border border-neutral-700   focus:border-neutral-700  outline-none ">
                                              <span className="block truncate  text-lg w-full mr-5 xl:mr-2"> {selectedToken.name}</span>
                                              <span className="absolute inset-y-0  right-0 flex items-center  pointer-events-none">
                                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                          </Listbox.Button>

                                          <Transition
                                              show={open}
                                              as={Fragment}
                                              leave="transition ease-in duration-100"
                                              leaveFrom="opacity-100"
                                              leaveTo="opacity-0"
                                          >
                                              <Listbox.Options className="absolute z-10 mt-1 w-full bg-black shadow-lg max-h-60 rounded-md py-1 text-base    overflow-auto  sm:text-sm">
                                                  {token.map((type) => (
                                                      <Listbox.Option
                                                          key={type.id}
                                                          className={({ active }) =>
                                                              classNames(
                                                                  active ? 'text-white bg-neutral-600' : 'text-gray-600',
                                                                  'cursor-default select-none relative py-2 pl-8 pr-4'
                                                              )
                                                          }
                                                          value={type}
                                                      >
                                                          {({ selected, active }) => (
                                                              <>
                                                                  <span className={classNames(selected ? 'font-semibold ' : 'font-normal', 'block truncate text-white')}>
                                                                      {type.name}
                                                                  </span>
                                                                  {selected ? (
                                                                      <span
                                                                          className={classNames(
                                                                              active ? 'text-white' : 'text-indigo-600',
                                                                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                          )}>
                                                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                      </span>) : null}
                                                              </>
                                                          )}
                                                      </Listbox.Option>
                                                  ))}
                                              </Listbox.Options>
                                          </Transition>
                                      </div>
                                  </>
                              )}
                          </Listbox>
                      </div>

                      <div className="mt-5  items-center">
                          <label htmlFor="location" className="block text-xl font-semibold text-white  mb-4">
                              Wallet Address
                          </label>
                          <input type="text"
                                 className="bg-neutral-900 text-xs md:text-sm  2xl:text-lg rounded-lg p-3 text-white focus:border-neutral-400  w-full  border border-neutral-700    outline-none "
                                 placeholder=""
                                 autoComplete="off"
                                 id="faucet"
                          />

                      </div>

                      <p className="flex justify-center text-center text-base font-medium text-gray-500">

                          <button  onClick={sendtoken} className="mt-10 rounded-full  px-32 py-2 bg-gradient-to-r from-W3G2   to-W3G3 text-white font-bold text-gray-600 text-base  "
                          >
                              Claim
                          </button>
                      </p>
                  </div>
              </div>
              </div>

          <Transition.Root show={openload} as={Fragment}>
              <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={alwaystrue}>
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
                          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                              <div>
                                  <div className="mx-auto flex items-center justify-center h-12 animate-spin w-12 text-5xl ">
                                      <i className="fa fa-spinner" aria-hidden="true"></i>

                                  </div>
                                  <div className="mt-3 text-center sm:mt-5">
                                      <Dialog.Title as="h3" className=" text-lg leading-6 font-medium text-gray-900">
                                          Loading.......
                                      </Dialog.Title>
                                      <div className="mt-2">
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-5 sm:mt-6">
                              </div>
                          </div>
                      </Transition.Child>
                  </div>
              </Dialog>
          </Transition.Root>
          <Transition.Root show={success} as={Fragment}>
              <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={alwaystrue}>
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
                          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                              <div>
                                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                      <CheckIcon className="h-6 w-6  text-green-600" aria-hidden="true" />
                                  </div>
                                  <div className="mt-3 text-center sm:mt-5">
                                      <Dialog.Title as="h3" className=" text-lg leading-6 font-medium text-gray-900">
                                          Claim W3G successful
                                      </Dialog.Title>
                                      <div className="mt-2">

                                      </div>
                                  </div>
                              </div>
                              <div className="mt-5 sm:mt-6">
                                  <button
                                      type="button"
                                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                      onClick={() => successchange(false)}
                                  >
                                      Go back to home
                                  </button>
                              </div>
                          </div>
                      </Transition.Child>
                  </div>
              </Dialog>
          </Transition.Root>
          <Transition.Root show={fail} as={Fragment}>
              <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={alwaystrue}>
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
                      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
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
                          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                              <div className="sm:flex sm:items-start">
                                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                  </div>
                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                          Claim failed
                                      </Dialog.Title>
                                      <div className="mt-2">
                                          <p className="text-sm text-gray-500">
                                              Please recheck your network and account
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                  <button
                                      type="button"
                                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={sendtoken}
                                  >
                                      Retry
                                  </button>
                                  <button
                                      type="button"
                                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                      onClick={() => failchange(false)}
                                      ref={cancelButtonRef}
                                  >
                                      Cancel
                                  </button>
                              </div>
                          </div>
                      </Transition.Child>
                  </div>
              </Dialog>
          </Transition.Root>
          <Tail></Tail>
        </div>

    )
}

export default Faucet
