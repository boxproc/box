import React from 'react';
import { css } from 'styled-components';

import styled from 'theme';

import { EyeIcon, EyeSlashIcon } from 'components';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InputCommonProps } from './types';

const PasswordFieldBase = styled.input`
  ${sharedInputCss};
  padding-right: 30px;
`;

const PasswordFieldWrapper = styled.div`
  position: relative;

  .icon-wrapper {
    position: absolute;
    top: 8px;
    right: 10px;
    cursor: pointer;
    user-select:none;
    font-size: 0;
  }
`;

const iconStyles = css`
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
  color: ${({ theme }) => theme.colors.normalAccent}
  }
`;

const EyeSlashStyled = styled(EyeSlashIcon)`
  ${iconStyles}
`;

const EyeStyled = styled(EyeIcon)`
  ${iconStyles}
`;

interface RenderComponentProps {
  type: string;
  icon: React.ReactNode;
  tip: string;
}

export const PasswordField: React.FC<InputCommonProps> = props => {
  const [masked, setMasked] = React.useState(true);

  const renderComponent = ({ type, icon, tip }: RenderComponentProps) => (
    <PasswordFieldWrapper>
      <PasswordFieldBase
        {...props}
        type={type}
      />
      <span
        className="icon-wrapper"
        draggable={false}
        onClick={() => setMasked(!masked)}
        title={tip}
      >
        {icon}
      </span>
    </PasswordFieldWrapper>
  );
  return (
    <React.Fragment>
      {renderComponent({
        type: masked ? 'password' : 'text',
        icon: masked ? <EyeSlashStyled size="15" /> : <EyeStyled size="15" />,
        tip: masked ? 'Show password' : 'Hide password',
      })}
    </React.Fragment>
  );
};

export default withFormField(PasswordField);
