import React, { FC } from 'react'
import { useNotifications } from '@usedapp/core'
import { NotificationsElement } from './NotificationsElement'
import { ToastContainer } from 'react-bootstrap'


interface NotificationsContainerProps {

}


const notificationContent = {
    walletConnected: {
        title: "Wallet connected."
    },
    transactionStarted: {
        title: "Transaction sent."
    },
    transactionSucceed: {
        title: "Trasnaction done."
    },
    transactionFailed: {
        title: "Transaction failed."
    }
}



export const NotificationsContainer: FC<NotificationsContainerProps> = (props) => {
    const { notifications } = useNotifications();

    return (
        <>

                <ToastContainer className="p-3" position="bottom-end">
                    {notifications.map((notification) => {
                        if ('transaction' in notification)
                            return (
                                <NotificationsElement
                                    key={notification.id}
                                    title={notificationContent[notification.type].title}
                                    transaction={notification.transaction}
                                    date={Date.now()}
                                />
                            )
                        else
                            return (
                                <NotificationsElement
                                    key={notification.id}
                                    title={notificationContent[notification.type].title}
                                    date={Date.now()}
                                />
                            )
                    })}
                </ToastContainer>
            
        </>
    )
}