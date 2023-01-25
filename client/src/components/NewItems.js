import React, {useContext, useEffect, useState} from 'react';
import {
    Container,
    Row,
    Col,
    Card, Image,
} from 'react-bootstrap';
import girl from "../assets/GirlMain.png"
import {Context} from "../index";
import Jumbotron from "react-bootstrap";

function NewItems() {
    const [newProducts, setNewProducts] = useState([]);
    const {device} = useContext(Context)
    useEffect(() => {
        async function fetchNewProducts() {
            const response = await fetch('/api/new-products');
            setNewProducts(await response.json());
        }
        fetchNewProducts();
    }, []);

    return (
        <Container>
            <Row className="mb-4 my-5">
                <Col className="mx-auto text-center">
                    <div
                        className="p-4 p-md-5 mb-4 text-dark shadow-lg rounded bg-dark"
                        style={{
                            backgroundImage: `url(${girl})`,
                            backgroundSize: 'cover',}}>
                        <div className="col-md-6 px-0">
                            <h2 className="">Огромный выбор профессиональных инструментов для волос</h2>
                            <p className="lead my-3">
                                Все, что нужно для идеального стиля и макияжа - в нашем интернет-магазине! Купите сейчас и получите скидку 10% на первый заказ.                            </p>
                            <p className="lead mb-0">
                                <a href="#" className="text-dark fw-bold">
                                    Continue reading...
                                </a>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NewItems;
