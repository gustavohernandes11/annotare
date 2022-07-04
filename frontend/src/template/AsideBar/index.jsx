import { IconButton } from '../../components/IconButton/index.jsx'
import { Heart, ListAlt, Moon } from '@styled-icons/fa-regular'
import { Th } from '@styled-icons/fa-solid'
import * as Styled from './styles.js'
import Logo from '../../assets/imgs/logo.png'
import { GlobalContext } from '../../contexts/globalContext/GlobalContextProvider'
import { useContext } from 'react'


export const AsideBar = () => {
    const [state, actions] = useContext(GlobalContext)

    return (
        <Styled.Container>
            <span>
            <img src={Logo} alt="Logo" />
            <hr />
                <IconButton><Heart title="Favorites" /></IconButton>
                <IconButton><ListAlt title="All notes" /></IconButton>
            </span>
            <span>

            {/* <IconButton><List title="Change Layout" /></IconButton> */}
            <IconButton><Th title="Change Layout" onClick={() => actions.changeLayout()} /></IconButton>
            <IconButton><Moon title="Change theme" onClick={() => actions.changeTheme()} /></IconButton>
            </span>
        </Styled.Container>
    )
}


