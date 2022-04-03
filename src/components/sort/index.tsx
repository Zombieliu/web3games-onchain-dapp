import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";
import Link from "next/link";
// @ts-ignore
import React from "react";
import {useRouter} from "next/router";
import {useAtom} from "jotai";


const Sort=()=>{
    const router = useRouter()
    return(
        <div>
            <div className="rounded-md   flex justify-end my-5" aria-label="Pagination">
                <Link href="/home">
                    <a

                        className="relative inline-flex items-center px-2 py-2 mr-2 rounded-md bg-gray-500 border border-gray-300  text-sm font-medium text-white "
                    >
                        <span className="">First</span>
                    </a>
                </Link>
                <Link href="/home">
                <a

                    className="relative inline-flex items-center px-2 py-2 rounded-l-md  bg-gray-500 border border-gray-400 text-sm font-medium text-white "
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                </Link>
                    <div className="bg-gray-500  text-white relative inline-flex items-center px-4 py-2 border border-gray-400 text-sm font-medium">
                        Page 1 of 11
                    </div>

                <Link href="/home">
                <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-400 bg-gray-500 text-sm font-medium text-white">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
            </Link>
                <Link href="/home">
                    <a

                        className="relative inline-flex items-center px-2 py-2 ml-2 rounded-md border border-gray-300 bg-gray-500 text-sm font-medium text-white "
                    >
                        <span className="">Last</span>
                    </a>
                </Link>

            </div>
        </div>
    )
}
export default Sort
