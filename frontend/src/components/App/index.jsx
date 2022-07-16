import React, { useEffect } from "react";

import "./styles.js";
import * as Styled from "./styles.js";
import { Theme } from "../../themes/ThemeProvider";
import { Hidden } from "../Hidden";
import { AsideBar } from "../../template/AsideBar";
import { AsideMenu } from "../../template/AsideMenu";
import { Content } from "../../template/Content";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { DataContextProvider } from "../../contexts/dataContext/DataContextProvider";
import { lightTheme } from "../../themes/lightTheme.js";
import { Editor } from "../Editor/index.jsx";

function App() {
    const [globalState, globalActions] = useGlobalContext();
    // to aprumar
    useEffect(() => {
        if (window.screen.width > lightTheme.screens.laptop) {
            globalActions.setIsAsideMenuOpen(true);
        } else {
            globalActions.changeLayout("list");
        }
    }, []);

    return (
        <Theme>
            <Hidden />
            <div id="app">
                <Styled.Container>
                    <AsideBar />
                    <DataContextProvider>
                        {(globalState.isAsideMenuOpen ||
                            window.screen.width > 768) && <AsideMenu />}
                        <span>
                            {globalState.editMode ? <Editor /> : <Content />}
                        </span>
                    </DataContextProvider>
                </Styled.Container>
            </div>
        </Theme>
    );
}

export default App;
