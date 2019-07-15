import React from 'react';
import { OptionProps } from 'react-select/lib/components/Option';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from '../../Icon';

interface OptionWrapperProps {
  isFocused: boolean;
}

const OptionWrapper = styled.div<OptionWrapperProps>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: ${({ isFocused, theme }) => isFocused ? theme.lightGrayColor : ''};

  svg {
    cursor: pointer;
  }

  p {
    padding-left: 10px;
    font-weight: 500;
  }
`;

interface MultiSelectOptionProps<T> extends OptionProps<T> {
  modifySelectOption?: (props: OptionProps<T>) => void;
}

const MultiSelectOption = <T extends {}>(props: MultiSelectOptionProps<T>) => {

  const {
    data,
    children,
    isFocused,
    isSelected,
    innerProps: {
      onMouseOver,
    },
    selectOption,
    selectProps: {
      modifySelectOption,
    },
  } = props;

  const modifiedData = modifySelectOption ? modifySelectOption({...props}) : data;

  return (
    <OptionWrapper isFocused={isFocused} onMouseOver={onMouseOver}>
      <Box mr="5px">
        {isSelected ? (
          <CheckedBoxIcon
            onClick={e => selectOption(modifiedData)}
          />
        ) : (
          <UncheckedBoxIcon
            onClick={e => selectOption(modifiedData)}
          />
        )}
      </Box>
      <div>{children}</div>
    </OptionWrapper>
  );
};

export default MultiSelectOption;
