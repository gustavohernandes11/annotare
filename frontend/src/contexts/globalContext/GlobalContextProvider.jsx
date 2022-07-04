import React, { useReducer, createContext } from 'react'
import P from 'prop-types'
import { defaultState } from './defaultState'

export const GlobalContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            console.log('change_theme')
            return { ...state }

        case 'CHANGE_LAYOUT':
            console.log('change_layout')
            return { ...state }

        default:
            return { ...state }
    }
}

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const buildActions = (dispatch) => {
        return {
            changeTheme: () => { dispatch({ type: "CHANGE_THEME" }) },
            changeLayout: () => { dispatch({ type: "CHANGE_LAYOUT" }) }
        }
    }
    const actions = buildActions(dispatch)

    return (
        <GlobalContext.Provider value={[state, actions]}>
            {children}
        </GlobalContext.Provider>
    )
}

GlobalContextProvider.propTypes = {
    children: P.node.isRequired
}

