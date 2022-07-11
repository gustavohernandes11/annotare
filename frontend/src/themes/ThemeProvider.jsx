import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../contexts/globalContext/GlobalContextProvider";
import { ThemeProvider } from "styled-components";
import { darkTheme as dark } from "./themes";
import { lightTheme as light } from "./themes";
import { rainbowTheme as rainbow } from "./themes";
import { LoadingPage } from "../components/LoadingPage";

export const Theme = ({ children }) => {
    const [globalState, globalActions] = useContext(GlobalContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(() => true);
        const storagedTheme = localStorage.getItem("storagedTheme");
        if (storagedTheme === null || undefined) {
            localStorage.setItem("storagedTheme", "dark");
            globalActions.setTheme("dark");
        } else {
            globalActions.setTheme(storagedTheme);
        }
        setLoading(() => false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTheme = () => {
        switch (globalState.activeTheme) {
            case "dark":
                return dark;
            case "light":
                return light;
            case "rainbow":
                return rainbow;

            default:
                return "dark";
        }
    };

    return (
        <ThemeProvider theme={getTheme}>
            {loading ? <LoadingPage /> : children}
        </ThemeProvider>
    );
};
