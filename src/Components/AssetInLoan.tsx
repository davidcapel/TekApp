import React, { FC } from "react"
import { Row, Col, Card } from 'react-bootstrap'

interface AssetInLoanProps {
    assetName: string,
    assetLogo: string | React.Component,
}

export const AssetInLoan: FC<AssetInLoanProps> = ({ assetName, assetLogo }) => {
    return (
        <Card className="tek-border mb-3 mt-1">
            <Card.Header>
                <Row>
                    <Col md={2}>
                        <img src={assetLogo as string} alt={assetName} className="img-responsive" style={{
                            width: '40px',
                            height: '40px'
                        }} />
                    </Col>
                    <Col md={4}>
                        <h4 className="text-center">{assetName}</h4>
                    </Col>
                    <Col md={6}>
                        <h4 className="text-end">1239.33</h4>
                    </Col>
                </Row>
            </Card.Header>
        </Card>
    )
}