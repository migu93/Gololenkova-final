import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer((props) => {
    const {device} = useContext(Context)

    const { searchQuery } = props;
    const filteredDevices = device.devices.filter(device => device.name.includes(searchQuery))
    return (
         <Row className="d-flex">
             {filteredDevices.map(device =>
                 <DeviceItem key={device.id} device={device}/>
             )}
         </Row>
    );
});

export default DeviceList;