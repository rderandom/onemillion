import rootReducer from './rootReducer';
import { LOAD_BOOKS } from './actions';

describe('|| rootReducer', () => {
    const EMPTY_STATE = {
        books: { list: [] }, visibleBooks: []
    };
    it('should create initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(EMPTY_STATE)
    })
    it('should reduce LOAD_BOOKS', () => {
        const list = [{ "id": 0, "title": "As a New Portrait", "publishedDate": "8/12/1970", "genre": "Horror", "author": { "gender": "Female", "name": "Rosa Yates" } }, { "id": 1, "title": "Of Brave Soldier", "publishedDate": "15/6/1956", "genre": "Romantic", "author": { "gender": "Male", "name": "Lee French" } }, { "id": 2, "title": "New Lovers", "publishedDate": "20/12/2001", "genre": "Historic", "author": { "gender": "Female", "name": "Nina Massey" } }, { "id": 3, "title": "Infamous Dove", "publishedDate": "8/4/1973", "genre": "Sci-Fi", "author": { "gender": "Female", "name": "Lillie Cain" } }]
        expect(rootReducer(EMPTY_STATE, {
            type: LOAD_BOOKS,
            books: {
                list: list
            }
        })).toEqual({
            books: { list: list }, visibleBooks: []
        })
    })
})