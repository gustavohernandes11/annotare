import React, { useReducer, createContext } from "react";
import P from "prop-types";
import { defaultState } from "./defaultState";

export const GlobalContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
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
            console.log(newTheme);
            return { ...state, activeTheme: newTheme };

        case "CHANGE_LAYOUT":
            let newLayout = state.activeLayout;
            if (state.activeLayout === "grid") {
                newLayout = "list";
            } else if (state.activeLayout === "list") {
                newLayout = "grid";
            }
            console.log(newLayout);
            return { ...state, activeLayout: newLayout };

        default:
            return { ...state };
    }
};

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const buildActions = (dispatch) => {
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
        };
    };
    const actions = buildActions(dispatch);

    return (
        <GlobalContext.Provider value={[state, actions]}>
            {children}
        </GlobalContext.Provider>
    );
};

GlobalContextProvider.propTypes = {
    children: P.node.isRequired,
};
