import * as Styled from './styles.js'
import P from 'prop-types'

export const CardHeader = ({children}) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}

CardHeader.propTypes = {
    children: P.node.isRequired
}

