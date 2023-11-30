import React, { useReducer, createContext } from "react";
import P from "prop-types";

import { reducer } from "./reducer";
import { buildActions } from "./buildActions";
import { defaultState } from "./defaultState.ts";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);



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
