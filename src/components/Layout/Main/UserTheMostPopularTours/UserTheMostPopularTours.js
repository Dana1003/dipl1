import React, {useState, useEffect} from 'react';
import CanvasJSReact from '../../../../lib/canvasjs.react';

import TicketService from "../../../../service/ticket";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function UserTheMostPopularTours() {
    const [tickets, setTickets] = useState([]);
    let dataToChart = [];

    useEffect(() => {
        TicketService.getAllTickets(setTickets)
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
        <div className="main-block">
            <CanvasJSChart options={options}/>
        </div>
    );
}