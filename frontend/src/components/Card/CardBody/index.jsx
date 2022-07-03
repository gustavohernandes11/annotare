import * as Styled from './styles.js'
import P from 'prop-types'

export const CardBody = ({ children }) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}

CardBody.propTypes = {
    children: P.node.isRequired
}

