export const buildActions = (dispatch) => {
    return {
        changeTheme: () => {
            dispatch({ type: "CHANGE_THEME" });
        },
        changeLayout: () => {
            dispatch({ type: "CHANGE_LAYOUT" });
        },
        setTheme: (payload) => {
            dispatch({ type: "SET_THEME", payload });
        },
        setLayout: (payload) => {
            dispatch({ type: "SET_LAYOUT", payload });
        },
        setEditMode: (payload) => {
            dispatch({ type: "SET_EDIT_MODE", payload });
        },
        setAddCategoryMode: (payload) => {
            dispatch({ type: "SET_ADD_CATEGORY_MODE", payload });
        },
        setSelectedCategory: (payload) => {
            dispatch({ type: "SET_SELECTED_CATEGORY", payload });
        },
        setSearchInputValue: (payload) => {
            dispatch({ type: "SET_SEARCH_INPUT_VALUE", payload });
        },
        setSelectedAnnotation: (payload) => {
            dispatch({ type: "SET_SELECTED_ANNOTATION", payload });
        },
        setIsAsideMenuOpen: (payload) => {
            dispatch({ type: "SET_IS_ASIDE_MENU_OPEN", payload });
        },
    };
};
