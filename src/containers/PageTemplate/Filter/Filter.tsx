import React, { ReactChild } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';
import * as H from 'history';

import styled from 'theme';

import { Button } from 'components';

import { basePath, cookiesExpiresConst, formNamesConst, uiItemsConst } from 'consts';

import { TSetIsAccessibleFiltering, TStopAutoRefresh } from 'store';

import { cookiesUtil, storageUtil } from 'utils';

interface IFilterWrapper {
  isHidden: boolean;
}

const FilterWrapper = styled.div<IFilterWrapper>`
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

interface IFilter {
  filterAction: () => void;
  filterValues: object;
  isAutoRefresh: boolean;
  isHidden: boolean;
  isLoading: boolean;
  location: H.Location;
  setIsAccessibleFiltering: TSetIsAccessibleFiltering;
  stopAutoRefresh: TStopAutoRefresh;
  FilterForm: ReactChild;
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

type TFilter = IFilter & InjectedFormProps<{}, IFilter>;

const Filter: React.FC<TFilter> = ({
  FilterForm,
  filterAction,
  filterValues,
  handleSubmit,
  invalid,
  isAutoRefresh,
  isHidden,
  isLoading,
  location,
  setIsAccessibleFiltering,
  stopAutoRefresh,
}) => {
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
        case `${basePath}${uiItemsConst.SYSTEM_PROPERTIES}`:
        case `${basePath}${uiItemsConst.USERS}`:
        case `${basePath}${uiItemsConst.SCHEDULER}`:
          return valuesCount >= 0;

        case `${basePath}${uiItemsConst.API_CALLS}`:
        case `${basePath}${uiItemsConst.USERS_ACTIVITY}`:
          return valuesCount > 1;

        case `${basePath}${uiItemsConst.ACCOUNTS}`:
          return hasInstitution && (hasAccountId || hasAccountAlias || hasLastName);

        case `${basePath}${uiItemsConst.CARDS}`:
          return hasInstitution && (hasAccountId || hasCardId || hasCustomerId || hasPanAlias);

        case `${basePath}${uiItemsConst.STATEMENTS}`:
          return hasInstitution && (hasAccountId || hasAccountAlias || hasLastName);

        case `${basePath}${uiItemsConst.CUSTOMERS}`:
          return hasInstitution && (hasCustomerId || hasLastName);

        case `${basePath}${uiItemsConst.TRANSACTIONS}`:
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
    () => invalid || !isAccessibleButton(),
    [isAccessibleButton, invalid]
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
          width="960px"
          alignItems="flex-end"
          flexWrap="wrap"
          m="0 -8px 5px"
        >
          {FilterForm}
        </Flex>
        <Button
          text="Show"
          isLoading={isLoading}
          disabled={isDisabled}
        />
      </form>
    </FilterWrapper >
  );
};

export default reduxForm<{}, IFilter>({
  form: formNamesConst.FILTER,
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(Filter);
