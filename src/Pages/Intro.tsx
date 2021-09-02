import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap'
import { StatsBlockIntro } from './../Components/StatsBlockIntro'
import { UserStatsBlockIntro } from './../Components/UserStatsBlockIntro'
import { TokenBuyForm } from './../Components/TokenBuyForm'


interface IntroPageProps {

}

export const Intro: FC<IntroPageProps> = (props) => {
    return (
        <>
            <Row className="mt-3 mb-3 disabled">
                <Col md={6}>
                    <StatsBlockIntro />
                </Col>
                <Col md={6}>
                    <UserStatsBlockIntro />
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