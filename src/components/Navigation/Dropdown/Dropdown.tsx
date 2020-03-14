import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { ArrowDropDownIcon } from './../../Icons';
import { DropdownWrapper } from './DropdownWrapper';

type AvailablePosition = 'left' | 'right' | 'center';

const ToggleButton = styled(ArrowDropDownIcon)`
  color: ${({ theme }) => theme.colors.gray};
  transition: all .1s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

export interface DropdownProps {
  selectable?: boolean;
  dropdownListPosition?: AvailablePosition;
  ToggleButtonComponent?: ReactChild;
  isDisabled?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  selectable = true,
  dropdownListPosition = 'left',
  ToggleButtonComponent,
  isDisabled,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpened, setIsOpened] = React.useState(false);

  const dropdownListRef = React.useRef(null);
  const dropdownToggleBtnRef = React.useRef(null);

  React.useEffect(
    () => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  );

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (isOpened
        && dropdownListRef.current
        && !dropdownListRef.current.contains(e.target)
        && !dropdownToggleBtnRef.current.contains(e.target)
      ) {
        setIsOpened(false);
      }
    },
    [isOpened]
  );

  const toggleOpen = React.useCallback(
    () => setIsOpened(!isOpened),
    [isOpened]
  );

  return (
    <DropdownWrapper
      position={dropdownListPosition}
      isActive={isOpened}
      isDisabled={isDisabled}
    >
      <Flex alignItems="flex-start">
        {selectable && (
          <Box>{children[selectedIndex]}</Box>
        )}
        <Box>
          <div
            className="dropdown-toggle-btn"
            onClick={toggleOpen}
            ref={dropdownToggleBtnRef}
          >
            {ToggleButtonComponent}
            <ToggleButton size="21" />
          </div>
        </Box>
      </Flex>
      {isOpened && (
        <div className="dropdown-list" ref={dropdownListRef}>
          {React.Children.map(children, (child, i) => {
            if (!child) {
              return null;
            }

            const handleClick = () => {
              setIsOpened(false);
              setSelectedIndex(i);
            };

            return (
              <div
                className="dropdown-option"
                onClick={handleClick}
              >
                {child}
              </div>
            );
          })}
        </div>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
