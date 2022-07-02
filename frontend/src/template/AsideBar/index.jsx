import { IconButton } from '../../components/IconButton/index.jsx'
import { Heart, ListAlt, Moon } from '@styled-icons/fa-regular'
import * as Styled from './styles.js'
import Logo from '../../assets/imgs/logo.png'


export const AsideBar = () => {
    return (
        <Styled.Container>
           
            <img src={Logo} alt="Logo" />
            
            <span>
                <IconButton><Heart title="Favorites" /></IconButton>
                <IconButton><ListAlt title="All notes"/></IconButton>
            </span>
            
            <IconButton><Moon title="Change theme" /></IconButton>
           
        </Styled.Container>
    )
}


