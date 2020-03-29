import React from 'react';
import { MenuItem } from 'react-contextmenu';
import { IContextMenuItem } from 'types';

import { icons } from './icons';

interface IMenuItem {
  item: IContextMenuItem;
  key?: number;
  onClick?: (e: Event, value: IContextMenuItem) => void;
}

const ContextMenuItem: React.FC<IMenuItem> = ({
  item,
  key,
  onClick,
}) => {
  return (
    <MenuItem
      key={key}
      preventClose={true}
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
          <span className="icon">{icons[item.icon]}</span>
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
