import { IconButton } from "../../components/IconButton/index.jsx";
import { Moon, Lightbulb } from "@styled-icons/fa-regular";

import { Th, ThList, Rainbow, Stream } from "@styled-icons/fa-solid";
import {} from "@styled-icons/fa-brands";
import * as Styled from "./styles.js";
import { GlobalContext } from "../../contexts/globalContext/GlobalContextProvider";
import { useContext } from "react";

export const AsideBar = () => {
    const [globalState, globalActions] = useContext(GlobalContext);

    return (
        <Styled.Container id="asidebar">
            <span>
                <h1>.N</h1>
                <hr />

                <IconButton
                    id="toggle-menu-asibe-bar-button"
                    onClick={() =>
                        globalActions.setIsAsideMenuOpen(
                            globalState.isAsideMenuOpen ? false : true
                        )
                    }
                >
                    <Stream title="Open Menu" />
                </IconButton>
            </span>
            <span>
                <IconButton
                    id="toggle-layout-asibe-bar-button"
                    onClick={() => globalActions.changeLayout()}
                >
                    {globalState.activeLayout === "grid" ? (
                        <ThList title="Change Layout" />
                    ) : (
                        <Th title="Change Layout" />
                    )}
                </IconButton>
                <IconButton
                    title="Change theme"
                    onClick={() => globalActions.changeTheme()}
                >
                    {globalState.activeTheme === "light" && <Rainbow />}
                    {globalState.activeTheme === "dark" && <Lightbulb />}
                    {globalState.activeTheme === "rainbow" && <Moon />}
                </IconButton>
            </span>
        </Styled.Container>
    );
};
