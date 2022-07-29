import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

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

export default {successNotification, warningNotification, errorNotification};