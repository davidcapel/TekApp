import React, { FunctionComponent } from 'react'
import { Nav } from 'react-bootstrap'
import { useWallet } from './WalletProvider'
import BitPowerLogo from './../Assets/bitpower_logo.png'
import NFYLogo from './../Assets/nfy_logo.png'
import ETHLogo from './../Assets/ethereum.png'
import DefHoldLogo from './../Assets/defhold_logo.png'
import { TokenBalance } from './TokenBalance'

export const ConnectedAccountNavs: FunctionComponent<{}> = (props) => {
    const { deactivate, account, ETH } = useWallet()

    return (
        <>
            <Nav.Link >
                <img src={ETHLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$ETH {ETH}
            </Nav.Link>
            <Nav.Link >
                <img src={NFYLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$NFY <TokenBalance tokenKey="NFY"/>
            </Nav.Link>
            <Nav.Link>
                <img src={DefHoldLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$DEFO <TokenBalance tokenKey="DEFO"/>
            </Nav.Link>
            <Nav.Link >
                <img src={BitPowerLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$BPP <TokenBalance tokenKey="BPP"/>
            </Nav.Link>
            <Nav.Link
                onClick={() => deactivate()}
            >Logout</Nav.Link>
        </>
    )
}