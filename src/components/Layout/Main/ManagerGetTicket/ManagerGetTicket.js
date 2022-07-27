import React, {useState, useEffect} from 'react';
import axios from "axios";
import moment from "moment";
import {CountOfAdult} from "../../../../Forms/FormsItems/CountOfAdult";
import {CountOfChildren} from "../../../../Forms/FormsItems/CountOfChildren";
import {DaysAmount} from "../../../../Forms/FormsItems/DaysAmount";
import {TravelStartDate} from "../../../../Forms/FormsItems/TravelStartDate";

import {Button, Form, notification, Rate, Table} from "antd";
import {CheckCircleOutlined, SmileOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {PassportNumber} from "../../../../Forms/FormsItems/PassportNumber";
import {Login} from "../../../../Forms/FormsItems/Login";
import {Password} from "../../../../Forms/FormsItems/Password";
import {LastName} from "../../../../Forms/FormsItems/LastName";
import {FirstName} from "../../../../Forms/FormsItems/FirstName";
import {Patronymic} from "../../../../Forms/FormsItems/Patronymic";
import {Phone} from "../../../../Forms/FormsItems/Phone";
import {BirthdayDatePicker} from "../../../../Forms/FormsItems/BirthdayDatePicker";
import {Email} from "../../../../Forms/FormsItems/Email";
import {SaveButton} from "../../../../Forms/FormsItems/SaveButton";

export function ManagerGetTicket() {
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);
    const [isNonRegisterVisible, setIsNonRegisterVisible] = useState(false);
    const [passportNumber, setPassportNumber] = useState('');
    const [isOldClient, setIsOldClient] = useState(false);
    const [isNewClient, setIsNewClient] = useState(false);

    //сюда надо будет записать то, что вернет запрос на получение данных клиента
    const [client, setClient] = useState('');
    const [tours, setTours] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [isHotelsVisible, setIsHotelsVisible] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [isTicketVisible, setIsTicketVisible] = useState(false);

    const [countOfChildren, setCountOfChildren] = useState(0);
    const [countOfAdult, setCountOfAdult] = useState(0);
    const [countOfDays, setCountOfDays] = useState(0);
    const [date, setDate] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7274/api/tours')
            .then(res => {
                setTours(res.data);
            });
    }, []);

    function successNotification() {
        notification.open({
            message: 'Бронь прошла успешно!',
            icon: <CheckCircleOutlined style={{color: "green"}}/>
        });
    }

    function successNotificationAdd() {
        notification.open({
            message: 'Клиент успешно зарегистрирован!',
            icon: <CheckCircleOutlined style={{color: "green"}}/>
        });
    }

    function birthdayNotification() {
        notification.open({
            message: 'Сумма рассчитанная к оплате будет предоставлена со скидкой в 10%!',
            icon: <SmileOutlined style={{color: "green"}}/>
        });
    }

    const onTourChange = (key, value) => {
        setSelectedTour(value[0])
        axios.get(`https://localhost:7274/api/hotels/findHotels?city=${value[0].departureCity}`)
            .then(res => {
                setHotels(res.data);
                setIsHotelsVisible(true)
            });
        /*        setSumma(value[0].tourCost);*/
    };

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    };

    const onCalculateCost = () => {
        if ((new Date(client.bithDate).getMonth() + 1) === (new Date().getMonth() + 1)
            && new Date(client.bithDate).getDate() === new Date().getDate()) {
            birthdayNotification()
            return (selectedTour.tourCost +
                (selectedHotel.roomCost * countOfAdult + selectedHotel.roomCost / 2 * countOfChildren) * countOfDays) * 0.9;
        } else
            return selectedTour.tourCost +
                (selectedHotel.roomCost * countOfAdult + selectedHotel.roomCost / 2 * countOfChildren) * countOfDays;
    }

    const onBookingHandle = () => {
        axios.post('https://localhost:7274/api/tourHotel', ({
            "tourId": selectedTour.key,
            "hotelId": selectedHotel.key
        }))
            .then(res => {
                axios.post('https://localhost:7274/api/tickets', ({
                    "clientId": client.clientId,
                    "tourHotelId": res.data.tourHotelId,
                    "cost": onCalculateCost(),
                    "departureDate": date.utcOffset('GMT').format(),
                    "arrivalDate": date.add('Days', countOfDays).utcOffset('GMT').format(),
                    "status": true,
                    "countOfPeople": Number(countOfChildren) + Number(countOfAdult)
                }))
                    .then(res => {
                        setIsNonRegisterVisible(false);
                        setIsNewClient(false);
                        setIsOldClient(false);
                        setIsTicketVisible(false)
                        setIsHotelsVisible(false)
                        setSelectedHotel('')
                        setSelectedTour('')
                        setDate('')
                        setCountOfDays(0)
                        setCountOfAdult(0)
                        setCountOfChildren(0)
                        setClient('');
                        successNotification();
                    });
            });
    }

    const onHotelChange = (key, value) => {
        setSelectedHotel(value[0])
        setIsTicketVisible(true)
    }

    const filteredData = (field) => [...new Set(tours.map(x => x[field]))].map(item => ({
        text: item,
        value: item
    }));

    const columnsTours = [
        {
            title: 'Город прибытия',
            dataIndex: 'arrivalCity',
            filters: filteredData('arrivalCity'),
            onFilter: (value, record) => record.arrivalCity === value,
            sorter: (a, b) => a.arrivalCity.localeCompare(b.arrivalCity)
        },
        {
            title: 'Город отправления',
            dataIndex: 'departureCity',
            filters: filteredData('departureCity'),
            onFilter: (value, record) => record.departureCity === value,
            sorter: (a, b) => a.departureCity.localeCompare(b.departureCity)
        },
        {
            title: 'Тип тура',
            dataIndex: 'tourType',
            filterSearch: true,
            filters: filteredData('tourType'),
            onFilter: (value, record) => record.tourType === value,
            sorter: (a, b) => a.tourType.localeCompare(b.tourType)
        },
        {
            title: 'Количество дней',
            dataIndex: 'amountOfDays',
            filters: filteredData('amountOfDays'),
            onFilter: (value, record) => record.amountOfDays === value,
            sorter: (a, b) => a.amountOfDays - b.amountOfDays,
        },
        {
            title: 'Название тура',
            dataIndex: 'nameOfTour',
            filterSearch: true,
            filters: filteredData('nameOfTour'),
            onFilter: (value, record) => record.nameOfTour === value,
            sorter: (a, b) => a.nameOfTour.localeCompare(b.nameOfTour)
        },
        {
            title: 'Цена тура',
            dataIndex: 'tourCost',
            filterSearch: true,
            filters: filteredData('tourCost'),
            onFilter: (value, record) => record.tourCost === value,
            sorter: (a, b) => a.tourCost - b.tourCost,
        },
    ];

    const filter = (field) => [...new Set(hotels.map(x => x[field]))].map(value => ({
        text: value,
        value: value
    }));

    const columnsHotels = [
        {
            title: 'Название отеля',
            dataIndex: 'nameOfHotel',
            filters: filter('nameOfHotel'),
            filterSearch: true,
            onFilter: (value, record) => record.nameOfHotel.includes(value),
            sorter: (a, b) => a.nameOfHotel.length - b.nameOfHotel.length,
        },
        {
            title: 'Количество звезд',
            dataIndex: 'countOfStars',
            filters: filter('countOfStars'),
            onFilter: (value, record) => record.countOfStars === value,
            sorter: (a, b) => a.countOfStars - b.countOfStars
        },
        {
            title: 'Город',
            dataIndex: 'city',
            filters: filter('city'),
            onFilter: (value, record) => record.arrivalCity === value,
            sorter: (a, b) => a.arrivalCity.localeCompare(b.arrivalCity)
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
        },
        {
            title: 'Цена за номер',
            dataIndex: 'roomCost',
            filters: filter('roomCost'),
            onFilter: (value, record) => record.roomCost === value,
            sorter: (a, b) => a.roomCost - b.roomCost
        },
    ];

    function errorNotification() {
        notification.open({
            message: 'Поиск не дал результатов...',
            icon: <CloseCircleOutlined style={{color: "red"}}/>
        });
    }

    function errorNotificationAdd() {
        notification.open({
            message: 'Не удалось добавить клиента...',
            icon: <CloseCircleOutlined style={{color: "red"}}/>
        });
    }

    const onNewClientBooking = () => {
        setIsNewClient(true)
        setIsOldClient(false);
    }

    const onOldClientBooking = () => {
        setIsOldClient(true)
        setIsNewClient(false);
    }

    const onCreateClient = () => {
        axios.post('https://localhost:7274/api/clients/clientUser', ({
            "passportNumber": client.passportNumber,
            "email": client.email,
            "bithDate": client.bithDate,
            "firstName": client.firstName,
            "lastName": client.lastName,
            "patronymic": client.patronymic,
            "phone": client.phone,
            "login": client.login,
            "password": client.password,
            "role": "User"
        }))
            .then(res => {
                setClient(res.data);
                setIsNonRegisterVisible(true);
                successNotificationAdd()
            })
            .catch(ex => {
                errorNotificationAdd()
            })
    }

    const onFindOldClient = () => {
        axios.get(`https://localhost:7274/api/getClientByPassport?passportNumber=${passportNumber}`)
            .then(res => {
                setClient(res.data)
                setIsRegisterVisible(true);
            })
            .catch(ex => {
                errorNotification()
            });
    }


    return (
        <>
            <div className="add-button">
                <Button type="primary" className="add-button" onClick={onOldClientBooking}
                        style={{marginTop: 50, display: 'flex', alignItems: 'center'}}>
                    Заказать на существующего пользователя
                </Button>
            </div>
            <div className="add-button">
                <Button type="primary" className="add-button" onClick={onNewClientBooking}
                        style={{marginTop: 50, display: 'flex', alignItems: 'center'}}>
                    Заказать на нового пользователя
                </Button>
            </div>

            {isNewClient && (
                <>
                <Form
                    onFinish={onCreateClient}
                    name="basic"
                    labelCol={{
                        span: 9,
                    }}
                    wrapperCol={{
                        span: 6,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Login onChange={(e) => {
                        setClient(pre => {
                            return {...pre, login: e.target.value}
                        })
                    }}/>
                    <Password onChange={(e) => {
                        setClient(pre => {
                            return {...pre, password: e.target.value}
                        })
                    }}/>
                    <LastName onChange={(e) => {
                        setClient(pre => {
                            return {...pre, lastName: e.target.value}
                        })
                    }}/>
                    <FirstName onChange={(e) => {
                        setClient(pre => {
                            return {...pre, firstName: e.target.value}
                        })
                    }}/>
                    <Patronymic onChange={(e) => {
                        setClient(pre => {
                            return {...pre, patronymic: e.target.value}
                        })
                    }}/>
                    <Phone onChange={(e) => {
                        setClient(pre => {
                            return {...pre, phone: e.target.value}
                        })
                    }}/>
                    <BirthdayDatePicker onChange={(e) => {
                        setClient(pre => {
                            return {...pre, bithDate: e}
                        })
                    }}/>
                    <Email onChange={(e) => {
                        setClient(pre => {
                            return {...pre, email: e.target.value}
                        })
                    }}/>
                    <PassportNumber onChange={(e) => {
                        setClient(pre => {
                            return {...pre, passportNumber: e.target.value}
                        })
                    }}/>
                    <SaveButton/>
                </Form>
                    {isNonRegisterVisible && (
                        <div className="main-block">
                            <div className="table">
                                <Table
                                    rowSelection={{
                                        type: "radio",
                                        onChange: onTourChange
                                    }}
                                    columns={columnsTours}
                                    title={() => 'Данные о турах'}
                                    pagination={{pageSize: 5}}
                                    dataSource={tours.map(currentValue => ({
                                        key: currentValue.tourId,
                                        arrivalCity: currentValue.arrivalCity,
                                        departureCity: currentValue.departureCity,
                                        tourType: currentValue.tourType,
                                        amountOfDays: currentValue.amountOfDays,
                                        nameOfTour: currentValue.nameOfTour,
                                        tourCost: currentValue.tourCost
                                    }))}/>
                            </div>
                            {isHotelsVisible && (
                                <div className="table">
                                    <Table
                                        rowSelection={{
                                            type: "radio",
                                            onChange: onHotelChange
                                        }}
                                        columns={columnsHotels}
                                        title={() => 'Данные об отелях'}
                                        pagination={{pageSize: 5}}
                                        dataSource={hotels.map(currentValue => ({
                                            key: currentValue.hotelId,
                                            nameOfHotel: currentValue.nameOfHotel,
                                            countOfStars: <Rate disabled allowClear={false}
                                                                value={currentValue.countOfStars}/>,
                                            city: currentValue.city,
                                            address: currentValue.address,
                                            roomCost: currentValue.roomCost
                                        }))}/>
                                </div>
                            )}
                            {isTicketVisible && (
                                <>
                                    <Form
                                        name="basic"
                                        labelCol={{
                                            span: 9,
                                        }}
                                        wrapperCol={{
                                            span: 6,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        autoComplete="off"
                                    >
                                        <CountOfAdult onChange={(e) => {
                                            setCountOfAdult(e)
                                        }}/>
                                        <CountOfChildren onChange={(e) => {
                                            setCountOfChildren(e)
                                        }}/>
                                        <DaysAmount onChange={(e) => {
                                            setCountOfDays(e)
                                        }}/>
                                        <TravelStartDate onChange={(e) => {
                                            setDate(e)
                                        }} disabledDate={disabledDate}/>
                                    </Form>
                                    <div className="add-button">
                                        <Button type="primary" className="add-button" onClick={onBookingHandle}
                                                style={{marginTop: 50, display: 'flex', alignItems: 'center'}}>
                                            Забронировать
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </>
            )}

            {isOldClient && (
                <>
                    <Form>
                        <PassportNumber onChange={(e) => setPassportNumber(e.target.value)}/>
                        <div className="add-button">
                            <Button type="primary" className="add-button" onClick={onFindOldClient}
                                    style={{marginTop: 50, display: 'flex', alignItems: 'center'}}>
                                Поиск
                            </Button>
                        </div>
                    </Form>
                    {isRegisterVisible && (
                        <div className="main-block">
                            <div className="table">
                                <Table
                                    rowSelection={{
                                        type: "radio",
                                        onChange: onTourChange
                                    }}
                                    columns={columnsTours}
                                    title={() => 'Данные о турах'}
                                    pagination={{pageSize: 5}}
                                    dataSource={tours.map(currentValue => ({
                                        key: currentValue.tourId,
                                        arrivalCity: currentValue.arrivalCity,
                                        departureCity: currentValue.departureCity,
                                        tourType: currentValue.tourType,
                                        amountOfDays: currentValue.amountOfDays,
                                        nameOfTour: currentValue.nameOfTour,
                                        tourCost: currentValue.tourCost
                                    }))}/>
                            </div>
                            {isHotelsVisible && (
                                <div className="table">
                                    <Table
                                        rowSelection={{
                                            type: "radio",
                                            onChange: onHotelChange
                                        }}
                                        columns={columnsHotels}
                                        title={() => 'Данные об отелях'}
                                        pagination={{pageSize: 5}}
                                        dataSource={hotels.map(currentValue => ({
                                            key: currentValue.hotelId,
                                            nameOfHotel: currentValue.nameOfHotel,
                                            countOfStars: <Rate disabled allowClear={false}
                                                                value={currentValue.countOfStars}/>,
                                            city: currentValue.city,
                                            address: currentValue.address,
                                            roomCost: currentValue.roomCost
                                        }))}/>
                                </div>
                            )}
                            {isTicketVisible && (
                                <>
                                    <Form
                                        name="basic"
                                        labelCol={{
                                            span: 9,
                                        }}
                                        wrapperCol={{
                                            span: 6,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        autoComplete="off"
                                    >
                                        <CountOfAdult onChange={(e) => {
                                            setCountOfAdult(e)
                                        }}/>
                                        <CountOfChildren onChange={(e) => {
                                            setCountOfChildren(e)
                                        }}/>
                                        <DaysAmount onChange={(e) => {
                                            setCountOfDays(e)
                                        }}/>
                                        <TravelStartDate onChange={(e) => {
                                            setDate(e)
                                        }} disabledDate={disabledDate}/>
                                    </Form>
                                    <div className="add-button">
                                        <Button type="primary" className="add-button" onClick={onBookingHandle}
                                                style={{marginTop: 50, display: 'flex', alignItems: 'center'}}>
                                            Забронировать
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </>
            )}
        </>
    );
}