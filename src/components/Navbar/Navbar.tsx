import React from 'react';

import { NavbarClasses, NavList } from './NavList';

import { UiItem } from 'store/domains';

interface NavbarProps {
  uiItems: Array<UiItem>;
}

const removeActiveClass = (el: HTMLElement) => el.classList.remove(NavbarClasses.ACTIVE);

const addActiveClass = (el: HTMLElement) => el.classList.add(NavbarClasses.ACTIVE);

const toggleActiveClass = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();

  e.currentTarget.closest(`.${NavbarClasses.SUB_MENU}`)
    ? e.currentTarget
      .closest(`.${NavbarClasses.SUB_MENU}`)
      .querySelectorAll('li').forEach(el => removeActiveClass(el))
    : e.currentTarget
      .closest(`.${NavbarClasses.MENU}`)
      .querySelectorAll('li').forEach(el => removeActiveClass(el));

  e.currentTarget.classList.contains(NavbarClasses.ACTIVE)
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
        className={NavbarClasses.MENU_ITEM}
        onClick={e => toggleActiveClass(e)}
      >
        <span className={NavbarClasses.MENU_TITLE}>{title}</span>
        {renderMenu(id)}
      </li>
    )
  };

  const renderMenu = (id?: number) => id && (
    <NavList className={NavbarClasses.SUB_MENU}>
      {uiItems.map(item => item.parentId === id && renderItem(item))}
    </NavList>
  );

  return (
    <NavList className={NavbarClasses.MENU}>
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </NavList>
  );
};

export default Navbar;
