import { useState, useEffect } from 'react'
import * as Styled from './styles.js'
import { Input } from '../Input'
import P from 'prop-types'
import { CheckBox } from '../CheckBox'
import { useDataContext } from '../../hooks/useDataContext.jsx'

const initialFormData = {
    id: null,
    heading: null,
    content: null,
    category_id: null,
    created_at: Date.now()
}

export const AnnotationForm = () => {
    const [dataState] = useDataContext();
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        console.log(formData)

    }, [formData]);

    return (
        <Styled.Form>
            <label htmlFor="note-title">Título</label>
            <span>
                <Input
                    name="note-title"
                    placeholder="..."
                    onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                />
            </span>
            <span>
                <select name="nonte-category"
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="margin-right">
                    <option value="" disabled selected>Selecione uma categoria</option>
                    {dataState.categories.map((category) => <option value={category.id}>{category.name}</option>)}
                </select>
                <CheckBox
                    label="Favorito"
                    name="Favorite"
                    value={true}
                    onChange={(e) => setFormData({ ...formData, favorite: e.target.value })}
                    width={`fit-content`} />
            </span>
            <label htmlFor="note-content">Mensagem</label>
            <span>
                <Input
                    height="200px"
                    name="note-content"
                    as="textarea"
                    placeholder="..."
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
            </span>


            
        </Styled.Form >
    )
}
