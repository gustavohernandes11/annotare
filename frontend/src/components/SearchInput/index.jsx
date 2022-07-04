import * as Styled from './styles.js'
// import P from 'prop-types'
import { Search } from '@styled-icons/fa-solid'
// import { IconButton } from '../IconButton'
export const SearchInput = () => {
    return (
        <Styled.Container>
            <input type="text" />
                <Search width={15} height={15} />
        </Styled.Container>
    )
}

