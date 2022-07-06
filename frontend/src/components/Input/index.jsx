import * as Styled from './styles.js'
import P from 'prop-types'

export const Input = ({placeholder, width}) => {
    return (
        <Styled.Input placeholder={placeholder} width={width}/>
    )
}

Input.propTypes = {
    placeholder: P.string,
    widht: P.oneOfType([P.string, P.number])
}

