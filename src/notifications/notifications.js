import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, SmileOutlined } from "@ant-design/icons";

function successNotification(message){
    notification.open({
        message: message,
        icon: <CheckCircleOutlined style={{color: "green"}} />
    })
}
function errorNotification(message) {
    notification.open({
        message: message,
        icon: <CloseCircleOutlined style={{color: "red"}} />
    })
}
function warningNotification(message) {
    notification.open({
        message: message,
        icon: <ExclamationCircleOutlined style={{color: "yellow"}} />
    })
}
function birthdayNotification() {
    notification.open({
        message: 'Сумма рассчитанная к оплате будет предоставлена со скидкой в 10%!',
        icon: <SmileOutlined style={{color: "green"}}/>
    });
}

export default {successNotification, warningNotification, errorNotification, birthdayNotification};