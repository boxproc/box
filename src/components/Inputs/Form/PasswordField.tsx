import React from 'react';

import styled, { css } from 'theme';

import { EyeIcon, EyeSlashIcon } from './../../Icons';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { ICommonInput } from './types';

const iconStyles = css`
  color: ${({ theme }) => theme.colors.gray};
  transition: all .1s linear;

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

interface IIcon {
  masked: boolean;
  size: string;
}

const Icon: React.FC<IIcon> = ({ masked, size }) => {
  return masked ? (<EyeSlashStyled size={size} />) : (<EyeStyled size={size} />);
};

const PasswordFieldBase = styled.input`
  ${sharedInputCss};
  padding-right: 30px;
`;

const PasswordFieldWrapper = styled.div`
  position: relative;

  .icon-wrapper {
    position: absolute;
    top: 6px;
    right: 10px;
    cursor: pointer;
    user-select:none;
    font-size: 0;
  }
`;

interface IRenderComponent {
  icon: React.ReactNode;
  tip: string;
  type: string;
}

export const PasswordField: React.FC<ICommonInput> = props => {
  const [masked, setMasked] = React.useState(true);

  const handleSetMask = () => setMasked(!masked);

  const renderComponent = ({ type, icon, tip }: IRenderComponent) => (
    <PasswordFieldWrapper>
      <PasswordFieldBase
        {...props}
        type={type}
      />
      <span
        className="icon-wrapper"
        draggable={false}
        onClick={handleSetMask}
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
        icon: <Icon masked={masked} size="15" />,
        tip: masked ? 'Show password' : 'Hide password',
      })}
    </React.Fragment>
  );
};

export default withFormField(PasswordField);
