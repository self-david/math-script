

const x = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'arrow', foreground: 'b5cea8' },
    { token: 'string', foreground: 'ce9178' }, // ✔
    { token: 'string.invalid', foreground: '9e7823' }, // ✔
    { token: 'number', foreground: 'b5cea8' }, // ✔
    { token: 'keywords', foreground: 'ff0000' },
    { token: 'operators', foreground: 'ff0000' },
  ],
  colors: {
    // 'editor.foreground': '#394555',
    // 'editor.background': '#1e1e1e'
  }
}


export default x;