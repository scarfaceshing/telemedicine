import React from 'react';
import PublicLayout, { Header, Body, Footer } from '../layout/Public';

class Index extends React.Component {
    render() {
        return (
            <>
                <PublicLayout>
                    <Header>
                        <h1>Header</h1>
                    </Header>

                    <Body>
                        <h1>Body</h1>
                    </Body>

                    <Footer>
                        <h1>Footer</h1>
                    </Footer>
                </PublicLayout>
            </>
        )
    }
}

export default Index;
