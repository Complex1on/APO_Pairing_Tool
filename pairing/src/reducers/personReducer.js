import { FETCH_PEOPLE, DELETE_PERSON } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case DELETE_PERSON:
            return state;
        case FETCH_PEOPLE:
            return action.payload;
        default:
            return state;
    }
};
