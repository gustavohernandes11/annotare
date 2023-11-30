import React, { useReducer, createContext } from "react";
import P from "prop-types";

import { buildActions } from "./buildActions";
import { reducer } from "./reducer.js";
import { initialData } from "./initialData.ts";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    let storagedData = JSON.parse(localStorage.getItem("storagedData"));
    const [state, dispatch] = useReducer(reducer, storagedData || initialData);
    

    const actions = buildActions(dispatch);

    return (
        <DataContext.Provider value={[state, actions]}>
            {children}
        </DataContext.Provider>
    );
};

DataContextProvider.propTypes = {
    children: P.node.isRequired,
};
