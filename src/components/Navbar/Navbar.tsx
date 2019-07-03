import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { ChevronIcon } from 'components/Icon';

import { menuClasses, NavList } from './NavList';

import { UiItemPrepared } from 'store/domains';

interface NavbarProps {
  uiItems: Array<UiItemPrepared>;
}

const removeActiveClass = (el: any) => el.classList.remove(menuClasses.ACTIVE);

const addActiveClass = (el: HTMLElement) => el.classList.add(menuClasses.ACTIVE);

const toggleActiveClass = (el: HTMLElement) =>
  el.classList.contains(menuClasses.ACTIVE)
    ? removeActiveClass(el)
    : addActiveClass(el);

const removeActiveFromAll = (
  currentItem: HTMLElement,
  className: string
) => currentItem
  .closest(`.${className}`)
  .querySelectorAll(`.${menuClasses.MENU_ITEM}`).forEach(el =>
    !currentItem.classList.contains(menuClasses.ACTIVE)
    && el.classList.contains(menuClasses.ACTIVE)
    && removeActiveClass(el)
);

const toggleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
  const currentItem = e.currentTarget;

  e.stopPropagation();

  currentItem.closest(`.${menuClasses.SUB_MENU}`)
    ? removeActiveFromAll(currentItem, menuClasses.SUB_MENU)
    : removeActiveFromAll(currentItem, menuClasses.MENU);

  toggleActiveClass(currentItem);
};

const Navbar: React.FC<NavbarProps> = ({ uiItems }) => {
  const renderItem = (item: UiItemPrepared) => {
    const { id, parentId, hasChildren, description } = item;

    return (
      <div
        key={id}
        className={menuClasses.MENU_ITEM}
        onClick={e => toggleOpenMenu(e)}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          className={menuClasses.MENU_TITLE}
        >
          <Box>{description}</Box>
          {(hasChildren && parentId) && <ChevronIcon className="chevron-icon"/>}
        </Flex>
        {renderMenu(id)}
      </div>
    );
  };

  const renderMenu = (id?: string) => id && (
    <NavList className={menuClasses.SUB_MENU}>
      {uiItems.map(item => item.parentId === id && renderItem(item))}
    </NavList>
  );

  return (
    <NavList className={menuClasses.MENU}>
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </NavList>
  );
};

export default Navbar;
