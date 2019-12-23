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
  isReadOnly: boolean;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  currentProductType,
  isProductOverride,
  isAnyFormDirty,
  onCancel,
  isReadOnly,
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
          isReadOnly={isReadOnly}
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
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="Rules"
        withConfirmation={isAnyFormDirty}
      >
        <ProductRulesForm
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="Aux counters"
        withConfirmation={isAnyFormDirty}
      >
        <AuxiliaryCountersForm
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="APRs"
        withConfirmation={isAnyFormDirty}
      >
        <AprsForm
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="Fees"
        withConfirmation={isAnyFormDirty}
      >
        <FeesForm
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="Rewards"
        withConfirmation={isAnyFormDirty}
      >
        <RewardsForm
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="Services"
        withConfirmation={isAnyFormDirty}
      >
        <ProductServicesForm
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="GL"
        withConfirmation={isAnyFormDirty}
      >
        <GeneralLedgerFrom
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      {isIllustration && (
        <TabsPanel
          title="Illustration"
          withConfirmation={isAnyFormDirty}
        >
          <IllustrationForm
            onCancel={onCancel}
            isReadOnly={isReadOnly}
          />
        </TabsPanel>
      )}
    </Tabs>
  );
};

export default EditProductForms;
