import React, { FC } from 'react'
import { useWallet } from './WalletProvider'
import { Button } from 'react-bootstrap'

interface LoanETHPropsInterface {
    amount: string | React.ReactNode,
}

export const LoanETH: FC<LoanETHPropsInterface> = ({ amount }) => {

    const { account } = useWallet();

    return (
        <>
            <div className="d-grid gap-2">
                <Button size="lg" variant="success" onClick={() => alert('Loan')}>
                    Loan Liquidity
                </Button>
            </div>
        </>
    )
}