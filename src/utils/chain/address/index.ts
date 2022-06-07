import * as polkadotCryptoUtils from '@polkadot/util-crypto';

const evm_address_to_sub_address = (address:string) => {
    const addressInput = address;
    const addressPrefix = 42;
    address = polkadotCryptoUtils.evmToAddress(addressInput, addressPrefix);
    return address;
}

const address_slice = (address:string) =>{
    const first = address.slice(0,6)
    const last = address.slice(-5,-1)
    const PartAddress = first + "...." + last
    return PartAddress
}



export {
    evm_address_to_sub_address,
    address_slice
}
