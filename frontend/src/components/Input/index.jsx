import * as Styled from './styles.js'
import P from 'prop-types'

export const Input = ({value, onChange, type, placeholder, width, height, marginBottom, padding, name, as }) => {
    return (
        <Styled.Input
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            width={width}
            marginBottom={marginBottom}
            padding={padding}
            height={height}
            type={type}
            as={as}
            value={value}

        />

    )
}

Input.propTypes = {
    placeholder: P.string,
    widht: P.oneOfType([P.string, P.number])
}

