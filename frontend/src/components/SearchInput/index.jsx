import * as Styled from './styles.js'
// import P from 'prop-types'
import { Search } from '@styled-icons/fa-solid'
export const SearchInput = () => {
    return (
        <Styled.Container>
            <input type="text" />
            <Search width={20} height={20}/>
        </Styled.Container>
    )
}

