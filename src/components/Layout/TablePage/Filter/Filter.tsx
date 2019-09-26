import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, T3 } from 'components';

import { basePath, formNamesConst, uiItemConsts } from 'consts';
import { cookiesUtil } from 'utils';

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px 20px 15px;
  border: 1px solid ${({ theme }) => theme.colors.lighterGray};
  border-radius: 2px;
  background-color: rgba(0, 0, 0, .02)};
`;

interface FilterProps {
  filterAction: () => void;
  filterValues: object;
}

type FilterAllProps = FilterProps & InjectedFormProps<{}, FilterProps>;

const Filter: React.FC<FilterAllProps> = ({
  filterAction,
  children,
  handleSubmit,
  submitting,
  invalid,
  filterValues,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => {
      filterAction();

      cookiesUtil.set(
        window.location.pathname,
        JSON.stringify(data),
        {
          expires: 2592000,
        }
      );
    }),
    [handleSubmit, filterAction]
  );

  const hasInstitution = filterValues && filterValues['institutionId'];
  const hasId = filterValues && filterValues['id'];
  const hasAccountId = filterValues && filterValues['accountId'];
  const hasCustomerId = filterValues && filterValues['customerId'];
  const hasProductName = filterValues && filterValues['productName'];
  const hasAccountAlias = filterValues && filterValues['accountAlias'];
  const hasLastName = filterValues && filterValues['lastName'];

  const valuesCount = filterValues
    && Object.values(filterValues).reduce((acc, curr) => curr ? ++acc : acc, 0);

  const isAccessibleButton = () => {
    switch (window.location.pathname) {
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
  };

  return (
    <FilterWrapper>
      <T3>Filter</T3>

      <form onSubmit={handleSubmitForm}>
        <Box width="940px" mx="-10px">
          <Flex alignItems="flex-start" flexWrap="wrap">{children}</Flex>
          <Button text="Show" disabled={submitting || invalid || !isAccessibleButton()} />
        </Box>
      </form>

    </FilterWrapper >
  );
};

export default reduxForm<{}, FilterProps>({
  form: formNamesConst.FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(Filter);
