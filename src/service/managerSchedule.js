import $api from '../http';
import { ROUTS_API } from "../routs";
import moment from "moment";
import { clear } from "@testing-library/user-event/dist/clear";

import ManagerService from "./manager";

import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons";

function successDeleteNotification() {
    notification.open({
        message: 'Данные успешно удалены!',
        icon: <DeleteOutlined style={{color: "green"}}/>
    })
}

function successAddNotification() {
    notification.open({
        message: 'Данные успешно добавлены!',
        icon: <CheckCircleOutlined style={{color: "green"}}/>
    })
}

function errorNotification() {
    notification.open({
        message: 'Что-то пошло не так!',
        icon: <CloseCircleOutlined style={{color: "red"}}/>
    });
}

const ManagerScheduleService = {
    getManagerSchedule(setManagersSchedule, setManagers) {
        return $api.get(ROUTS_API.managerSchedule)
            .then(response => {
                setManagersSchedule(response.data);
                ManagerService.getManagers(setManagers)
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    getAllManagerSchedule(setManagersSchedule) {
        return $api.get(ROUTS_API.managerSchedule)
            .then(response => {
                setManagersSchedule(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    putManagerSchedule(selectedRow, selectedTime, selectedManager, setManagersSchedule) {
        return $api.put(ROUTS_API.schedules + `/${selectedRow.scheduleId}`, ({
            "date": moment(selectedTime).utcOffset('GMT').format()
        }))
            .then(response => {
                $api.put(ROUTS_API.managerSchedule + `/${selectedRow.key}`, ({
                    "managerId": selectedManager,
                    "scheduleId": response.data.scheduleId
                }))
                    .then(response => {
                        this.getAllManagerSchedule(setManagersSchedule);
                        successAddNotification()
                    });
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
            })
    },
    deleteManagerSchedule(key, setManagersSchedule) {
        return $api.delete(ROUTS_API.managerSchedule + `/${key}`)
            .then(response => {
                $api.delete(ROUTS_API.schedules + `/${response.data.scheduleId}`)
                    .then(response => {
                        this.getAllManagerSchedule(setManagersSchedule)
                        successDeleteNotification()
                    })
                    .catch(error => {
                        if (error.response.status === 500 || error.response.status === 400) {
                            console.log(error.message)
                            errorNotification()
                        }
                    })
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
            })
    },
    postManagerScheduleDates(setManagersSchedule, setIsManyDatesVisible, selectedValue, date, time) {
        return $api.post(ROUTS_API.managerSchedule, ({
            "managerId": selectedValue,
            "startDate": date[0],
            "endDate": date[1],
            "time": time.utcOffset('GMT').format()
        }))
            .then(response => {
                this.getAllManagerSchedule(setManagersSchedule)
                clear()
                setIsManyDatesVisible(false)
                successAddNotification()
            });
    },
    postManagerScheduleDate(dateTime, selectedValue, setManagersSchedule, setIsDateVisible) {
        return $api.post(ROUTS_API.schedules, {
            "date": dateTime.utcOffset('GMT').format()
        })
            .then(response => {
                $api.post(ROUTS_API.managerSchedule, {
                    "managerId": selectedValue,
                    "scheduleId": response.data.scheduleId
                })
                    .then(response => {
                            this.getAllManagerSchedule(setManagersSchedule)
                            clear()
                            setIsDateVisible(false)
                            successAddNotification()
                        }
                    )
                    .catch(error => {
                        console.log(error.message)
                        errorNotification()
                    })
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    }
}

export default ManagerScheduleService;