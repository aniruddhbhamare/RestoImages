import * as types from '../actionsTypes';

const initialState = {
    restaurantdetails: [],
    isLoading: true,
}

const ramenRestaurantdetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PENDING_RESTO_DATA:
            return { ...state, isLoading: true }

        case types.ADD_RESTO_DATA:
            return { ...state, isLoading: false, restaurantdetails: action.payload }

        case types.REMOVE_RESTO_DATA:
            return { ...state, restaurantdetails: state.restaurantdetails.filter(i => i.id != action.payload.id) }

        default:
            return state;
    }
}

export default ramenRestaurantdetailsReducer;



// const getData = () => {
//     setLoading(true);
//     Promise.all([fetch('api-1'), fetch('api-2')]).then(results => {
//      setDataOne(results[0]);
//      setDataTwo(results[1]);
//     }).finally(() => setLoading(false));
//     }