import {cropData} from "../../utils/math";

const { ApiPromise, WsProvider} = require('@polkadot/api');



const creat_pool_event_name = 'exchange.PoolCreated'

const chain_api = async (intactWalletAddress:string)=>{
  const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
  await web3Enable('my cool dapp');
  const provider = new WsProvider('ws://127.0.0.1:9944');
  // const provider = new WsProvider('ws://47.243.17.26:9944');
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
        },
        "getAmountInPrice": {
          "description": "get amount in price",
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
        },
        "getEstimateLpToken": {
          "description": "get estimate lp token",
          "params": [
            {
              "name": "token_0",
              "type": "u128"
            },
            {
              "name": "amount_0",
              "type": "u128"
            },
            {
              "name": "token_1",
              "type": "u128"
            },
            {
              "name": "amount_1",
              "type": "u128"
            },
            {
              "name": "at",
              "type": "Hash",
              "isOptional": true
            }
          ],
          "type": "u128",
        },
        "getEstimateOutToken": {
          "description": "get estimate out token",
          "params": [
            {
              "name": "supply",
              "type": "u128"
            },
            {
              "name": "token_0",
              "type": "u128"
            },
            {
              "name": "token_1",
              "type": "u128"
            },
            {
              "name": "at",
              "type": "Hash",
              "isOptional": true
            }
          ],
          "type": "u128",
        },
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

const substrate_EstimateOutToken = async (intactWalletAddress,input_number,token_a_id,token_b_id) =>{
  const api = await chain_api(intactWalletAddress)
  const result = await api.rpc.exchange.getEstimateOutToken(input_number,token_a_id,token_b_id)
  const accountA_token_balance_decimals = await api.query.tokenFungible.tokens(token_a_id)
  const accountB_token_balance_decimals = await api.query.tokenFungible.tokens(token_b_id)
  const base = Math.abs(Number(accountA_token_balance_decimals.toJSON().decimals) - Number(accountB_token_balance_decimals.toJSON().decimals))
  const result_real = cropData(Number(result)/Math.pow(10,base),4)
  await api.disconnect()
  return result_real.toString()
}

const substrate_getEstimateLpToken = async (intactWalletAddress,token_a,amount_a,token_b,amount_b) =>{
  const api = await chain_api(intactWalletAddress)
  const result = await api.rpc.exchange.getEstimateLpToken(token_a,amount_a,token_b,amount_b)
  api.disconnect()
  return result.toString()
}

export{
  chain_api,
  substrate_wallet_injector,
  // swap,
  substrate_getAmountOutPrice,
  substrate_EstimateOutToken,
  substrate_getEstimateLpToken
}
