import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, MaskField, SelectField } from 'components';

import { dateFormat, formNamesConst, maskFormat } from 'consts';

import { HandleFilterLedgerStatements, HandleGetInstitutionProducts } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface StatementFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  filterLedgerStatements: HandleFilterLedgerStatements;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValues;
  institutionProductsOptions: Array<SelectValues>;
  isLoadingInstitutionProducts: boolean;
}

type StatementFilterFormAllProps = StatementFilterFormProps &
  InjectedFormProps<{}, StatementFilterFormProps>;

const StatementFilterForm: React.FC<StatementFilterFormAllProps> = ({
  handleSubmit,
  pristine,
  invalid,
  institutionsOptions,
  filterLedgerStatements,
  institutionValue,
  getInstitutionProducts,
  institutionProductsOptions,
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
    handleSubmit(filterLedgerStatements),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px">
        <Flex alignItems="flex-start">
          <Box width="550px">
            <Flex
              alignItems="flex-end"
              flexWrap="wrap"
            >
              <Box width={[3 / 7]} p="10px">
                <Field
                  id="institutionId"
                  name="institutionId"
                  component={SelectField}
                  label="Institution"
                  placeholder="Select Institution"
                  options={institutionsOptions}
                  isDisabled={false}
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[2 / 7]} p="10px">
                <Field
                  id="accountId"
                  name="accountId"
                  component={InputField}
                  label="Account ID"
                  placeholder="Enter ID"
                  isDisabled={false}
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[2 / 7]} p="10px">
                <Field
                  id="accountAlias"
                  name="accountAlias"
                  component={InputField}
                  label="Account Alias"
                  placeholder="Enter Account Alias"
                  isDisabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="firstName"
                  name="firstName"
                  component={InputField}
                  label="First Name"
                  placeholder="Enter First Name"
                  isDisabled={false}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="lastName"
                  name="lastName"
                  component={InputField}
                  label="Last Name"
                  placeholder="Enter Last Name"
                  isDisabled={false}
                />
              </Box>
              <Box width={[3 / 7]} p="10px">
                <Field
                  id="dateFrom"
                  name="dateFrom"
                  component={MaskField}
                  label="Date From"
                  placeholder={dateFormat.DATE_TIME_FORMAT}
                  mask={maskFormat.DATE_TIME}
                  maskChar={null}
                  disabled={false}
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width={[3 / 7]} p="10px">
                <Field
                  id="dateTo"
                  name="dateTo"
                  component={MaskField}
                  label="Date To"
                  placeholder={dateFormat.DATE_TIME_FORMAT}
                  mask={maskFormat.DATE_TIME}
                  maskChar={null}
                  disabled={false}
                  validate={[formErrorUtil.required]}
                />
              </Box>
            </Flex>
          </Box>
          <Flex>
            <Box width="250px" p="10px">
              <Field
                id="product"
                name="product"
                component={SelectField}
                label="Product"
                placeholder="Select Product"
                options={institutionProductsOptions}
                isDisabled={false}
                isMulti={true}
                isLoading={isLoadingInstitutionProducts}
              />
            </Box>
          </Flex>
        </Flex>
        <Button
          text="Show"
          disabled={pristine || invalid}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, StatementFilterFormProps>({
  form: formNamesConst.LEDGER_STATEMENTS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementFilterForm);
