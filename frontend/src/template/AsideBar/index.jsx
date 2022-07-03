import { IconButton } from '../../components/IconButton/index.jsx'
import { Heart, ListAlt, Moon } from '@styled-icons/fa-regular'
import { List, Th} from '@styled-icons/fa-solid'
import * as Styled from './styles.js'
import Logo from '../../assets/imgs/logo.png'


export const AsideBar = () => {
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
            <IconButton><Th title="Change Layout" /></IconButton>
            <IconButton><Moon title="Change theme" /></IconButton>
            </span>
        </Styled.Container>
    )
}


