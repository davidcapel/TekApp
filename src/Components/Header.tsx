import React, { FunctionComponent } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './../Assets/logo.png'
import { useWallet } from './WalletProvider'
import { ConnectedAccountNavs } from './ConnectedAccountNavs'
import { NotificationsContainer } from './NotificationsContainer'


export const Header: FunctionComponent<{}> = (props) => {
    const { activateBrowserWallet, account, ETHPrice } = useWallet();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="40"
                            height="30"
                            className="d-inline-block align-top"
                            alt="$TEK"
                        />
                        GET $TEK
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav className="mr-auto" navbarScroll>
                            <Nav.Link>
                                1 ETH = ${ETHPrice}
                            </Nav.Link>
                            {(!account) &&
                                <Nav.Link href="#" className="tek-border tek-border-header" onClick={() => {
                                    activateBrowserWallet()
                                }}>
                                    Connect wallet
                                </Nav.Link>
                            }

                            {
                                (account) && <ConnectedAccountNavs />
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <NotificationsContainer />
        </>
    )
};