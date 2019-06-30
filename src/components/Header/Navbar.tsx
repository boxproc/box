import React from 'react';

import withScreenCheck from 'components/withScreenCheck';
import styled from 'styled-components';

interface NavbarProps {
  isTablet?: boolean;
}

const List = styled.ul`
  position: relative;
  font-size: 14px;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  li span {
    position: relative;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.normalAccentColor};
    }
  }
  li {
    position: relative;
    padding: 10px;
    &.is-active {
      & > ul {
        display: block;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    top: calc(100% + 15px);
    list-style-type: none;
    display: none;
    width: 200px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    background-color: ${({ theme }) => theme.whiteColor}
    .subMenu {
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

const addActiveClass = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();
  if (e.currentTarget.classList.contains('is-active')) {
    e.currentTarget.classList.remove('is-active');
  } else {
    e.currentTarget.classList.add('is-active');
  }
};

const renderItem = (item: UiItem) => (
  <li key={item.id} onClick={e => addActiveClass(e)}>
    <span>{item.title}</span>
    {renderMenu(item.id)}
  </li>
);

const renderMenu = (id?: number) => id && (
  <List className="subMenu">
    {uiItems.map(item => item.parentId === id && renderItem(item))}
  </List>
);

const Navbar: React.FC<NavbarProps> = ({
  // isTablet,
}) => {
  return (
    <List>
      {uiItems.map(item => {
        if (!item.parentId) {
          return renderItem(item);
        } else {
          return null;
        }
      })}
    </List>
  );
};

export default withScreenCheck(Navbar);
