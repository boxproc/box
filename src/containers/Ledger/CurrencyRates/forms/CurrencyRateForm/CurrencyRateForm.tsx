import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Hr,
  InputField,
  ISpinner,
  NumberFormatField,
  OkCancelButtons,
  SelectField,
  withSpinner,
} from 'components';
import { currencyRatesProvidersOptions, formNamesConst } from 'consts';
import { THandleAddCurrencyRate } from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ICurrencyRateForm extends ISpinner {
  addCurrencyRate: THandleAddCurrencyRate;
  currenciesOptions: Array<ISelectValue>;
  institutionOptions: Array<ISelectValue>;
  isEditMode?: boolean;
  isLoadingCurrencies: boolean;
  onCancel: () => void;
  providerValue: ISelectValue;
}

type TCurrencyRateForm = ICurrencyRateForm & InjectedFormProps<{}, ICurrencyRateForm>;

const CurrencyRateForm: React.FC<TCurrencyRateForm> = ({
  addCurrencyRate,
  currenciesOptions,
  dirty,
  handleSubmit,
  institutionOptions,
  isEditMode,
  isLoadingCurrencies,
  onCancel,
  pristine,
  providerValue,
}) => {
  const isCustomProvider = React.useMemo(
    () => !providerValue || (providerValue && providerValue.value === 'custom'),
    [providerValue]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(addCurrencyRate),
    [handleSubmit, addCurrencyRate]
  );

  return (
    <form onSubmit={isEditMode ? null : handleSubmitForm}>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        mx="-8px"
      >
        {isEditMode && (
          <Box width="100px" p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              placeholder="Enter ID"
              disabled={true}
            />
          </Box>
        )}
        <Box width={[isEditMode ? 1 / 3 : 1 / 2]} p="8px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionOptions}
            isDisabled={isEditMode}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 3 : 1 / 2]} p="8px">
          <Field
            id="rateProvider"
            name="rateProvider"
            component={SelectField}
            label="Provider"
            placeholder="Select Provider"
            options={currencyRatesProvidersOptions}
            isDisabled={isEditMode}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Hr />
        <Box width={[1 / 2]} p="8px">
          <Field
            id="fromCurrency"
            name="fromCurrency"
            component={SelectField}
            label="From Currency"
            placeholder="Select From Currency"
            options={currenciesOptions}
            isLoading={isLoadingCurrencies}
            isDisabled={isEditMode}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="toCurrency"
            name="toCurrency"
            component={SelectField}
            label="To Currency"
            placeholder="Select To Currency"
            options={currenciesOptions}
            isLoading={isLoadingCurrencies}
            isDisabled={isEditMode}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Hr />
        <Box width={[1 / 3]} p="8px">
          <Field
            id="spotRate"
            name="spotRate"
            label="Spot Rate"
            component={NumberFormatField}
            placeholder="0.00000"
            fixedDecimalScale={true}
            decimalScale={5}
            disabled={isEditMode || !isCustomProvider}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width={[1 / 3]} p="8px">
          <Field
            id="buyRate"
            name="buyRate"
            label="Buy Rate"
            component={NumberFormatField}
            placeholder="0.00000"
            fixedDecimalScale={true}
            decimalScale={5}
            disabled={isEditMode || !isCustomProvider}
            validate={[
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width={[1 / 3]} p="8px">
          <Field
            id="sellRate"
            name="sellRate"
            label="Sell Rate"
            component={NumberFormatField}
            placeholder="0.00000"
            fixedDecimalScale={true}
            decimalScale={5}
            disabled={isEditMode || !isCustomProvider}
            validate={[
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        {isEditMode && (
          <Box width="180px" p="8px">
            <Field
              id="createdDatetime"
              name="createdDatetime"
              component={InputField}
              label="Created Datetime"
              disabled={true}
            />
          </Box>
        )}
        {isEditMode && (
          <Box width="180px" p="8px">
            <Field
              id="providerDatetime"
              name="providerDatetime"
              component={InputField}
              label="Provider Datetime"
              disabled={true}
            />
          </Box>
        )}
      </Flex>
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="flex-end"
      >
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
          hideOk={isEditMode}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, ICurrencyRateForm>({
  form: formNamesConst.CURRENCY_RATES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(CurrencyRateForm));
