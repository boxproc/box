import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { Delimiter, InputField, MaskField, SelectField } from 'components';

import { dateFormat, maskFormat } from 'consts';

import { HandleGetInstitutionProducts } from 'store/domains';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface TransactionsFilterProps {
  institutionsOptions: Array<SelectValue>;
  institutionProductsOptions: Array<SelectValue>;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValue;
  isLoadingInstitutionProducts: boolean;
  isDisabled: boolean;
}

const TransactionsFilter: React.FC<TransactionsFilterProps> = ({
  institutionsOptions,
  institutionProductsOptions,
  getInstitutionProducts,
  institutionValue,
  isLoadingInstitutionProducts,
  isDisabled,
}) => {
  const currentInstitutionId = React.useMemo(
    () => institutionValue && institutionValue.value,
    [institutionValue]
  );

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getInstitutionProducts(currentInstitutionId);
      }
    },
    [getInstitutionProducts, currentInstitutionId]
  );

  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="8px">
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
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="productName"
          name="productName"
          component={SelectField}
          label="Product"
          placeholder="Select Product"
          options={institutionProductsOptions}
          isLoading={isLoadingInstitutionProducts}
          isDisabled={isDisabled}
        />
      </Box>
      <Box width="180px" p="8px">
        <Field
          id="transactionsDateTimeFrom"
          name="transactionsDateTimeFrom"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time From"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="180px" p="8px">
        <Field
          id="transactionsDateTimeTo"
          name="transactionsDateTimeTo"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time To"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Delimiter />
      <Box width="130px" p="8px">
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
      <Box width="130px" p="8px">
        <Field
          id="transactionId"
          name="transactionId"
          component={InputField}
          label="Transaction ID"
          placeholder="Enter ID"
          disabled={isDisabled}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="130px" p="8px">
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
      <Box width="130px" p="8px">
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
      <Box width={[1 / 4]} p="8px">
        <Field
          id="panAlias"
          name="panAlias"
          component={InputField}
          label="Pan Alias"
          placeholder="Enter Pan Alias"
          disabled={isDisabled}
        />
      </Box>
    </React.Fragment>
  );
};

export default TransactionsFilter;
