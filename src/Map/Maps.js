import React, {useState} from 'react';
import {YMaps, Map, Placemark, GeolocationControl, Clusterer} from "react-yandex-maps";

export function Maps() {
    const [cluster, setCluster] = useState(null);

    const mapData = {
        center: [53.90, 27.56],
        zoom: 13,
    };

    const dataToMap = [
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.944, 27.60],
            properties: {
                balloonContentHeader: "Travel House",
                balloonContent: "Travel House | Туристическая компания"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.930, 27.588],
            properties: {
                balloonContentHeader: "Тур. агенство «А»",
                balloonContent: "Туристическое агентство «А»"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.908, 27.572],
            properties: {
                balloonContentHeader: "Atlas mira",
                balloonContent: "Туристическое агентство Атлас мира"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.916, 27.565],
            properties: {
                balloonContentHeader: "Ecotravel",
                balloonContent: "Турагентство Ecotravel"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.858, 27.476],
            properties: {
                balloonContentHeader: "Coral travel",
                balloonContent: "Турагентство «Coral travel»"
            }
        }
    ]

    return (
        <YMaps>
            <Map style={{width: "100%", height: "400px"}}
                 defaultState={mapData}
                 instanceRef={ref => {
                     if (ref) {
                         ref.events.add("click", e => {
                             ref.balloon.close();
                         });
                     }
                 }}>
                <GeolocationControl/>
                <Clusterer modules={["clusterer.addon.balloon"]}
                           options={{}}
                           instanceRef={ref => {
                               if (ref) {
                                   setCluster(ref);
                               }
                           }}>
                    {dataToMap.map(coordinate =>
                        <Placemark key={coordinate.geometry}
                            modules={coordinate.modules}
                            geometry={coordinate.geometry}
                            properties={coordinate.properties}
                        />)}
                </Clusterer>
            </Map>
        </YMaps>
    );
}