import React from 'react';

import Split from 'react-split';
import Header from '../components/Header.jsx';
import Aside from '../components/Aside.jsx';
import Container from '../components/Container.jsx';

import style from '../styles/app.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Split
        className={style.split}
        // minSize={0}
        gutterSize={6}
        sizes={[10, 90]}
        maxSize={[150, Infinity]}
        minSize={[0, 400]}
        snapOffset={0}
        gutterAlign="start"
        cursor='ew-resize'
      >
        <Aside />
        <Container />
      </Split>
    </div>
  );
}

export default App;
