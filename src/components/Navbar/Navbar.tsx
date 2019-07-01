import React from 'react';

import { NavbarClasses, NavList } from './NavList';

import { UiItem } from 'store/domains';

interface NavbarProps {
  uiItems: Array<UiItem>;
}

const removeActiveClass = (el: HTMLElement) => el.classList.remove(NavbarClasses.ACTIVE_CLASS);

const addActiveClass = (el: HTMLElement) => el.classList.add(NavbarClasses.ACTIVE_CLASS);

const toggleActiveClass = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();

  e.currentTarget.closest(`.${NavbarClasses.SUB_MENU_CLASS}`)
    ? e.currentTarget
      .closest(`.${NavbarClasses.SUB_MENU_CLASS}`)
      .querySelectorAll('li').forEach(el => removeActiveClass(el))
    : e.currentTarget
      .closest(`.${NavbarClasses.MENU_CLASS}`)
      .querySelectorAll('li').forEach(el => removeActiveClass(el));

  e.currentTarget.classList.contains(NavbarClasses.ACTIVE_CLASS)
    ? removeActiveClass(e.currentTarget)
    : addActiveClass(e.currentTarget);
};

const Navbar: React.FC<NavbarProps> = ({
  uiItems,
}) => {
  const renderItem = (item: UiItem) => {
    const { id, title } = item;

    return (
      <li
        key={id}
        className={NavbarClasses.MENU_ITEM_CLASS}
        onClick={e => toggleActiveClass(e)}
      >
        <span className={NavbarClasses.MENU_TITLE_CLASS}>{title}</span>
        {renderMenu(id)}
      </li>
    )
  };

  const renderMenu = (id?: number) => id && (
    <NavList className={NavbarClasses.SUB_MENU_CLASS}>
      {uiItems.map(item => item.parentId === id && renderItem(item))}
    </NavList>
  );

  return (
    <NavList className={NavbarClasses.MENU_CLASS}>
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </NavList>
  );
};

export default Navbar;
