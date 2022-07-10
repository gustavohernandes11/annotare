import * as Styled from './styles.js'

export const IconButton = ({ children, onClick, as, href, target, size, type, disabled, className }) => {
    return (
        <Styled.Container
            className={className}
            disabled={disabled}
            type={type}
            onClick={onClick}
            as={as}
            href={href}
            target={target}
            size={size}
        >
            {children}
        </Styled.Container>
    )
}


