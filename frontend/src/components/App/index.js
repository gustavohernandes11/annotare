import React from 'react'

import './styles.js';
import * as Styled from './styles.js'
import { Theme } from '../../themes/ThemeProvider';
import { AsideBar } from '../../template/AsideBar'
import { AsideMenu } from '../../template/AsideMenu'
import { Content } from '../../template/Content'
import { DataContextProvider } from '../../contexts/dataContext/DataContextProvider.jsx';

function App() {
  return (
    <DataContextProvider>
      <Theme>
        <div id="app">
          <Styled.Container>
            <AsideBar />
            <AsideMenu />
            <Content />
          </Styled.Container>
        </div>
      </Theme>
    </DataContextProvider>

  );
}

export default App;
