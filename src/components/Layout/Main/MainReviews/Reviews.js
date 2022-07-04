import React from 'react';

import './ReviewPagination.scss';

export const Reviews = ({reviews}) => {
/*    if (loading) {
        return <h2>Loading...</h2>;
    }*/

    return (
        <div className="reviews-block">
            {reviews.map(reviews => (
                <div key={reviews.reviewId} className="reviews-item">
                    {reviews.reviewText}
                </div>
            ))}
        </div>
    );
};

