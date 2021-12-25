import { filtersTypes } from "../../constants";


export interface CategoriesType {
    typeCategories: string[],
    activeCategory: Category,
    changeAtiveCategory: (category: string, i: number) => void
}

export interface Category {
    nameCategory: string, index: number
}
export interface SortBy {
    sortName: string, index: number
}


export interface ActionSortBy {
    type: filtersTypes.SET_SORTBY,
    payload: SortBy
}
export interface ActionCategory {
    type: filtersTypes.SET_CATEGORY,
    payload: Category
}