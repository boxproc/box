import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { Panel, Tabs } from 'components/Tabs';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import {
  getDetailsTitle,
  ProductDetails,
  ProductGeneralInfo,
  ProductRules,
} from 'containers/ProductDesigner/Products/ProductComponents';

import { HandleDeleteProduct, HandleUpdateProduct } from 'store/domains';

import { SelectValues } from 'types';

interface EditProductFormProps {
  onCancel: () => void;
  productTypeValue: SelectValues;
  updateProduct: HandleUpdateProduct;
  deleteProduct: HandleDeleteProduct;
  currentProductId: number;
}

type EditProductFormAllProps = EditProductFormProps &
  InjectedFormProps<{}, EditProductFormProps>;

const EditProductForm: React.FC<EditProductFormAllProps> = ({
  handleSubmit,
  onCancel,
  productTypeValue,
  updateProduct,
  deleteProduct,
  currentProductId,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProduct(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <Panel title="General">
          <ProductGeneralInfo
            isDisabledStatus={true}
            isDisabledProductTypes={true}
            isDisabledInstitutions={true}
          />
        </Panel>
        <Panel
          title={getDetailsTitle(productTypeValue)}
        >
          <ProductDetails
            productTypeValue={productTypeValue}
          />
        </Panel>
        <Panel title="Rules">
          <ProductRules />
          <Hr/>
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            <OkCancelButtons
              okText="Save"
              cancelText="Cancel"
              onCancel={onCancel}
            />
            <Button
              text="delete"
              iconName="delete"
              onClick={() => deleteProduct(currentProductId)}
            />
          </Flex>
        </Panel>
      </Tabs>
    </form >
  );
};

export default reduxForm<{}, EditProductFormProps>({
  form: formNames.EDIT_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditProductForm);
