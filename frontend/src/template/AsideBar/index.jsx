import { IconButton } from "../../components/IconButton/index.jsx";
import { ListAlt, Moon, Lightbulb } from "@styled-icons/fa-regular";
import { Th, ThList, Rainbow } from "@styled-icons/fa-solid";
import {} from "@styled-icons/fa-brands";
import * as Styled from "./styles.js";
import { GlobalContext } from "../../contexts/globalContext/GlobalContextProvider";
import { useContext } from "react";

export const AsideBar = () => {
    const [globalState, globalActions] = useContext(GlobalContext);

    return (
        <Styled.Container>
            <span>
                <IconButton>
                    <ListAlt title="Favorites" />
                </IconButton>
                <hr />
            </span>
            <span>
                <IconButton onClick={() => globalActions.changeLayout()}>
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
