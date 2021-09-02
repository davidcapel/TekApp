import React, { FC } from 'react'
import { Row, Col, Alert } from 'react-bootstrap'

interface WithDrawAssetsProps {

}

export const WithdrawAssets: FC<WithDrawAssetsProps> = (props) => {
    return (
        <Row className="mt-4">
            <Col md={12}>
                <Alert variant="warning">
                    <h5>
                        Loan repayment will be available after Sept 28 11:59 UTC
                    </h5>
                </Alert>
            </Col>
        </Row>
    )
}