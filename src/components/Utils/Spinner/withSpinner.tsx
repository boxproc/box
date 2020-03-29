import React from 'react';

import styled from 'theme';

import { Spinner } from './Spinner';

import { componentUtil } from 'utils';

export interface ISpinner {
  isLoading: boolean;
}

interface IOptions {
  backgroundColor?: string;
  color?: string;
  isFixed?: boolean;
  isGlobal?: boolean;
  maxHeight?: string | number;
  size?: string | number;
}

const SpinnerContainer = styled.div<ISpinner & IOptions>`
  ${({ isLoading }) => isLoading ? 'position: relative' : ''};
  width: 100%;
  height: 100%;

  ${({ isLoading, isGlobal, maxHeight = '100vh' }) => isGlobal && isLoading
    ? `max-height: ${maxHeight}; overflow-y: hidden;`
    : ''
  }
`;

export const withSpinner = ({
  backgroundColor,
  color,
  isFixed = false,
  isGlobal = false,
  maxHeight,
  size,
}: IOptions = {}) => <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & Partial<ISpinner>>
) => {
    const WithSpinner: React.FC<OriginalProps & ISpinner> = props => {
      const { isLoading } = props;

      return (
        <SpinnerContainer
          className="spinner-container"
          isGlobal={isGlobal}
          isLoading={isLoading}
          maxHeight={maxHeight}
        >
          <Component {...props} />
          {
            isLoading && (
              <Spinner
                isFixed={isFixed}
                backgroundColor={backgroundColor}
                color={color}
                size={size}
                maxHeight={maxHeight}
              />
            )
          }
        </SpinnerContainer>
      );
    };

    WithSpinner.displayName = `WithSpinner(${componentUtil.getDisplayName(Component)})`;

    return WithSpinner;
  };
