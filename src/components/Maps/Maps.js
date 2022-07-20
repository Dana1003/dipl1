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
                balloonContentHeader: "Офис 1",
                balloonContent: "Филиал SunTour 1"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.930, 27.588],
            properties: {
                balloonContentHeader: "Офис 2",
                balloonContent: "Филиал SunTour 2"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.908, 27.572],
            properties: {
                balloonContentHeader: "Офис 3",
                balloonContent: "Филиал SunTour 3"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.916, 27.565],
            properties: {
                balloonContentHeader: "Офис 4",
                balloonContent: "Филиал SunTour 4"
            }
        },
        {
            modules: ["geoObject.addon.balloon"],
            geometry: [53.858, 27.476],
            properties: {
                balloonContentHeader: "Офис 4",
                balloonContent: "Филиал SunTour 4"
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