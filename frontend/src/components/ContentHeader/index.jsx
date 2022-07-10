import * as Styled from './styles.js'
import { Heading } from '../Heading/index.jsx'
import { LargeButton } from '../LargeButton/index.jsx'
import { SearchInput } from '../SearchInput/index.jsx'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import P from 'prop-types'
// import { useRef } from 'react'

// const searchInput = document.querySelector('#search-input')

export const ContentHeader = () => {
    // const input = useRef(searchInput)
    const [state, actions] = useGlobalContext();

    const handleClick = () => {
        actions.setEditMode(true)
        actions.setSelectedAnnotation(null)
    }

    return (
        <Styled.Header>
            <span>
                <Heading>{state.selectedCategory || 'Todas'}</Heading>
                <p>{state.searchInputValue ? `Buscando por "${state.searchInputValue}"` : 'Suas anotações'}</p>
            </span>
            <span className='search-and-button-span'>
                <SearchInput id="search-input" onChange={(e) => actions.setSearchInputValue(e.target.value)} />
                <LargeButton primary="true" onClick={handleClick}>Adicionar</LargeButton>
            </span>
        </Styled.Header>
    )
}

ContentHeader.propTypes = {
    children: P.node
}

