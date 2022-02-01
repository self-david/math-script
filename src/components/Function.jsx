import React, { useState } from 'react';

import Draggable from 'react-draggable';
import Editor from "@monaco-editor/react";

import style from '../styles/function.module.css';

// import vLang from '../language/math-script.js';
// import vCompletion from '../language/custom-completion.js';

export default function Function(props) {
  const { title, x, y, id, functions, setFunctions } = props;
  const [minimized, setMinimized] = useState(false);
  const [editor, setEditor] = useState(props.code);


  const options = {
    selectOnLineNumbers: false,
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

  const eventStart = (e , data) => {
    // console.log('Id: ', e.target.id);
    // console.log('Data: ', data);
    const thisId = e.target.id;
    if(thisId !== `${id}-header` && thisId !== `${id}-title` && thisId !== `${id}-box`) {
      return false;
    }
  };

  const eventDrag = (e, data) => {
    // console.log('X: ', data.deltaX);
    // console.log('Y: ', data.deltaY);

    // let newFunctions = functions;
    // newFunctions.forEach(function(functionObj) {
    //   if(functionObj.id !== id) {
    //     functionObj.x = data.deltaX + x;
    //     functionObj.y = data.deltaY + y;
    //   }
    //   // console.log(functionObj);
    // });
    // setFunctions(newFunctions);
  };

  const eventStop = (e , data) => {
    const idx = functions.map(i => i.id).indexOf(id);
    const obj = { id, title, x: data.x, y: data.y, editor };
    setFunctions([...functions.slice(0, idx), ...functions.slice(idx + 1), obj]);
  };

  

  return(
    <Draggable defaultPosition={{x, y}} onStart={eventStart} onDrag={eventDrag} onStop={eventStop}>
      <div className={style.draggable} id={`${id}-box`}>
      <div className={style.header + (minimized ?  ' ' + style.minimizedHeader : '')} id={`${id}-header`}>
        <svg  id={`${id}-icon`} className={style.icon + (minimized ? ' ' + style.minimized : '')} onClick={() => setMinimized(!minimized)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path id={`${id}-icon-path`} d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
        <div className={style.title} id={`${id}-title`}>{title}</div>
      </div>
        <Editor
          height={minimized ? "0px" : "300px"}
          className={minimized ? style.editorMinimized : ''}
          width="360px"
          defaultLanguage="math-script"
          defaultValue={editor}
          onChange={(newValue, e) => setEditor(newValue)}
          theme="math-Theme"
          options={options}
          readOnly="true"
        />
      </div>
    </Draggable>
  );
}
