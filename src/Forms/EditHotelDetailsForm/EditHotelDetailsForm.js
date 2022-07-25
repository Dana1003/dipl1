import React from 'react';
import axios from "axios";
import { Address } from "../FormsItems/Address";
import { City } from "../FormsItems/City";
import { HotelName } from "../FormsItems/HotelName";
import { CountOfStars } from "../FormsItems/CountOfStars";
import { RoomCost } from "../FormsItems/RoomCost";
import { SaveButton } from "../FormsItems/SaveButton";

import { Form, notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

export function EditHotelDetailsForm({hotel, setHotel, onResetEditing, setHotels}) {
    let dividedHotel = [];
    for (let field in hotel) {
        dividedHotel.push({
            name: [`${field}`],
            value: hotel[field]
        })
    }

    function errorNotification() {
        notification.open({
            message: 'Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}}/>
        });
    }

    const onUpdateHotel = () => {
        axios.put(`https://localhost:7274/api/hotels/${hotel.key}`, ({
            "nameOfHotel": hotel.nameOfHotel,
            "city": hotel.city,
            "countOfStars": hotel.countOfStars,
            "address": hotel.address,
            "roomCost": hotel.roomCost
        })).then(temp => {
            axios.get('https://localhost:7274/api/hotels')
                .then(res => {
                    setHotels(res.data);
                });
        }).catch(err => {
            if (err.response.status === 500) {
                errorNotification();
            }
        })
        onResetEditing();
    }
    return (
        <Form
            onFinish={onUpdateHotel}
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
                              return {...pre, roomCost: e}
                          })
                      }}/>
            <SaveButton />
        </Form>
    );
}