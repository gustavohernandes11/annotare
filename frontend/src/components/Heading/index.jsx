import * as Styled from './styles.js'
import P from 'prop-types'

export const Heading = ({ as = 'h1', children }) => {
    return (
        <Styled.Container aria-label="heading" as={as}>
            { children }
        </Styled.Container>
    )
}

Heading.propTypes = {
    children: P.oneOfType([P.string, P.number, P.node]).isRequired,
    as: P.string
}

