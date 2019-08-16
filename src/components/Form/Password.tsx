import React from 'react';

import styled from 'theme';

import { EyeIcon, EyeOffIcon } from '../Icon';
import Input, { InputCommonProps } from './Input';

const PasswordInputBase = styled(Input)`
  padding-right: 30px;
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  user-select:none
  font-size: 0;
`;

interface RenderComponentProps {
  type: string;
  icon: React.ReactNode;
  tip: string;
}

interface PasswordInputState {
  masked: boolean;
}

class PasswordInput extends React.Component<InputCommonProps, PasswordInputState> {
  state = {
    masked: true,
  };

  changeShowMode = (e: React.MouseEvent<HTMLInputElement>) =>
    this.setState(({ masked }) => ({masked: !masked}))

  renderComponent = ({ type, icon, tip }: RenderComponentProps) => (
    <PasswordInputWrapper>
      <PasswordInputBase
        {...this.props}
        type={type}
      />
      <IconWrapper
        draggable={false}
        onClick={this.changeShowMode}
        title={tip}
      >
        {icon}
      </IconWrapper>
    </PasswordInputWrapper>
  )

  render() {
    const { masked } = this.state;

    return (
      <div>
        {this.renderComponent({
          type: masked ? 'password' : 'text',
          icon: masked ? <EyeOffIcon/> : <EyeIcon />,
          tip: masked ? 'Show password' : 'Hide password',
        })}
      </div>
    );
  }
}

export default PasswordInput;
