import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Navbar, Nav, Button, Container, Image, Form, Col, Row} from 'react-bootstrap';
import {
    ADMIN_ROUTE,
    CART_PAGE,
    FAVORITE_PAGE, LANDING_PAGE,
    LOGIN_ROUTE,
    PERSONAL_ACCOUNT_ROUTE,
    SHOP_ROUTE
} from "../../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from "mobx-react-lite";
import jwtDecode from "jwt-decode";
import {getCookie} from "../../http/UserAPI";
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

const NavBar = observer(() => {

    const {user} = useContext(Context)
    const [data, setData] = useState({});
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        history(SHOP_ROUTE)
    }

    useEffect(() => {
        if (!user.isAuth)
        {
            let decodedData = jwtDecode(getCookie('token'));
            setData(decodedData);
        }
    }, [])

    const history = useNavigate()
    return (
        <div style={{background: '#a6b0ff'}}>
            <Navbar bg="" expand="lg" className={"align-items-center"}>
                <Container>
                    <Col xs={2} className={"d-flex align-items-center"}>
                        <Col>
                            <Image src={logo} width={120} style={{cursor: "pointer"}} onClick={() => history(LANDING_PAGE)} className="mx-2"></Image>
                        </Col>
                        <Col className={"justify-content-center"}>
                            <Button className={"my-2 px-5"} onClick={() => history(SHOP_ROUTE)}>Каталог</Button>
                        </Col>
                    </Col>
                    <Col xs={10} className="d-flex justify-content-end">
                        <div className="">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                {user.isAuth ?
                                    <Nav className="gap-3">
                                        <Button variant={"outline-dark"} className={""} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                                        <Button onClick={() => logOut()}>Выйти</Button>
                                        <Button onClick={() => history(PERSONAL_ACCOUNT_ROUTE)}>Личный кабинет</Button>
                                        <div className={"mx-2 d-flex align-items-center gap-3"}>
                                            <Form.Text>{data.email}</Form.Text>
                                            <FontAwesomeIcon icon={faHeart} size="2x" style={{cursor: "pointer"}} onClick={() => history(FAVORITE_PAGE)}/>
                                            <FontAwesomeIcon icon={faShoppingBasket} size="2x" style={{cursor: "pointer"}} onClick={() => history(CART_PAGE)}/>
                                        </div>
                                    </Nav>
                                    :
                                    <Nav className="justify-content-end">
                                        <Button variant={"outline-dark"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                                    </Nav>
                                }
                            </Navbar.Collapse>
                        </div>
                    </Col>
                </Container>
            </Navbar>
        </div>
    );
});

export default NavBar;