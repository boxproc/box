import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  Hr,
  ISpinner,
  OkCancelButtons,
  Tabs,
  TabsPanel,
  withSpinner,
} from 'components';

import { formNamesConst } from 'consts';

import { ProductDetails, ProductGeneralInfo } from 'containers/ProductDesigner/Products/components';

import { HandleAddProduct } from 'store';

import { ISelectValue } from 'types';

interface IAddProductForm extends ISpinner {
  currentProductType: ISelectValue;
  addProduct: HandleAddProduct;
  currentInstitution: ISelectValue;
  interestDistributionValue: ISelectValue;
  onCancel: () => void;
}

type TAddProductForm = IAddProductForm & InjectedFormProps<{}, IAddProductForm>;

const AddProductForm: React.FC<TAddProductForm> = ({
  currentProductType,
  addProduct,
  onCancel,
  currentInstitution,
  handleSubmit,
  dirty,
  pristine,
  interestDistributionValue,
}) => {
  const productType = React.useMemo(
    () => currentProductType && currentProductType.value,
    [currentProductType]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(addProduct),
    [handleSubmit, addProduct]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <TabsPanel title="General">
          <ProductGeneralInfo
            currentInstitution={currentInstitution}
          />
        </TabsPanel>
        <TabsPanel
          title="Details"
          isDisabled={!currentProductType}
          hintIfDisabled="Select Product Type"
        >
          <ProductDetails
            productType={productType}
            interestDistributionValue={interestDistributionValue}
          />
        </TabsPanel>
      </Tabs>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
      />
    </form >
  );
};

export default reduxForm<{}, IAddProductForm>({
  form: formNamesConst.ADD_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddProductForm));
