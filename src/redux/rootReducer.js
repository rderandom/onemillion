import { combineReducers } from 'redux';
import { LOAD_BOOKS, SET_IS_LOADING } from './actions';

const books = (state = { list: [] }, action) => {
    switch (action.type) {
        case LOAD_BOOKS: {
            if (state.list.length) {
                const newArray = [...state.list];
                for (let index = 0; index < action.newState.list.length; index++) {
                    const newBook = action.newState.list[index];
                    newArray[newBook.id - 1] = newBook;
                }
                return { ...state, ...action.newState, list: newArray };
            } else {
                return { ...state, ...action.newState };
            }
        }
        case SET_IS_LOADING: {
            return { ...state, loading: action.isLoading };
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({ books });
export default rootReducer;