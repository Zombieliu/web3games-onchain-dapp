import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const  Select_TokenTail = atom(false)
const  Select_TokenTop =  atom(false)
const tokenTop={
    img:"/img.png",
    name:"W3G",
}
const tokenTail ={
    img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_48,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/logos/main/network/ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7.jpg",
    name:"USDT",
}
const SwapTokenTop = atom(tokenTop)
const SwapTokenTail = atom(tokenTail)

const AssetsOpenPopup = atom(false)

const HiddenClaim = atom(true)



//
const WalletButtonShowState = atom(false)

const WalletListShowState = atom(false)

const AccountConfigPageState = atom(false)

const SubstrateAddress = atom(false)

const netWork = [
    { id: 1, name: 'Mainnet', online: "bg-green-400" },
    { id: 2, name: 'Testnet', online: "bg-yellow-500" },
]
const NetWorkState = atomWithStorage("NetWorkState",netWork[0])

const WalletAddress = atomWithStorage("WalletAddress","")

const IntactWalletAddress = atomWithStorage("IntactWalletAddress","")

const AccountChooseValue = atomWithStorage('AccountChoose',0)

const AfterEvmAddressValue = atomWithStorage('AfterEvmAddress','')

const  AfterSubstrateAddressValue = atomWithStorage('AfterSubstrateAddress','')

const  AfterSubstrateAddressList = atomWithStorage('AfterSubstrateAddressList',[])

const EVMAddressValue = atomWithStorage('EvmAddress','')

const SetSubstrateShowState = atomWithStorage("SubstrateShowState",false)

const CurrentWallet = atomWithStorage("CurrentWallet","")


export {Select_TokenTop,Select_TokenTail,SwapTokenTop,SwapTokenTail,AssetsOpenPopup,WalletListShowState,AccountChooseValue,
    AfterEvmAddressValue,EVMAddressValue,WalletButtonShowState,WalletAddress,AccountConfigPageState,HiddenClaim,SetSubstrateShowState,
    AfterSubstrateAddressValue,SubstrateAddress,AfterSubstrateAddressList,IntactWalletAddress,NetWorkState,CurrentWallet}
