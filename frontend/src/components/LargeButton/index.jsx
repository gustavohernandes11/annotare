import React, { useContext, useEffect } from 'react'
import * as Styled from './styles.js'
import P from 'prop-types'
import { DataContext } from '../../contexts/dataContext/DataContextProvider.jsx'

export const LargeButton = ({ primary, children }) => {
    const [state, actions] = useContext(DataContext);

    useEffect(() => {
        console.log(state)
       
    }, [state]);

    return (
        <Styled.Container>
            <button aria-label="large-button" onClick={() => actions.shuffle()} primary={primary}>
                {children}
            </button>
        </Styled.Container>
    )
}

LargeButton.propTypes = {
    children: P.oneOfType([P.string, P.object, P.node]).isRequired
}

