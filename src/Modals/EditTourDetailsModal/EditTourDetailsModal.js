import React from 'react';
import { EditTourDetailsForm } from "../../Forms/EditTourDetailsForm/EditTourDetailsForm";

import { Modal } from "antd";

export function EditTourDetailsModal({editingModalVisibility, setEditingModalVisibility, tour, setTour, setTours}) {
    const onResetEditing = () => {
        setEditingModalVisibility(false)
        setTour(null)
    };

    return (
        <Modal
            title="Редактировать тур"
            visible={editingModalVisibility}
            footer={null}
            onCancel={onResetEditing}
        >
            <EditTourDetailsForm tour={tour} setTour={setTour} onResetEditing={onResetEditing} setTours={setTours}/>
        </Modal>
    );
}