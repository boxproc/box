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
import ProductServicesForm from '../ProductServicesForm';

interface EditProductFormsProps {
  currentProductType: SelectValues;
  onCancel: () => void;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  currentProductType,
  onCancel,
}) => {
  return (
    <Tabs>
      <Panel title="General">
        <GeneralProductForm onCancel={onCancel} />
      </Panel>
      <Panel
        title="Details"
        isDisabled={!currentProductType}
        hintForDisabled="Select Product Type"
      >
        <ProductDetailsForm
          productType={currentProductType}
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="Rules">
        <ProductRulesForm onCancel={onCancel} />
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
      <Panel title="Services">
       <ProductServicesForm
          onCancel={onCancel}
       />
      </Panel>
    </Tabs>
  );
};

export default EditProductForms;
