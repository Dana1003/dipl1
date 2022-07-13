import React from 'react';
import axios from "axios";

import { EditManagerDetailsForm } from "../../Forms/EditManagerDetailsForm/EditManagerDetailsForm";

import { Modal } from "antd";

export function EditManagerDetailsModal({setIsEditingVisible, setManager, isEditingVisible, manager}) {
    const resetEditing = () => {
        setIsEditingVisible(false)
        setManager(null)
    };

    const updatedManager = () => {
        axios.put(`https://localhost:7274/api/managers/managerUser/${manager.key}`, ({
            managerId: manager.key,
            firstName: manager.firstName,
            lastName: manager.lastName,
            patronymic: manager.patronymic,
            login: manager.login,
            workExperience: manager.experience,
            phone: manager.phoneNumber,
            role: "Manager",
            userId: manager.key,
            password: ""
        })).then(temp => {
            alert('Данные менеджера успешно обновлены!');
        }).catch(err => {
            if (err.response.status === 500) {
                alert('Не удалось обновить менеджера!\nВнутренняя ошибка сервера!')
            }
        })
    }

    return (
        <Modal
            title="Редактировать менеджера"
            visible={isEditingVisible}
            okText="Сохранить"
            cancelText="Закрыть"
            onCancel={() => {
                resetEditing()
            }}
            onOk={() => {
                updatedManager()
                resetEditing()
            }}
        >
            <EditManagerDetailsForm manager={manager} setManager={setManager}/>
        </Modal>
    );
}