export const API_URL = 'https://localhost:7274/api';

export const ROUTS_API = {
    users: `${API_URL}/users`,
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
    clientFavouriteTourHotel: `${API_URL}/favouriteTickets?clientId=`,
    clientUser: `${API_URL}/clients/clientUser`,
    reviews: `${API_URL}/reviews`,
    authorization: `${API_URL}/auth/login`,
    registration: `${API_URL}/auth/clientUser`
}
