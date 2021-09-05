import React, { FC } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faNewspaper } from '@fortawesome/free-solid-svg-icons'

interface FooterProps {

}



export const Footer: FC<FooterProps> = (props) => {
    return (
        <>
            <hr />
            <Row className="mt-3">
                <Col md={4}>
                    <SocialIcon bgColor="#212529" url="https://telegram.me/tek_official" className="mr-3" />

                    <SocialIcon bgColor="#212529" url="https://twitter.com/tek_official" />

                    <SocialIcon bgColor="#212529" url="https://discord.gg/tek_official" />

                    <SocialIcon bgColor="#212529" url="https://github.com/tek_official" />

                    <SocialIcon bgColor="#212529" url="https://medium.com/tek_official" />
                    <SocialIcon bgColor="#212529" network="email" url="/contact" />
                </Col>
                <Col md={2}>
                    <b>
                        &copy; Mimir Solutions 2021
                    </b>
                </Col>
                <Col md={3}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-primary" href="#whitepaper">
                            <FontAwesomeIcon icon={faNewspaper} /> Whitepaper
                        </Button>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-info" href="#gitbook">
                            <FontAwesomeIcon icon={faBookOpen} /> Gitbook
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    )
};