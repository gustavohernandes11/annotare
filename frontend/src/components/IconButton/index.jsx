import * as Styled from './styles.js'

export const IconButton = ({ children, onClick, as, href, target, size, type }) => {
    return (
        <Styled.Container type={type} onClick={onClick} as={as} href={href} target={target} size={size}>
            {children}
        </Styled.Container>
    )
}


