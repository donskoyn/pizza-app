import { filtersTypes } from '../../constants';
import { ActionCategory, Category, SortBy, ActionSortBy } from '../types';

export const setCategory = (category: Category): ActionCategory => ({
    type: filtersTypes.SET_CATEGORY,
    payload: category,
});

export const setSortBy = (sortType: SortBy): ActionSortBy => ({
    type: filtersTypes.SET_SORTBY,
    payload: sortType,
});
