import React from 'react';
import { Link } from "react-router-dom";

import './MainReviews/ReviewPagination.scss';

export const Pagination = ({reviewsPerPage, totalReviews, paginate, link}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className='pagination-align'>
            <div className='pagination'>
                {pageNumber.map(number => (
                    <div key={number}>
                        <Link onClick={() => {paginate(number)}} to={link}>
                            {number}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}