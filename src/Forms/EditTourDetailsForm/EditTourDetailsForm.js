import React from 'react';
import { ArrivalCity } from "../FormsItems/ArrivalCity";
import { DepartureCity } from "../FormsItems/DepartureCity";
import { TourType } from "../FormsItems/TourType";
import { DaysAmount } from "../FormsItems/DaysAmount";
import { TourName } from "../FormsItems/TourName";
import { TourCost } from "../FormsItems/TourCost";
import { SaveButton } from "../FormsItems/SaveButton";

import TourService from "../../service/tour";

import { Form } from "antd";

export function EditTourDetailsForm({tour, setTour, onResetEditing, setTours}) {
    let dividedTour = [];
    for (let field in tour) {
        dividedTour.push({
            name: [`${field}`],
            value: tour[field]
        })
    }

    const onUpdateTour = () => {
        TourService.putTour(tour, setTours)
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