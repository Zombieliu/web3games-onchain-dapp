import {ApiPromise, WsProvider} from "@polkadot/api";

async function check_balance (account:string) {

    const provider = new WsProvider('wss://devnet.web3games.org');
// Create the API and wait until ready
    const api = await ApiPromise.create({
        provider,
        types: {
            Balance: 'u128'
        }
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { data: { free: previousFree } } = await api.query.system.account(account);

    const balance =  `${previousFree}`;

    return balance;

}

export {
    check_balance
}
