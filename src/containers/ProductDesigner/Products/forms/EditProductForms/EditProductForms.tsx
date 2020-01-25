import React from 'react';

import { Tabs, TabsPanel } from 'components';
import {
  AprsForm,
  AuxiliaryCountersForm,
  FeesForm,
  GeneralLedgerFrom,
  GeneralProductForm,
  ProductDetailsForm,
  ProductRulesForm,
  ProductServicesForm,
  RewardsForm,
} from 'containers/ProductDesigner/Products/forms';

import LoanIllustration from 'containers/ProductDesigner/Products/illustration/LoanIllustration';
import RevolvingCreditIllustration from 'containers/ProductDesigner/Products/illustration/RevolvingCreditIllustration';

import { productTypesCodes } from 'consts';
import { SelectValue } from 'types';

interface EditProductFormsProps {
  currentProductType: SelectValue;
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
  const isIllustrationLoan = React.useMemo(
    () => {
      if (!currentProductType) {
        return false;
      }

      return currentProductType.value === productTypesCodes.LOAN;
    },
    [currentProductType]
  );

  const isIllustrationRevolvingCredit = React.useMemo(
    () => {
      if (!currentProductType) {
        return false;
      }

      return currentProductType.value === productTypesCodes.REVOLVING_CREDIT;
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
      {isIllustrationLoan && (
        <TabsPanel
          title="Illustration"
          withConfirmation={isAnyFormDirty}
        >
          <LoanIllustration onCancel={onCancel} />
        </TabsPanel>
      )}
      {isIllustrationRevolvingCredit && (
        <TabsPanel
          title="Illustration"
          withConfirmation={isAnyFormDirty}
        >
          <RevolvingCreditIllustration onCancel={onCancel} />
        </TabsPanel>
      )}
    </Tabs>
  );
};

export default EditProductForms;
