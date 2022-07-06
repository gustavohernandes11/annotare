import { useContext, useState } from 'react'
import * as Styled from './styles.js'
import { Card } from '../Card/index.jsx'
import { DataContext } from '../../contexts/dataContext/DataContextProvider.jsx'
import { GlobalContext } from '../../contexts/globalContext/GlobalContextProvider.jsx'
import { Popover } from '../Popover/index.jsx'

export const ContentBoard = () => {
    const [dataState] = useContext(DataContext);
    const [globalState] = useContext(GlobalContext);



    return (
        <>
            {/* Gradient to apply in svg */}
            <svg aria-hidden="true" focusable="false">
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                    <stop offset="0%" stop-color="#b535ff" />
                    <stop offset="100%" stop-color="#918af0" />
                </linearGradient>
            </svg>
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
                <Popover
                    mensage="Atenção. Obrigado pela atenção"
                    acceptFunction={() => console.log('aceito')}
                    cancelFunction={() => console.log('cancel')} />
            </Styled.Container>
        </>
    )
}

