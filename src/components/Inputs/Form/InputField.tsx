import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InputCommonProps } from './types';

const InputField = styled.input<InputCommonProps>`
  ${sharedInputCss};
`;

export default withFormField(InputField);
