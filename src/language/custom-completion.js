// custom-completion.js
/* eslint-disable no-template-curly-in-string */
const x = (monaco) => {

  return [  
  /** * Funciones integradas */  
    {
      label: 'funcion',
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: [      
        'funcion ${1:main}() -> {',
        '\t$0',
        '}'
      ].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'nueva funcion',
      detail: 'crear funcion'
    }, {
      label: 'imprimir',
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: 'imprimir("${1:holi}")',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'nueva funcion',
      detail: 'imprime en pantalla'
    },
    // {    
    //   label: 'getIniString',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'getIniString(${1:sec}, ${2: key})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'De los datos del tipo ini, obtenga el valor correspondiente a la clave de acuerdo con la sección y la clave, y devuélvalo como una cadena'
    // }, {
    //   label: 'getIniInt',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'getIniInt(${1:sec}, ${2: key})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'A partir de los datos de tipo ini, de acuerdo con la sección y la clave, obtenga el valor correspondiente a la clave y devuélvalo como un entero'
    // }, {
    //   label: 'getIniDouble',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'getIniDouble(${1:sec}, ${2: key})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'A partir de los datos de tipo ini, obtenga el valor correspondiente a la clave de acuerdo con la sección y la clave, y devuélvalo como un número de punto flotante'
    // }, {
    //   label: 'isEmpty',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'isEmpty(${1:str})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'Juzga si str está vacío'
    // }, {
    //   label: 'isEqual',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'isEqual(${1:str1}, ${2: str2})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'Juzga si str está vacío'
    // }, {
    //   label: 'isContain',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'isContain(${1:str})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'Juzgue si el elemento de datos contiene str'
    // }, {
    //   label: 'getJsonInt',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'getJsonInt(${1:path})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'Adquirir el valor devuelto como un entero en los datos JSON de acuerdo con la ruta'
    // }, {
    //   label: 'getJsonDouble',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'getJsonDouble(${1:path})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'Adquirir el valor devuelto como un entero en los datos JSON de acuerdo con la ruta'
    // }, {
    //   label: 'getJsonSize',
    //   kind: monaco.languages.CompletionItemKind.Function,
    //   insertText: 'getJsonSize(${1:path})',
    //   insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    //   documentation: 'Adquirir la longitud de los datos del tipo de matriz en los datos JSON de acuerdo con la ruta'
    // }
    {
      label: 'regresa',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'regresa ${1:value}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'nueva funcion',
      detail: 'regresa un valor'
    }
  ];

    
}

 export default x;