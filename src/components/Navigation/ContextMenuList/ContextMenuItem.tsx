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
      disabled={item.isDisabled}
      data={{
        name: item.name,
        value: item.value,
        shiftCharCount: item.shiftCharCount,
        description: item.description,
        action: item.action,
        withConfirmation: item.withConfirmation,
        confirmationTitle: item.confirmationTitle,
        confirmationText: item.confirmationText,
      }}
      divider={item.isDivider}
      onClick={onClick}
    >
      <div className="item">
        {item.icon && (
          <span className="icon">{renderIcon(item.icon)}</span>
        )}
        <span>
          {item.name}
          {item.description && (
            <span className="gray"> {item.description}</span>
          )}
        </span>
      </div>
    </MenuItem>
  );
};

export default ContextMenuItem;
