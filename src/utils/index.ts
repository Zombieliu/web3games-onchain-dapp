import * as polkadotCryptoUtils from '@polkadot/util-crypto';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';

const check_address = (address: string) => {
    const isValidAddressPolkadotAddress = () => {
        try {
            encodeAddress(
                isHex(address)
                    ? hexToU8a(address)
                    : decodeAddress(address),
            );

            return true;
        } catch (error) {
            return false;
        }
    };

    // check evm address
    const evmaddress = polkadotCryptoUtils.isEthereumAddress(address);

    const ss58isValid = isValidAddressPolkadotAddress();

    if (!ss58isValid && !evmaddress) {
        return 0;
    } else {
        if (evmaddress) {
            return 1;
        }else{
            return 2;
        }
    }
}

export default check_address