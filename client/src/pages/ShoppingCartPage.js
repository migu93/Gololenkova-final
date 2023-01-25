import React, {useEffect, useState} from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Button,
} from 'react-bootstrap';

function ShoppingCartPage() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('/api/items');
            setItems(await response.json());
        }
        fetchItems();
    }, []);

    function removeItem(itemId) {
        setItems(items.filter(item => item.id !== itemId));
    }

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <h1>Shopping Cart</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price * item.quantity}</td>
                                <td>
                                    <Button
                                        onClick={() => removeItem(item.id)}
                                        variant="danger"
                                    >
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default ShoppingCartPage;
