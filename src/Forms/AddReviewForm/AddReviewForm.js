import React from 'react';

import { ReviewTextarea } from "../FormsItems/ReviewTextarea";

import { Form } from "antd";

export function AddReviewForm({onChangeReview}) {
    return (
        <Form
            name="basic"
            labelCol={{
                span: 5,
            }}
            wrapperCol={{
                span: 18,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <ReviewTextarea onChange={(e) => {onChangeReview(e.target.value)}}/>
        </Form>
    );
}