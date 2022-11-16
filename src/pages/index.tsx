import type { NextPage } from 'next';
import Head from 'next/head';
import Home from "./home";

const IndexPage: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Web3Games On-Chain | Dapp</title>
        <link rel="icon" href="/web3gsmall.png" />
      </Head>
          <Home></Home>
    </div>
  )
}

export default IndexPage

