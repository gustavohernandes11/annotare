import * as Styled from './styles.js'
import P from 'prop-types'

export const CardFooter = ({children}) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}

CardFooter.propTypes = {
    children: P.node.isRequired
}

