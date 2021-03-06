import * as Styled from "./styles.js";

import { IconButton } from "../../components/IconButton/index.jsx";
import { useGlobalContext } from "./../../hooks/useGlobalContext";

import { Moon, Lightbulb } from "@styled-icons/fa-regular";
import { Th, ThList, Rainbow, Stream } from "@styled-icons/fa-solid";

export const AsideBar = () => {
    const [globalState, globalActions] = useGlobalContext();

    const sizes = {
        height: 20,
        width: 20,
    };
    return (
        <Styled.Container id="asidebar">
            <span>
                <h1>.N</h1>
                <hr />

                <IconButton
                    id="toggle-menu-asibe-bar-button"
                    onClick={() =>
                        globalActions.setIsAsideMenuOpen(
                            !globalState.isAsideMenuOpen
                        )
                    }
                >
                    <Stream title="Open Menu" {...sizes} />
                </IconButton>
            </span>
            <span>
                <IconButton
                    id="toggle-layout-asibe-bar-button"
                    onClick={() => globalActions.changeLayout()}
                >
                    {globalState.activeLayout === "grid" ? (
                        <ThList title="Change Layout" {...sizes} />
                    ) : (
                        <Th title="Change Layout" {...sizes} />
                    )}
                </IconButton>
                <IconButton
                    title="Change theme"
                    onClick={() => globalActions.changeTheme()}
                >
                    {globalState.activeTheme === "light" && (
                        <Rainbow {...sizes} />
                    )}
                    {globalState.activeTheme === "dark" && (
                        <Lightbulb {...sizes} />
                    )}
                    {globalState.activeTheme === "rainbow" && (
                        <Moon {...sizes} />
                    )}
                </IconButton>
            </span>
        </Styled.Container>
    );
};
