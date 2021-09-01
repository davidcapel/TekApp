import React, { FunctionComponent } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './../Assets/logo.png'
import { useWallet } from './WalletProvider'
import { ConnectedAccountNavs } from './ConnectedAccountNavs'

export const Header: FunctionComponent<{}> = (props) => {
    const { activateBrowserWallet, account } = useWallet();

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        width="65"
                        height="40"
                        className="d-inline-block align-top"
                        alt="$TEK"
                    />
                    $TEK presale portal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav className="mr-auto" navbarScroll>
                        {(!account) &&
                            <Nav.Link href="#" onClick={() => activateBrowserWallet()}>
                                Connect wallet
                            </Nav.Link>
                        }

                        {
                            (account) && <ConnectedAccountNavs/>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};