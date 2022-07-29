import $api from '../http';
import { ROUTS_API } from "../routs";
import notifications from "../notifications/notifications";

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
                notifications.successNotification('Данные были успешно даобалены!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были добалены! Что-то пошло не так!')
            })
    }
}

export default ReviewService;