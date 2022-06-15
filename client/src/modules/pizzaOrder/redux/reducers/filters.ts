import { filtersTypes } from "../../constants";
import { ActionCategory, ActionSortBy, Category, SortBy } from "../types";

interface InitialFilters {
    category: Category;
    sortBy: SortBy;
}

type InitialAction = ActionSortBy | ActionCategory;

const initialState: InitialFilters = {
    category: { nameCategory: "All", index: 0 },
    sortBy: { sortName: "popularity", index: 0 },
};

const filtersReducer = (
    state = initialState,
    action: InitialAction
): InitialFilters => {
    switch (action.type) {
        case filtersTypes.SET_CATEGORY:
            return { ...state, category: action.payload };
        case filtersTypes.SET_SORTBY:
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
};

export default filtersReducer;
