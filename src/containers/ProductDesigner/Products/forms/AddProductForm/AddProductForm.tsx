import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  ExternalSpinnerProps,
  Hr,
  OkCancelButtons,
  Tabs,
  TabsPanel,
  withSpinner,
} from 'components';

import { formNames } from 'consts';

import {
  ProductDetails,
  ProductGeneralInfo,
} from 'containers/ProductDesigner/Products/components';

import {
  HandleAddProduct,
} from 'store/domains';

import { SelectValues } from 'types';

interface AddProductFormProps extends ExternalSpinnerProps {
  currentProductType: SelectValues;
  addProduct: HandleAddProduct;
  onCancel: () => void;
  isDirty: boolean;
}

type AddProductFormAllProps = AddProductFormProps & InjectedFormProps<{}, AddProductFormProps>;

const AddProductForm: React.FC<AddProductFormAllProps> = ({
  currentProductType,
  addProduct,
  onCancel,
  handleSubmit,
  isDirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addProduct(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <TabsPanel title="General">
          <ProductGeneralInfo />
        </TabsPanel>
        <TabsPanel
          title="Details"
          isDisabled={!currentProductType}
          hintForDisabled="Select Product Type"
        >
          <ProductDetails
            productType={currentProductType && currentProductType.value}
          />
          <Hr />
          <OkCancelButtons
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            rightPosition={true}
            withCancelConfirmation={isDirty}
            disabledOk={!isDirty}
          />
        </TabsPanel>
      </Tabs>
    </form >
  );
};

export default reduxForm<{}, AddProductFormProps>({
  form: formNames.ADD_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddProductForm));
