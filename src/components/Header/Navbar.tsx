import React from 'react';

import styled from 'styled-components';

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

interface UiItem {
  id: number;
  title: string;
  parentId: number;
  childCount: number;
}

const uiItems = [
  {
    id: 1,
    title: 'link 1',
    parentId: null,
    childCount: 2,
  },
  {
    id: 2,
    title: 'sub1 2',
    parentId: 1,
    childCount: 2,
  },
  {
    id: 3,
    title: 'sub1 3',
    parentId: 1,
    childCount: 2,
  },
  {
    id: 4,
    title: 'sub3 sub 4',
    parentId: 3,
    childCount: 0,
  },
  {
    id: 5,
    title: 'sub1 5',
    parentId: 1,
    childCount: 0,
  },
  {
    id: 6,
    title: 'link 2',
    parentId: null,
    childCount: 2,
  },
  {
    id: 7,
    title: 'sub6 7',
    parentId: 6,
    childCount: 0,
  },
  {
    id: 8,
    title: 'sub6 8',
    parentId: 6,
    childCount: 1,
  },
  {
    id: 9,
    title: 'sub8 sub 9',
    parentId: 8,
    childCount: 0,
  },
  {
    id: 10,
    title: 'sub3 sub 10',
    parentId: 3,
    childCount: 2,
  },
  {
    id: 11,
    title: 'sub10 sub sub 11',
    parentId: 10,
    childCount: 0,
  },
  {
    id: 12,
    title: 'sub10 sub sub 12',
    parentId: 10,
    childCount: 0,
  },
  {
    id: 13,
    title: 'link 3',
    parentId: null,
    childCount: 0,
  },
];

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

const Navbar = () => {
  return (
    <List className={MENU_CLASS}>
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </List>
  );
};

export default Navbar;
