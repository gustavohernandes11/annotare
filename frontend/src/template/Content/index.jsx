import * as Styled from './styles.js'
import { ContentHeader } from '../../components/ContentHeader'
import { ContentBoard } from '../../components/ContentBoard/index.jsx'

export const Content = () => {
    return (
        <Styled.Container>
            <ContentHeader />
            <ContentBoard />
        </Styled.Container>
    )
}



 