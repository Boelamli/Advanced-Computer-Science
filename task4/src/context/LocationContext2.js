import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import {navigate} from "../navigationRef";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'sendUserData':
            return {errorMessage:'', UserLocation: action.payload }
        case 'signup':

        default:
            return state;
    }
};
const coords={"latitude": 102,
    "latitudeDelta": 100,
    "longitude": 100,
    "longitudeDelta": 100};

const sendUserData = dispatch => {
    return async ({coords}) => {
        try {
            const token = await AsyncStorage.getItem('token');
            console.log(token);
            const response = await trackerApi.post('/locationData2', {coords});
            dispatch({type: 'sendUserData', payload: response.data.token}); //sonuçta ikisi de aynı şeyi yapıyor farklı farklı switch caselerine gerek yok.
            console.log(response.data)
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with Sign up'}) //Remember we always call dispatch anytime we want to update our state.
        }
    };
};

const addLocation = dispatch => () => {};

export const { Context, Provider} =createDataContext(
    locationReducer,
    {sendUserData},
    {UserLocation:null}
);