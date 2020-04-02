import axios from 'axios';
import { FETCH_USER, FETCH_PEOPLE } from './types';
import history from '../history';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const submitPerson = values => async dispatch => {
    console.log('submitPerson Ran');
    // console.log(values);

    const res = await axios.post('/api/person', values);

    //console.log(res);
    history.push('/data/list');
    //dispatch({ type: CREATE_PERSON, payload: res.data });
};

export const fetchPeople = () => async dispatch => {
    const response = await axios.get('/api/people');
    // console.log('fetchPeople ran');
    //console.log(response.data);
    dispatch({ type: FETCH_PEOPLE, payload: response.data });
};
