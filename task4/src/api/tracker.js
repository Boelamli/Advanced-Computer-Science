import axios from 'axios';
import {AsyncStorage} from "react-native";

const token = AsyncStorage.getItem('token');
const header = `Bearer ${token}`;

export default axios.create({
    baseURL: 'http://fdcf8a57.ngrok.io'

    // In every 8 hours ngrok is going to fail to request. We should change this url.
});