import React, {useEffect, useState} from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { Reviews } from "../../components/Layout/Main/MainReviews/Reviews";
import { Pagination } from "../../components/Layout/Main/MainReviews/Pagination";
import { Footer } from "../../components/Layout/Footer/Footer";

import ReviewService from "../../service/review";

export function ReviewPage() {
    const [reviewsCount, setReviewsCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [reviewsPerPage] = useState(5)
    const [reviewsText, setReviewsText] = useState([])

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        ReviewService.getReviews(currentPage, reviewsPerPage, setReviewsText, setReviewsCount)
    },[currentPage])

    return (
        <>
            <MainHeader/>
            <Reviews reviews={reviewsText} /*loading={loading}*//>
            <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviewsCount} paginate={paginate} link='/review'/>
            <Footer />
        </>
    );
}