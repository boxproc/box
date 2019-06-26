import React from 'react';

import 'rc-menu/assets/index.css';

import Menu, { MenuItem, SubMenu } from 'rc-menu';

import styled from 'theme';

import withScreenCheck from 'components/withScreenCheck';

interface NavbarProps {
  isTablet?: boolean;
}

const MenuWrapper = styled(Menu)`
  font-size: 14px;
  .rc-menu-item-active, .rc-menu-submenu-active > .rc-menu-submenu-title {
    background-color: transparent;
  }
  .rc-menu-submenu-title {
    padding: 10px !important;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      color: ${ ({ theme }) => theme.normalAccentColor };
    }
  }
`;

const resetStyles = {
  background: 'transparent',
  borderBottom: 'none',
  color: '#000000',
};

const itemStyles = {
  backgroundColor: 'transparent',
  borderBottom: 'none',
  color: '#000000',
  cursor: 'pointer',
  fontSize: '14px',
};

const Navbar: React.FC<NavbarProps> = ({
  isTablet,
}) => {
  return (
    <MenuWrapper
      mode={isTablet ? 'inline' : 'horizontal'}
      triggerSubMenuAction="click"
      style={resetStyles}
    >
      <SubMenu
        key="sub1"
        title={<span>Link 1</span>}
        style={resetStyles}
      >
        <MenuItem style={itemStyles} key="1">Option 1</MenuItem>
        <MenuItem style={itemStyles} key="2">Option 2</MenuItem>
        <SubMenu
          key="sub2"
          title={<span>Sub Nav</span>}
          style={itemStyles}
        >
          <MenuItem style={itemStyles} key="3">Option 3</MenuItem>
          <MenuItem style={itemStyles} key="4">Option 4</MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={<span>Link 2</span>}
        style={resetStyles}
      />
      <SubMenu
        key="sub4"
        title={<span>Link 3</span>}
        style={resetStyles}
      />
    </MenuWrapper>
  );
};

export default withScreenCheck(Navbar);
