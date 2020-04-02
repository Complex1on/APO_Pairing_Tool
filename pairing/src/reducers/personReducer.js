import { CREATE_PERSON } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_PERSON:
            console.log('Creating person in person reducer');
        default:
            return state;
    }
};
