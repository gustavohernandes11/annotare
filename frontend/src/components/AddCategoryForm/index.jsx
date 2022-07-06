import * as Styled from './styles.js'
import { Input } from '../Input/index.jsx'
import { IconButton } from '../IconButton'
import { Plus, Trash } from '@styled-icons/fa-solid'

export const AddCategoryForm = () => {
    return (
        <Styled.Container>
            <Input placeholder="Categoria..." />
            <IconButton size="35px">
                <Trash width={15} height={15}/>
            </IconButton>
            <IconButton size="35px">
                <Plus  width={15} height={15}/>
            </IconButton>
        </Styled.Container>
    )
}

