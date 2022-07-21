import React, {useState, useEffect} from 'react';
import axios from "axios";
import CanvasJSReact from '../../../../lib/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function UserTheMostPopularTours() {
    const [tickets, setTickets] = useState([]);
    let dataToChart = [];

    useEffect(() => {
        axios.get('https://localhost:7274/api/tickets')
            .then(res => {
                setTickets(res.data.map(x => x.nameOfTour));
            });
    }, []);

    let obj = [];

    tickets.forEach(function (a) {
        dataToChart[a] = dataToChart[a] + 1 || 1;
    });
    for (let value in dataToChart) {
        obj.push({
            y: dataToChart[value],
            label: value
        })
    }

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Популярные туры среди клиентов"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: obj
        }]
    }

    return (
        <div>
            <CanvasJSChart options={options}
            />
        </div>
    );
}