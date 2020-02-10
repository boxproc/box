import React from 'react';
import { ContextMenu } from 'react-contextmenu';

import styled from 'theme';
import './styles.css';

import ContextMenuItem from './ContextMenuItem';

import { ContextMenuItemProps, ContextSubMenuItem, ContextSubMenuType } from 'types';
import ContextSubMenu from './ContextSubMenu';

interface ContextMenuWrapperProps {
  isVisible?: boolean;
  preventClose?: boolean;
}

const ContextMenuWrapper = styled.div<ContextMenuWrapperProps>`
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};

  .item {
    position: relative;
    padding: 0 18px;

    .icon {
      position: absolute;
      left: 0;
      top: 2px;
      font-size: 0;
      width: 16px;
      text-align: center;
    }
  }

  .submenu-item {
    position: relative;

    .item {
      padding: 0;
    }

    .arrow-icon {
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -12px;
    }

    &:hover > .arrow-icon {
      color: #ffa400;
    }
  }

  .gray {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

interface ContextMenuListProps {
  menuId: string;
  items: Array<ContextMenuItemProps>;
  subMenuItems?: ContextSubMenuType;
  isVisible?: boolean;
  preventClose?: boolean;
  onClick?: (e: Event, value: ContextMenuItemProps) => void;
  onHide?: () => void;
}

const ContextMenuList: React.FC<ContextMenuListProps> = ({
  menuId,
  onClick,
  items,
  subMenuItems,
  onHide,
  isVisible = true,
  preventClose = false,
}) => {
  const renderSubMenu = (item: ContextSubMenuItem) => {
    return (
      <ContextSubMenu
        subMenu={item}
        onClick={onClick}
      >
        {item.subItems && item.subItems.map((subItem, i) => (
          <div key={i}>{renderSubMenu(subItem)}</div>
        ))}
      </ContextSubMenu>
    );
  };

  return (
    <ContextMenuWrapper isVisible={isVisible}>
      <ContextMenu
        id={menuId}
        onHide={onHide}
        className="context-menu"
      >
        {subMenuItems && subMenuItems.map((item, i) => (
          <div key={i}>{renderSubMenu(item)}</div>
        ))}
        {items && items.map((item, i) => (
          <ContextMenuItem
            key={i}
            preventClose={preventClose}
            item={item}
            onClick={onClick}
          />
        ))}
      </ContextMenu>
    </ContextMenuWrapper>
  );
};

export default ContextMenuList;
