export const buildActions = (dispatch) => {
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
