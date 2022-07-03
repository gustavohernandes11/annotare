import React from 'react'

import './styles.js';
import * as Styled from './styles.js'
import { Theme } from '../../themes/ThemeProvider';
import { AsideBar } from '../../template/AsideBar'
import { AsideMenu } from '../../template/AsideMenu'
import { Content } from '../../template/Content'
import { GlobalContextProvider } from '../../contexts/globalContext/GlobalContextProvider.jsx';

function App() {
  return (
    <GlobalContextProvider>
      <Theme>
        <div id="app">
          <Styled.Container>
            <AsideBar />
            <AsideMenu />
            <Content />
          </Styled.Container>
        </div>
      </Theme>
    </GlobalContextProvider>

  );
}

export default App;
