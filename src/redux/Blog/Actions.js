import { FILTER_BY_AUTHOR, FILTER_BY_CATEGORY, FILTER_BY_SEARCH } from "./ActionTypes";

export const filterByCategory = (category) => ({
    type: FILTER_BY_CATEGORY,
    payload: category
})

export const filterByAuthor = (author) => ({
    type: FILTER_BY_AUTHOR,
    payload: author
})

export const filterBySearch = (searchTerm) => ({
    type: FILTER_BY_SEARCH,
    payload: searchTerm
})
