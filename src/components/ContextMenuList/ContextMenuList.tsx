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

  const onClick = (e: any, value: any) => {
    const tempInput = document.createElement('input');
    tempInput.value = value.name;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    paste();
    document.body.removeChild(tempInput);
  };

  const paste = () => {
    const el = document.querySelector('#script') as HTMLElement;
    el.focus();
    document.execCommand('paste');
  };

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
            onClick={onClick}
          >
            {item.name}
          </MenuItem>
        );
      })}
    </ContextMenu>
  );
};

export default ContextMenuList;
