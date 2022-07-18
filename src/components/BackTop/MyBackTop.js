import React from 'react';

import { BackTop } from 'antd';
import { ArrowUpOutlined } from "@ant-design/icons";

export function MyBackTop() {
    return (
        <BackTop>
            <div style={{
                height: 40,
                width: 40,
                borderRadius: 4,
                backgroundColor: "#596f85",
                color: '#fff',
                textAlign: 'center',
            }}>
                <ArrowUpOutlined style={{fontSize: 37}}/>
            </div>
        </BackTop>
    );
}