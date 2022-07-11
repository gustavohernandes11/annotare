import React, { useReducer, createContext } from "react";
import P from "prop-types";
import { mockData } from "./mockData";

export const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_CATEGORY":
      let newState = {
        ...state,
        categories: [...state.categories, { ...action.payload }],
      };
      localStorage.setItem("storagedData", JSON.stringify(newState));
      return { ...newState };

    case "ADD_NEW_ANNOTATION":
      let newStateWithAnnotation = {
        ...state,
        annotations: [...state.annotations, { ...action.payload }],
      };
      localStorage.setItem(
        "storagedData",
        JSON.stringify(newStateWithAnnotation)
      );
      return { ...newStateWithAnnotation };

    case "REMOVE_CATEGORY":
      let categoryToBeRemoved = action.payload;
      let filteredAnnotations = state.annotations.filter(
        (n) => n.category !== categoryToBeRemoved
      );
      let filteredCategories = state.categories.filter(
        (c) => c.name !== categoryToBeRemoved
      );

      let newStateWithoutThatCategory = {
        ...state,
        annotations: filteredAnnotations,
        categories: filteredCategories,
      };
      localStorage.setItem(
        "storagedData",
        JSON.stringify(newStateWithoutThatCategory)
      );
      return { ...newStateWithoutThatCategory };

    case "REMOVE_ANNOTATION":
      let newAnnotations = state.annotations.filter(
        (n) => n.id !== action.payload.id
      );
      let newStateWithoutThatAnnotation = {
        ...state,
        annotations: newAnnotations,
      };
      localStorage.setItem(
        "storagedData",
        JSON.stringify(newStateWithoutThatAnnotation)
      );
      return { ...newStateWithoutThatAnnotation };

    default:
      return { ...state };
  }
};

export const DataContextProvider = ({ children }) => {
  let storagedData = JSON.parse(localStorage.getItem("storagedData"));
  const [state, dispatch] = useReducer(reducer, storagedData || mockData);

  const buildActions = (dispatch) => {
    return {
      addNewCategory: (payload) => {
        dispatch({ type: "ADD_NEW_CATEGORY", payload });
      },
      addNewAnnotation: (payload) => {
        dispatch({ type: "ADD_NEW_ANNOTATION", payload });
      },
      removeCategory: (payload) => {
        dispatch({ type: "REMOVE_CATEGORY", payload });
      },
      removeAnnotation: (payload) => {
        dispatch({ type: "REMOVE_ANNOTATION", payload });
      },
    };
  };
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
