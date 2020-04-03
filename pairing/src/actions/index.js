import axios from 'axios';
import {
    FETCH_USER,
    FETCH_PEOPLE,
    DELETE_PERSON,
    FIND_PERSON,
    EDIT_PERSON
} from './types';
import history from '../history';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const submitPerson = values => async dispatch => {
    await axios.post('/api/person', values);

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

export const deletePerson = id => async dispatch => {
    const response = await axios.delete(`/api/delete/${id}`);
    dispatch({ type: DELETE_PERSON, payload: response.data });
    history.push('/data/list');
};
export const editPerson = (id, values) => async dispatch => {
    await axios.patch(`/api/edit/${id}`, values);

    history.push('/data/list');
};
export const fetchPerson = id => async dispatch => {
    const response = await axios.get(`/api/find/${id}`);
    dispatch({ type: FIND_PERSON, payload: response.data });
};
