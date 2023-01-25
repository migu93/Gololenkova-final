import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    const server_url = 'http://localhost:5000/'
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor:'pointer'}} border={"light"} className={"mt-3"}>
                <Image width={150} height={150} src={server_url + device.img}
                       onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}></Image>
                <div className="mt-2 d-flex justify-content-between align-items-center">
                    <div></div>
                    <div className="d-flex align-items-center gap-2">
                        <div>{device.price} ₽</div>
                        <Image src={star} width={15} height={15}></Image>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;