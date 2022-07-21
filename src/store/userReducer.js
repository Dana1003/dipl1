const initialState = 10;

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER":
            return {...state, user: state.user}; /*{...state, user: state.user}*/
        default:
            return state;
    }
}