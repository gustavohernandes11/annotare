import P from 'prop-types'
export const defaultState = {
    isAsideMenuOpen: false,
    editMode: null,
    activeTheme: 'dark',
    activeLayout: 'grid',
    selectedCard: null,
    selectedCategory: null,
}

defaultState.propTypes = {
    isAsideMenuOpen: P.bool.isRequired,
    editMode: P.oneOf(['new', 'edit', null]).isRequired,
    activeTheme: P.oneOf(['dark', 'light', 'rainbow']).isRequired,
    activeLayout: P.oneOf(['grid', 'list']).isRequired,
    selectedCard: P.object,
    selectedCategory: P.object,
}

