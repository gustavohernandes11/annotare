import P from 'prop-types'
export const defaultState = {
    isAsideMenuOpen: false,
    isEditorOpen: false,
    activeTheme: 'dark',
    activeLayout: 'grid',
    selectedCard: null,
    selectedCategory: null,
}

defaultState.propTypes = {
    isAsideMenuOpen: P.bool.isRequired,
    isEditorOpen: P.bool.isRequired,
    activeTheme: P.oneOf(['dark', 'light', 'rainbow']).isRequired,
    activeLayout: P.oneOf(['grid', 'list']).isRequired,
    selectedCard: P.object,
    selectedCategory: P.object,
}

