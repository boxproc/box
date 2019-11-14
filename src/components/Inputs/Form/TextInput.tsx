import React from 'react';
import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';

import { InputCommonProps } from './types';

const TextInputWrapper = styled.input<InputCommonProps>`
  ${sharedInputCss};
`;

const TextInput: React.FC<InputCommonProps> = ({
  value,
  ...props
}) => {
  const [val, setVal] = React.useState(value);

  return (
    <TextInputWrapper
      value={val}
      onChange={e => setVal(e.target.value)}
      {...props}
    />
  );
};

export default TextInput;
