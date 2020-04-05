import { EDIT_NUMQ } from '../actions/types';

export default (state = [1, 2, 3, 4, 5], action) => {
    switch (action.type) {
        case EDIT_NUMQ:
            return action.payload;
        default:
            return state;
    }
};
