import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = {
    books: {
        list: [],
        endIndex: 0
    }
}
const store = createStore(rootReducer, initialState);
export default store;