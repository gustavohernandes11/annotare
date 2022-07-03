import { useContext } from 'react'
import * as Styled from './styles.js'
import { AsideMenuHeader } from '../../components/AsideMenuHeader'
import { Category } from '../../components/Category'
import { DataContext } from '../../contexts/dataContext/DataContextProvider.jsx'

export const AsideMenu = () => {
    const [state] = useContext(DataContext);

    return (
        <Styled.Container>
            <AsideMenuHeader />
            <Category default selected color='grey' >All</Category>
            {
                state.categories?.map(category => <Category
                    key={category.id}
                    color={category.color}>
                    {category.name}
                </Category>)
            }

        </Styled.Container>
    )
}

