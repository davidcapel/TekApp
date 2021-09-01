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
    } = useWallet();



    return (
        <>
            {tokenKey === 'NFY' && NFY}
            {tokenKey === 'BPP' &&  BPP}
            {tokenKey === 'DEFO' && DEFO}
        </>
    )
} 