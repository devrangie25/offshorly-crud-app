import React from 'react';
import { Container, Navbar, Card } from 'react-bootstrap';

const SideNav = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Card>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Card>
            </Container>
        </Navbar>
    );
};

export default SideNav;