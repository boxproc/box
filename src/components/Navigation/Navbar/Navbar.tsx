import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { ChevronRightIcon } from 'components';
import { NavListStyled } from './NavListStyled';

import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, uiItemConsts, uiItemTypesCodes } from 'consts';

import { clearMenu, goToPage, menuClasses, toggleOpenMenu } from './utils';

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

    const isManualTransaction = item.id === uiItemConsts.LEDGER_MANUAL_TRANSACTIONS;
    const isLimitAdjustment = item.id === uiItemConsts.LEDGER_LIMIT_ADJUSTMENT;
    const isSettleTransaction = item.id === uiItemConsts.LEDGER_SETTLE_TRANSACTION;

    const handleClick = () => {
      if (isManualTransaction || isLimitAdjustment) {
        return openModal({
          name: modalNamesConst.LEDGER_MANUAL_TRANSACTION,
          payload: { isLimitAdjustmentMode: isLimitAdjustment },
        });
      } else if (isSettleTransaction) {
        return openModal({ name: modalNamesConst.SETTLE_TRANSACTION });
      } else {
        return history.push(`${basePath}${id}`);
      }
    };

    return (
      <Box
        key={id}
        className={`${menuClasses.MENU_ITEM} ${separator ? 'is-separator' : ''}`}
        onClick={() => !hasChildren && goToPage(handleClick, clearMenu)}
        onMouseEnter={e => toggleOpenMenu(e)}
      >
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          className={menuClasses.MENU_TITLE}
        >
          {title}
          {hasChildren && parentId && (
            <ChevronIconStyled className="icon" size="17" />
          )}
        </Flex>
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
