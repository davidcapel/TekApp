import React, { FunctionComponent } from 'react'
import { Card } from 'react-bootstrap'

export const StatsBlockIntro:FunctionComponent<{}> = (props) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4>
                        Amount raised (ETH): 99999
                    </h4>
                    <h4>
                        Amount raised (NFY): 99999
                    </h4>
                    <h4>
                        Amount raised (BPP): 99999
                    </h4>
                    <h4>
                        Amount raised (DEFO): 99999
                    </h4>
                </Card.Body>
            </Card>
        </>
    )
}