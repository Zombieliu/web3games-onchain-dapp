import * as polkadotCryptoUtils from '@polkadot/util-crypto';

const evm_address_to_sub_address = (address:string) => {
    const addressInput = address;
    const addressPrefix = 42;
    address = polkadotCryptoUtils.evmToAddress(addressInput, addressPrefix);
    return address;
}

export {
    evm_address_to_sub_address
}
