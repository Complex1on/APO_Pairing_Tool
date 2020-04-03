import { FETCH_PEOPLE, DELETE_PERSON, FIND_PERSON } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FIND_PERSON:
            return action.payload;
        case DELETE_PERSON:
            return state;
        case FETCH_PEOPLE:
            return action.payload;
        default:
            return state;
    }
};
