import React from 'react';
import {Container, Row, Col, Nav, Image} from 'react-bootstrap';
import logo from '../assets/logo.png';
import "./main.css"

const Footer = () => (
    <footer className="py-3 py-3 mt-5"
            style={{background: '#8E9AAF'}}>
        <Container>
            <Row className={"d-flex text-center"}>
                <Col xs={4} md={4} className="d-flex align-items-center justify-content-center">
                    <div className="">
                        <Image src={logo} style={{cursor: "pointer"}} width={130}/>
                    </div>
                </Col>
                <Col xs={4} md={4}>
                    <h5>Контакты</h5>
                    <Nav className="list-unstyled text-small d-flex flex-column">
                        <Nav.Item>
                            <Nav.Link className="link-secondary" href="#">+7 999 888 54-13</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-secondary" href="#">nashSite@yanedx.ru</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-secondary" href="#">© inc. 2022</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={4} md={4}>
                    <h5>Меню</h5>
                    <Nav className="list-unstyled text-small d-flex flex-column">
                        <Nav.Item>
                            <Nav.Link className="link-secondary" href="#">Главная</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-secondary" href="#">Каталог</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link-secondary" href="#">Privacy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;


