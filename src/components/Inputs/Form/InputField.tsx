import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InputCommonProps } from './types';

const InputField = styled.input<InputCommonProps>`
  ${sharedInputCss};
  text-align: ${({ isNumber }) => isNumber ? 'right' : 'left'}

  ${({ isRightPlaceholder }) => isRightPlaceholder && `
      &::-webkit-input-placeholder {
        text-align: right;
      }

      &::-moz-placeholder {
        text-align: right;
      }
    `}
`;

export default withFormField(InputField);
