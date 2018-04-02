export const LOAD_BOOKS = 'LOAD_BOOKS';
export const SCROLL_BOOKS = 'SCROLL_BOOKS';
export const SET_IS_LOADING = 'SET_IS_LOADING';


export const loadBooks = (newState) => {
    return { type: LOAD_BOOKS, newState }
}
export const scrollBooks = (newState) => {
    return { type: SCROLL_BOOKS, newState }
}
export const setIsLoading = (isLoading) => {
    return { type: SET_IS_LOADING, isLoading }
}

