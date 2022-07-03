import * as Styled from './styles.js'
import P from 'prop-types'

export const Category = ({children}) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}

Category.propTypes = {
    children: P.node.isRequired
}

