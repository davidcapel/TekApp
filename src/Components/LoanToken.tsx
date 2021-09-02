import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

interface LoanTokenPropsInterface {
    amount: string | React.ReactNode,
    tokenName: string
}

export const LoanToken: FC<LoanTokenPropsInterface> = ({ amount, tokenName }) => {

    return (
        <>
            <div className="d-grid gap-2">
                <Button size="lg" variant="success" onClick={() => alert('Loan token')}>
                    Approve {tokenName}
                </Button>
            </div>
        </>
    )
}