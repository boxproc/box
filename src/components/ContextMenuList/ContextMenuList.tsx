import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';

import './styles.css';

interface ContextMenuItem {
  name: string;
}

interface ContextMenuListProps {
  menuId: string;
  items: Array<{ name: string }>;
  onClick?: (e: Event, value: ContextMenuItem) => void;
  noDataStr?: string;
}

const ContextMenuList: React.FC<ContextMenuListProps> = ({
  menuId,
  onClick,
  items,
  noDataStr,
}) => {
  return (
    <ContextMenu
      id={menuId}
      // hideOnLeave={true}
      className="context-menu"
    >
      {(items && items.length)
        ? items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              data={{ name: item.name }}
              onClick={onClick}
            >
              <span className="item-text">{item.name}</span>
            </MenuItem>
          );
        })
        : (
          <MenuItem>
            {noDataStr}
          </MenuItem>
        )}
    </ContextMenu>
  );
};

export default ContextMenuList;
