import $api from '../http';
import { ROUTS_API } from "../routs";
import moment from "moment";
import { clear } from "@testing-library/user-event/dist/clear";
import notifications from '../notifications/notifications';

import ManagerService from "./manager";

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
                        notifications.successNotification('Данные были успешно отредактированы!')
                    })
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были отредактированы! Что-то пошло не так!')
            })
    },
    deleteManagerSchedule(key, setManagersSchedule) {
        return $api.delete(ROUTS_API.managerSchedule + `/${key}`)
            .then(response => {
                $api.delete(ROUTS_API.schedules + `/${response.data.scheduleId}`)
                    .then(response => {
                        this.getAllManagerSchedule(setManagersSchedule)
                        notifications.successNotification('Данные были успешно удалены!')
                    })
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были удалены! Что-то пошло не так!')
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
                notifications.successNotification('Данные были успешно добалены!')
            })
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
                            notifications.successNotification('Данные были успешно добавлены!')
                        }
                    )
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были добавлены! Что-то пошло не так!')
            })
    }
}

export default ManagerScheduleService;