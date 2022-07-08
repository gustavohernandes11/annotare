import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton'
import { useGlobalContext } from '../../hooks/useGlobalContext.jsx'
import P from 'prop-types'

export const EditorHeader = () => {
    const [state, actions] = useGlobalContext();

    return (
        <Styled.Header>
            <span>
            <Heading>Criação e edição</Heading>
            <p>Editando anotação de "Math"</p>
            </span>
            <span className="buttons-area">
                <LargeButton onClick={() => actions.setEditMode(false)} >Cancelar</LargeButton>
                <LargeButton primary="true" onClick={() => actions.setEditMode(false)}>Finalizar</LargeButton>
            </span>
        </Styled.Header>
    )
}

EditorHeader.propTypes = {
    children: P.node
}

