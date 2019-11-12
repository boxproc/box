import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';
import * as H from 'history';

import styled from 'theme';

import { Button, T3 } from 'components';

import { basePath, cookiesExpires, formNamesConst, uiItemConsts } from 'consts';

import { SetIsAccessibleFiltering, StopAutoRefresh } from 'store/domains';

import { cookiesUtil } from 'utils';

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px 20px 15px;
  border: 1px solid ${({ theme }) => theme.colors.lighterGray};
  border-radius: 2px;
  background-color: rgba(0, 0, 0, .02);
`;

interface FilterProps {
  filterAction: () => void;
  filterValues: object;
  stopAutoRefresh: StopAutoRefresh;
  isAutoRefresh: boolean;
  location: H.Location;
  setIsAccessibleFiltering: SetIsAccessibleFiltering;
}

export const filteredFieldsToStore = (data: object) => {
  return data && Object.keys(data)
    .filter(key => !key.match(/dateFrom|dateTo|dateTimeFrom|dateTimeTo/gi))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    },      {});
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
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => {
      filterAction();

      if (isAutoRefresh) {
        stopAutoRefresh();
      }

      cookiesUtil.set(
        location.pathname,
        JSON.stringify(filteredFieldsToStore(data)),
        { expires: cookiesExpires.MONTH }
      );
    }),
    [handleSubmit, filterAction, isAutoRefresh, stopAutoRefresh]
  );

  const hasInstitution = React.useMemo(
    () => filterValues && filterValues['institutionId'],
    [filterValues]
  );

  const hasId = React.useMemo(
    () => filterValues && filterValues['id'],
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

  const hasProductName = React.useMemo(
    () => filterValues && filterValues['productName'],
    [filterValues]
  );

  const hasAccountAlias = React.useMemo(
    () => filterValues && filterValues['accountAlias'],
    [filterValues]
  );

  const hasLastName = React.useMemo(
    () => filterValues && filterValues['lastName'],
    [filterValues]
  );

  const valuesCount = React.useMemo(
    () => filterValues && Object.values(filterValues).reduce((acc, curr) => curr ? ++acc : acc, 0),
    [filterValues]
  );

  const isAccessibleButton = React.useCallback(
    () => {
      switch (location.pathname) {
        case `${basePath}${uiItemConsts.ADMINISTRATION_SYS_PROPS}`:
        case `${basePath}${uiItemConsts.ADMINISTRATION_USER}`:
        case `${basePath}${uiItemConsts.ADMINISTRATION_SCHEDULER}`:
          return valuesCount >= 0;

        case `${basePath}${uiItemConsts.AUDIT_API_CALLS}`:
        case `${basePath}${uiItemConsts.AUDIT_USER_ACTIVITY}`:
          return valuesCount > 1;

        case `${basePath}${uiItemConsts.LEDGER_ACCOUNTS}`:
          return hasInstitution && (hasId || hasAccountAlias || hasLastName);

        case `${basePath}${uiItemConsts.LEDGER_STATEMENTS}`:
          return hasInstitution && (hasAccountId || hasAccountAlias || hasLastName);

        case `${basePath}${uiItemConsts.LEDGER_CUSTOMERS}`:
          return hasInstitution && (hasId || hasLastName);

        case `${basePath}${uiItemConsts.LEDGER_TRANSACTIONS}`:
          return hasInstitution && (hasId || hasProductName || hasCustomerId);

        default:
          return valuesCount > 0;
      }
    },
    [
      hasAccountAlias,
      hasAccountId,
      hasCustomerId,
      hasId,
      hasInstitution,
      hasLastName,
      hasProductName,
      location,
      valuesCount,
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

  return (
    <FilterWrapper>
      <T3>Filter</T3>
      <form onSubmit={handleSubmitForm}>
        <Box width="940px" mx="-10px">
          <Flex alignItems="flex-start" flexWrap="wrap">{children}</Flex>
          <Button text="Show" disabled={isDisabled} />
        </Box>
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
