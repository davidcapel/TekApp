import React, { FC } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import { useEthers } from '@usedapp/core'

interface SwitchToMainnetAlertProps { }

export const SwitchToMainnetAlert: FC<SwitchToMainnetAlertProps> = (props) => {

    const { deactivate } = useEthers()

    return (
        <Container className = "mt-3 m-auto">
            <Alert variant="danger">
                Please switch to Ethereum mainnet.
            </Alert>
            <hr />
            <Button onClick={() => deactivate()} variant="danger">Logout</Button>
        </Container>
    )
}