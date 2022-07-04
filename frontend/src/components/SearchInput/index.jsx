import * as Styled from './styles.js'
// import P from 'prop-types'
import { Search } from '@styled-icons/fa-solid'
import { IconButton } from '../IconButton'
export const SearchInput = () => {
    return (
        <Styled.Container>
            <input type="text" />
            <IconButton>
                <Search width={15} height={15} />
            </IconButton>
        </Styled.Container>
    )
}

