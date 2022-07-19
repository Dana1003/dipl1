import React, {useState, useEffect} from 'react';
import axios from "axios";

export function UserTheMostPopularTours() {
    const [tickets, setTickets] = useState([]);
    let dataToChart = [];

    useEffect(() => {
        axios.get('https://localhost:7274/api/tickets')
            .then(res => {
                setTickets(res.data.map(x => x.nameOfTour));

            });
    }, []);

    useEffect(() => {
        if(tickets.length != 0) {
            tickets.forEach(function (a) {
                dataToChart[a] = dataToChart[a] + 1 || 1;
            });
            console.log(dataToChart)
        }
    }, [tickets])

    return (
        <div>
            <h1>Тут должна быть диагармма :)</h1>
        </div>
    );
}