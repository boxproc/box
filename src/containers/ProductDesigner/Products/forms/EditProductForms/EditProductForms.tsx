import React from 'react';

import { Tabs, TabsPanel } from 'components';

import {
  GeneralProductForm,
  ProductAprsForm,
  ProductAuxiliaryCountersForm,
  ProductDetailsForm,
  ProductLimitsFeesCommissionsForm,
  ProductLoyaltyAndBonusForm,
  ProductRulesForm,
} from 'containers/ProductDesigner/Products/forms';
import ProductServicesForm from '../ProductServicesForm';

import { SelectValues } from 'types';

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
      <TabsPanel title="General">
        <GeneralProductForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="Details"
        isDisabled={!currentProductType}
        hintForDisabled="Select Product Type"
      >
        <ProductDetailsForm
          productType={currentProductType}
          onCancel={onCancel}
        />
      </TabsPanel>
      <TabsPanel title="Rules">
        <ProductRulesForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel title="Limits, Fees and commissions">
        <ProductLimitsFeesCommissionsForm
          onCancel={onCancel}
        />
      </TabsPanel>
      <TabsPanel title="Auxiliary counters">
        <ProductAuxiliaryCountersForm
          onCancel={onCancel}
        />
      </TabsPanel>
      <TabsPanel title="APRs">
        <ProductAprsForm
          onCancel={onCancel}
        />
      </TabsPanel>
      <TabsPanel title="Loyalty and Bonus">
        <ProductLoyaltyAndBonusForm
          onCancel={onCancel}
        />
      </TabsPanel>
      <TabsPanel title="Services">
       <ProductServicesForm
          onCancel={onCancel}
       />
      </TabsPanel>
    </Tabs>
  );
};

export default EditProductForms;
