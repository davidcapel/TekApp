import React, { FunctionComponent } from 'react'
import { Nav } from 'react-bootstrap'
import { useWallet } from './WalletProvider'
import BitPowerLogo from './../Assets/bitpower_logo.png'
import NFYLogo from './../Assets/nfy_logo.png'
import DefHoldLogo from './../Assets/defhold_logo.png'

export const ConnectedAccountNavs: FunctionComponent<{}> = (props) => {
    const { deactivate } = useWallet()

    return (
        <>
            <Nav.Link >
                <img src={NFYLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$NFY 100.15
            </Nav.Link>
            <Nav.Link >
                <img src={DefHoldLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$DEFO 0.57
            </Nav.Link>
            <Nav.Link >
                <img src={BitPowerLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$BPP 99
            </Nav.Link>
            <Nav.Link
                onClick={() => deactivate()}
            >Logout</Nav.Link>
        </>
    )
}