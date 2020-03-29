import React from 'react';
import { OptionProps } from 'react-select/lib/components/Option';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from './../../../Icons';

interface IIcon {
  isSelected: boolean;
  onClick: () => void;
}

const Icon: React.FC<IIcon> = ({ isSelected, onClick }) => {
  return isSelected
    ? (<CheckedBoxIcon onClick={onClick} />)
    : (<UncheckedBoxIcon onClick={onClick} />);
};

interface IOptionWrapper {
  isFocused: boolean;
}

const OptionWrapper = styled.div<IOptionWrapper>`
  display: flex;
  align-items: center;
  padding: 5px 10px;

  ${({ isFocused, theme }) => isFocused && `
    background-color: ${theme.colors.lightGray};
  `}

  svg {
    cursor: pointer;
  }

  p {
    padding-left: 10px;
    font-weight: 500;
  }
`;

interface IMultiSelectOption<T> extends OptionProps<T> {
  modifySelectOption?: (props: OptionProps<T>) => void;
}

const MultiSelectOption = <T extends {}>(props: IMultiSelectOption<T>) => {
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

  const modifiedData = modifySelectOption ? modifySelectOption({ ...props }) : data;

  return (
    <OptionWrapper isFocused={isFocused} onMouseOver={onMouseOver}>
      <Flex alignItems="flex-start">
        <Box mr="5px" mt="1px">
          <Icon
            isSelected={isSelected}
            onClick={() => selectOption(modifiedData)}
          />
        </Box>
        <div>{children}</div>
      </Flex>
    </OptionWrapper>
  );
};

export default MultiSelectOption;
