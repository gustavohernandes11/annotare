import React, { useReducer, createContext } from 'react'
import P from 'prop-types'
import { defaultState } from './defaultState'

export const GlobalContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            let newTheme = state.activeTheme;
            if (state.activeTheme === 'rainbow'){
                newTheme = 'dark'
            } else if (state.activeTheme === 'light'){
                newTheme = 'rainbow'
            } else if (state.activeTheme === 'dark'){
                newTheme = 'light'
            }
            console.log(newTheme)
            return { ...state, activeTheme: newTheme};

        case 'CHANGE_LAYOUT':
            let newLayout = state.activeLayout;
            if (state.activeLayout === 'grid'){
                newLayout = 'list'
            } else if (state.activeLayout === 'list'){
                newLayout = 'grid'
            }
            console.log(newLayout)
            return { ...state, activeLayout: newLayout};

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

