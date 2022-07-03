import React, { useContext, useEffect } from 'react'
import * as Styled from './styles.js'
import P from 'prop-types'
import { GlobalContext } from '../../contexts/globalContext/GlobalContextProvider.jsx'

export const LargeButton = ({ primary = false, children }) => {
    const [state, dispatch] = useContext(GlobalContext);

    useEffect(() => {
        console.log(state)
       
    }, [state]);

    return (
        <Styled.Container>
            <button onClick={() => dispatch({type: 'INCREASE'})} primary={primary}>
                {children}
            </button>
        </Styled.Container>
    )
}

LargeButton.propTypes = {
    children: P.node.isRequired
}

