import * as Styled from './styles.js'
import P from 'prop-types'

export const Footer = () => {
    return (
        <Styled.Container>
            <p>Esse app é cria nossa...</p>
        </Styled.Container>
    )
}

Footer.propTypes = {
    children: P.node.isRequired
}

