import React, { FC } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useWallet } from './WalletProvider'
import USDTLogo from './../Assets/usdt_logo.png'
import USDCLogo from './../Assets/usdc_logo.png'
import ETHLogo from './../Assets/ethereum.png'
import DAILogo from './../Assets/dai_logo.png'
import { AssetInLoan } from './AssetInLoan'
import { WithdrawAssets } from './WithdrawAssets'

interface UserStatsBlockIntroProps {

}


export const UserStatsBlockIntro: FC<UserStatsBlockIntroProps> = (props) => {
    const { account } = useWallet()

    if (!account) {
        return (
            <Card>
                <Card.Header>
                    <h3 className="text-warning">
                        Please connect your wallet first.
                    </h3>
                </Card.Header>
            </Card>
        )
    }


    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md={6}>
                        <Card className="tek-border-light tek-border-header">
                            <Card.Header>
                                <h3 className="text-primary text-center">APY %</h3>

                            </Card.Header>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="tek-border tek-border-header">
                            <Card.Header>
                                <h3 className="text-success text-center ">
                                    101.3 %
                                </h3>
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <Card className="tek-border-light mb-3">
                            <Card.Footer>
                                <h2 className="text-success text-center">
                                    Assets in loan
                                </h2>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <AssetInLoan assetLogo={ETHLogo} assetName="$ETH" />
                <AssetInLoan assetLogo={USDCLogo} assetName="$USDC" />
                <AssetInLoan assetLogo={USDTLogo} assetName="$USDT" />
                <AssetInLoan assetLogo={DAILogo} assetName="$DAI" />
                <hr />
                <WithdrawAssets />
            </Card.Body>
        </Card>
    )
}