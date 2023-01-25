import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/star.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import {Context} from "../index";

const DevicePage = () => {
    const server_url = 'http://localhost:5000/'
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const {user} = useContext(Context)

    const addToCart = () => {
        // 1. Send a POST request to the /add-to-cart route on the backend
        // with the deviceId and the user's basketId
        fetch('http://localhost:5000/api/device/add-to-cart', {
            method: 'POST',
            body: JSON.stringify({deviceId: '1', basketId: '6'}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                if (data.success) {
                    // 2. If the request was successful, display a success message or toast notification
                    alert(`${device.name} was added to the cart!`);
                } else {
                    // 3. If the request was unsuccessful, display an error message or toast notification
                    alert(`Error: ${data.error}`);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };


    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={6} className="d-flex justify-content-end">
                    <Image width={300} height={300} src={server_url + device.img}/>
                </Col>
                <Col md={6} className="d-flex justify-content-start">
                    <Row className="d-flex flex-column align-items-center">
                        <Card

                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                            <h4>{device.name}</h4>
                            <h3>От: {device.price} руб.</h3>
                            <Button variant={"outline-dark"} onClick={addToCart}>Добавить в корзину</Button>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;
