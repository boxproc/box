import React from 'react';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';

import styled from 'theme';
import './styles.css';

import ContextMenuItem from './ContextMenuItem';

import { ContextMenuItemProps, ContextSubMenuType } from 'types';

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
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  .gray {
    color: ${({ theme }) => theme.colors.gray};
  }

  .code {
    font-family: ${({ theme }) => theme.fonts.code};
  }
`;

interface ContextMenuListProps {
  menuId: string;
  items: Array<ContextMenuItemProps>;
  subMenuItems?: ContextSubMenuType;
  // noDataStr?: string;
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
  // noDataStr,
  onHide,
  isVisible = true,
  preventClose = false,
}) => {
  return (
    <ContextMenuWrapper isVisible={isVisible}>
      <ContextMenu
        id={menuId}
        onHide={onHide}
        className="context-menu"
      >
        {(subMenuItems && subMenuItems.length) && (
          subMenuItems.map((subMenu, i) => {
            if (!subMenu) {
              return null;
            }
            return (
              <SubMenu
                key={i}
                title={subMenu.title}
                hoverDelay={200}
              >
                {(subMenu.items && subMenu.items.length)
                  ? (
                    subMenu.items.map((item, j) => {
                      return (
                        <ContextMenuItem
                          key={j}
                          preventClose={preventClose}
                          item={item}
                          onClick={onClick}
                        />
                      );
                    })
                  )
                  : subMenu.noDataStr && (
                    <MenuItem>{subMenu.noDataStr}</MenuItem>
                  )}
              </SubMenu>
            );
          })
        )}
        {(items && items.length) && items.map((item, index) => {
          if (!item) {
            return null;
          }
          return (
            <ContextMenuItem
              key={index}
              preventClose={preventClose}
              item={item}
              onClick={onClick}
            />
          );
        })}
      </ContextMenu>
    </ContextMenuWrapper>
  );
};

export default ContextMenuList;
