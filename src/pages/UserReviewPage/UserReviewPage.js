import React, {useState, useEffect} from 'react';
import axios from "axios";

import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { Reviews } from "../../components/Layout/Main/MainReviews/Reviews";
import { Pagination } from "../../components/Layout/Main/Pagination";
import { Footer } from "../../components/Layout/Footer/Footer";
import { AddUserReviewModal } from "../../Modals/AddUserReviewModal/AddUserReviewModal";

import {Button} from "antd";

import '../../base.scss';

export function UserReviewPage() {
    const [reviewsCount, setReviewsCount] = useState(0);
    const [reviewsText, setReviewsText] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPerPage] = useState(5);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        axios.get(`https://localhost:7274/api/reviews/pagingReviews?PageNumber=${currentPage}&PageSize=${reviewsPerPage}`)
            .then(res => {
                const {countOfElements, reviewPaginations} = res.data;

                setReviewsText(reviewPaginations);
                setReviewsCount(countOfElements);
            })

    }, [currentPage]);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleOk = (userReview) => {
        setIsModalVisible(false);
        axios.post('https://localhost:7274/api/reviews', userReview)
            .then(temp => {
                alert('Отзыв успешно добавлен!');
            })
            .catch(err => {
                if (err.response.status === 500) {
                    alert('Внутренняя ошибка сервера!')
                }
            })
    };

    return (
        <>
            <UserHeader/>
            <Reviews reviews={reviewsText}/>
            <div className="add-review-button">
                <Button type="primary" className="add-button" onClick={showModal} style={{width: "150px"}}>
                    Добавить отзыв
                </Button>
            </div>
            <AddUserReviewModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} handleOk={handleOk}/>
            <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviewsCount} paginate={paginate}
                        link="/userReviews"/>
            <Footer/>
        </>
    );
}