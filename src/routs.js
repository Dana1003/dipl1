export const API_URL = 'https://localhost:7274/api';

export const ROUTS_API = {
    getUsers: `${API_URL}/users`,

    managers: `${API_URL}/managers`,
    managerUser: `${API_URL}/managers/managerUser`,
    hotels: `${API_URL}/hotels`,
    tours: `${API_URL}/tours`,
    workTime: `${API_URL}/workedHour`,
    managerSchedule: `${API_URL}/managerSchedule`,
    schedules: `${API_URL}/schedules`,
    clients: `${API_URL}/clients`,
    tourHotel: `${API_URL}/tourHotel`,
    tickets: `${API_URL}/tickets`,
    favourite: `${API_URL}/ticketsFavourite`,
    clientFavouriteTourHotel: `${API_URL}/favouriteTickets?clientId=`
}
