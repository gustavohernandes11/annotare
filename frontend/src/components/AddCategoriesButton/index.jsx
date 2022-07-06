import * as Styled from './styles.js'
import { Plus } from '@styled-icons/fa-solid'
import P from 'prop-types'

export const AddCategoriesButton = ({ onClick }) => {
    return (
        <Styled.Container onClick={onClick}>
            <Plus width={15} height={15} />
        </Styled.Container>
    )
}

AddCategoriesButton.propTypes = {
    onClick: P.func.isRequired
}

