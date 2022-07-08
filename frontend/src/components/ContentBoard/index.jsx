import {  useState } from 'react'
import * as Styled from './styles.js'
import { Card } from '../Card/index.jsx'

import { Popover } from '../Popover/index.jsx'
import { useDataContext } from '../../hooks/useDataContext.jsx'
import { useGlobalContext } from '../../hooks/useGlobalContext.jsx'

export const ContentBoard = () => {
    const [dataState] = useDataContext();
    const [globalState] = useGlobalContext();
    const [isPopoverActive, setIsPopoverActive] = useState(false)


    return (
        <>
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
            {isPopoverActive && <Popover
                mensage="Atenção. Obrigado pela atenção"
                acceptFunction={() => setIsPopoverActive(() => false)}
                cancelFunction={() => setIsPopoverActive(() => false)} />}
        </>
    )
}

