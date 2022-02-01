import React, { useRef } from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

export default function P() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  
  function showValue() {
    alert(editorRef.current.getValue());
    console.log(editorRef.current)
  }

  return (
   <>
     <button onClick={showValue}>Show value</button>
     <Editor
       height="500px"
       width="300px"
       defaultLanguage="javascript"
       defaultValue="// some comment"
       onMount={handleEditorDidMount}
     />
   </>
  );
}