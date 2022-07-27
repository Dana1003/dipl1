import React, {useState, useEffect} from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { Reviews } from "../../components/Layout/Main/MainReviews/Reviews";
import { Pagination } from "../../components/Layout/Main/MainReviews/Pagination";
import { Footer } from "../../components/Layout/Footer/Footer";
import { AddUserReviewModal } from "../../Modals/AddUserReviewModal/AddUserReviewModal";

import ReviewService from "../../service/review";

import { Button } from "antd";

import '../../base.scss';

export function UserReviewPage() {
    const [reviewsCount, setReviewsCount] = useState(0)
    const [reviewsText, setReviewsText] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [reviewsPerPage] = useState(5)
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        ReviewService.getReviews(currentPage, reviewsPerPage, setReviewsText, setReviewsCount)
    }, [currentPage])

    const showModal = () => {
        setIsModalVisible(true);
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const handleOk = (userReview) => {
        setIsModalVisible(false)
        ReviewService.postReview(userReview)
    }

    return (
        <>
            <UserHeader/>
            <Reviews reviews={reviewsText}/>
            <div className="add-button">
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