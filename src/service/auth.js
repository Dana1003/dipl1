import $api from '../http';
import {ROUTS_API} from "../routs";

const AuthService = {
    register(obj){
        return $api.post(ROUTS_API.getUsers, {obj}).then(res => res.data);
    },
    getManagersData(managers) {
        console.log(managers)
        $api.get(ROUTS_API.getManagers).then(res => {
            managers = res.data;
        })
        console.log(managers)
/*        return console.log($api.get(ROUTS_API.getManagers))*/
    }
};

export default  AuthService;