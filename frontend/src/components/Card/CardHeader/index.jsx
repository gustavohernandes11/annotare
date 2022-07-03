import * as Styled from './styles.js'
import P from 'prop-types'

export const CardHeader = () => {
    return (
        <Styled.Container>
            <p>Header</p>
        </Styled.Container>
    )
}

CardHeader.propTypes = {
    children: P.node.isRequired
}

