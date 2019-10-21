import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';

import styled from 'theme';
import './styles.css';

import { renderIcon } from './renderIcon';

import { ContextMenuItem } from 'types';

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
  items: Array<ContextMenuItem>;
  noDataStr?: string;
  isVisible?: boolean;
  preventClose?: boolean;
  onClick?: (e: Event, value: ContextMenuItem) => void;
  onHide?: () => void;
}

const ContextMenuList: React.FC<ContextMenuListProps> = ({
  menuId,
  onClick,
  items,
  noDataStr,
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
        {(items && items.length)
          ? items.map((item, index) => {
            if (!item) {
              return null;
            }
            return (
              <MenuItem
                key={index}
                preventClose={preventClose}
                data={{
                  name: item.name,
                  action: item.action,
                  withConfirmation: item.withConfirmation,
                  confirmationTitle: item.confirmationTitle,
                  confirmationText: item.confirmationText,
                }}
                onClick={onClick}
              >
                <div className="item">
                  {item.icon && (
                    <span className="icon">{renderIcon(item.icon)}</span>
                  )}
                  <span>
                    {item.name}
                    {item.dataType && (
                      <span className="gray code"> {item.dataType.toLocaleLowerCase()} </span>
                    )}
                    {item.description && (
                      <span className="gray"> {item.description}</span>
                    )}
                  </span>
                </div>
              </MenuItem>
            );
          })
          : (
            <MenuItem>{noDataStr}</MenuItem>
          )}
      </ContextMenu>
    </ContextMenuWrapper>
  );
};

export default ContextMenuList;
