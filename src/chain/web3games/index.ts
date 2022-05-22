import {ApiPromise,WsProvider} from "@polkadot/api";

const create_pool = async (intactWalletAddress)=>{
  const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
  await web3Enable('my cool dapp');
  const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
  const injector = await web3FromAddress(intactWalletAddress);
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({
    provider,
  });
  const transferExtrinsic = api.tx.exchange.createPool(1,2)
  transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ events= [],status }) => {
      if (status.isInBlock) {
          console.log(`Completed at block hash #${status.asInBlock.toString()}`);
          events.forEach(({ event: { data, method, section }, phase }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });
      } else {
          console.log(`Current status: ${status.type}`);
      }
  }).catch((error: any) => {
      console.log(':( transaction failed', error);
  });
}

const add_liquidity = async (intactWalletAddress)=>{
  const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
  await web3Enable('my cool dapp');
  const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
  const injector = await web3FromAddress(intactWalletAddress);
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({
    provider,
  });
  const transferExtrinsic = api.tx.exchange.addLiquidity(0,50000000,50000000,0,0,"5CcgM2vkikJv6utQaS6jWDhV6DgnoyacKE81qzXZ52FSxkY8")
  transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ status }) => {
    if (status.isInBlock) {
      console.log(`Completed at block hash #${status.asInBlock.toString()}`);
    } else {
      console.log(`Current status: ${status.type}`);
    }
  }).catch((error: any) => {
    console.log(':( transaction failed', error);
  });
}

const swap = async (intactWalletAddress)=>{
  const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
  await web3Enable('my cool dapp');
  const web3FromAddress = (await import("@polkadot/extension-dapp")).web3FromAddress;
  const injector = await web3FromAddress(intactWalletAddress);
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({
    provider,
  });
  const transferExtrinsic = api.tx.exchange.swapExactTokensForTokens(0,10000,0,[1,2],"5CcgM2vkikJv6utQaS6jWDhV6DgnoyacKE81qzXZ52FSxkY8")
  transferExtrinsic.signAndSend(intactWalletAddress, { signer: injector.signer }, ({ status }) => {
    if (status.isInBlock) {
      console.log(`Completed at block hash #${status.asInBlock.toString()}`);
    } else {
      console.log(`Current status: ${status.type}`);
    }
  }).catch((error: any) => {
    console.log(':( transaction failed', error);
  });
}
export{
  create_pool,
  add_liquidity,
  swap
}
