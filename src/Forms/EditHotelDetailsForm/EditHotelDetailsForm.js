import React from 'react';
import { Address } from "../FormsItems/Address";
import { City } from "../FormsItems/City";
import { HotelName } from "../FormsItems/HotelName";
import { CountOfStars } from "../FormsItems/CountOfStars";

import {Form} from "antd";

export function EditHotelDetailsForm({hotel, setHotel}) {
    return (
        <Form
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
            <HotelName value={hotel?.nameOfHotel}
                         onChange={(e) => {
                             setHotel(pre => {
                                 return {...pre, nameOfHotel: e.target.value}
                             })
                         }}/>
            <City value={hotel?.city}
                  onChange={(e) => {
                      setHotel(pre => {
                          return {...pre, city: e}
                      })
                  }}/>
            <Address value={hotel?.address}
                     onChange={(e) => {
                         setHotel(pre => {
                             return {...pre, address: e.target.value}
                         })
                     }}/>
            <CountOfStars value={hotel.countOfStars}
                          onChange={(e) => {
                              setHotel(pre => {
                                  return {...pre, countOfStars: e}
                              })
                          }}/>
        </Form>
    );
}