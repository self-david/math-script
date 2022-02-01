import React, { useEffect, useState } from 'react';

import { useMonaco } from "@monaco-editor/react";
import vLang from '../language/math-script.js';
import vCompletion from '../language/custom-completion.js';
import vTheme from '../language/math-Theme.js';
import Function from './Function.jsx';
import Editor from "@monaco-editor/react";

import Split from 'react-split';

import style from '../styles/container.module.css';
import '../styles/box.css';

import P from './P.jsx';

export default function Container() {
  const monaco = useMonaco();
  const [functions, setFunctions] = useState([
    {
      title: 'Function 1',
      x: 10,
      y: 10,
      code: '',
      id: 'f1'
    },
    {
      title: 'Function 2',
      x: 385,
      y: 10,
      code: 'funcion f2() -> {\n\t\n}',
      id: 'f2'
    },
    {
      title: 'Function 3',
      x: 10,
      y: 370,
      code: 'funcion f3() -> {\n\timprimir("hola mundo")\n}',
      id: 'f3'
    },
    // {
    //   title: 'Function 4',
    //   x: 385,
    //   y: 370,
    //   code: 'funcion f4() -> {\n\timprimir("hola mundo")\n}',
    //   id: 'f4'
    // },
    // {
    //   title: 'Function 5',
    //   x: 10,
    //   y: 730,
    //   code: 'funcion f5() -> {\n\timprimir("hola mundo")\n}',
    //   id: 'f5'
    // }
  ]);

  useEffect(() => {
    if(monaco !== null) {
      // registrar lenguaje
      monaco?.languages.register({ id: 'math-script' });
      // Token básico para este idioma personalizado
      monaco?.languages.setMonarchTokensProvider('math-script', vLang);
  
      monaco?.editor.defineTheme('math-Theme', vTheme);
      
      monaco?.languages.registerCompletionItemProvider('math-script', {
        // provideCompletionItems: () => { return { suggestions: vCompletion(monaco) } }
        provideCompletionItems: function(model, position) {

          var textUntilPosition = model.getValueInRange({
            startLineNumber: position.lineNumber,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column
          });
          var match = textUntilPosition.match(/cu/gim);
          var suggestions = match ? vCompletion(monaco) : [];
          return {
              suggestions: suggestions
          };
          // return vCompletion(monaco);
        }
      });
    }
    console.log(monaco);
  }, [monaco]);


  const options = {
    selectOnLineNumbers: false,
    lineNumbers: "off",
    // readOnly: true,
    automaticLayout: true,
    contextMenu: false,
    cursorBlinking: "smooth",
    wordWrap: "on",
    wrappingIndent: "same",
    scrollBeyondLastLine: false,
    fontFamily: "Caskaydia, 'Fira Code', monospace",
    // fontFamily: "../assets/Caskaydia.ttf",
    // folding: true,
    fontFeatureSettings: "",
    minimap: {
      enabled: false
    }
  };

  return(
      <Split
        className="split"
        direction="vertical"
        minSize={0}
        gutterSize={6}
      >
      <div className={style.container}>
        {/* <div className="box-1"> */}
          {monaco && functions.map(function(functionObj) {
            return <Function key={functionObj.id} {...functionObj} functions={functions} setFunctions={setFunctions}/>
          })}
          <div className={style.clicked}></div>
        </div>
        <div className="box-2">
        <Editor
          height="100%"
          width="100%"
          defaultLanguage="math-script"
          // defaultValue={"editor"}
          // onChange={(newValue, e) => setEditor(newValue)}
          theme="math-Theme"
          options={options}
        />
        </div>
      </Split>
  );
}
