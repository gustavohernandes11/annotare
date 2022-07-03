import { useContext } from 'react'
import * as Styled from './styles.js'
import { AsideMenuHeader } from '../../components/AsideMenuHeader'
import { Category } from '../../components/Category'
import { GlobalContext } from '../../contexts/globalContext/GlobalContextProvider.jsx'

export const AsideMenu = () => {
    const [state, actions] = useContext(GlobalContext);

    return (
        <Styled.Container>
            <AsideMenuHeader />
            {state.categories?.map(category => <Category key={category.id} color={category.color}>{category.name}</Category>)}
    
        </Styled.Container>
    )
}

