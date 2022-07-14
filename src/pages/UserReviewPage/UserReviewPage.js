import React, { useState, useEffect } from 'react';
import axios from "axios";

import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { Reviews } from "../../components/Layout/Main/MainReviews/Reviews";
import { Pagination } from "../../components/Layout/Main/Pagination";
import { Footer } from "../../components/Layout/Footer/Footer";

export function UserReviewPage() {
    const [reviewsCount, setReviewsCount] = useState(0);
    const [reviewsText, setReviewsText] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPerPage] = useState(5);

    useEffect(() => {
        axios.get(`https://localhost:7274/api/reviews/pagingReviews?PageNumber=${currentPage}&PageSize=${reviewsPerPage}`)
            .then(res => {
                const {countOfElements, reviewPaginations} = res.data;

                setReviewsText(reviewPaginations);
                setReviewsCount(countOfElements);
            })

    }, [currentPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <UserHeader />
            <Reviews reviews={reviewsText}/>
            <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviewsCount} paginate={paginate} link="/userReviews"/>
            <Footer />
        </>
    );
}