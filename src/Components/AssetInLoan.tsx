import React, { FC } from "react"
import { Row, Col } from 'react-bootstrap'

interface AssetInLoanProps {
    assetName: string,
    assetLogo: string | React.Component,
}

export const AssetInLoan: FC<AssetInLoanProps> = ({ assetName, assetLogo }) => {
    return (
        <Row>
            <Col md={2}>
                <img src={assetLogo as string} alt={assetName} className="img-responsive" style={{
                    width: '25px',
                    height: '25px'
                }} />
            </Col>
            <Col md={4}>
                <h4 className ="text-center">{assetName}</h4>
            </Col>
            <Col md={6}>
                <h4 className = "text-end">1239.33</h4>
            </Col>
        </Row>
    )
}