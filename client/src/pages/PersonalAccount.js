import {Button, Row, Container, Form, Col, Image} from 'react-bootstrap';
import {useContext, useEffect, useState} from "react";
import jwtDecode from "jwt-decode";
import {getCookie} from "../http/UserAPI";
import {Context} from "../index";
function  PersonalAccount () {
    const [data, setData] = useState({});
    const [avatar, setAvatar] = useState('');  // added this line
    const {user} = useContext(Context)

    useEffect(() => {
        let decodedData = jwtDecode(getCookie('token'));
        setData(decodedData);
        // added this block
        fetch(`http://localhost:5000/api/user/avatar/6`, {
            headers: {
                authorization: `Bearer ${getCookie('token')}`,
            },
        })
            .then((res) => res.json())
            .then((user) => {
                setAvatar(user.avatar);
            });
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={12} md={3}>
                    <Image src={avatar} rounded />
                    <h2>Username</h2>
                    <p>Location</p>
                    <Button variant="primary">Edit Profile</Button>
                </Col>
                <Col xs={12} md={9}>
                    <h3>Account Information</h3>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control type="text" value="Username"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={data.email} onChange={(event) => setData({...data, username: event.target.value})} />
                        </Form.Group>
                        <Form.Group controlId="formLocation">
                            <Form.Label>Роль</Form.Label>
                            <Form.Control type="text" value={data.role} onChange={(event) => setData({...data, role: event.target.value})} />
                        </Form.Group>
                        <Button variant="primary" className="my-3">Update Information</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}


export default PersonalAccount;