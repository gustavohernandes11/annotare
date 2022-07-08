import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton/index.jsx'
import { SearchInput } from '../SearchInput/index.jsx'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import P from 'prop-types'

export const ContentHeader = () => {
    const [state, actions] = useGlobalContext();
    return (
        <Styled.Header>
            <span>
                <Heading>{state.selectedCategory || 'Todas'}</Heading>
                <p>Suas Anotações</p>
            </span>
            <SearchInput />
            <span>
                <LargeButton primary="true" onClick={() => actions.setEditMode(true)}>Adicionar</LargeButton>
            </span>
        </Styled.Header>
    )
}

ContentHeader.propTypes = {
    children: P.node
}

