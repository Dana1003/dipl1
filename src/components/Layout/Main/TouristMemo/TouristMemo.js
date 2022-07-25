import React from 'react';

import { Card } from "antd";

import '../MainKindsOfTourism/MainKindsOfTourism.scss';

export function TouristMemo() {
    return (
        <div className="main-memo-block">
            <h1>Памятка туриста</h1>
            <Card title="Документы, необходимые при заезде в объект отдыха:" style={{background: "#d3d8e2"}}>
                <ul>
                    <li>По прибытии на отдых с заранее приобретенной путевкой Вам следует обратиться к администратору для
                        регистрации. При регистрации предъявите следующие документы: паспорт, путевку (документ, который
                        загружается на страницу заявки после оплаты). Для детей до 16 лет: свидетельство о рождении ребенка
                        (паспорт).
                    </li>
                    <li>При планировании поездки рекомендуем заблаговременно позаботиться о наличии копии паспортов всех
                        участников путешествия, проездных билетов (авиа, ж/д, автобус) и иных документов. Они пригодятся в
                        случае утери оригиналов, а также в иных ситуациях, которые могут возникнуть в стране пребывания.
                        Хранить копии следует отдельно от оригиналов.
                    </li>
                </ul>
            </Card>
            <Card title="Как добраться до объекта отдыха:" style={{background: "#d3d8e2"}}>
                <ul>
                    <li>Проезд до места отдыха осуществляется самостоятельно.</li>
                    <li>Для проезда в объект отдыха и обратно выбирайте официальных перевозчиков, имеющих лицензию на
                        осуществление перевозок пассажиров автомобильным транспортом.
                    </li>
                </ul>
            </Card>
            <Card title="Что нужно знать о пребывании в объект отдыха:" style={{background: "#d3d8e2"}}>
                <ul>
                    <li>В некоторых объектах отдыха отдыхающие оплачивают курортный сбор в размере до 5% от стоимости
                        путевок. Курортный сбор может включаться в стоимость при оплате либо оплачиваться дополнительной по
                        прибытии в объект отдыха. Данная информация указывается в договоре.
                    </li>
                    <li>В большинстве объектов отдыха расчетный час в 12:00 по местному времени. В день приезда расселение в
                        номера осуществляется после 14:00.
                    </li>
                    <li>Распределение номеров является прерогативой администрации объекта отдыха</li>
                    <li>Рекомендуется сдавать ключ от номера на стойку регистрации, в случае его утери поставить в
                        известность администрацию.
                    </li>
                    <li>По прибытии в объект отдыха необходимо ознакомиться с планом пожарной эвакуации, правилами
                        пользования лифтом и электробытовыми приборами.
                    </li>
                    <li>В случае поломки или неисправности сантехнических устройств, электроосвещения и бытовой техники
                        следует обращаться к дежурному администратору.
                    </li>
                    <li>Следует бережно относиться к мебели, оборудованию и другим предметам в объекте отдыха. Отдыхающий
                        несет материальную ответственность за ущерб, причиненный объекту отдыха.
                    </li>
                    <li>Администрация объекта отдыха не несет ответственности за утерю ценных вещей, денег и документов,
                        оставленных в номере. Поиск забытых вещей ведется самостоятельно и за свой счет.
                    </li>
                    <li>Отдыхающие, прибывшие в объект отдыха с детьми, несут полную ответственность за их действия и
                        безопасность.
                    </li>
                    <li>Соблюдение тишины в объекте отдыха и на его территории после установленного времени обязательно для
                        всех.
                    </li>
                    <li>Курение в объектах отдыха разрешается в специально отведенных местах.</li>
                    <li>В день выезда необходимо до 12:00 освободить свой номер и оплатить дополнительные услуги (телефонные
                        переговоры, мини-бар, заказ питания и напитков в номер и пр.).
                    </li>
                </ul>
            </Card>
        </div>
    );
}