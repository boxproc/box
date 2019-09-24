import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField, MaskField, SelectField } from 'components';

import { dateFormat, maskFormat } from 'consts';

import { HandleGetInstitutionProducts } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface TransactionsFilterProps {
  institutionsOptions: Array<SelectValues>;
  institutionProductsOptions: Array<SelectValues>;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValues;
  isLoadingInstitutionProducts: boolean;
}

const TransactionsFilter: React.FC<TransactionsFilterProps> = ({
  institutionsOptions,
  institutionProductsOptions,
  getInstitutionProducts,
  institutionValue,
  isLoadingInstitutionProducts,
}) => {
  const currentInstitutionId = institutionValue && institutionValue.value;

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
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isDisabled={false}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="productName"
          name="productName"
          component={SelectField}
          label="Product"
          placeholder="Select Product"
          options={institutionProductsOptions}
          isDisabled={false}
          isLoading={isLoadingInstitutionProducts}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="customerId"
          name="customerId"
          component={InputField}
          label="Customer ID"
          placeholder="Enter ID"
          isDisabled={false}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="id"
          name="id"
          component={InputField}
          label="Transaction ID"
          placeholder="Enter ID"
          isDisabled={false}
        />
      </Box>
      <Box width="200px" p="10px">
        <Field
          id="datetimeFrom"
          name="datetimeFrom"
          component={MaskField}
          label="Date / Time From"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          maskChar={null}
        />
      </Box>
      <Box width="200px" p="10px">
        <Field
          id="datetimeTo"
          name="datetimeTo"
          component={MaskField}
          label="Date / Time To"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          maskChar={null}
        />
      </Box>
    </React.Fragment>
  );
};

export default TransactionsFilter;
