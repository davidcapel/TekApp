import React, { FC } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useWallet } from './WalletProvider'
import BitPowerLogo from './../Assets/bitpower_logo.png'
import NFYLogo from './../Assets/nfy_logo.png'
import ETHLogo from './../Assets/ethereum.png'
import DefHoldLogo from './../Assets/defhold_logo.png'
import { AssetInLoan } from './AssetInLoan'

interface UserStatsBlockIntroProps {

}


export const UserStatsBlockIntro: FC<UserStatsBlockIntroProps> = (props) => {
    const { account } = useWallet()

    if (! account) {
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
                    <Col md={12}>
                        <h5 className="text-info">
                            Connected as
                        </h5>
                        <h4 className="text-primary">{account}</h4>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={6}>
                        <h3 className="text-success">APY %</h3>
                    </Col>
                    <Col md={6}>
                        <h3 className="text-success">
                            101.3 %
                        </h3>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={12}>
                        <h2 className="text-success text-center">
                            Assets in loan
                        </h2>
                    </Col>
                </Row>
                <AssetInLoan assetLogo={ETHLogo} assetName="$ETH"/>
                <AssetInLoan assetLogo={NFYLogo} assetName="$NFY"/>
                <AssetInLoan assetLogo={BitPowerLogo} assetName="$BPP"/>
                <AssetInLoan assetLogo={DefHoldLogo} assetName="$DEFO"/>
            </Card.Body>
        </Card>
    )
}