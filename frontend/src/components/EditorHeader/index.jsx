import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton'
import { useGlobalContext } from '../../hooks/useGlobalContext.jsx'
import P from 'prop-types'

export const EditorHeader = () => {
    const [state, actions] = useGlobalContext();

    const handleCancel = () => {
        actions.setEditMode(false)
        actions.setSelectedAnnotation(null)
    }

    return (
        <Styled.Header>
            <span>
                <Heading>Criação e edição</Heading>
                <p>
                    {state.selectedAnnotation
                    ? `Editando anotação de ${state.selectedAnnotation.category}`
                    : `Adicionar anotação`}
                    </p>
            </span>
            <LargeButton onClick={handleCancel} >Voltar</LargeButton>
        </Styled.Header>
    )
}

EditorHeader.propTypes = {
    children: P.node
}

