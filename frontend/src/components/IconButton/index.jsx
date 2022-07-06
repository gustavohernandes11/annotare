import * as Styled from './styles.js'

export const IconButton = ({ children, onClick, as, href, target, size }) => {
    return (
        <Styled.Container onClick={onClick} as={as} href={href} target={target} size={size}>
            {children}
        </Styled.Container>
    )
}


