import React from 'react';
import { MenuItem, SubMenu } from 'react-contextmenu';

import './styles.css';

import { ChevronRightIcon } from 'components';
import ContextMenuItem from './ContextMenuItem';

import { ContextMenuItemProps, ContextSubMenuItem } from 'types';

interface ContextSubMenuProps {
  subMenu: ContextSubMenuItem;
  preventClose?: boolean;
  onClick?: (e: Event, value: ContextMenuItemProps) => void;
}

const ContextSubMenu: React.FC<ContextSubMenuProps> = ({
  onClick,
  preventClose = false,
  subMenu,
}) => {
  const isNoData = React.useMemo(
    () => (!subMenu.items || (subMenu.items && !subMenu.items.length))
      && (!subMenu.subItems || (subMenu.subItems && !subMenu.subItems.length)),
    [subMenu]
  );

  return (
    <div className="submenu-item">
      <span className="arrow-icon">
        <ChevronRightIcon size="17" />
      </span>
      <SubMenu
        title={subMenu.title}
        hoverDelay={200}
        className={(!subMenu.subItems && !isNoData) ? 'is-overflow' : 'is-smaller'}
      >
        {subMenu.items && subMenu.items.map((item, i) => (
          <ContextMenuItem
            key={i}
            item={item}
            preventClose={preventClose}
            onClick={onClick}
          />
        ))}
        {subMenu.subItems && subMenu.subItems.map((item, i) => (
          <ContextSubMenu
            key={i}
            subMenu={item}
            preventClose={preventClose}
            onClick={onClick}
          />
        ))}
        {isNoData && subMenu.noDataStr && (
          <MenuItem>{subMenu.noDataStr}</MenuItem>
        )}
      </SubMenu>
    </div>
  );
};

export default ContextSubMenu;
