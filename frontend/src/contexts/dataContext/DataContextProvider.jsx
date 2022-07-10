import React, { useReducer, createContext } from 'react'
import P from 'prop-types'
import { mockData } from './mockData'

export const DataContext = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_CATEGORY':
            return { ...state, categories: [...state.categories, {...action.payload}] }
        case 'ADD_NEW_ANNOTATION':
            return { ...state, annotations: [...state.annotations, {...action.payload}] }
        case 'REMOVE_CATEGORY':
            return { ...state }
        case 'REMOVE_ANNOTATION':
            let newAnnotations = state.annotations.filter((n) => n.id !== action.payload)
            console.log({...state, newAnnotations})
            return {...state, annotations: newAnnotations}

        default:
            return { ...state }
    }
}

export const DataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, mockData)

    const buildActions = (dispatch) => {
        return {
            addNewCategory: (payload) => { dispatch({ type: "ADD_NEW_CATEGORY", payload }) },
            addNewAnnotation: (payload) => { dispatch({ type: "ADD_NEW_ANNOTATION", payload }) },
            removeCategory: (payload) => { dispatch({ type: "REMOVE_CATEGORY", payload }) },
            removeAnnotation: (payload) => { dispatch({ type: "REMOVE_ANNOTATION", payload }) },
        }
    }
    const actions = buildActions(dispatch)

    return (
        <DataContext.Provider value={[state, actions]}>
            {children}
        </DataContext.Provider>
    )
}

DataContextProvider.propTypes = {
    children: P.node.isRequired
}

