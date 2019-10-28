import React from 'react';

import { Tabs, TabsPanel } from 'components';

import {
  AprsForm,
  AuxiliaryCountersForm,
  GeneralProductForm,
  // LimitsFeesCommissionsForm,
  LoyaltyAndBonusForm,
  ProductDetailsForm,
  ProductRulesForm,
} from 'containers/ProductDesigner/Products/forms';
import ProductServicesForm from '../ProductServicesForm';

import { SelectValues } from 'types';

interface EditProductFormsProps {
  currentProductType: SelectValues;
  isProductOverride: boolean;
  onCancel: () => void;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  currentProductType,
  isProductOverride,
  onCancel,
}) => {
  return (
    <Tabs>
      <TabsPanel title="General">
        <GeneralProductForm
          onCancel={onCancel}
          isProductOverride={isProductOverride}
        />
      </TabsPanel>
      <TabsPanel
        title="Details"
        isDisabled={!currentProductType}
        hintIfDisabled="Select Product Type"
      >
        <ProductDetailsForm
          productType={currentProductType}
          onCancel={onCancel}
        />
      </TabsPanel>
      <TabsPanel title="Rules">
        <ProductRulesForm onCancel={onCancel} />
      </TabsPanel>
      {/* <TabsPanel title="Limits, Fees and commissions">
        <LimitsFeesCommissionsForm onCancel={onCancel} />
      </TabsPanel> */}
      <TabsPanel title="Auxiliary counters">
        <AuxiliaryCountersForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel title="APRs">
        <AprsForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel title="Loyalty and Bonus">
        <LoyaltyAndBonusForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel title="Services">
        <ProductServicesForm onCancel={onCancel} />
      </TabsPanel>
    </Tabs>
  );
};

export default EditProductForms;
