import React from 'react';

import { Panel, Tabs } from 'components/Tabs';

import {
  GeneralProductForm,
  ProductAprsForm,
  ProductAuxiliaryCountersForm,
  ProductDetailsForm,
  ProductLimitsFeesCommissionsForm,
  ProductLoyaltyAndBonusForm,
  ProductRulesForm,
} from 'containers/ProductDesigner/Products/forms';

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
        <GeneralProductForm
          currentProductId={currentProductId}
          onCancel={onCancel}
        />
      </Panel>
      <Panel
        title="Details"
        isDisabled={!currentProductType}
        hintForDisabled="Select Product Type"
      >
        <ProductDetailsForm
          currentProductId={currentProductId}
          productType={currentProductType}
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="Rules">
        <ProductRulesForm
          currentProductId={currentProductId}
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="Limits, Fees and commissions">
        <ProductLimitsFeesCommissionsForm
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="Auxiliary counters">
        <ProductAuxiliaryCountersForm
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="APRs">
        <ProductAprsForm
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="Loyalty and Bonus">
        <ProductLoyaltyAndBonusForm
          onCancel={onCancel}
        />
      </Panel>
    </Tabs>
  );
};

export default EditProductForms;
