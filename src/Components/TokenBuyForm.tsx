import React, { FunctionComponent } from 'react'
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useTokenBalance, useEtherBalance, useEthers } from '@usedapp/core'
import { formatUnits, formatEther } from '@ethersproject/units'
import { useWallet } from './WalletProvider'

export const TokenBuyForm: FunctionComponent<{}> = (props) => {
    const { ETH, BPP, NFY, DEFO } = useWallet();
    const [selectedCoin, setSelectedCoin] = React.useState('ETH');
    const [currentBalanceOfSelectedCoin, setCurrentBalanceOfSelectedCoin] = React.useState(ETH)
    const [amountForBuy, setAmountForBuy] = React.useState('0');
    const [isPayingERC, setIsPayingERC] = React.useState<boolean>(false);

    const { account } = useEthers()

    const getBalanceForSelectedCurrency = (currency: string) => {
        if (currency === 'ETH') {
            return ETH;
        }

        if (currency === 'NFY') {
            return NFY;
        }

        if (currency === 'BPP') {
            return BPP;
        }

        if (currency === 'DEFO') {
            return DEFO;
        }

        return ETH;
    }

    const selectInputCurrency = (currency: string) => {
        setSelectedCoin(currency);
        setCurrentBalanceOfSelectedCoin(getBalanceForSelectedCurrency(currency));
        if ('ETH' !== currency) {
            setIsPayingERC(true);
        }
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
                            <option value="NFY">NFY</option>
                            <option value="BPP">BPP</option>
                            <option value="DEFO">DEFO</option>
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
                    {
                        selectedCoin !== 'ETH' && 'ERC Buying component to do'
                    }
                    {
                        selectedCoin === 'ETH' && 'ETH buying component'
                    }
                </Col>
            </Row>
        </>
    )
}