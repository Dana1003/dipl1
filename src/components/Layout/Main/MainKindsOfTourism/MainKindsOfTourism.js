import * as React from 'react';

import tourism1 from '../../../../images/tourism1.jpg';
import tourism2 from '../../../../images/tourism2.jpg';
import tourism3 from '../../../../images/tourism3.jpg';
import tourism4 from '../../../../images/tourism4.jpg';
import tourism5 from '../../../../images/tourism5.jpg';
import tourism6 from '../../../../images/tourism6.jpg';
import tourism7 from '../../../../images/tourism7.jpg';
import tourism8 from '../../../../images/tourism8.jpg';

import {BackTop} from "antd";
import {ArrowUpOutlined} from "@ant-design/icons";

import './MainKindsOfTourism.scss'


export function MainKindsOfTourism() {
    return (
        <div className="main-tourism-block">
            <div className="text-over-picture">
                <p className="kind-of-tourism">Рекреационный туризм</p>
                <div className="appeared-text">
                    Этот вид туризма отличается большим разнообразием и может включать зрелищно-развлекательные
                    программы, охоту, рыбалку, музыкальное и художественное творчество, посещения спортивных
                    мероприятий в качестве
                    зрителя и т. д.
                </div>
                <img src={tourism1} className="pictures"/>
            </div>
            <div className="text-over-picture">
                <p className="kind-of-tourism">Лечебно-оздоровительный туризм</p>
                <div className="appeared-text">
                    Лечебно-оздоровительный туризм обусловлен потребностью в лечении различного рода заболеваний и
                    оздоровлении организма после перенесенных заболеваний. Здесь можно говорить о турах с исключительно
                    лечебной целью, для лечения каких-либо тяжелых заболеваний, реабилитации после травм, аварий,
                    операций и турах лечебно-оздоровительных, с целью поддержания молодости, красоты и здоровья, снятия
                    стресса и усталости.
                </div>
                <img src={tourism2} className="pictures"/>
            </div>
            <div className="text-over-picture">
                <p className="kind-of-tourism">Познавательный туризм</p>
                <div className="appeared-text">
                    Экскурсионный включает в себя поездки с целью ознакомления с природными и историко-культурными
                    достопримечательностями, музеями, театрами, традициями народов в посещаемой стране. Поездка может
                    включать в себя и познавательные и рекреационные цели одновременно.
                </div>
                <img src={tourism3} className="pictures"/>
            </div>
            <div className="text-over-picture">
                <p className="kind-of-tourism">Деловой туризм</p>
                <div className="appeared-text">
                    Деловой туризм охватывает путешествия со служебными или профессиональными целями без получения
                    доходов по месту временного пребывания. К этому виду туризма ВТО относит поездки для участия в
                    съездах, научных конгрессах и конференциях, производственных совещаниях и семинарах, ярмарках,
                    выставках, салонах, а также для проведения переговоров и заключения контрактов, монтажа и наладки
                    оборудования.
                </div>
                <img src={tourism4} className="pictures"/>
            </div>
            <div className="text-over-picture">
                <p className="kind-of-tourism">Спортивный туризм</p>
                <div className="appeared-text">
                    Данный вид туризма предполагает выезд для проведения спортивных мероприятий в тех или иных
                    странах и регионах. Его, в свою очередь, можно подразделить на профессиональный и любительский
                    туризм. Как «специальные виды туризма» нас интересует любительский туризм, который можно
                    подразделить на зимний и летний, а также водные, воздушные, пустынные и горные виды спорта.
                </div>
                <img src={tourism5} className="pictures"/>
            </div>
            <div className="text-over-picture">
                <p className="kind-of-tourism">Этнический туризм</p>
                <div className="appeared-text">
                    Этнический туризм преследует цель посещения места рождения или
                    происхождения семьи, а также посещения места жительства родственников и/или близких. Этот вид
                    туризма носит название ностальгического. Особое приоритетное значение этот вид туризма имеет для
                    стран, где проживают большие диаспоры первоначально родом из других стран.
                </div>
                <img src={tourism6} className="pictures"/>
            </div>
            <div className="text-over-picture">
                <p className="kind-of-tourism">Религиозный туризм</p>
                <div className="appeared-text">
                    Этот вид туризма основывается на религиозных потребностях людей различных конфессий. Религиозный
                    туризм можно назвать древнейшим, его корни уходят в незапамятные времена. Он имеет две основные
                    разновидности: паломнический туризм (отдельно следует выделить духовно-паломническое направление) и
                    религиозный туризм экскурсионно-познавательной направленности. Религиозный туризм в отдельных
                    конфессиях имеет свои особенности.
                </div>
                <img src={tourism7} className="pictures"/>
            </div>
            <div className="text-over-picture">
                <p className="kind-of-tourism">Образовательный туризм</p>
                <div className="appeared-text">
                    Образовательный туризм предполагает туры продолжительностью от 15 дней до 3 месяцев с целью
                    повышения квалификации либо углубления знаний по тем или иным дисциплинам. Наиболее популярными в
                    настоящее время являются образовательные туры с целью изучения иностранных языков или углубления
                    знаний иностранного языка.
                </div>
                <img src={tourism8} className="pictures"/>
            </div>
            <BackTop>
                <div style={{
                    height:40,
                    width: 40,
                    borderRadius: 4,
                    backgroundColor: '#1088e9',
                    color: '#fff',
                    textAlign: 'center',
                }}>
                    <ArrowUpOutlined style={{fontSize: 37}}/>
                </div>
            </BackTop>
        </div>
    );
};