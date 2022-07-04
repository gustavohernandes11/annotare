import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton/index.jsx'
import { SearchInput } from '../SearchInput/index.jsx'
import P from 'prop-types'

export const ContentHeader = () => {
    return (
        <Styled.Header>
            <span>
            <Heading>Categoria X</Heading>
            <p>Suas Anotações</p>
            </span>
            <SearchInput />
            <span>
            <LargeButton primary="true">Adicionar</LargeButton>
            </span>
        </Styled.Header>
    )
}

ContentHeader.propTypes = {
    children: P.node
}

