import React from 'react';
import axios from "axios";
import { ArrivalCity } from "../FormsItems/ArrivalCity";
import { DepartureCity } from "../FormsItems/DepartureCity";
import { TourType } from "../FormsItems/TourType";
import { DaysAmount } from "../FormsItems/DaysAmount";
import { TourName } from "../FormsItems/TourName";
import { TourCost } from "../FormsItems/TourCost";
import { SaveButton } from "../FormsItems/SaveButton";

import { Form, notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

export function EditTourDetailsForm({tour, setTour, onResetEditing, setTours}) {
    let dividedTour = [];
    for (let field in tour) {
        dividedTour.push({
            name: [`${field}`],
            value: tour[field]
        })
    }

    function errorNotification() {
        notification.open({
            message: 'Данные не были добавлены! Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}} />
        });
    }

    const onUpdateTour = () => {
        axios.put(`https://localhost:7274/api/tours/${tour.key}`, ({
            tourId: tour.key,
            arrivalCity: tour.arrivalCity,
            departureCity: tour.departureCity,
            tourType: tour.tourType,
            amountOfDays: tour.amountOfDays,
            operator: "SunTour",
            nameOfTour: tour.nameOfTour,
            tourCost: tour.tourCost
        })).then(temp => {
            axios.get('https://localhost:7274/api/tours')
                .then(res => {
                    setTours(res.data);
                });
        }).catch(err => {
            if (err.response.status === 500) {
                errorNotification()
            }
        })
        onResetEditing();
    }

    return (
        <Form
            onFinish={onUpdateTour}
            name="basic"
            fields={dividedTour}
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
            <ArrivalCity value={tour?.arrivalCity}
                         onChange={(e) => {
                             setTour(pre => {
                                 return {...pre, arrivalCity: e}
                             })
                         }}/>
            <DepartureCity value={tour?.departureCity}
                         onChange={(e) => {
                             setTour(pre => {
                                 return {...pre, departureCity: e}
                             })
                         }}/>
            <TourType value={tour?.tourType}
                           onChange={(e) => {
                               setTour(pre => {
                                   return {...pre, tourType: e}
                               })
                           }}/>
            <DaysAmount value={tour?.amountOfDays}
                      onChange={(e) => {
                          setTour(pre => {
                              return {...pre, amountOfDays: e}
                          })
                      }}/>
            <TourName value={tour?.nameOfTour}
                        onChange={(e) => {
                            setTour(pre => {
                                return {...pre, nameOfTour: e.target.value}
                            })
                        }}/>
            <TourCost value={tour?.tourCost}
                      onChange={(e) => {
                          setTour(pre => {
                              return {...pre, tourCost: e}
                          })
                      }}/>
            <SaveButton />
        </Form>
    );
}