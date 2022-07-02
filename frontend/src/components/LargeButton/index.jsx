import * as Styled from './styles.js'
import P from 'prop-types'

export const LargeButton = ({ primary = false, children }) => {
    return (
        <Styled.Container>
            <button primary={primary}>
                {children}
            </button>
        </Styled.Container>
    )
}

LargeButton.propTypes = {
    children: P.node.isRequired
}

