import React from 'react';
import { css } from 'styled-components';

import { Eye } from 'styled-icons/fa-regular/Eye';
import { EyeSlash } from 'styled-icons/fa-regular/EyeSlash';

import styled from 'theme';

import Input, { InputCommonProps } from './Input';

const PasswordInputBase = styled(Input)`
  padding-right: 30px;
`;

const PasswordInputWrapper = styled.div`
  position: relative;

  .icon-wrapper {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    user-select:none;
    font-size: 0;
  }
`;

const iconStyles = css`
  color: ${({ theme }) => theme.grayColor};

  &:hover {
  color: ${({ theme }) => theme.normalAccentColor}
  }
`;

const EyeSlashStyled = styled(EyeSlash)`
  ${iconStyles}
`;

const EyeStyled = styled(Eye)`
  ${iconStyles}
`;

interface RenderComponentProps {
  type: string;
  icon: React.ReactNode;
  tip: string;
}

export const PasswordInput: React.FC<InputCommonProps> = props => {
  const [masked, setMasked] = React.useState(false);

  const renderComponent = ({ type, icon, tip }: RenderComponentProps) => (
    <PasswordInputWrapper>
      <PasswordInputBase
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
    </PasswordInputWrapper>
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

export default PasswordInput;
