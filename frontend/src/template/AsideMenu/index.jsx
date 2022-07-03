import * as Styled from './styles.js'
import { AsideMenuHeader } from '../../components/AsideMenuHeader'
import { Category } from '../../components/Category'

export const AsideMenu = () => {
    return (
        <Styled.Container>
            <AsideMenuHeader />
            <Category>Lorem</Category>
            <Category>Lorem ipsum</Category>
            <Category>Lorem</Category>
    
        </Styled.Container>
    )
}

