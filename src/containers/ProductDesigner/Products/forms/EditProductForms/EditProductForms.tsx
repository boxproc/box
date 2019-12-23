import React from 'react';

import { Tabs, TabsPanel } from 'components';
import {
  AprsForm,
  AuxiliaryCountersForm,
  FeesForm,
  GeneralLedgerFrom,
  GeneralProductForm,
  IllustrationForm,
  ProductDetailsForm,
  ProductRulesForm,
  ProductServicesForm,
  RewardsForm,
} from 'containers/ProductDesigner/Products/forms';

import { productTypesCodes } from 'consts';
import { SelectValues } from 'types';

interface EditProductFormsProps {
  currentProductType: SelectValues;
  isProductOverride: boolean;
  isAnyFormDirty: boolean;
  onCancel: () => void;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  currentProductType,
  isProductOverride,
  isAnyFormDirty,
  onCancel,
}) => {
  const isIllustration = React.useMemo(
    () => {
      if (!currentProductType) {
        return false;
      }

      return currentProductType.value === productTypesCodes.LOAN;
    },
    [currentProductType]
  );

  return (
    <Tabs>
      <TabsPanel
        title="General"
        withConfirmation={isAnyFormDirty}
      >
        <GeneralProductForm
          onCancel={onCancel}
          isProductOverride={isProductOverride}
        />
      </TabsPanel>
      <TabsPanel
        title="Details"
        isDisabled={!currentProductType}
        hintIfDisabled="Select Product Type"
        withConfirmation={isAnyFormDirty}
      >
        <ProductDetailsForm
          productType={currentProductType}
          onCancel={onCancel}
        />
      </TabsPanel>
      <TabsPanel
        title="Rules"
        withConfirmation={isAnyFormDirty}
      >
        <ProductRulesForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="Aux counters"
        withConfirmation={isAnyFormDirty}
      >
        <AuxiliaryCountersForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="APRs"
        withConfirmation={isAnyFormDirty}
      >
        <AprsForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="Fees"
        withConfirmation={isAnyFormDirty}
      >
        <FeesForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="Rewards"
        withConfirmation={isAnyFormDirty}
      >
        <RewardsForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="Services"
        withConfirmation={isAnyFormDirty}
      >
        <ProductServicesForm onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="GL"
        withConfirmation={isAnyFormDirty}
      >
        <GeneralLedgerFrom onCancel={onCancel} />
      </TabsPanel>
      {isIllustration && (
        <TabsPanel
          title="Illustration"
          withConfirmation={isAnyFormDirty}
        >
          <IllustrationForm
            onCancel={onCancel}
          />
        </TabsPanel>
      )}
    </Tabs>
  );
};

export default EditProductForms;
