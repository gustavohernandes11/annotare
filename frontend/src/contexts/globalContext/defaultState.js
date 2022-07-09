import P from 'prop-types'
export const defaultState = {
    addCategoryMode: false,
    editMode: null,
    activeTheme: 'dark',
    activeLayout: 'grid',
    selectedCard: null,
    selectedCategory: null,
    searchInputValue: '',
}

defaultState.propTypes = {
    addCategoryMode: P.bool.isRequired,
    editMode: P.oneOf(['new', 'edit', null]).isRequired,
    activeTheme: P.oneOf(['dark', 'light', 'rainbow']).isRequired,
    activeLayout: P.oneOf(['grid', 'list']).isRequired,
    selectedCard: P.object,
    selectedCategory: P.object,
}

