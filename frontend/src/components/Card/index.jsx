import * as Styled from './styles.js'
import P from 'prop-types'

export const Card = ({ heading, children, color }) => {
    return (
        <Styled.Container color={color}>
            <h3>{heading}</h3>
            <p>{children}</p>
        </Styled.Container>
    )
}

Card.propTypes = {
    children: P.node.isRequired
}

