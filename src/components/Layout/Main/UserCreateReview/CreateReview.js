import './CreateReview.scss';
import React from 'react';

import { Input } from "antd";
const { TextArea } = Input;



export function CreateReview() {
    return (
        <>
            <TextArea showCount maxLength={500} />
        </>
    );
}