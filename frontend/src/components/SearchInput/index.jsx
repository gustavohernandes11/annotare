import * as Styled from './styles.js'
import P from 'prop-types'
import { Search } from '@styled-icons/fa-solid'
export const SearchInput = ({ onChange, onBlur }) => {
    return (
        <Styled.Container>
            <input type="text" onChange={onChange} onBlur={onBlur} />
                <Search width={15} height={15} />
        </Styled.Container>
    )
}


SearchInput.propTypes = {
    onChange: P.func,
    onBlur: P.func
}




