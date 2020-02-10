import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { ChevronRightIcon } from 'components';
import { NavListStyled } from './NavListStyled';

import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, uiItemConsts, uiItemTypesCodes } from 'consts';

import { clearMenu, menuClasses, toggleOpenMenu } from './utils';

import { UiItemPrepared } from 'store/domains';

const ChevronIconStyled = styled(ChevronRightIcon)`
  color: ${({ theme }) => theme.colors.darkGray};
`;

interface NavbarProps extends RouteComponentProps, WithModalProps {
  uiItems: Array<UiItemPrepared>;
}

const Navbar: React.FC<NavbarProps> = ({
  uiItems,
  history,
  openModal,
}) => {
  const menuRef = React.useRef(null);

  const renderItem = (item: UiItemPrepared) => {
    const { id, parentId, title, type, separator } = item;

    const hasChildren = type === uiItemTypesCodes.MENU_PARENT;

    const isModalWindow = item.id === uiItemConsts.LEDGER_MANUAL_TRANSACTIONS
      || item.id === uiItemConsts.LEDGER_LIMIT_ADJUSTMENT
      || item.id === uiItemConsts.LEDGER_SETTLE_TRANSACTION;

    const isManualTransaction = item.id === uiItemConsts.LEDGER_MANUAL_TRANSACTIONS;
    const isLimitAdjustment = item.id === uiItemConsts.LEDGER_LIMIT_ADJUSTMENT;
    const isSettleTransaction = item.id === uiItemConsts.LEDGER_SETTLE_TRANSACTION;

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
            className={`${menuClasses.MENU_TITLE} is-cursor-pointer`}
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
