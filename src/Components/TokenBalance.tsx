import React, { FunctionComponent } from 'react'
import { useWallet } from './WalletProvider'

type TokenBalanceProps = {
    tokenKey: string
}

const formater = (value: string | number | undefined) => {
    return parseFloat(value as string).toFixed(2);
}

export const TokenBalance: FunctionComponent<TokenBalanceProps> = ({ tokenKey }) => {

    const {
        NFY,
        BPP,
        DEFO,
        DAI,
        USDT,
        USDC
    } = useWallet();



    return (
        <>
            {tokenKey === 'NFY' && formater(NFY)}
            {tokenKey === 'BPP' && formater(BPP)}
            {tokenKey === 'DEFO' && formater(DEFO)}
            {tokenKey === 'DAI' && formater(DAI)}
            {tokenKey === 'USDT' && formater(USDT)}
            {tokenKey === 'USDC' && formater(USDC)}
        </>
    )
}