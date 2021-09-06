import React, { FunctionComponent } from 'react'
import { useWallet } from './WalletProvider'

type TokenBalanceProps = {
    tokenKey: string
}

export const TokenBalance: FunctionComponent<TokenBalanceProps> = ({tokenKey }) => {

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
            {tokenKey === 'NFY' && NFY}
            {tokenKey === 'BPP' &&  BPP}
            {tokenKey === 'DEFO' && DEFO}
            {tokenKey === 'DAI' && DAI}
            {tokenKey === 'USDT' && USDT}
            {tokenKey === 'USDC' && USDC}
        </>
    )
} 