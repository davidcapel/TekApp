import React, { FC } from 'react'
import { Toast } from 'react-bootstrap';

interface NotificationElementProps {
    title: any,
    transaction?: any
    date: number
}


export const NotificationsElement: FC<NotificationElementProps> = ({ title, transaction, date }) => {

    const [show, setShow] = React.useState(true);

    return (
        <Toast style={{ zIndex: 10500 }} onClose={() => setShow(false)} show={show} delay={3500} autohide>
            <Toast.Header>
                <strong className="me-auto">{title}</strong>
            </Toast.Header>
        </Toast>
    )
}