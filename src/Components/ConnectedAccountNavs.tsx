import React, { FunctionComponent } from 'react'
import { Nav } from 'react-bootstrap'
import { useWallet } from './WalletProvider'
import USDC_logo from './../Assets/usdc_logo.png'
import USDT_logo from './../Assets/usdt_logo.png'
import ETHLogo from './../Assets/ethereum.png'
import DAI_logo from './../Assets/dai_logo.png'
import { TokenBalance } from './TokenBalance'
import { shortenAddress } from '@usedapp/core'

export const ConnectedAccountNavs: FunctionComponent<{}> = (props) => {
    const { deactivate, ETH, account } = useWallet()

    if (!account) {
        return (
            <></>
        )
    }

    return (
        <>
            <Nav.Link >
                <img src={ETHLogo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" />$ETH {ETH}
            </Nav.Link>
            
            <Nav.Link>
                <img src={USDC_logo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" /> <TokenBalance tokenKey="USDC" />
            </Nav.Link>
            <Nav.Link >
                <img src={USDT_logo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" /> <TokenBalance tokenKey="USDT" />
            </Nav.Link>
            <Nav.Link >
                <img src={DAI_logo} width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt="*" /> <TokenBalance tokenKey="DAI" />
            </Nav.Link>
            <Nav.Link href ="#" style={{border: '1px solid', borderColor: "#6f42c1", borderRadius: "10px"}}
                
            >{shortenAddress(account)}</Nav.Link>
            <Nav.Link onClick={() => deactivate()}>Disconnect</Nav.Link>
        </>
    )
}