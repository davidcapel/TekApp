import React, { FunctionComponent } from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './Header'
import { Footer } from './Footer'

type AppLayoutProps = {
    title: string
};

export const AppLayout: FunctionComponent<AppLayoutProps> = ({ title,children }) => {


    return (
        <Container className="mt-3 m-auto">
            <Header/>
                {children}
            <Footer/>
        </Container>
    )
}