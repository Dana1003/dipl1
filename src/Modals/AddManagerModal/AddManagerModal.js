import React from 'react';
import { AddManagerForm } from "../../Forms/AddManagerForm/AddManagerForm";

import { Modal } from "antd";

export function AddManagerModal({isModalVisible, handleOk, setManager, setIsModalVisible}) {
    const handleCancel = () => {
        setIsModalVisible(false);
        setManager(null);
    }

    return (
        <Modal title="Добавить менеджера"
               visible={isModalVisible}
               footer={null}
               onCancel={handleCancel}
        >
            <AddManagerForm handleOk={handleOk}/>
        </Modal>
    );
}