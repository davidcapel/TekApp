import React, { FunctionComponent, useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useCoingeckoPrice } from '@usedapp/coingecko'
import { ConfigApp } from './../config'
import { useWallet } from './WalletProvider'

export const StatsBlockIntro: FunctionComponent<{}> = (props) => {

    const [lockedETH, setLockedETH] = React.useState(84.15);
    const [lockedNFY, setLockedNFY] = React.useState(193.19);
    const [lockedBPP, setLockedBPP] = React.useState(199399.19);
    const [lockedDEFO, setLockedDEFO] = React.useState(50010.15);

    const [TVL, setTVL] = React.useState(0);

    const NFY_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.NFY, 'usd')
    const BPP_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.BPP, 'usd')
    const DEFO_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.DEFO, 'usd')
    const { ETHPrice } = useWallet()

    useEffect(() => {
        let totals = 0;

        totals += parseFloat(ETHPrice as string) * lockedETH
        totals += parseFloat(NFY_PRICE as string) * lockedNFY
        totals += parseFloat(BPP_PRICE as string) * lockedBPP
        totals += parseFloat(DEFO_PRICE as string) * lockedDEFO

        setTVL(totals)
    }, [ETHPrice, BPP_PRICE, NFY_PRICE, DEFO_PRICE, lockedBPP, lockedDEFO, lockedETH, lockedNFY]);

    return (
        <>
            <Card>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>Total ETH raised</td>
                                <td>{lockedETH}</td>
                            </tr>
                            <tr>
                                <td>Total NFY raised</td>
                                <td>{lockedNFY}</td>
                            </tr>
                            <tr>
                                <td>Total BPP raised</td>
                                <td>{lockedBPP}</td>
                            </tr>
                            <tr>
                                <td>Total DEFO raised</td>
                                <td>{lockedDEFO}</td>
                            </tr>
                            <tr>
                                <td>TVL~ $</td>
                                <td>{TVL.toLocaleString()} $</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table className="mt-3" striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>~ number of active users</td>
                                <td>5 300</td>
                            </tr>
                            <tr>
                                <td>$TEK price</td>
                                <td>228.57 $</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}