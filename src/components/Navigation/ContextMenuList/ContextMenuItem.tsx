import React from 'react';
import { MenuItem } from 'react-contextmenu';
import { ContextMenuItemProps } from 'types';

import { renderIcon } from './renderIcon';

interface MenuItemProps {
  key?: number;
  preventClose: boolean;
  item: ContextMenuItemProps;
  onClick?: (e: Event, value: ContextMenuItemProps) => void;
}

const ContextMenuItem: React.FC<MenuItemProps> = ({
  key,
  preventClose,
  item,
  onClick,
}) => {
  return (
    <MenuItem
      key={key}
      preventClose={preventClose}
      data={{
        name: item.name,
        description: item.description,
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
};

export default ContextMenuItem;
