import * as types from '../actionsTypes';

const initialState = {
    imageData: [],
    isImageLoading: true,
}

const getRandomImagesUrlReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PENDING_IMAGE_DATA:
            return { ...state, isImageLoading: true }

        case types.GET_IMAGE_DATA:
            return { ...state, isImageLoading: false, imageData: action.payload }
        default:
            return state;
    }
}

export default getRandomImagesUrlReducer;

