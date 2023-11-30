export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_IS_ASIDE_MENU_OPEN":
            return { ...state, isAsideMenuOpen: action.payload };
        case "SET_SEARCH_INPUT_VALUE":
            return { ...state, searchInputValue: action.payload };

        case "SET_SELECTED_CARD":
            return { ...state, selectedCard: action.payload };

        case "SET_SELECTED_CATEGORY":
            return { ...state, selectedCategory: action.payload };

        case "SET_SELECTED_ANNOTATION":
            return { ...state, selectedAnnotation: action.payload };

        case "SET_ADD_CATEGORY_MODE":
            return { ...state, addCategoryMode: action.payload };

        case "SET_EDIT_MODE":
            return { ...state, editMode: action.payload };

        case "SET_THEME":

            return { ...state, activeTheme: action.payload };

        case "SET_LAYOUT":
            return { ...state, activeLayout: action.payload };

        case "CHANGE_THEME":
            let newTheme = state.activeTheme;
            if (state.activeTheme === "rainbow") {
                localStorage.setItem("storagedTheme", "dark");
                newTheme = "dark";
            } else if (state.activeTheme === "light") {
                localStorage.setItem("storagedTheme", "rainbow");
                newTheme = "rainbow";
            } else if (state.activeTheme === "dark") {
                localStorage.setItem("storagedTheme", "light");
                newTheme = "light";
            }
            return { ...state, activeTheme: newTheme };

        case "CHANGE_LAYOUT":
            let newLayout = state.activeLayout;
            if (state.activeLayout === "list" | null) {
                localStorage.setItem("storagedLayout", "grid");
                newLayout = "grid";
            } else if (state.activeLayout === "grid") {
                localStorage.setItem("storagedLayout", "list");
                newLayout = "list";
            }
            return { ...state, activeLayout: newLayout };

        default:
            return { ...state };
    }
};
