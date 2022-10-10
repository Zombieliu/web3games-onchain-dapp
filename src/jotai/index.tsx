import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { BUSD, DAI, USDC, USDT } from '../assets'

const  Select_TokenTail = atom(false)
const  Select_TokenTop =  atom(false)
const  Token_Lists =   atom(false)
const PopUpBoxInfo = atom({
    type:"",
    hash:"",
    state:false
})
const PopUpBoxState = atom(false)

const AwaitPopUpBoxState = atom(false)

const tokenTop={
    tokenId:'0',
    img:"/img.png",
    title:"W3G",
    name:"Select a Token",
    data:"0",
}
const tokenTail ={
    tokenId:'0',
    img:"/img.png",
    title:"W3G",
    name:"Select a Token",
    data:"0",
}
const SwapTokenTop = atom(tokenTop)
const SwapTokenTail = atom(tokenTail)

const AssetsOpenPopup = atom(false)

const HiddenClaim = atom(true)

const WalletButtonShowState = atom(false)

const WalletListShowState = atom(false)

const AccountConfigPageState = atom(false)

const netWork = [
    { id: 1, name: 'Mainnet', online: "bg-green-400" },
    { id: 2, name: 'Testnet', online: "bg-yellow-400" },
]

const NetWorkState = atomWithStorage('W3GNetWorkState',netWork[1])

// show address
const WalletAddress = atom('')

// local address
const IntactWalletAddress = atomWithStorage("IntactWalletAddress","")

// wallet type
const AccountChooseValue = atomWithStorage('AccountChoose',0)

// substrate address list
const AfterSubstrateAddressList = atomWithStorage('AfterSubstrateAddressList',[])

const custom_token_list = atomWithStorage('custom_token_list',[])

const TOKENPOOLPAIR =[
    {
        pool_id: "0",
        assets_a: 'USDT',
        assets_b: "wW3G",
        assets_a_id: "1",
        assets_b_id: "0",
        assets_a_image_url: "/token/USDT.png",
        assets_b_image_url: "/web3gsmall.png",
        assets_a_address: "5EYCAe5k5uC6j4y78z6KmSNA6aR3FG2krqAZQXLaEzhAmbfW",
        assets_b_address: "5Dq9YFto6nMbAvsqL7KHc7dvSPEcH1GDL9Up8px8E64W9tFv",
        tvl: "0",
        volume: "0",
        volume_days:"0",
        total_lp: "0",
        your_lp: "0",
    },
    {
        pool_id: "1",
        assets_a: 'USDC',
        assets_b: "wW3G",
        assets_a_id: "2",
        assets_b_id: "0",
        assets_a_image_url:"/token/USDC.png",
        assets_b_image_url:"/web3gsmall.png",
        assets_a_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        assets_b_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        total_lp: "0",
        tvl: "0",
        volume: "0",
        volume_days: "0",
        your_lp: "0",

    },
    {
        pool_id: "2",
        assets_a: 'BUSD',
        assets_b: "wW3G",
        assets_a_id: "3",
        assets_b_id: "0",
        assets_a_image_url:"/token/BUSD.png",
        assets_b_image_url:"/web3gsmall.png",
        assets_a_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        assets_b_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        total_lp: "0",
        tvl: "0",
        volume: "0",
        volume_days: "0",
        your_lp: "0",
    },
    {
        pool_id: "3",
        assets_a: 'BNB',
        assets_b: "wW3G",
        assets_a_id: "4",
        assets_b_id: "0",
        assets_a_image_url: "/token/BNB.png",
        assets_b_image_url:"/web3gsmall.png",
        assets_a_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        assets_b_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        total_lp: "0",
        tvl: "0",
        volume: "0",
        volume_days: "0",
        your_lp: "0",

    },
    {
        pool_id: "4",
        assets_a: 'SOL',
        assets_b: "wW3G",
        assets_a_id: "5",
        assets_b_id: "0",
        assets_a_image_url: "/token/SOL.png",
        assets_b_image_url:"/web3gsmall.png",
        assets_a_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        assets_b_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        total_lp: "0",
        tvl: "0",
        volume: "0",
        volume_days: "0",
        your_lp: "0",

    },
    {
        pool_id: "5",
        assets_a: 'ETH',
        assets_b: "wW3G",
        assets_a_id: "6",
        assets_b_id: "0",
        assets_a_image_url: "/token/ETH.png",
        assets_b_image_url:"/web3gsmall.png",
        assets_a_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        assets_b_address: "{'owner':'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        total_lp: "0",
        tvl: "0",
        volume: "0",
        volume_days: "0",
        your_lp: "0",
    },
]
const AllTokenPoolPair = atomWithStorage("all_token_pool_pair",TOKENPOOLPAIR)
const TOKENWATCHPOOLPAIR = atomWithStorage('token_watchlist_pool_pair',[])
const token_pool_pair = atomWithStorage('token_pool_pair',TOKENPOOLPAIR)

const W3G ={
    tokenId:'0',
    img:"/img.png",
    title:"W3G",
    name:"W3G",
    data:"0.00",
}
const W3G_info = atomWithStorage("W3GInfo",W3G)
const TokenListAndBalance = [
    {
        tokenId:'0',
        img:"/img.png",
        title:"wW3G",
        name:"wW3G",
        data:"0.00",
    },
    {
        tokenId:'1',
        img:"/token/USDT.png",
        title:"USDT",
        name:"USDT",
        data:"0.00",
    },
    {
        tokenId:'2',
        img:"/token/USDC.png",
        title:"USDC",
        name:"USDC",
        data:"0.00",
    },
    {
        tokenId:'3',
        img:"/token/BUSD.png",
        title:"BUSD",
        name:"BUSD",
        data:"0.00",
    },
    {
        tokenId:'4',
        img:'/token/BNB.png',
        title:"BNB",
        name:"BNB",
        data:"0.00",
    },
    {
        tokenId:'5',
        img:'/token/SOL.png',
        title:"SOL",
        name:"SOL",
        data:"0.00",
    },
    {
        tokenId:'6',
        img:'/token/ETH.png',
        title:"ETH",
        name:"ETH",
        data:"0.00",
    },
]
const token_list_and_balance = atomWithStorage('token_list_and_balance',TokenListAndBalance)

const Request_Data = atom(false)



export {AllTokenPoolPair,W3G_info,Request_Data,TokenListAndBalance,AwaitPopUpBoxState,PopUpBoxInfo,PopUpBoxState,Select_TokenTop,Select_TokenTail,Token_Lists,SwapTokenTop,SwapTokenTail,AssetsOpenPopup,WalletListShowState,AccountChooseValue,WalletButtonShowState,WalletAddress,AccountConfigPageState,HiddenClaim,
   AfterSubstrateAddressList,IntactWalletAddress,NetWorkState,token_list_and_balance,custom_token_list,TOKENWATCHPOOLPAIR,token_pool_pair}
