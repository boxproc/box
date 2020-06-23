import React from 'react';
import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';

import { ICommonInput } from './types';

const TextInputWrapper = styled.input<ICommonInput>`
  ${sharedInputCss};
`;

const TextInput: React.FC<ICommonInput> = ({ value, ...props }) => {
  const [val, setVal] = React.useState(value);

  return (
    <TextInputWrapper
      value={val}
      onChange={(e: any) => setVal(e.target.value)}
      {...props}
    />
  );
};

export default TextInput;
