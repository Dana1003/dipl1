import $api from '../http';
import { ROUTS_API } from "../routs";

const WorkTimeService = {
    getWorkTime(setWorkedTime) {
        return $api.get(ROUTS_API.workTime)
            .then(response => {
                setWorkedTime(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }
}

export default WorkTimeService;