import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

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

import { HandleAddProduct, HandleUpdateProduct } from 'store/domains';

import { SelectValues } from 'types';

interface ProductFormProps {
  onCancel: () => void;
  isDisabledProductTypes?: boolean;
  isDisabledInstitutions?: boolean;
  isDisabledStatus?: boolean;
  institutionsOptions: Array<SelectValues>;
  productTypeValue: SelectValues;
  productAction: HandleAddProduct | HandleUpdateProduct;
}

type ProductFormAllProps = ProductFormProps & WithLoadCurrencyCodesProps &
  InjectedFormProps<{}, ProductFormProps>;

const ProductForm: React.FC<ProductFormAllProps> = ({
  handleSubmit,
  onCancel,
  currencyCodes,
  isCurrencyCodesLoading,
  isDisabledProductTypes,
  isDisabledInstitutions,
  isDisabledStatus,
  institutionsOptions,
  productTypeValue,
  productAction,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => productAction(data)),
    [handleSubmit]
  );

  const productTypeName = productTypeValue && productTypeValue.label;

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
          title={(productTypeName ? productTypeName : '') + ' Details'}
          isDisabled={!productTypeValue}
          hintForDisabled="Select Product Type"
        >
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

export default reduxForm<{}, ProductFormProps>({
  form: formNames.PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withLoadCurrencyCodes(ProductForm));
