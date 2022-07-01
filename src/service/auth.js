import $api from '../http';
import {ROUTS_API} from "../routs";

const AuthService = {
    register(obj){
/*        return $api.post('/users', obj).then(res => {
            console.log(res.data.userId)
            console.log(res.data.login)
        });*/
        return $api.post(ROUTS_API.getUsers, {obj}).then(res => res.data);
    }
};

export default  AuthService;