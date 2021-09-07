import { ServiceAbi } from  './ABI/ServiceAbi' 

export const ConfigApp = {
    tokens_addresses: {
        NFY: "0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc",
        BPP: "0x52d904eff2605463c2f0b338d34abc9b7c3e3b08",
        DEFO: "0xe481f2311c774564d517d015e678c2736a25ddd3",
        //USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        USDT: '0x85c6b313e6be757014dfd8d9136291332186be8a',
        DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
        USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    },
    coinGeckoIds: {
        ETH: "ethereum",
        NFY: "non-fungible-yearn",
        BPP: "bitpower",
        DEFO: "defhold",
        USDT: "tether",
        DAI: "dai",
        USDC: "usd-coin"

    },
    TEKContractAddress: "0x36f0a5c1f6b51d50fb67526f3def4a3ee2670cd2",
    TEKAbi: "todo add ABI HERE",
    INFURAKEY: "0",
    ServiceContractAddress: "0xc5A62130316Bf1610Bf88ab65bAfdF15154c2908",
    ServiceAbi: ServiceAbi
}