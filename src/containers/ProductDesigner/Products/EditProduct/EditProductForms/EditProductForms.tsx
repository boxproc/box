import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Panel, Tabs } from 'components/Tabs';

import EditGeneralProductForm from './EditGeneralProductForm';
import EditProductDetailsForm from './EditProductDetailsForm';
import EditProductRulesForm from './EditProductRulesForm';

import { HandleDeleteProduct } from 'store/domains';

import { SelectValues } from 'types';

interface EditProductFormsProps {
  currentProductType: SelectValues;
  currentProductId: number;
  deleteProduct: HandleDeleteProduct;
  onCancel: () => void;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  currentProductType,
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
        title={(currentProductType ? currentProductType.label : '') + ' Details'}
        isDisabled={!currentProductType}
        hintForDisabled="Select Product Type"
      >
        <EditProductDetailsForm
          currentProductId={currentProductId}
          deleteProduct={deleteProduct}
          productType={currentProductType}
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

export default withSpinner()(EditProductForms);
