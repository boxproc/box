import React from 'react';
import { FormSection, InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Panel, Tabs } from 'components/Tabs';
import {
  withLoadCurrencyCodes,
  WithLoadCurrencyCodesProps,
} from 'components/withLoadCurrencyCodes';

import {
  formNames,
  productTypes,
} from 'consts';

import DebitSection from './DebitSection';
import GeneralSection from './GeneralSection';
import LoanTypeSection from './LoanTypeSection';
import PrepaidSection from './PrepaidSection';
import RevolvingCreditSection from './RevolvingCreditSection';
import SavingsSection from './SavingsSection';

import { ParsedSelectValues } from 'types';

interface ProductFormFormProps {
  onCancel: () => void;
  isDisabledProductTypes?: boolean;
  isDisabledInstitutions?: boolean;
  isDisabledStatus?: boolean;
  institutionsOptions: Array<ParsedSelectValues>;
  productTypeValue: ParsedSelectValues;
}

type ProductFormFormAllProps = ProductFormFormProps & WithLoadCurrencyCodesProps &
  InjectedFormProps<{}, ProductFormFormProps>;

const ProductFormForm: React.FC<ProductFormFormAllProps> = ({
  handleSubmit,
  onCancel,
  currencyCodes,
  isCurrencyCodesLoading,
  isDisabledProductTypes,
  isDisabledInstitutions,
  isDisabledStatus,
  institutionsOptions,
  productTypeValue,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log('---', data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <Panel title="General">
          <GeneralSection
            institutionsOptions={institutionsOptions}
            currencyCodes={currencyCodes}
            isDisabledStatus={isDisabledStatus}
            isDisabledProductTypes={isDisabledProductTypes}
            isDisabledInstitutions={isDisabledInstitutions}
            isCurrencyCodesLoading={isCurrencyCodesLoading}
          />
        </Panel>
        <Panel
          title="Details"
          isDisabled={!productTypeValue}
          hintForDisabled="Select Product Type"
        >
          <FormSection name="details">
            {productTypeValue && productTypeValue.value === productTypes.LOAN && (
              <LoanTypeSection />
            )}
            {productTypeValue && productTypeValue.value === productTypes.PREPAID && (
              <PrepaidSection />
            )}
            {productTypeValue && productTypeValue.value === productTypes.DEBIT && (
              <DebitSection />
            )}
            {productTypeValue && productTypeValue.value === productTypes.SAVINGS && (
              <SavingsSection />
            )}
            {productTypeValue && productTypeValue.value === productTypes.REVOLVING_CREDIT && (
              <RevolvingCreditSection />
            )}
          </FormSection>
        </Panel>
      </Tabs>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, ProductFormFormProps>({
  form: formNames.PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withLoadCurrencyCodes(ProductFormForm));
