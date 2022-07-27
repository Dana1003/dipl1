import $api from '../http';
import { ROUTS_API } from "../routs";

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

const ReviewService = {
    getReviews(currentPage, reviewsPerPage, setReviewsText, setReviewsCount) {
        return $api.get(ROUTS_API.reviews + `/pagingReviews?PageNumber=${currentPage}&PageSize=${reviewsPerPage}`)
            .then(response => {
                const {countOfElements, reviewPaginations} = response.data;
                setReviewsText(reviewPaginations);
                setReviewsCount(countOfElements);
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    postReview(userReview) {
        return $api.post(ROUTS_API.reviews , userReview)
            .then(response => {
                successAddNotification()
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    }
}

export default ReviewService;