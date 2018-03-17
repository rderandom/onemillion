export const LOAD_BOOKS = 'LOAD_BOOKS';
export const LOAD_VISIBLE_BOOKS = 'LOAD_VISIBLE_BOOKS';
export const loadBooks = (books) => {
    return { type: LOAD_BOOKS, books }
}
export const loadVisibleBooks = (list) => {
    return { type: LOAD_VISIBLE_BOOKS, list }
}

