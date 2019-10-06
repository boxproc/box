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

import { formNamesConst } from 'consts';

import { ProductDetails, ProductGeneralInfo } from 'containers/ProductDesigner/Products/components';

import { HandleAddProduct } from 'store/domains';

import { SelectValues } from 'types';

interface AddProductFormProps extends ExternalSpinnerProps {
  currentProductType: SelectValues;
  addProduct: HandleAddProduct;
  currentInstitution: SelectValues;
  onCancel: () => void;
}

type AddProductFormAllProps = AddProductFormProps & InjectedFormProps<{}, AddProductFormProps>;

const AddProductForm: React.FC<AddProductFormAllProps> = ({
  currentProductType,
  addProduct,
  onCancel,
  currentInstitution,
  handleSubmit,
  dirty,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addProduct(data)),
    [handleSubmit]
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
            withCancelConfirmation={dirty}
            disabledOk={pristine}
          />
        </TabsPanel>
      </Tabs>
    </form >
  );
};

export default reduxForm<{}, AddProductFormProps>({
  form: formNamesConst.ADD_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddProductForm));
