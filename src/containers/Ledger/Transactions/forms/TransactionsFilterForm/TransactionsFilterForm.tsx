import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { InputField, MaskField, SelectField } from 'components/Form';

import { dateFormat, formNames, maskFormat } from 'consts';

import { HandleFilterLedgerTransactions, HandleGetInstitutionProducts } from 'store/domains';

import { SelectValues } from 'types';

interface TransactionsFilterFormProps {
  filterLedgerTransactions: HandleFilterLedgerTransactions;
  institutionsOptions: Array<SelectValues>;
  institutionProductsOptions: Array<SelectValues>;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValues;
  isLoadingInstitutionProducts: boolean;
}

type TransactionsFilterFormAllProps = TransactionsFilterFormProps &
  InjectedFormProps<{}, TransactionsFilterFormProps>;

const TransactionsFilterForm: React.FC<TransactionsFilterFormAllProps> = ({
  handleSubmit,
  filterLedgerTransactions,
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
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterLedgerTransactions(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[1, 1, 1, 700]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1, 1 / 2]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={false}
              isClearable={false}
            />
          </Box>
          <Box width={[1, 1 / 2]} p="10px">
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
          <Box width="100px" p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="Transaction ID"
              placeholder="Enter ID"
              isDisabled={false}
            />
          </Box>
          <Box width="100px" p="10px">
            <Field
              id="customerId"
              name="customerId"
              component={InputField}
              label="Customer ID"
              placeholder="Enter ID"
              isDisabled={false}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="datetimeFrom"
              name="datetimeFrom"
              component={MaskField}
              label="Date From"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="datetimeTo"
              name="datetimeTo"
              component={MaskField}
              label="Date To"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Show"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, TransactionsFilterFormProps>({
  form: formNames.LEDGER_TRANSACTIONS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(TransactionsFilterForm);
