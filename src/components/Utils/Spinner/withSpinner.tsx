import React from 'react';

import styled from 'theme';

import { Spinner } from './Spinner';

import { componentUtil } from 'utils';

export interface ExternalSpinnerProps {
  isLoading: boolean;
}

interface Options {
  isFixed?: boolean;
  isGlobal?: boolean;
  backgroundColor?: string;
  color?: string;
  maxHeight?: string | number;
  size?: string | number;
}

const SpinnerContainer = styled.div<ExternalSpinnerProps & Options>`
  ${({ isLoading }) => isLoading ? 'position: relative' : ''};
  width: 100%;
  height: 100%;

  ${({ isLoading, isGlobal, maxHeight = '100vh' }) => isGlobal && isLoading
    ? `max-height: ${maxHeight}; overflow-y: hidden;`
    : ''
  }
`;

export const withSpinner = ({
  isFixed = false,
  isGlobal = false,
  backgroundColor,
  maxHeight,
  color,
  size,
}: Options = {}) => <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & Partial<ExternalSpinnerProps>>
) => {
    const WithSpinner: React.FC<OriginalProps & ExternalSpinnerProps> = props => {
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
