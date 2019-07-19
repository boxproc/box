import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'styled-components';

import { ArrowDropDown } from 'styled-icons/material/ArrowDropDown';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-list {
    position: absolute;
    left: -10px;
    top: calc(100% + 3px);
    min-width: 130px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.whiteColor};
    z-index: 1;
  }

  .dropdown-option {
    position: relative;
    padding: 7px 10px 5px;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &:hover {
      background-color: ${({ theme }) => theme.lighterGrayColor};
    }
  }
`;

const ToggleButton = styled(ArrowDropDown)`
  color: ${({ theme }) => theme.grayColor};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.normalAccentColor};
  }
`;

export const Dropdown: React.FC = ({
  children,
}) => {
  const dropdownListRef = React.useRef(null);
  const dropdownToggleBtnRef = React.useRef(null);

  React.useEffect(
    () => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpened, setIsOpened] = React.useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (isOpened
        && dropdownListRef.current
        && !dropdownListRef.current.contains(e.target)
        && !dropdownToggleBtnRef.current.contains(e.target)
      ) {
      setIsOpened(false);
    }
  };

  const toggleOpen = () => setIsOpened(!isOpened);

  return (
    <DropdownWrapper>
      <Flex alignItems="baseline">
        <Box>
          {children[selectedIndex]}
        </Box>
        <Box>
          <ToggleButton
            size="24"
            onClick={toggleOpen}
            ref={dropdownToggleBtnRef}
          />
        </Box>
      </Flex>

      <div className="dropdown-list" ref={dropdownListRef}>
        {isOpened && React.Children.map(children, (child, i) => {
          if (i === selectedIndex) {
            return null;
          }
          return (
            <div
              className="dropdown-option"
              onClick={() => {
                setIsOpened(false);
                setSelectedIndex(i);
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </DropdownWrapper>
  );
};

interface OptionProps {}

export const Option: React.FC<OptionProps> = ({
  children,
}) => {
  return (
    <div>{children}</div>
  );
};
