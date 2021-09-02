import React, { FunctionComponent } from 'react'
import { Card, Table } from 'react-bootstrap'

export const StatsBlockIntro: FunctionComponent<{}> = (props) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>Total ETH raised</td>
                                <td>937.33</td>
                            </tr>
                            <tr>
                                <td>Total NFY raised</td>
                                <td>31937.33</td>
                            </tr>
                            <tr>
                                <td>Total BPP raised</td>
                                <td>1003931.33</td>
                            </tr>
                            <tr>
                                <td>Total DEFO raised</td>
                                <td>103394.33</td>
                            </tr>
                            <tr>
                                <td>TVL~ $</td>
                                <td>15 833 120 $</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table className="mt-3" striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>~ number of active users</td>
                                <td>5 300</td>
                            </tr>
                            <tr>
                                <td>$TEK price</td>
                                <td>228.57 $</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}