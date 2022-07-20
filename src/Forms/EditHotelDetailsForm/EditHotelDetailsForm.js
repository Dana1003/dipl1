import React from 'react';
import { Address } from "../FormsItems/Address";
import { City } from "../FormsItems/City";
import { HotelName } from "../FormsItems/HotelName";
import { CountOfStars } from "../FormsItems/CountOfStars";

import {Form} from "antd";
import {RoomCost} from "../FormsItems/RoomCost";

export function EditHotelDetailsForm({hotel, setHotel}) {
    let dividedHotel = [];
    for (let field in hotel)
        dividedHotel.push({
            name: [`${field}`],
            value: hotel[field]
        })
    return (
        <Form
            name="basic"
            fields={dividedHotel}
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
            <RoomCost value={hotel.roomCost}
                      onChange={(e) => {
                          setHotel(pre => {
                              return {...pre, roomCost: e.target.value}
                          })
                      }}/>
        </Form>
    );
}