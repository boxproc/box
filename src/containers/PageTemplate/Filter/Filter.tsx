import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';
import * as H from 'history';

import styled from 'theme';

import { Button } from 'components';

import { basePath, cookiesExpiresConst, formNamesConst, uiItemsConst } from 'consts';

import { SetIsAccessibleFiltering, StopAutoRefresh } from 'store';

import { cookiesUtil, storageUtil } from 'utils';

interface FilterWrapperProps {
  isHidden: boolean;
}

const FilterWrapper = styled.div<FilterWrapperProps>`
  margin-bottom: 15px;
  padding: 10px 15px 12px;
  border: 1px solid ${({ theme }) => theme.colors.lighterGray};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.lighterGrayCell};

  .title {
    font-size: 18px;
    color: ${({ theme, color }) => color || theme.colors.darkGray};
    font-weight: bold;
  }

  ${({ isHidden }) => isHidden && `
    display: none;
  `};
`;

interface FilterProps {
  filterAction: () => void;
  filterValues: object;
  stopAutoRefresh: StopAutoRefresh;
  isAutoRefresh: boolean;
  location: H.Location;
  setIsAccessibleFiltering: SetIsAccessibleFiltering;
  isHidden: boolean;
  isLoading: boolean;
}

export const filteredFieldsToStore = (data: object) => {
  return data && Object.keys(data)
    .filter(key => !key.match(/dateFrom|dateTo|dateTimeFrom|dateTimeTo/gi))
    .reduce(
      (obj, key) => {
        obj[key] = data[key];
        return obj;
      },
      {}
    );
};

type FilterAllProps = FilterProps & InjectedFormProps<{}, FilterProps>;

const Filter: React.FC<FilterAllProps> = ({
  filterAction,
  children,
  handleSubmit,
  invalid,
  filterValues,
  stopAutoRefresh,
  isAutoRefresh,
  location,
  setIsAccessibleFiltering,
  isHidden,
  isLoading,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Show...' : 'Show',
    [isLoading]
  );

  const username = React.useMemo(
    () => {
      const userData = storageUtil.getUserData();

      return userData && userData.username;
    },
    []
  );

  const hasInstitution = React.useMemo(
    () => filterValues && filterValues['institutionId'],
    [filterValues]
  );

  const hasTransactionId = React.useMemo(
    () => filterValues && filterValues['transactionId'],
    [filterValues]
  );

  const hasAccountId = React.useMemo(
    () => filterValues && filterValues['accountId'],
    [filterValues]
  );

  const hasCustomerId = React.useMemo(
    () => filterValues && filterValues['customerId'],
    [filterValues]
  );

  const hasCardId = React.useMemo(
    () => filterValues && filterValues['cardId'],
    [filterValues]
  );

  const hasProductName = React.useMemo(
    () => filterValues && filterValues['productName'],
    [filterValues]
  );

  const hasAccountAlias = React.useMemo(
    () => filterValues && filterValues['accountAlias'],
    [filterValues]
  );

  const hasPanAlias = React.useMemo(
    () => filterValues && filterValues['panAlias'],
    [filterValues]
  );

  const hasLastName = React.useMemo(
    () => filterValues && filterValues['lastName'],
    [filterValues]
  );

  const valuesCount = React.useMemo(
    () => filterValues
      && Object.values(filterValues).reduce((acc, curr) => curr ? ++acc : acc, 0),
    [filterValues]
  );

  const isAccessibleButton = React.useCallback(
    () => {
      switch (location.pathname) {
        case `${basePath}${uiItemsConst.ADMINISTRATION_SYS_PROPS}`:
        case `${basePath}${uiItemsConst.ADMINISTRATION_USER}`:
        case `${basePath}${uiItemsConst.ADMINISTRATION_SCHEDULER}`:
          return valuesCount >= 0;

        case `${basePath}${uiItemsConst.AUDIT_API_CALLS}`:
        case `${basePath}${uiItemsConst.AUDIT_USER_ACTIVITY}`:
          return valuesCount > 1;

        case `${basePath}${uiItemsConst.LEDGER_ACCOUNTS}`:
          return hasInstitution && (hasAccountId || hasAccountAlias || hasLastName);

        case `${basePath}${uiItemsConst.LEDGER_CARDS}`:
          return hasInstitution && (hasAccountId || hasCardId || hasCustomerId || hasPanAlias);

        case `${basePath}${uiItemsConst.LEDGER_STATEMENTS}`:
          return hasInstitution && (hasAccountId || hasAccountAlias || hasLastName);

        case `${basePath}${uiItemsConst.LEDGER_CUSTOMERS}`:
          return hasInstitution && (hasCustomerId || hasLastName);

        case `${basePath}${uiItemsConst.LEDGER_TRANSACTIONS}`:
          return hasInstitution && (
            hasTransactionId
            || hasProductName
            || hasCustomerId
            || hasAccountId
          );

        default:
          return valuesCount > 0;
      }
    },
    [
      hasInstitution,
      hasAccountId,
      hasCustomerId,
      hasCardId,
      hasTransactionId,
      hasAccountAlias,
      hasPanAlias,
      hasLastName,
      hasProductName,
      valuesCount,
      location,
    ]
  );

  const isDisabled = React.useMemo(
    () => invalid || !isAccessibleButton() || isLoading,
    [isAccessibleButton, invalid, isLoading]
  );

  React.useEffect(
    () => {
      setIsAccessibleFiltering(!isDisabled);
    },
    [isDisabled, setIsAccessibleFiltering]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(async data => {
      await filterAction();

      if (isAutoRefresh) {
        stopAutoRefresh();
      }

      cookiesUtil.set(
        `${location.pathname}-${username}`,
        JSON.stringify(filteredFieldsToStore(data)),
        { expires: cookiesExpiresConst.MONTH }
      );
    }),
    [handleSubmit, filterAction, isAutoRefresh, stopAutoRefresh]
  );

  return (
    <FilterWrapper isHidden={isHidden}>
      <div className="title">Filter</div>
      <form onSubmit={handleSubmitForm}>
        <Flex
          width="940px"
          alignItems="flex-end"
          flexWrap="wrap"
          m="0 -8px 5px"
        >
          {children}
        </Flex>
        <Button
          text={buttonText}
          disabled={isDisabled}
        />
      </form>
    </FilterWrapper >
  );
};

export default reduxForm<{}, FilterProps>({
  form: formNamesConst.FILTER,
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(Filter);
