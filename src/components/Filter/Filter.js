import React from 'react';
import './Filter.scss';

export function Filter({applyFilter, value1, value2}) {
    return (
        <div className="main-filter">
            <form action="" className="main-filter-search">
                <div>
                    <p>Город прибытия:</p>
                    <input readOnly={true} type="text" name="" id="destinationTown" placeholder="Город прибытия"/>
                </div>
                <div>
                    <p>Дата отправления:</p>
                    <input readOnly={true} type="date" value="23-06-2022" name="" id="arrivingData"/>
                </div>
                <div>
                    <p>Количество ночей:</p>
                    <input readOnly={true} type="number" name="" id="nights" placeholder="Количество ночей"/>
                </div>
                <div>
                    <p>Количество людей:</p>
                    <input readOnly={true} type="number" name="" id="people" placeholder="Количество людей"/>
                </div>
                <button onClick={() => applyFilter('value1')} className="transition">Поиск</button>
            </form>
        </div>
    );
};