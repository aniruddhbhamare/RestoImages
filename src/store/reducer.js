import { combineReducers } from 'redux';

import ramenRestaurantdetailsReducer from './reducers/ramenRestaurantdetailsReducer';

import getRandomImagesUrlReducer from './reducers/getRandomImagesUrlReducer';

export default combineReducers({
    ramenRestaurantdetailsReducer,
    getRandomImagesUrlReducer
})