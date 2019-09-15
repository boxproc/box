import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { ChevronRightIcon } from 'components';
import { NavList } from './NavList';

import { basePath, uiItemTypesConst } from 'consts';

import {
  checkHasActive,
  clearMenu,
  goToPage,
  menuClasses,
  toggleOpenMenu,
} from './utils';

import { UiItemPrepared } from 'store/domains';

const ChevronRightIconStyled = styled(ChevronRightIcon)`
  color: ${({ theme }) => theme.colors.darkGray};
`;

interface NavbarProps extends RouteComponentProps {
  uiItems: Array<UiItemPrepared>;
}

const Navbar: React.FC<NavbarProps> = ({ uiItems, history }) => {
  const menuRef = React.useRef(null);

  React.useEffect(
    () => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  );

  const handleClickOutside = (e: MouseEvent) => {
    if (checkHasActive() && menuRef.current && !menuRef.current.contains(e.target)) {
      clearMenu();
    }
  };

  const renderItem = (item: UiItemPrepared) => {
    const { id, parentId, title, type } = item;
    const hasChildren = type === uiItemTypesConst.MENU_PARENT;

    const pushToHistory = () => history.push(`${basePath}${id}`);

    return (
      <Box
        key={id}
        className={menuClasses.MENU_ITEM}
        onClick={e => hasChildren ? toggleOpenMenu(e) : goToPage(pushToHistory, clearMenu)}
        onMouseEnter={e => checkHasActive() && toggleOpenMenu(e)}
      >
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          className={menuClasses.MENU_TITLE}
        >
          {title}
          {hasChildren && parentId &&
            <Box ml="5px" mt="-2px">
              <ChevronRightIconStyled className="icon" size="17" />
            </Box>
          }
        </Flex>
        {hasChildren && renderMenu(id)}
      </Box>
    );
  };

  const renderMenu = (id?: string) => id && (
    <NavList className={menuClasses.SUB_MENU}>
      {uiItems.map(item => item.parentId === id && renderItem(item))}
    </NavList>
  );

  return (
    <NavList
      ref={menuRef}
      className={menuClasses.MENU}
      onMouseLeave={() => clearMenu()}
    >
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </NavList>
  );
};

export default Navbar;
