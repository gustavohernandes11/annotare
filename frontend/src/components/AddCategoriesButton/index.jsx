import * as Styled from './styles.js'
import { Plus } from '@styled-icons/fa-solid'
import P from 'prop-types'

export const AddCategoriesButton = () => {
    return (
        <Styled.Container>
            <Plus width={15} height={15} />
        </Styled.Container>
    )
}

AddCategoriesButton.propTypes = {
    children: P.node.isRequired
}

