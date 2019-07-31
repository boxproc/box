import React from 'react';

import { Panel, Tabs } from 'components/Tabs';

import EditGeneralProductForm from './EditGeneralProductForm';
import EditProductDetailsForm from './EditProductDetailsForm';
import EditProductRulesForm from './EditProductRulesForm';

import { SelectValues } from 'types';

interface EditProductFormsProps {
  currentProductType: SelectValues;
  currentProductId: number;
  onCancel: () => void;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  currentProductType,
  currentProductId,
  onCancel,
}) => {

  return (
    <Tabs>
      <Panel title="General">
        <EditGeneralProductForm
          currentProductId={currentProductId}
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
          productType={currentProductType}
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="Rules">
        <EditProductRulesForm
          onCancel={onCancel}
        />
      </Panel>
    </Tabs>
  );
};

export default EditProductForms;
