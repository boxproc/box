import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Panel, Tabs } from 'components/Tabs';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import {
  ProductDetails,
  ProductGeneralInfo,
} from 'containers/ProductDesigner/Products/ProductComponents';

import {
  HandleAddProduct,
} from 'store/domains';

import { SelectValues } from 'types';

interface AddProductFormProps {
  currentProductType: SelectValues;
  addProduct: HandleAddProduct;
  onCancel: () => void;
}

type AddProductFormAllProps = AddProductFormProps & InjectedFormProps<{}, AddProductFormProps>;

const AddProductForm: React.FC<AddProductFormAllProps> = ({
  currentProductType,
  addProduct,
  onCancel,
  handleSubmit,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addProduct(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <Panel title="General">
          <ProductGeneralInfo />
        </Panel>
        <Panel
          title={(currentProductType ? currentProductType.label : '') + ' Details'}
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
          />
        </Panel>
      </Tabs>
    </form >
  );
};

export default reduxForm<{}, AddProductFormProps>({
  form: formNames.ADD_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AddProductForm);
