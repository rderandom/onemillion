import { LOAD_BOOKS, LOAD_VISIBLE_BOOKS, loadBooks, loadVisibleBooks } from './actions';

describe('|| actions', () => {
  it('should create an action to load books', () => {
    const books = [{ "id": 0, "title": "As a New Portrait", "publishedDate": "8/12/1970", "genre": "Horror", "author": { "gender": "Female", "name": "Rosa Yates" } }, { "id": 1, "title": "Of Brave Soldier", "publishedDate": "15/6/1956", "genre": "Romantic", "author": { "gender": "Male", "name": "Lee French" } }, { "id": 2, "title": "New Lovers", "publishedDate": "20/12/2001", "genre": "Historic", "author": { "gender": "Female", "name": "Nina Massey" } }, { "id": 3, "title": "Infamous Dove", "publishedDate": "8/4/1973", "genre": "Sci-Fi", "author": { "gender": "Female", "name": "Lillie Cain" } }]
    const expectedAction = {
      type: LOAD_BOOKS,
      books
    }
    expect(loadBooks(books)).toEqual(expectedAction)
  })
  it('should create an action to load visible books', () => {
    const list = [{ "id": 0, "title": "As a New Portrait", "publishedDate": "8/12/1970", "genre": "Horror", "author": { "gender": "Female", "name": "Rosa Yates" } }, { "id": 1, "title": "Of Brave Soldier", "publishedDate": "15/6/1956", "genre": "Romantic", "author": { "gender": "Male", "name": "Lee French" } }, { "id": 2, "title": "New Lovers", "publishedDate": "20/12/2001", "genre": "Historic", "author": { "gender": "Female", "name": "Nina Massey" } }, { "id": 3, "title": "Infamous Dove", "publishedDate": "8/4/1973", "genre": "Sci-Fi", "author": { "gender": "Female", "name": "Lillie Cain" } }]
    const expectedAction = {
      type: LOAD_VISIBLE_BOOKS,
      list
    }
    expect(loadVisibleBooks(list)).toEqual(expectedAction)
  })
})