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
            geometry: [53.943472, 27.598078],
            properties: {
                balloonContentHeader: "SunTour Офис 1",
                balloonContent: "ул. Леонида Беды, 45"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.928115, 27.583889],
            properties: {
                balloonContentHeader: "SunTour Офис 2",
                balloonContent: "ул. Сурганова, 57Б"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.906798, 27.573734],
            properties: {
                balloonContentHeader: "SunTour Офис 3",
                balloonContent: "ул. Фрунзе, 1"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.916149, 27.565667],
            properties: {
                balloonContentHeader: "SunTour Офис 5",
                balloonContent: "пр. Машерова, 17/2"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.858484, 27.476770],
            properties: {
                balloonContentHeader: "SunTour Офис 4",
                balloonContent: "пр. Джержинского, 106"
            }
        }
    ]

    return (
        <div style={{background: "#d3d8e2", height: 675}}>
            <h2>Мы на карте:</h2>
            <YMaps>
                <Map style={{width: "100%", height: "80%"}}
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
        </div>
    );
}