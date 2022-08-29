import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { BUSD, DAI, USDC, USDT } from '../assets'

const  Select_TokenTail = atom(false)
const  Select_TokenTop =  atom(false)
const  Token_Lists =   atom(false)
const tokenTop={
    tokenId:'0',
    img:"/img.png",
    title:"wW3G",
    name:"Select a Token",
    data:"0.00",
}
const tokenTail ={
    tokenId:'0',
    img:"/img.png",
    title:"wW3G",
    name:"Select a Token",
    data:"0.00",
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

const token_pool_pair = atomWithStorage('token_pool_pair',[
    // {
    //     assets_a: "wW3G",
    //     assets_a_address: "assets_a_address",
    //     assets_a_id: "0",
    //     assets_a_image_url: "/img.png",
    //     assets_b: "USDT",
    //     assets_b_address: "assets_b_address",
    //     assets_b_id: "1",
    //     assets_b_image_url: USDT,
    //     pool_id: "0",
    //     total_lp: "0",
    //     tvl: "1231231",
    //     volume: "231231",
    //     volume_days: "0",
    //     your_lp: "0"
    //
    // },
    // {
    //     assets_a: "wW3G",
    //     assets_a_address: "assets_a_address",
    //     assets_a_id: "0",
    //     assets_a_image_url: "/img.png",
    //     assets_b: "USDC",
    //     assets_b_address: "assets_b_address",
    //     assets_b_id: "2",
    //     assets_b_image_url: USDC,
    //     pool_id: "1",
    //     total_lp: "0",
    //     tvl: "12311231",
    //     volume: "2311231",
    //     volume_days: "0",
    //     your_lp: "0"
    //
    // },
    // {
    //     assets_a: "wW3G",
    //     assets_a_address: "assets_a_address",
    //     assets_a_id: "0",
    //     assets_a_image_url: "/img.png",
    //     assets_b: "BUSD",
    //     assets_b_address: "assets_b_address",
    //     assets_b_id: "3",
    //     assets_b_image_url: BUSD,
    //     pool_id: "2",
    //     total_lp: "0",
    //     tvl: "15231231",
    //     volume: "2531231",
    //     volume_days: "0",
    //     your_lp: "0"
    //
    // },
    // {
    //     assets_a: "wW3G",
    //     assets_a_address: "assets_a_address",
    //     assets_a_id: "0",
    //     assets_a_image_url: "/img.png",
    //     assets_b: "DAI",
    //     assets_b_address: "assets_b_address",
    //     assets_b_id: "4",
    //     assets_b_image_url: DAI,
    //     pool_id: "3",
    //     total_lp: "0",
    //     tvl: "2231231",
    //     volume: "231231",
    //     volume_days: "0",
    //     your_lp: "0"
    // },
])

const token_list_and_balance = atomWithStorage('token_list_and_balance',[
    {
        tokenId:'0',
        img:"/img.png",
        title:"wW3G",
        name:"wW3G",
        data:"0.00",
    },
    {
        tokenId:'1',
        img:USDT,
        title:"USDT",
        name:"USDT",
        data:"0.00",
    },
    {
        tokenId:'2',
        img:USDC,
        title:"USDC",
        name:"USDC",
        data:"0.00",
    },
    {
        tokenId:'3',
        img:BUSD,
        title:"BUSD",
        name:"BUSD",
        data:"0.00",
    },
    {
        tokenId:'4',
        img:DAI,
        title:"Dai Stablecoin",
        name:"DAI",
        data:"0.00",
    },
])



export {Select_TokenTop,Select_TokenTail,Token_Lists,SwapTokenTop,SwapTokenTail,AssetsOpenPopup,WalletListShowState,AccountChooseValue,WalletButtonShowState,WalletAddress,AccountConfigPageState,HiddenClaim,
   AfterSubstrateAddressList,IntactWalletAddress,NetWorkState,token_list_and_balance,custom_token_list,token_pool_pair}
