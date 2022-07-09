import { useState } from 'react'
import * as Styled from './styles.js'
import { Input } from '../Input/index.jsx'
import { IconButton } from '../IconButton'
import { Plus, Trash } from '@styled-icons/fa-solid'
import { useGlobalContext } from '../../hooks/useGlobalContext.jsx'
import { useDataContext } from '../../hooks/useDataContext.jsx'

export const AddCategoryForm = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, globalActions] = useGlobalContext();
    const [dataState, dataActions] = useDataContext();
    const [inputName, setInputName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const repeatedNames = dataState.categories.filter(e => e.name === inputName)
        if (repeatedNames.length > 0) {
            throw new Error('Ja está em uso')
        } else {
            dataActions.addNewCategory({
                name: inputName,
                id: Date.now(),
                color: 'grey'
            })
            globalActions.setAddCategoryMode(false);
        }
    }

    return (
        <Styled.Container>
            <Input
                type="text"
                name="input-category-name"
                maxLength='20'
                minLength='3'
                onChange={(e) => setInputName(e.target.value)}
                id="input-category-name"
                placeholder="Categoria..."
                marginBottom="5px"
                padding="5px"
            />
            <IconButton type='button' onClick={() => globalActions.setAddCategoryMode(false)} size="35px">
                <Trash width={15} height={15} />
            </IconButton>
            <IconButton type="submit" onClick={(e) => handleSubmit(e)} size="35px">
                <Plus width={15} height={15} />
            </IconButton>
        </Styled.Container>
    )
}

