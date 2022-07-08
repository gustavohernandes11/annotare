import * as Styled from './styles.js'
import { Input } from '../Input'
import P from 'prop-types'
import { Button } from '../Button/index.jsx'
import { CheckBox } from '../CheckBox'

export const AnnotationForm = () => {
    return (
        <Styled.Form>
            <label htmlFor="note-title">Título</label>
            <span>
                <Input name="note-title" placeholder="..." />
            </span>
            <span>
                <select name="nonte-category" className="margin-right">
                    <option value="" disabled selected>Categoria</option>
                    <option value="Categoria x">Categoria x</option>
                    <option value="Categoria y">Categoria y</option>
                    <option value="Categoria w">Categoria w</option>
                </select>
                <CheckBox label="Favorito" onClick={() => {}} width={`fit-content`} />
            </span>
            <label htmlFor="note-content">Mensagem</label>
            <span>
                <Input height="200px" name="note-content" as="textarea" placeholder="..." />
            </span>


            <span>
                <Button >Cancelar</Button>
                <Button primary>Enviar</Button>
            </span>
        </Styled.Form>
    )
}

AnnotationForm.propTypes = {
    children: P.node.isRequired
}

