import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Tabs, TabsPanel } from 'components';
import { AprsTable } from 'containers/ProductDesigner/Products/components';
import {
  AprsForm,
  AuxiliaryCountersForm,
  // LimitsFeesCommissionsForm,
  GeneralProductForm,
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
        <AprsForm />
        <AprsTable />
        <Flex justifyContent="flex-end">
          <Button text="Close" onClick={onCancel} />
        </Flex>
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
