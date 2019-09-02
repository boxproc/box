import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';

import { LockAlt } from 'styled-icons/boxicons-solid/LockAlt';
import { Edit } from 'styled-icons/fa-regular/Edit';
import { Delete } from 'styled-icons/material/Delete';

import styled from 'theme';

import './styles.css';

import { ContextMenuItem } from 'types';

interface ContextMenuWrapperProps {
  isVisible?: boolean;
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
      color: ${({ theme }) => theme.grayColor};
    }
  }
`;

interface ContextMenuListProps {
  menuId: string;
  items: Array<ContextMenuItem>;
  noDataStr?: string;
  isVisible?: boolean;
  onClick?: (e: Event, value: ContextMenuItem) => void;
  onHide?: () => void;
}

const renderIcon = (name: string) => {
  switch (name) {
    case 'edit':
      return (<Edit size="13" />);
    case 'delete':
      return (<Delete size="15" />);
    case 'lock':
      return (<LockAlt size="15" />);
    default:
      return null;
  }
};

const ContextMenuList: React.FC<ContextMenuListProps> = ({
  menuId,
  onClick,
  items,
  noDataStr,
  onHide,
  isVisible = true,
}) => {
  return (
    <ContextMenuWrapper isVisible={isVisible}>
      <ContextMenu
        id={menuId}
        onHide={onHide}
        // hideOnLeave={true}
        className="context-menu"
      >
        {(items && items.length)
          ? items.map((item, index) => {
            if (!item) {
              return null;
            }
            return (
              <MenuItem
                key={index}
                preventClose={true}
                data={{
                  action: item.action,
                  withConfirmation: item.withConfirmation,
                  confirmationTitle: item.confirmationTitle,
                  confirmationText: item.confirmationText,
                }}
                onClick={onClick}
              >
                <div className="item">
                  {item.icon && (
                    <div className="icon">{renderIcon(item.icon)}</div>
                  )}
                  <span>{item.name}</span>
                </div>
              </MenuItem>
            );
          })
          : (
            <MenuItem>
              {noDataStr}
            </MenuItem>
          )}
      </ContextMenu>
    </ContextMenuWrapper>
  );
};

export default ContextMenuList;
