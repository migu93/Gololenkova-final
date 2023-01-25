import React, {useEffect, useState} from 'react';
import {
    Container,
    Row,
    Col,
    Carousel,
    Button,
    Card,
} from 'react-bootstrap';
import NewItems from "../components/NewItems";

function LandingPage() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        async function fetchFeaturedProducts() {
            const response = await fetch('http://localhost:5000/api/device/');
            setFeaturedProducts(await response.json());
        }
        fetchFeaturedProducts();
    }, []);

    return (
        <Container>
            <NewItems></NewItems>
        </Container>
    );
}

export default LandingPage;

