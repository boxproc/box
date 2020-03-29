import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { ICommonInput } from './types';

const InputField = styled.input<ICommonInput>`
  ${sharedInputCss};
`;

export default withFormField(InputField);
