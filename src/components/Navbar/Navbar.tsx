import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { RouteComponentProps, withRouter } from 'react-router-dom';

import { ChevronIcon } from 'components/Icon';

import { basePath } from 'consts';

import { menuClasses, NavList } from './NavList';
import {
  checkHasActive,
  clearMenu,
  goToPage,
  toggleOpenMenu,
} from './utils';

import { UiItemPrepared } from 'store/domains';

interface NavbarProps {
  uiItems: Array<UiItemPrepared>;
}

const Navbar: React.FC<NavbarProps & RouteComponentProps> = ({ uiItems, history }) => {
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
    const { id, parentId, hasChildren, description } = item;

    const pushToHistory = () => history.push(`${basePath}${id}`);

    return (
      <Box
        key={id}
        className={menuClasses.MENU_ITEM}
        onClick={e => hasChildren ? toggleOpenMenu(e) : goToPage(pushToHistory, clearMenu)}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            pr={!hasChildren ? '5px' : 0}
            className={!parentId && 'highlight-link'}
          >
            {description}
          </Box>
          {hasChildren && parentId && <ChevronIcon className="chevron-icon" />}
        </Flex>
        {renderMenu(id)}
      </Box>
    );
  };

  const renderMenu = (id?: string) => id && (
    <NavList className={menuClasses.SUB_MENU}>
      {uiItems.map(item => item.parentId === id && renderItem(item))}
    </NavList>
  );

  return (
    <NavList className={menuClasses.MENU} ref={menuRef}>
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </NavList>
  );
};

export default withRouter(Navbar);
