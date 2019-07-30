import React from 'react';

import { Panel, Tabs } from 'components/Tabs';

import { getDetailsTitle } from 'containers/ProductDesigner/Products/ProductComponents';

import EditGeneralProductForm from './EditGeneralProductForm';
import EditProductDetailsForm from './EditProductDetailsForm';
import EditProductRulesForm from './EditProductRulesForm';

import { HandleDeleteProduct } from 'store/domains';

import { SelectValues } from 'types';

interface EditProductFormsProps {
  productTypeValue: SelectValues;
  currentProductId: number;
  deleteProduct: HandleDeleteProduct;
  onCancel: () => void;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  productTypeValue,
  currentProductId,
  deleteProduct,
  onCancel,
}) => {

  return (
    <Tabs>
      <Panel title="General">
        <EditGeneralProductForm
          currentProductId={currentProductId}
          deleteProduct={deleteProduct}
          onCancel={onCancel}
        />
      </Panel>
      <Panel
        title={getDetailsTitle(productTypeValue)}
        isDisabled={!productTypeValue}
        hintForDisabled="Select Product Type"
      >
        <EditProductDetailsForm
          currentProductId={currentProductId}
          deleteProduct={deleteProduct}
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="Rules">
        <EditProductRulesForm
          deleteProduct={deleteProduct}
          onCancel={onCancel}
        />
      </Panel>
    </Tabs>
  );
};

export default EditProductForms;
