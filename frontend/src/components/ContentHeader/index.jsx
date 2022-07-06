import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton/index.jsx'
import { SearchInput } from '../SearchInput/index.jsx'
import { useGlobalContext } from '../../hooks/useGlobalContext.jsx'
import P from 'prop-types'

export const ContentHeader = () => {
    const [globalState, globalActions] = useGlobalContext()

    return (
        <Styled.Header>
            <span>
            <Heading>Categoria X</Heading>
            <p>Suas Anotações</p>
            </span>
            <SearchInput />
            <span>
            <LargeButton onClick={() => globalActions.setEditMode('new')} primary="true">Adicionar</LargeButton>
            </span>
        </Styled.Header>
    )
}

ContentHeader.propTypes = {
    children: P.node
}

