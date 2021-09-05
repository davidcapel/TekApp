import React, { FC } from 'react'
import { Container, Alert } from 'react-bootstrap'

interface SwitchToMainnetAlertProps { }

export const SwitchToMainnetAlert: FC<SwitchToMainnetAlertProps> = (props) => {
    return (
        <Container className = "mt-3 m-auto">
            <Alert variant="danger">
                Please switch to Ethereum mainnet.
            </Alert>
        </Container>
    )
}