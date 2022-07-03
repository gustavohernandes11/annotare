import { useContext } from 'react'
import * as Styled from './styles.js'
import { Card } from '../Card/index.jsx'
import { DataContext } from '../../contexts/dataContext/DataContextProvider.jsx'


export const ContentBoard = () => {
    const [state] = useContext(DataContext);

    return (
        <Styled.Container>
            <Card heading="object state">
                {JSON.stringify(state)}
            </Card>
            {state.annotations?.map(annotation => <Card key={annotation.id} heading={annotation.heading}>
                {annotation.content}
            </Card>)}
        </Styled.Container>
    )
}

