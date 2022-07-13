import React, { useState } from 'react';

import { AddManagerForm } from "../../Forms/AddManagerForm/AddManagerForm";

import { Modal } from "antd";

export function AddManagerModal({isModalVisible, handleOk, setManager, setIsModalVisible}) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [workExperience, setWorkExperience] = useState('');

    const handleCancel = () => {
        setIsModalVisible(false);
        setManager(null);
    };

    return (
        <Modal title="Добавить менеджера"
               visible={isModalVisible}
               okText="Сохранить"
               cancelText="Закрыть"
               onOk={() => handleOk({
                   "workExperience": workExperience,
                   "firstName": firstName,
                   "lastName": lastName,
                   "patronymic": patronymic,
                   "phone": phoneNumber,
                   "login": login,
                   "password": password,
                   "role": "Manager"
               })}
               onCancel={() => {
                   handleCancel()
               }}
        >
            <AddManagerForm
                onChangeLogin={(login) => {setLogin(login)}}
                onChangePassword={(password) => {setPassword(password)}}
                onChangeFirstName={(firstName) => {setFirstName(firstName)}}
                onChangeLastName={(lastName) => {setLastName(lastName)}}
                onChangePatronymic={(patronymic) => {setPatronymic(patronymic)}}
                onChangePhoneNumber={(phoneNumber) => {setPhoneNumber(phoneNumber)}}
                onChangeWorkExperience={(workExperience) => {setWorkExperience(workExperience)}}
            />
        </Modal>
    );
}