import * as Styled from './styles.js'

export const IconButton = ({ children, onClick, as, href, target }) => {
    return (
        <Styled.Container onClick={onClick} as={as} href={href} target={target}>
            {children}
        </Styled.Container>
    )
}


