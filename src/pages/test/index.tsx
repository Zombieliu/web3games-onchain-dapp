const Test = () =>{
    const evmtransfer = async ()=>{
        let accounts = [];
        async function getAccount() {
            // @ts-ignore
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        }
        await getAccount()
        // @ts-ignore
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: accounts[0],
                    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                    value: '0x29a2241af62c0000',
                    gasPrice: '0x09184e72a000',
                    gas: '0x2710',
                },
            ],
        })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error);
    }

    return (
        <div>
            <button onClick={evmtransfer}>11111</button>
        </div>
    )
}

export default Test
