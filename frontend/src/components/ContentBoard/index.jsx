import { useContext, useState } from 'react'
import * as Styled from './styles.js'
import { Card } from '../Card/index.jsx'
import { DataContext } from '../../contexts/dataContext/DataContextProvider.jsx'
import { GlobalContext } from '../../contexts/globalContext/GlobalContextProvider.jsx'

export const ContentBoard = () => {
    const [dataState] = useContext(DataContext);
    const [globalState] = useContext(GlobalContext);

    
   

    return (
        <Styled.Container style={{
            gridTemplateColumns: globalState.activeLayout === 'grid'
                ? 'repeat(auto-fill, minmax(280px, 1fr))'
                : '1fr'
        }}>
            <Card heading="object dataState">
                {JSON.stringify(globalState)}
            </Card>
            {dataState.annotations?.map(annotation => <Card key={annotation.id} heading={annotation.heading}>
                {annotation.content}
            </Card>)}
        </Styled.Container>
    )
}

