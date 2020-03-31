import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { ChevronRightIcon } from './../../Icons';
import { NavListStyled } from './NavListStyled';

import { IWithModal, withModal } from 'HOCs';

import {
  basePath,
  modalNamesConst,
  permissionTypesConst,
  uiItemsConst,
  uiItemTypesConst,
} from 'consts';

import { clearMenu, menuClasses, toggleOpenMenu } from './utils';

import { IUiItem } from 'store';

const ChevronIconStyled = styled(ChevronRightIcon)`
  color: ${({ theme }) => theme.colors.darkGray};
`;

interface INavbar extends IWithModal {
  uiItems: Array<IUiItem>;
}

const Navbar: React.FC<INavbar> = ({
  openModal,
  uiItems,
}) => {
  const menuRef = React.useRef(null);

  const renderItem = (item: IUiItem) => {
    const { id, parentId, title, type, separator, permission } = item;

    const hasChildren = type === uiItemTypesConst.MENU_PARENT;

    const isModalWindow = item.id === uiItemsConst.MANUAL_TRANSACTION
      || item.id === uiItemsConst.LIMIT_ADJUSTMENT
      || item.id === uiItemsConst.SETTLE_TRANSACTION;

    const isManualTransaction = item.id === uiItemsConst.MANUAL_TRANSACTION;
    const isLimitAdjustment = item.id === uiItemsConst.LIMIT_ADJUSTMENT;
    const isSettleTransaction = item.id === uiItemsConst.SETTLE_TRANSACTION;

    const isReadOnly = permission === permissionTypesConst.READ_ONLY;

    const handleOpenModalWindow = () => {
      if (isManualTransaction || isLimitAdjustment) {
        return openModal({
          name: modalNamesConst.MANUAL_TRANSACTION,
          payload: { isLimitAdjustmentMode: isLimitAdjustment },
        });
      } else if (isSettleTransaction) {
        return openModal({ name: modalNamesConst.SETTLE_TRANSACTION });
      } else {
        return false;
      }
    };

    return (
      <Box
        key={id}
        className={`${menuClasses.MENU_ITEM} ${separator ? 'is-separator' : ''}`}
        onMouseEnter={e => toggleOpenMenu(e)}
      >
        {!hasChildren && !isModalWindow && (
          <Link
            to={!isModalWindow && `${basePath}${id}`}
            className={menuClasses.MENU_TITLE}
          >
            {title}
          </Link>
        )}
        {!hasChildren && isModalWindow && (
          <div
            className={`
              ${menuClasses.MENU_TITLE}
              ${isReadOnly ? 'is-disabled' : 'is-cursor-pointer'}
            `}
            onClick={isModalWindow && handleOpenModalWindow}
          >
            {title}
          </div>
        )}
        {hasChildren && (
          <div className={menuClasses.MENU_TITLE}>
            {title}
            {hasChildren && parentId && (
              <ChevronIconStyled className="icon" size="17" />
            )}
          </div>
        )}
        {hasChildren && renderMenu(id)}
      </Box>
    );
  };

  const renderMenu = (id?: string) => id && (
    <NavListStyled className={menuClasses.SUB_MENU}>
      {uiItems.map(item => item.parentId === id && renderItem(item))}
    </NavListStyled>
  );

  return (
    <NavListStyled
      ref={menuRef}
      className={menuClasses.MENU}
      onMouseLeave={clearMenu}
    >
      {uiItems.map(item => !item.parentId && renderItem(item))}
    </NavListStyled>
  );
};

export default withModal(Navbar);
