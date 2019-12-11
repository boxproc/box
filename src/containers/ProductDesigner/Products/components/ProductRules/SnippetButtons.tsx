import React from 'react';

import { Box } from '@rebass/grid';

import { theme } from 'theme';

import { Button } from 'components';
import { withLoadDictionaryEvents, WithLoadDictionaryEventsProps } from 'HOCs';

const snippets = [
  {
    id: 1,
    name: 'function',
    code: 'function run() {\n\t\n}',
    hint: 'function run() {\n\t//  code to be executed\n}',
    width: '150px',
    shiftCharCount: 21,
  },
  {
    id: 4,
    name: 'switch',
    code: 'switch() {\n\tcase x:\n\t\t\n\tbreak;\n\tcase y:\n\t\t\n\tbreak;\n\tdefault:\n\t\t\n}',
    // tslint:disable-next-line: max-line-length
    hint: 'switch(expression) {\n\tcase x:\n\t\t// code block\n\tbreak;\n\tcase y:\n\t\t// code block\n\tbreak;\n\tdefault:\n\t\t// code block\n}',
    width: '140px',
    shiftCharCount: 7,
  },
  {
    id: 2,
    name: 'if',
    code: 'if () {\n\t\n}',
    hint: 'if (condition) {\n\t//  block of code to be executed if the condition is true\n}',
    width: '300px',
    shiftCharCount: 4,
  },
  {
    id: 3,
    name: 'else if',
    code: 'if () {\n\t\n} else {\n\t\n}',
    // tslint:disable-next-line: max-line-length
    hint: 'if (condition) {\n\t//  block of code to be executed if the condition is true\n} else {\n\t//  block of code to be executed if the condition is false\n}',
    width: '300px',
    shiftCharCount: 4,
  },
];

interface ProductRulesProps extends WithLoadDictionaryEventsProps {
  className?: string;
  onClick?: (snippet: string, shiftCharCount?: number) => void;
}

const ProductRules: React.FC<ProductRulesProps> = ({
  className,
  onClick,
}) => {
  return (
    <div className={className}>
      {snippets.map(snippet => {
        const { id, name, code, hint, width, shiftCharCount } = snippet;

        const preparedHint = hint.split('\n').map((el, index) => (
          <div key={index}>{el.replace(/\t/g, '\xa0\xa0\xa0\xa0')}</div>
        ));

        const preparedCode = code.replace(/\t/g, '\xa0\xa0\xa0\xa0');

        return (
          <Box
            mx="4px"
            key={id}
          >
            <Button
              text={name}
              type="reset"
              iconName="_"
              size={10}
              onClick={() => onClick(preparedCode, shiftCharCount)}
              hint={preparedHint}
              hintStyle={{
                whiteSpace: 'normal',
                width: width ? width : '180px',
                textAlign: 'left',
                fontWeight: 'normal',
                fontFamily: theme.fonts.code,
                fontSize: '10px',
              }}
            />
          </Box>
        );
      })}
    </div>
  );
};

export default withLoadDictionaryEvents(ProductRules);
