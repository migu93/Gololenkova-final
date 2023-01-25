import React, {useEffect, useState} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
} from 'react-bootstrap';

function FavoriteProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('/api/favorite-products');
            setProducts(await response.json());
        }
        fetchProducts();
    }, []);

    function removeProduct(productId) {
        setProducts(products.filter(product => product.id !== productId));
    }

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <h1>Favorite Products</h1>
                </Col>
            </Row>
            <Row>
                {products.map(product => (
                    <Col key={product.id} xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Button
                                    onClick={() => removeProduct(product.id)}
                                    variant="danger"
                                >
                                    Remove from Favorites
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FavoriteProductsPage;
