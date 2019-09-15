import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InputCommonProps } from './types';

const InputField = styled.input<InputCommonProps>`
  ${sharedInputCss};
  text-align: ${({ isNumber }) => isNumber ? 'right' : 'left'}
`;

export default withFormField(InputField);
