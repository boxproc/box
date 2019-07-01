import React from 'react';

import styled from 'styled-components';

import { UiItem } from 'store/domains';

const MENU_CLASS = 'menu';
const SUB_MENU_CLASS = 'sub-menu';
const MENU_ITEM_CLASS = 'menu-item';
const MENU_TITLE_CLASS = 'menu-title';
const ACTIVE_CLASS = 'is-active';

const List = styled.ul`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  list-style-type: none;
  .${MENU_TITLE_CLASS} {
    position: relative;
    display: block;
    padding: 10px;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.normalAccentColor};
    }
  }
  .${MENU_ITEM_CLASS}  {
    position: relative;
    &.is-active {
      & > .${SUB_MENU_CLASS} {
        display: block;
      }
      & > .${MENU_TITLE_CLASS} {
        color: ${({ theme }) => theme.normalAccentColor};
      }
    }
  }
  .${SUB_MENU_CLASS} {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    top: calc(100% + 15px);
    list-style-type: none;
    display: none;
    width: 200px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.whiteColor};
    .${SUB_MENU_CLASS} {
      left: 100%;
      top: 0;
    }
  }
`;

interface NavbarProps {
  uiItems: Array<UiItem>;
}

const removeActiveClass = (el: HTMLElement) => el.classList.remove(ACTIVE_CLASS);

const addActiveClass = (el: HTMLElement) => el.classList.add(ACTIVE_CLASS);

const toggleActiveClass = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();

  e.currentTarget.closest(`.${SUB_MENU_CLASS}`)
    ? e.currentTarget.closest(`.${SUB_MENU_CLASS}`).querySelectorAll('li').forEach(el => {
      return removeActiveClass(el);
    })
    : e.currentTarget.closest(`.${MENU_CLASS}`).querySelectorAll('li').forEach(el => {
      return removeActiveClass(el);
    });

  e.currentTarget.classList.contains(ACTIVE_CLASS)
    ? removeActiveClass(e.currentTarget)
    : addActiveClass(e.currentTarget);
};

const Navbar: React.FC<NavbarProps> = ({
  uiItems,
}) => {
  const renderItem = (item: UiItem) => (
    <li
      key={item.id}
      className={MENU_ITEM_CLASS}
      onClick={e => toggleActiveClass(e)}
    >
      <span className={MENU_TITLE_CLASS}>{item.title}</span>
      {renderMenu(item.id)}
    </li>
  );

  const renderMenu = (id?: number) => id && (
    <List className={SUB_MENU_CLASS}>
      {uiItems.map(item => item.parentId === id && renderItem(item))}
    </List>
  );

  return (
    <List className={MENU_CLASS}>
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </List>
  );
};

export default Navbar;
