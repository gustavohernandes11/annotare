import * as Styled from './styles.js'
import P from 'prop-types'

export const Input = ({type, placeholder, width, height, marginBottom, padding, name, as }) => {
    return (
        <Styled.Input
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            name={name}
            placeholder={placeholder}
            width={width}
            marginBottom={marginBottom}
            padding={padding}
            height={height}
            type={type}
            as={as}
        />

    )
}

Input.propTypes = {
    placeholder: P.string,
    widht: P.oneOfType([P.string, P.number])
}

