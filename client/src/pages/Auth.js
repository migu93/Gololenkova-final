import React, {useContext, useState} from 'react';
import {Button, Container, Modal, Row} from "react-bootstrap";
import {Form, Card} from 'react-bootstrap'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/UserAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser();
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className={"d-flex justify-content-center align-content-center"}>
                <Card style={{width: 600}} className={"p-5 my-4"}>
                    <h2 className={"m-auto"}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <Form className={"d-flex flex-column"}>
                        <Form.Group controlId="formUsername" className={"my-2"}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Введите email"
                                          value={email}
                                          onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formPassword" className={"my-2"}>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Введите пароль"
                                          value={password} onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Row className={"d-flex justify-content-between mt-3"}>
                            {isLogin ?
                                <div>
                                <NavLink to={REGISTRATION_ROUTE}>К регистрации</NavLink>
                                </div>
                                :
                                <div>
                                <NavLink to={LOGIN_ROUTE}>У меня уже есть аккаунт</NavLink>
                                </div>
                            }
                            <Button variant={"primary mt-3 align-self-end"} onClick={click}>
                                {isLogin ? "Войти" : "Зарегестрироваться"}
                            </Button>
                        </Row>
                    </Form>
                </Card>
        </Container>
    );
});

export default Auth;