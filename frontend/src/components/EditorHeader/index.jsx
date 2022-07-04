import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton'
import P from 'prop-types'

export const EditorHeader = () => {
    return (
        <Styled.Header>
            <span>
            <Heading>Criação e edição</Heading>
            <p>Editando anotação de "Math"</p>
            </span>
            <span className="buttons-area">
                <LargeButton >Cancelar</LargeButton>
                <LargeButton primary="true">Finalizar</LargeButton>
            </span>
        </Styled.Header>
    )
}

EditorHeader.propTypes = {
    children: P.node
}

