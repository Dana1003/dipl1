import React, {useEffect, useState} from 'react';
import axios from "axios";

import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { Reviews } from "../../components/Layout/Main/MainReviews/Reviews";
import { Pagination } from "../../components/Layout/Main/Pagination";


export function ReviewPage() {
    const [reviewsCount, setReviewsCount] = useState(0);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPerPage] = useState(5);
    const [reviewsText, setReviewsText] = useState([]);

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
            <MainHeader/>
            <Reviews reviews={reviewsText} /*loading={loading}*//>
            <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviewsCount} paginate={paginate} link='/review'/>
        </>
    );
}