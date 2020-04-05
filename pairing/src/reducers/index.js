import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import personReducer from './peopleReducer';
import authReducer from './authReducer';
import numQReducer from './numQReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    people: personReducer,
    numQ: numQReducer,
});
