const snippets = [
  {
    title: 'Else if',
    code: 'if () {\n\xa0\xa0\xa0\xa0\n} else {\n\xa0\xa0\xa0\xa0\n}',
    shiftCharCount: 4,
  },
  {
    title: 'If',
    code: 'if () {\n\xa0\xa0\xa0\xa0\n}',
    shiftCharCount: 4,
  },
  {
    title: 'Function',
    code: 'function functionName() {\n\xa0\xa0\xa0\xa0return ;\n}',
    shiftCharCount: 37,
  },
  {
    title: 'Function run()',
    code: 'function run() {\n\xa0\xa0\xa0\xa0return ;\n}',
    shiftCharCount: 28,
  },
  {
    title: 'Switch',
    // tslint:disable-next-line: max-line-length
    code: 'switch() {\n\xa0\xa0\xa0\xa0case x:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0break;\n\xa0\xa0\xa0\xa0case y:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0break;\n\xa0\xa0\xa0\xa0default:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n}',
    shiftCharCount: 7,
  },
];

const items = snippets.map(snippet => {
  return {
    name: snippet.title,
    value: snippet.code,
    shiftCharCount: snippet.shiftCharCount,
  };
});

export const codeSnippetsContextMenuItems = {
  title: 'Code snippets',
  items,
  noDataStr: 'No available code snippets',
};
