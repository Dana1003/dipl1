import React from 'react';

import {Card} from 'antd';

import './ReviewPagination.scss';

export const Reviews = ({reviews}) => {
/*    if (loading) {
        return <h2>Loading...</h2>;
    }*/

    return (
        <Card title="Отзывы" style={{background: "#d3d8e2"}}>
            {reviews.map(reviews => (
                <Card type="inner" title={reviews.login} style={{marginTop: 15}}>
                    <div key={reviews.reviewId}>
                        {reviews.reviewText}
                    </div>
                </Card>
            ))}
        </Card>
/*        <div className="reviews-block">
            {reviews.map(reviews => (
                <div key={reviews.reviewId} className="reviews-item">
                    {reviews.reviewText}
                </div>
            ))}
        </div>*/
    );
};

