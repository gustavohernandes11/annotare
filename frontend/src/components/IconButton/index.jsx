import * as Styled from './styles.js'

export const IconButton = ({ children, onClick }) => {
    return (
        <Styled.Container onClick={onClick}>
            {children}
        </Styled.Container>
    )
}


