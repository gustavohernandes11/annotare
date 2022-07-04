import React from 'react'
import * as Styled from './styles.js'
import P from 'prop-types'

export const LargeButton = ({ primary, children }) => {
    return (
        <Styled.Container>
            <button aria-label="large-button" primary={primary}>
                {children}
            </button>
        </Styled.Container>
    )
}

LargeButton.propTypes = {
    children: P.oneOfType([P.string, P.object, P.node]).isRequired
}

