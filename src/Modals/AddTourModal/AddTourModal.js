import React from 'react';
import { AddTourForm } from "../../Forms/AddTourForm/AddTourForm";

import { Modal } from "antd";

export function AddTourModal({modalVisibility, setModalVisibility, setTour, handleOk}) {
    const handleCancel = () => {
        setModalVisibility(false);
        setTour(null);
    };

    return (
        <Modal title="Добавить менеджера"
               visible={modalVisibility}
               footer={null}
               onCancel={handleCancel}
        >
            <AddTourForm handleOk={handleOk}/>
        </Modal>
    );
}