import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton/index.jsx'
import P from 'prop-types'

export const ContentHeader = () => {
    return (
        <Styled.Header>
            <span>
            <Heading>Categoria X</Heading>
            <p>Suas Anotações</p>
            </span>
            <LargeButton>Adicionar</LargeButton>
        </Styled.Header>
    )
}

ContentHeader.propTypes = {
    children: P.node.isRequired
}

