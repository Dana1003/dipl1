import React, { useState } from 'react';
import { MyBackTop } from "../../../BackTop/MyBackTop";

import minsk from "../../../../images/Minsk.jpg";
import coatOfArmsMinsk from "../../../../images/CoatOfArmsOfMinsk.jpg";
import vitebsk from "../../../../images/Vitebsk.jpg";
import CoatOfArmsOfVitebsk from "../../../../images/CoatOfArmsOfVitebsk.jpg";
import mogivel from "../../../../images/Mogilev.jpg";
import CoatOfArmsOfMogivel from "../../../../images/CoatOfArmsOfMogivel.jpg";
import gomel from "../../../../images/Gomel.jpg";
import CoatOfArmsOfGomel from "../../../../images/CoatOfArmsOfGomel.jpg";
import brest from "../../../../images/Brest.jpg";
import CoatOfArmsOfBrest from "../../../../images/CoatOfArmsOfBrest.jpg";
import grodno from "../../../../images/Grodno.jpg";
import CoatOfArmsOfGrodno from "../../../../images/CoatOfArmsOfGrodno.jpg";

import { Spin } from "antd";

import '../MainKindsOfTourism/MainKindsOfTourism.scss';

export function MainCities() {
    const [loading, setLoading] = useState(true);

    function toggle() {
        setLoading(false);
    }

    setTimeout(toggle, 5000);
    return (
        <div className="main-cities-block">
            <Spin spinning={loading} size={"large"}>
                <div className="text-over-picture">
                    <img src={minsk} className="pictures" alt={'Минск'}/>
                    <div className="city-card">
                        <p className="cities-of-belarus">Минск</p>
                        <h4>Первое упоминание: </h4>1067 год <br/>
                        <h4>Население: </h4>1 996 553 человек <br/>
                        <h4>День города: </h4>вторая суббота сентября <br/>
                        <h4>Герб: </h4><img src={coatOfArmsMinsk} className="coats-of-arms" alt={'coatOfArmsMinsk'}/> <br/>
                        <h4>Интересный факт: </h4> В Минске хранится легендарная картина Василия Пукирева "Неравный
                        брак". Картина находится в постоянной экспозиции Художественного музея. Это не подделка и не
                        копия, картина принадлежит кисти самого Пукирева и является повторением шедевра, первый вариант
                        которого находится в московской Третьяковке, художник написал его в 1875 году.
                    </div>
                </div>
                <div className="text-over-picture">
                    <img src={vitebsk} className="pictures" alt={'Витебск'}/>
                    <div className="city-card">
                        <p className="cities-of-belarus">Витебск</p>
                        <h4>Первое упоминание: </h4>1021 год <br/>
                        <h4>Население: </h4>360 419 человек <br/>
                        <h4>День города: </h4>конец июня — начало июля <br/>
                        <h4>Герб: </h4><img src={CoatOfArmsOfVitebsk} className="coats-of-arms" alt={'сoatOfArmsOfVitebsk'}/> <br/>
                        <h4>Интересный факт: </h4> Благовещенская церковь в Витебске является поистине древним храмом.
                        Она была построена в 12-м веке, причём возводили её византийские архитекторы, которых специально
                        для этого привезли сюда князья.
                    </div>
                </div>

                <div className="text-over-picture">
                    <img src={mogivel} className="pictures" alt={'Могилёв'}/>
                    <div className="city-card">
                        <p className="cities-of-belarus">Могилёв</p>
                        <h4>Первое упоминание: </h4>1267 год <br/>
                        <h4>Население: </h4>357 100 человек <br/>
                        <h4>День города: </h4>конец июня — начало июля <br/>
                        <h4>Герб: </h4><img src={CoatOfArmsOfMogivel} className="coats-of-arms" alt={'CoatOfArmsOfMogivel'}/> <br/>
                        <h4>Интересный факт: </h4> Могилевскую землю еще называют “краем животворных криниц”. Неспроста.
                        Ведь в ее недрах сосредоточены крупнейшие в Беларуси запасы минеральной и питьевой воды. Данные
                        источники имеют сакральное значение.
                    </div>
                </div>
                <div className="text-over-picture">
                    <img src={gomel} className="pictures" alt={'Гомель'}/>
                    <div className="city-card">
                        <p className="cities-of-belarus">Гомель</p>
                        <h4>Первое упоминание: </h4>1142 год <br/>
                        <h4>Население: </h4>503 984 человек <br/>
                        <h4>День города: </h4>вторая суббота сентября <br/>
                        <h4>Герб: </h4><img src={CoatOfArmsOfGomel} className="coats-of-arms" alt={'CoatOfArmsOfGomel'}/> <br/>
                        <h4>Интересный факт: </h4> Гомельщина простирается на юго-востоке Беларуси, поэтому ее жители
                        раньше всех встречают рассвет. Это связано с долготой местности (земным меридианом). Для Гомеля
                        он составляет приблизительно 31 градус. Несмотря на то, что город уступает наиболее восточной
                        части Беларуси, Могилеву, лучи солнечного света сначала освещают Гомель.
                    </div>
                </div>
                <div className="text-over-picture">
                    <img src={brest} className="pictures" alt={'Брест'}/>
                    <div className="city-card">
                        <p className="cities-of-belarus">Брест</p>
                        <h4>Первое упоминание: </h4>1017 год <br/>
                        <h4>Население: </h4>340 318 человек <br/>
                        <h4>День города: </h4>конец июля <br/>
                        <h4>Герб: </h4><img src={CoatOfArmsOfBrest} className="coats-of-arms" alt={'CoatOfArmsOfBrest'}/> <br/>
                        <h4>Интересный факт: </h4> Туристов привлекает в Брест не только крепость, но и железнодорожный
                        музей – на путях под открытым небом стоят десятки паровозов, электровозов и вагонов,
                        курсировавших по стране с 40-х годов прошлого века. Почти все они до сих пор исправны и активно
                        используются для съемок исторических фильмов.
                    </div>
                </div>
                <div className="text-over-picture">
                    <img src={grodno} className="pictures" alt={'Гродно'}/>
                    <div className="city-card">
                        <p className="cities-of-belarus">Гродно</p>
                        <h4>Первое упоминание: </h4>1127 год <br/>
                        <h4>Население: </h4> 357 493  человек <br/>
                        <h4>День города: </h4>третья суббота сентября  <br/>
                        <h4>Герб: </h4><img src={CoatOfArmsOfGrodno} className="coats-of-arms" alt={'CoatOfArmsOfGrodno'}/> <br/>
                        <h4>Интересный факт: </h4> Гродно — самый большой город с севера на юг на протяжении 900 км — на
                        прямом пути от Риги до Львова другого такого же крупного города нет, если только не сворачивать
                        за сотню километров в Вильнюс. А если ехать ровненько с востока на запад, то на пути от Минска
                        до польского Щецина более 1000 км нам не попадется такой же крупный город!
                    </div>
                </div>
                <MyBackTop />
            </Spin>
        </div>
    );
}