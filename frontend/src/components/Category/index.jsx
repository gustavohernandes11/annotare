import * as Styled from './styles.js'
import P from 'prop-types'

export const Category = ({children, color}) => {
    return (
        <Styled.Container aria-label="category" color={color}>
            {children}
        </Styled.Container>
    )
}

Category.propTypes = {
    children: P.node.isRequired
}

