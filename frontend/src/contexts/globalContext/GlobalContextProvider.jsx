import React, { useReducer, createContext } from 'react'
import P from 'prop-types'
import { mockData } from './mockData'

export const GlobalContext = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return alert('increase')

        case 'DUPLICATE':
            return alert('duplicate')

        default:
            return alert('default')
    }
}

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, mockData)
    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
}

GlobalContextProvider.propTypes = {
    children: P.node.isRequired
}

