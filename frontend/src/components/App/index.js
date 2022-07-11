import React from "react";

import "./styles.js";
import * as Styled from "./styles.js";
import { Theme } from "../../themes/ThemeProvider";
import { Hidden } from "../Hidden";
import { AsideBar } from "../../template/AsideBar";
import { AsideMenu } from "../../template/AsideMenu";
import { Content } from "../../template/Content";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { DataContextProvider } from "../../contexts/dataContext/DataContextProvider";
import { Editor } from "../Editor/index.jsx";
function App() {
    const [globalState] = useGlobalContext();
    return (
        <Theme>
            <Hidden />
            <div id="app">
                <Styled.Container>
                    <AsideBar />
                    <DataContextProvider>
                        <AsideMenu />
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
