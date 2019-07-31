import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';

import './styles.css';

interface ContextMenuListProps {
  menuId: string;
}

const ContextMenuList: React.FC<ContextMenuListProps> = ({
  menuId,
}) => {
  const items = [
    {
      id: 3,
      name: 'account.accrued_interest',
      action: () => console.log('---1'),
    },
    {
      id: 3,
      name: 'account.amount_due_repayment',
      action: () => console.log('---2'),
    },
    {
      id: 3,
      name: 'account.amount_overdue',
      action: () => console.log('---3'),
    },
  ];

  return (
    <ContextMenu
      id={menuId}
      className="context-menu"
    >
      {items && items.map((item, index) => {
        return (
          <MenuItem
            key={index}
            data={{name: item.name}}
            // onClick={onClick}
          >
            {item.name}
          </MenuItem>
        );
      })}
    </ContextMenu>
  );
};

export default ContextMenuList;
