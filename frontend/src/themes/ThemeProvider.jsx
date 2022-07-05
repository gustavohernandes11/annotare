import { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext/GlobalContextProvider'
import { ThemeProvider } from "styled-components"
import { darkTheme as dark } from "./themes"
import { lightTheme as light } from './themes'
import { rainbowTheme as rainbow } from './themes'

export const Theme = ({ children }) => {
    const [globalState, globalActions] = useContext(GlobalContext)

    const getTheme = () => {
        switch (globalState.activeTheme) {
            case 'dark':
                return dark
            case 'light':
                return light
            case 'rainbow':
                return rainbow

            default:
                return 'dark'
        }
    }

    return (
        <ThemeProvider theme={getTheme}>
            {children}
        </ThemeProvider>
    )
}


