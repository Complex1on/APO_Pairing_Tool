import axios from 'axios';
import { FETCH_USER, CREATE_PERSON } from './types';
import history from '../history';

const seperateFormValues = input => {
    let simplifiedObj = {};
    let questions = [];
    let preferences = [];
    Object.keys(input).forEach(key => {
        const value = input[key];
        if (key === 'name') {
            simplifiedObj.name = value;
        }
        if (key[0] === 'Q' && key[7] === 'n') {
            questions.push(value);
        }
        if (key[0] === 'P' && key[9] === 'e') {
            preferences.push(value);
        }
    });
    simplifiedObj.questions = questions;
    simplifiedObj.pref = preferences;
    return simplifiedObj;
};

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const submitPerson = values => async dispatch => {
    console.log('submitPerson Ran');
    const load = seperateFormValues(values);
    const res = await axios.post('/api/person', load);

    dispatch({ type: CREATE_PERSON, payload: res.data });
    history.push('/');
};
