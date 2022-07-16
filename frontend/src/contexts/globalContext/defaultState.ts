export interface GlobalStateType {
    addCategoryMode: boolean;
    isAsideMenuOpen: boolean;
    editMode: boolean | null;
    activeTheme: "light" | "dark" | "rainbow";
    activeLayout: "list" | "grid";
    selectedCard: object | null;
    selectedCategory: object | null;
    searchInputValue: string;
}

export const defaultState: GlobalStateType = {
    addCategoryMode: false,
    isAsideMenuOpen: false,
    editMode: null,
    activeTheme: "dark",
    activeLayout: "list",
    selectedCard: null,
    selectedCategory: null,
    searchInputValue: "",
};
