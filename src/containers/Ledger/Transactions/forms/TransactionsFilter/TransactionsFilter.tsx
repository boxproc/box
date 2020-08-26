import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, MaskField, SelectField } from 'components';
import { dateFormatConst, maskFormatConst } from 'consts';
import { THandleGetInstProducts } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ITransactionsFilter {
  institutionsOptions: Array<ISelectValue>;
  institutionProductsOptions: Array<ISelectValue>;
  getInstProducts: THandleGetInstProducts;
  institutionValue: ISelectValue;
  isLoadingInstProducts: boolean;
  isDisabled: boolean;
}

const TransactionsFilter: React.FC<ITransactionsFilter> = ({
  institutionsOptions,
  institutionProductsOptions,
  getInstProducts,
  institutionValue,
  isLoadingInstProducts,
  isDisabled,
}) => {
  const currentInstitutionId = React.useMemo(
    () => institutionValue && institutionValue.value,
    [institutionValue]
  );

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getInstProducts(currentInstitutionId);
      }
    },
    [getInstProducts, currentInstitutionId]
  );

  return (
    <Flex
      alignItems="flex-start"
    >
      <Flex
        width="420px"
        flexWrap="wrap"
      >
        <Box width="420px" p="8px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isClearable={false}
            isDisabled={isDisabled}
            isRequired={true}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="420px" p="8px">
          <Field
            id="productName"
            name="productName"
            component={SelectField}
            label="Product"
            placeholder="Select Product"
            options={institutionProductsOptions}
            isLoading={isLoadingInstProducts}
            isDisabled={isDisabled}
          />
        </Box>
        <Box width="210px" p="8px">
          <Field
            id="transactionsDateTimeFrom"
            name="transactionsDateTimeFrom"
            component={MaskField}
            label="Date&nbsp;/&nbsp;Time From"
            placeholder={dateFormatConst.DATE_TIME}
            mask={maskFormatConst.DATE_TIME}
            disabled={isDisabled}
            isRequired={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isDateTime,
            ]}
          />
        </Box>
        <Box width="210px" p="8px">
          <Field
            id="transactionsDateTimeTo"
            name="transactionsDateTimeTo"
            component={MaskField}
            label="Date&nbsp;/&nbsp;Time To"
            placeholder={dateFormatConst.DATE_TIME}
            mask={maskFormatConst.DATE_TIME}
            disabled={isDisabled}
            isRequired={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isDateTime,
            ]}
          />
        </Box>
      </Flex>
      <Flex
        width="240px"
        flexWrap="wrap"
      >
        <Box width="120px" p="8px">
          <Field
            id="customerId"
            name="customerId"
            component={InputField}
            label="Customer ID"
            placeholder="Enter ID"
            isNumber={true}
            disabled={isDisabled}
            validate={[formErrorUtil.isInteger]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="transactionId"
            name="transactionId"
            component={InputField}
            label="Transaction ID"
            placeholder="Enter ID"
            isNumber={true}
            disabled={isDisabled}
            validate={[formErrorUtil.isInteger]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            placeholder="Enter ID"
            isNumber={true}
            disabled={isDisabled}
            validate={[formErrorUtil.isInteger]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="cardId"
            name="cardId"
            component={InputField}
            label="Card ID"
            placeholder="Enter ID"
            isNumber={true}
            disabled={isDisabled}
            validate={[formErrorUtil.isInteger]}
          />
        </Box>
        <Box width="240px" p="8px">
          <Field
            id="panAlias"
            name="panAlias"
            component={InputField}
            label="Pan Alias"
            placeholder="Enter Pan Alias"
            disabled={isDisabled}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default TransactionsFilter;
