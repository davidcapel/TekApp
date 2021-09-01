import React, { FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap'
import { StatsBlockIntro } from './../Components/StatsBlockIntro'
import { TextBlockIntro } from './../Components/TextBlockIntro'
import { TokenBuyForm } from './../Components/TokenBuyForm'


type IntroPageProps = {}

export const Intro: FunctionComponent<IntroPageProps> = (props) => {
    return (
        <>
            <Row className="mt-3 mb-3">
                <Col md={6}>
                    <StatsBlockIntro />
                </Col>
                <Col md={6}>
                    <TextBlockIntro />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <TokenBuyForm />
                </Col>
            </Row>
        </>
    )
}