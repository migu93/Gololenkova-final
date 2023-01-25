import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Form} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Form className={"d-flex"}>
            {device.brands.map(brand =>
                <Card key={brand.id}
                      style={{cursor: 'pointer', borderColor: brand.id === device.selectedBrand.id ? '#007bff' : '', borderWidth: '2px'}}
                      border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                      onClick={() => device.setSelectedBrand(brand)}
                      className={"p-3"}>
                    {brand.name}
                </Card>
            )}
        </Form>
    );
});

export default BrandBar;