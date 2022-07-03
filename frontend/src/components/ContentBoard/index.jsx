import { useContext } from 'react'
import * as Styled from './styles.js'
import P from 'prop-types'
import { Card } from '../Card/index.jsx'
import { GlobalContext } from '../../contexts/globalContext/GlobalContextProvider.jsx'


export const ContentBoard = () => {
    const [state, actions] = useContext(GlobalContext);

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

ContentBoard.propTypes = {
    children: P.node.isRequired
}

