import React, { useReducer, createContext } from 'react'
import P from 'prop-types'
import { mockData } from './mockData'

export const GlobalContext = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case 'SHUFFLE':
            const newAnnotations = state.annotations
            newAnnotations.sort(() => Math.random() - 0.5) 
            return  {...state, newAnnotations}

        default:
            return {...state}
    }
}

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, mockData)
    
    const buildActions = (dispatch) => {
        return {
            shuffle: () => { dispatch({ type: "SHUFFLE" }) },
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

