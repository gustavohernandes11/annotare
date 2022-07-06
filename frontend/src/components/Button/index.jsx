import * as Styled from './styles.js'
import P from 'prop-types'

export const Button = ({ onClick, children, padding, bg, as, href, target, primary }) => {
    return (
        <Styled.Container onClick={onClick} padding={padding} bg={bg} as={as} href={href} target={target} primary={primary}>
           {children}
        </Styled.Container>
    )
}

Button.propTypes = {
    onClick: P.func.isRequired,
    children: P.node,
    padding: P.string,
    bg: P.string,
    href: P.string,
    target: P.string,
    as: P.string,
}

