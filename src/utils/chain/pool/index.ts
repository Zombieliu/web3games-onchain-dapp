import { chain_api } from "../../../chain/web3games";

const quote = (amount_a,reserve_a,reserve_b) =>{
  if (amount_a > 0){
    if (reserve_a > 0 && reserve_b > 0){
      const amount_b = amount_a * reserve_b / reserve_a;
      return amount_b
    }else{
      return "InsufficientLiquidity"
    }
  }else{
    return "InsufficientAmount"
  }
}

const do_add_liquidity = async (intactWalletAddress,id,amount_a_desired, amount_b_desired,amount_a_min,amount_b_min) =>  {
  const api = await chain_api(intactWalletAddress)
  const reserve_result = await api.query.exchange.reserves(id)
  const reserve_a = reserve_result.toJSON()[0]
  const reserve_b = reserve_result.toJSON()[1]
  let amount_a;
  let amount_b;
  if (reserve_a == 0 && reserve_b == 0) {
    amount_a = amount_a_desired;
    amount_b = amount_b_desired;
  }else{
    let amount_b_optimal = quote(amount_a_desired, reserve_a, reserve_b)
    if (amount_b_optimal <= amount_b_desired){
      if (amount_b_optimal >= amount_b_min){
        amount_a = amount_a_desired
        amount_b = amount_b_desired
      }else{
        return 'InsufficientBAmount'
      }
    }else{
      let amount_a_optimal = quote(amount_b_desired, reserve_b, reserve_a)
      if (amount_a_optimal <= amount_a_desired){
        if (amount_a_optimal >= amount_a_min){
          amount_a = amount_a_optimal
          amount_b = amount_b_desired
        }else{
          return 'InsufficientAAmount'
        }
      }else{
        return 'InsufficientAmount'
      }
    }
  }
  return [amount_a,amount_b]
}

const add_liquidity = async (intactWalletAddress,id,amount_a_desired, amount_b_desired,) =>{
  const amount = await do_add_liquidity(intactWalletAddress,id,amount_a_desired, amount_b_desired,0,0)
  return amount
}

export{
  add_liquidity
}
