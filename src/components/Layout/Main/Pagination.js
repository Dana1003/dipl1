import React from 'react';

import './MainReviews/ReviewPagination.scss';
import {Link} from "react-router-dom";

export const Pagination = ({reviewsPerPage, totalReviews, paginate}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            <div className='pagination'>
                {pageNumber.map(number => (
                    <div key={number}>
                        <Link onClick={() => {paginate(number)}} to="/review">
                            {number}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};