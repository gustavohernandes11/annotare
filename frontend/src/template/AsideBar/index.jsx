import { IconButton } from '../../components/IconButton/index.jsx'
import {  Heart, ListAlt, Moon, Lightbulb } from '@styled-icons/fa-regular'
import { Th, ThList, Rainbow } from '@styled-icons/fa-solid'
import { } from '@styled-icons/fa-brands'
import * as Styled from './styles.js'
import Logo from '../../assets/imgs/logo.png'
import { GlobalContext } from '../../contexts/globalContext/GlobalContextProvider'
import { useContext } from 'react'


export const AsideBar = () => {
    const [globalState, globalActions] = useContext(GlobalContext);

    return (
        <Styled.Container>
            <span>
                <img src={Logo} alt="Logo" />
                <hr />
                <IconButton><Heart title="Favorites" /></IconButton>
                <IconButton><ListAlt title="All notes" /></IconButton>
            </span>
            <span>

                <IconButton onClick={() => globalActions.changeLayout()}>
                    {
                        globalState.activeLayout === 'grid'
                            ? (<ThList title="Change Layout" />)
                            : (<Th title="Change Layout" />)
                    }

                </IconButton>
                <IconButton  title="Change theme" onClick={() => globalActions.changeTheme()} >
                    {globalState.activeTheme === 'light' && (<Rainbow/>)}
                    {globalState.activeTheme === 'dark' && (<Lightbulb />)}
                    {globalState.activeTheme === 'rainbow' && (<Moon />)}
                   
                </IconButton>
            </span>
        </Styled.Container>
    )
}


