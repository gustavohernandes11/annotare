import * as Styled from './styles.js'
import P from 'prop-types'
import { Input } from '../Input'
export const CheckBox = ({ onClick, label, name, width }) => {
    return (
        <Styled.Span>
           <span>
                    <Input onClick={onClick} width={width} type="checkbox" name={name} />
                    <label htmlFor="note-title">{label}</label>
                </span>
        </Styled.Span>
    )
}

CheckBox.propTypes = {
    onClick: P.func.isRequired,
    label: P.oneOfType([P.string, P.number]).isRequired,
    name: P.string
}

