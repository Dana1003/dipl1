import React from 'react';

import { Card } from 'antd';

import './ReviewPagination.scss';

export const Reviews = ({reviews}) => {
    return (
        <Card title="Отзывы" style={{background: "#d3d8e2", minHeight: "100%"}}>
            {reviews.map(reviews => (
                <Card key={reviews.reviewId} type="inner" title={reviews.login} style={{marginBottom: 15, borderRadius: 10}}>
                    <div >
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

