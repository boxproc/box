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
import { formNamesConst } from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ICurrencyRateForm extends ISpinner {
  addCurrencyRate: any;
  isEditMode?: boolean;
  isReadOnly: boolean;
  onCancel: () => void;
  updateCurrencyRate: any;
  institutionOptions: Array<ISelectValue>;
  isLoadingCurrencies: boolean;
  currenciesOptions: Array<ISelectValue>;
}

type TCurrencyRateForm = ICurrencyRateForm & InjectedFormProps<{}, ICurrencyRateForm>;

const CurrencyRateForm: React.FC<TCurrencyRateForm> = ({
  addCurrencyRate,
  dirty,
  handleSubmit,
  isEditMode,
  isReadOnly,
  onCancel,
  pristine,
  updateCurrencyRate,
  institutionOptions,
  isLoadingCurrencies,
  currenciesOptions,
}) => {
  const submitAction = React.useMemo(
    () => isEditMode ? updateCurrencyRate : addCurrencyRate,
    [isEditMode, updateCurrencyRate, addCurrencyRate]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitAction),
    [handleSubmit, submitAction]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
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
            isDisabled={isEditMode || isReadOnly}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 3 : 1 / 2]} p="8px">
          <Field
            id="provider"
            name="provider"
            component={SelectField}
            label="Provider"
            placeholder="Select Provider"
            options={[
              { value: 1, label: 'Mastercard' },
              { value: 2, label: 'Visa' },
              { value: 3, label: 'Reuters' },
              { value: 4, label: 'Custom' },
            ]}
            isDisabled={isReadOnly}
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
            isDisabled={isReadOnly}
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
            isDisabled={isReadOnly}
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
            disabled={isReadOnly}
            validate={[
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
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isNumber,
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
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Hr />
            <Box width="180px" p="8px">
              <Field
                id="providerDatetime"
                name="providerDatetime"
                component={InputField}
                label="Provider Datetime"
                disabled={true}
              />
            </Box>
            <Box width="180px" p="8px">
              <Field
                id="createdDatetime"
                name="createdDatetime"
                component={InputField}
                label="Created Datetime"
                disabled={true}
              />
            </Box>
          </React.Fragment>
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
          hideOk={isReadOnly}
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
