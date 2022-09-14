import Link from "next/link";

export default function Error() {
    return (
        <>
            <main
                className="min-h-screen  bg-black bg-cover bg-top sm:bg-top"
                style={{
                    backgroundImage:
                        'url("https://web3games.org/_next/image?url=%2Fgraph%2Fvision.png&w=3840&q=75")',
                }}
            >
                <div className="max-w-7xl mx-auto  px-4  text-center sm:px-6  lg:px-8 py-56 md:py-96">
                    <p className="text-xl font-semibold text-white  uppercase ">404 error</p>
                    <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                        Uh oh! I think you’re lost data.
                    </h1>
                    <div className="mt-6">
                        <div className="inline-flex items-center px-4 py-2 border border-transparent text-sm text-indigo-500 font-medium rounded-md text-black bg-white hover:bg-gray-700 hover:text-white transition duration-300">
                            <Link href="/home" >
                                Go back home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
