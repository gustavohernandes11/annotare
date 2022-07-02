import { ThemeProvider } from "styled-components"
import { theme } from "./themes"

export const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}


