import * as Styled from './styles.js'
import P from 'prop-types'

export const Heading = ({ as = 'h1', children }) => {
    return (
        <Styled.Container as={as}>
            { children }
        </Styled.Container>
    )
}

Heading.propTypes = {
    children: P.node.isRequired
}

