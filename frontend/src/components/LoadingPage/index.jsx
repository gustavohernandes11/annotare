import * as Styled from './styles.js'
import P from 'prop-types'

export const LoadingPage = () => {
    return (
        <Styled.Container>
            <h1>Loading...</h1>
        </Styled.Container>
    )
}

LoadingPage.propTypes = {
    children: P.node.isRequired
}

