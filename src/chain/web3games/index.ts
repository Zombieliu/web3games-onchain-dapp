import {cropData} from "../../utils/math";
import axios from "axios";
import {CHAIN_URL,CHAIN_RPC_URL} from "../../constant";
const { ApiPromise, WsProvider} = require('@polkadot/api');
// const {stringToU8a,nToBigInt} = require("@polkadot/util");
// import {bnToBn} from "@polkadot/util";
// import {useAtom} from "jotai";
// import {Request_Data} from "../../jotai";
const JSONBigInt = require('json-bigint');
// const creat_pool_event_name = 'exchange.PoolCreated'



const chain_api = async (intactWalletAddress:string)=>{
  const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
  await web3Enable('my cool dapp');
  const provider = new WsProvider(CHAIN_URL);
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

const substrate_getAmountOutPrice = async (intactWalletAddress,token_number,pool_a,pool_b) => {
  const data = JSONBigInt.stringify ({
      "id": 1,
      "jsonrpc": "2.0",
      "method": "exchange_getAmountOutPrice",
      "params": [
        BigInt(token_number),
        [BigInt(pool_a),BigInt(pool_b)]
      ]
  });
  const result = await axios(
      {
        method: "post",
        url: CHAIN_RPC_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        data
      }
  )
    return result.data.result
}

const substrate_EstimateOutToken = async (intactWalletAddress,input_number,token_a_id,token_b_id) =>{
  const token_number_result = BigInt(input_number)
  const token_a = BigInt(token_a_id)
  const token_b = BigInt(token_b_id)

  const data = JSONBigInt.stringify ({
    "id": 1,
    "jsonrpc": "2.0",
    "method": "exchange_getEstimateOutToken",
    "params": [
      token_number_result, token_a,token_b
    ]
  });
  const result = await axios(
      {
        method: "post",
        url: CHAIN_RPC_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        data
      }
  )
  return result.data.result
}

const substrate_getEstimateLpToken = async (intactWalletAddress,token_a,amount_a,token_b,amount_b) =>{
  const token_a_id = BigInt(token_a)
  const amount_a_result = BigInt(amount_a)

  const token_b_id = BigInt((token_b))
  const amount_b_result = BigInt(amount_b)

  const data = JSONBigInt.stringify ({
    "id": 1,
    "jsonrpc": "2.0",
    "method": "exchange_getEstimateLpToken",
    "params": [
      token_a_id, amount_a_result,token_b_id,amount_b_result
    ]
  });
  const result = await axios(
      {
        method: "post",
        url: CHAIN_RPC_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        data
      }
  )
  const real_data = (parseFloat(String(cropData((result.data.result / Math.pow(10, 18)),5)))).toString()
  return real_data
}



export{
  chain_api,
  substrate_wallet_injector,
  // swap,
  substrate_getAmountOutPrice,
  substrate_EstimateOutToken,
  substrate_getEstimateLpToken
}
