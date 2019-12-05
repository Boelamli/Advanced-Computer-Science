import {useEffect, useState} from 'react';
import postCodes from "../Api/postCodes";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('');

    const sendData = async (userData) => {
        try {
            const response = await postCodes.get('/random/postcodes'); //As an example I am going to use random postcodes to 'GET'
            setResults(response.data.result);
            console.log({results});
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };
    return[sendData,results,errorMessage];
};