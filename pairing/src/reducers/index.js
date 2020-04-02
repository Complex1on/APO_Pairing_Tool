import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import personReducer from './personReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    people: personReducer
});
