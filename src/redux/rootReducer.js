import { combineReducers } from 'redux';
import { LOAD_BOOKS } from './actions';
import { LOAD_VISIBLE_BOOKS } from './actions';

const books = (state = [], action) => {
    if (action.type === LOAD_BOOKS) {
        if (state.list.length) {
            return { ...state, list: state.list.concat(action.books.list)  };
        } else {
            return { ...state, list: action.books.list };
        }
    };
    return state;
}
const visibleBooks = (state = [], action) => {
    if (action.type === LOAD_VISIBLE_BOOKS) {
        return action.list;
    }
    return state;
};

const rootReducer = combineReducers({ books, visibleBooks });
export default rootReducer;