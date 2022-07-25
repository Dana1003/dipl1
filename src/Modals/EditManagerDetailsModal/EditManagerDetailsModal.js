import React from 'react';
import { EditManagerDetailsForm } from "../../Forms/EditManagerDetailsForm/EditManagerDetailsForm";

import { Modal } from "antd";

export function EditManagerDetailsModal({setIsEditingVisible, setManager, isEditingVisible, manager, setManagers}) {
    const onResetEditing = () => {
        setIsEditingVisible(false)
        setManager(null)
    };

    return (
        <Modal
            title="Редактировать менеджера"
            visible={isEditingVisible}
            onCancel={onResetEditing}
            footer={null}
        >
            <EditManagerDetailsForm manager={manager} setManager={setManager} setManagers={setManagers} onResetEditing={onResetEditing}/>
        </Modal>
    );
}