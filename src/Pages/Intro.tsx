import React, { FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap'

type IntroPageProps = {}

export const Intro: FunctionComponent<IntroPageProps> = (props) => {
    return (
        <>
            <Row className="mt-3 mb-3">
                <Col md={6}>
                    Informer block goes here
            </Col>
                <Col md={6}>
                    Motivation text goes here
            </Col>
            </Row>
            <Row>
                <Col md={12}>
                    Buyer interface goes here
            </Col>
            </Row>
        </>
    )
}