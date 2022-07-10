import * as Styled from './styles.js'
import P from 'prop-types'

export const CardBody = ({ children, onClick }) => {
    return (
        <Styled.Container onClick={onClick}>
            {children}
        </Styled.Container>
    )
}

CardBody.propTypes = {
    children: P.node.isRequired
}

