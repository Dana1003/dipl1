import React, { useState, useEffect } from 'react';
import moment from "moment";
import { SaveButton } from "../FormsItems/SaveButton";
import { CountOfAdult } from "../FormsItems/CountOfAdult";
import { CountOfChildren } from "../FormsItems/CountOfChildren";
import { DaysAmount } from "../FormsItems/DaysAmount";
import { TravelStartDate } from "../FormsItems/TravelStartDate";
import notifications from '../../notifications/notifications';

import ClientService from "../../service/client";

import { Form } from "antd";

export function AddTicketFromFavouriteForm({handleOk, ticket}) {
    const [countOfChildren, setCountOfChildren] = useState(0)
    const [countOfAdult, setCountOfAdult] = useState(0)
    const [countOfDays, setCountOfDays] = useState(0)
    const [date, setDate] = useState(null)
    const [client, setClient] = useState('')

    useEffect(() => {
        ClientService.getClient(setClient)
    }, [])

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    }
    const onCalculateCost = () => {
        if ((new Date(client.bithDate).getMonth() + 1) === (new Date().getMonth() + 1)
            && new Date(client.bithDate).getDate() === new Date().getDate()) {
            notifications.birthdayNotification()
            return (ticket.tourCost +
                (ticket.roomCost * countOfAdult + ticket.roomCost / 2 * countOfChildren) * countOfDays) * 0.9;
        } else
            return ticket.tourCost +
                (ticket.roomCost * countOfAdult + ticket.roomCost / 2 * countOfChildren) * countOfDays;
    }

    return (
        <Form
            onFinish={() => handleOk({
                "clientId": client.clientId,
                "tourHotelId": ticket.tourHotelId,
                "cost": onCalculateCost(),
                "departureDate": date.utcOffset('GMT').format(),
                "arrivalDate": date.add(countOfDays, 'Days').utcOffset('GMT').format(),
                "status": true,
                "countOfPeople": Number(countOfChildren) + Number(countOfAdult)
            })}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 14,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <CountOfAdult onChange={(e) => {setCountOfAdult(e)}}/>
            <CountOfChildren onChange={(e) => {setCountOfChildren(e)}}/>
            <DaysAmount onChange={(e) => {setCountOfDays(e)}}/>
            <TravelStartDate onChange={(e) => {setDate(e)}} disabledDate={disabledDate}/>
            <SaveButton />
        </Form>
    );
}