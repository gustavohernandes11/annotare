import React, { useState } from 'react'

import './styles.js';
import * as Styled from './styles.js'
import { Theme } from '../../themes/ThemeProvider';
import { AsideBar } from '../../template/AsideBar'
import { AsideMenu } from '../../template/AsideMenu'
import { Content } from '../../template/Content'
import { DataContextProvider } from '../../contexts/dataContext/DataContextProvider.jsx';
import { GlobalContextProvider } from '../../contexts/globalContext/GlobalContextProvider'
import { Editor } from '../Editor/index.jsx';

function App() {
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  return (
    <GlobalContextProvider>
      <Theme>
        <div id="app">
          <Styled.Container>
            <AsideBar />
            <DataContextProvider>
              <AsideMenu />
              <span>
                {isEditorOpen ? <Editor /> : <Content />}
              </span>
            </DataContextProvider>
          </Styled.Container>
        </div>
      </Theme>
    </GlobalContextProvider>

  );
}

export default App;
