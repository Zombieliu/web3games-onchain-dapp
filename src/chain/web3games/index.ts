const { ApiPromise, WsProvider} = require('@polkadot/api');



const creat_pool_event_name = 'exchange.PoolCreated'

const chain_api = async (intactWalletAddress:string)=>{
  const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
  await web3Enable('my cool dapp');
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({
    provider,
    rpc: {
      "exchange": {
        "getAmountOutPrice": {
          "description": "get amount out price",
          "params": [
            {
              "name": "supply",
              "type": "u128"
            },
            {
              "name": "path",
              "type": "Vec<u128>"
            },
            {
              "name": "at",
              "type": "Hash",
              "isOptional": true
            }
          ],
          "type": "Vec<u128>",
          "isSubscription": false,
          "jsonrpc": "exchange_getAmountOutPrice",
          "method": "getAmountOutPrice",
          "section": "exchange"
        }
      },
    }

  });
  return api
}

const substrate_wallet_injector = async (intactWalletAddress:string)=>{
  const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
  const injector = await web3FromAddress(intactWalletAddress);
  return injector
}




// const swap = async (intactWalletAddress)=>{
//   const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
//   await web3Enable('my cool dapp');
//   const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
//   const injector = await web3FromAddress(intactWalletAddress);
//   const api = await chain_api(intactWalletAddress)
//   const transferExtrinsic = api.tx.exchange.swapExactTokensForTokens(,10000,[1,2],"5CcgM2vkikJv6utQaS6jWDhV6DgnoyacKE81qzXZ52FSxkY8")
//   transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ status }) => {
//     if (status.isInBlock) {
//       console.log(`Completed at block hash #${status.asInBlock.toString()}`);
//     } else {
//       console.log(`Current status: ${status.type}`);
//     }
//   }).catch((error: any) => {
//     console.log(':( transaction failed', error);
//   });
// }

const substrate_getAmountOutPrice = async (intactWalletAddress,pool,token_number) => {
    const api = await chain_api(intactWalletAddress)
    const value = await api.rpc.exchange.getAmountOutPrice(token_number,pool);
    api.disconnect()
    return value
}

export{
  chain_api,
  substrate_wallet_injector,
  // swap,
  substrate_getAmountOutPrice
}
