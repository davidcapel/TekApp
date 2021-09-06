import React, { FunctionComponent } from 'react'
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useWallet } from './WalletProvider'
import { LoanETH } from './LoanETH'
import { LoanToken } from './LoanToken'

export const TokenBuyForm: FunctionComponent<{}> = (props) => {
    const { ETH, USDT, USDC, DAI, account, activateBrowserWallet } = useWallet();
    const [selectedCoin, setSelectedCoin] = React.useState('ETH');
    const [currentBalanceOfSelectedCoin, setCurrentBalanceOfSelectedCoin] = React.useState(ETH)
    const [amountForBuy, setAmountForBuy] = React.useState('0');

    const getBalanceForSelectedCurrency = (currency: string) => {
        if (currency === 'ETH') {
            return ETH;
        }

        if (currency === 'USDT') {
            return USDT;
        }

        if (currency === 'USDC') {
            return USDC;
        }

        if (currency === 'DAI') {
            return DAI;
        }

        return ETH;
    }

    const selectInputCurrency = (currency: string) => {
        setSelectedCoin(currency);
        setCurrentBalanceOfSelectedCoin(getBalanceForSelectedCurrency(currency));
    }

    const handleAmountChange = (amount: string) => {
        if (parseFloat(currentBalanceOfSelectedCoin as string) < parseFloat(amount)) {
            setAmountForBuy(currentBalanceOfSelectedCoin as string)
        } else {
            setAmountForBuy(amount);
        }
    }


    return (
        <>
            <Row>
                <Col md={3}>
                    <FloatingLabel controlId="floatingSelect" label="Input currency">
                        <Form.Select value={selectedCoin} aria-label="Please select input currency" onChange={(e) => {
                            const target = e.target as HTMLSelectElement
                            selectInputCurrency(target.value)
                        }
                        }>
                            <option value="ETH">ETH</option>
                            <option value="USDT">USDT</option>
                            <option value="USDC">USDC</option>
                            <option value="DAI">DAI</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md={6}>
                    <FloatingLabel controlId="floatingInputGrid" label={`Amount of ${selectedCoin} max ${currentBalanceOfSelectedCoin}`}>
                        <Form.Control type="text" placeholder="Amount" value={amountForBuy} onChange={
                            (e) => {
                                const target = e.target as HTMLInputElement
                                handleAmountChange(target.value)
                            }
                        } />
                    </FloatingLabel>
                </Col>
                <Col md={3}>
                    {!account && <div className="d-grid gap-2">
                        <Button size="lg" variant="success" onClick={() => activateBrowserWallet()}>
                            Connect wallet
                    </Button>
                    </div>}
                    {
                        (account && selectedCoin !== 'ETH') && <LoanToken amount={amountForBuy} tokenName={selectedCoin} />
                    }
                    {
                        (account && selectedCoin === 'ETH') && <LoanETH amount={amountForBuy} />
                    }
                </Col>
            </Row>
        </>
    )
}