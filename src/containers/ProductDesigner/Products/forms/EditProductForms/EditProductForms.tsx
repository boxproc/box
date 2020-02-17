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

import { RepaymentHierarchyTable } from 'containers/ProductDesigner/Products/components';

import {
  LoanIllustration,
  RevolvingCreditIllustration,
} from 'containers/ProductDesigner/Products/illustration';

import {
  illustrationInitValuesLoan,
  illustrationInitValuesRevCredit,
} from 'containers/ProductDesigner/Products/consts';

import { productTypesCodes } from 'consts';

interface EditProductFormsProps {
  currentProductType: string | number;
  currentProductId: number;
  isProductOverride: boolean;
  isAnyFormDirty: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
}

const EditProductForms: React.FC<EditProductFormsProps> = ({
  currentProductType,
  currentProductId,
  isProductOverride,
  isAnyFormDirty,
  onCancel,
  isReadOnly,
}) => {
  const isLoanType = React.useMemo(
    () => currentProductType === productTypesCodes.LOAN,
    [currentProductType]
  );

  const isRevolvingCreditType = React.useMemo(
    () => currentProductType === productTypesCodes.REVOLVING_CREDIT,
    [currentProductType]
  );

  const isIllustrationTab = React.useMemo(
    () => isLoanType || isRevolvingCreditType,
    [isLoanType, isRevolvingCreditType]
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
        title="Repayment Hierarchy"
      >
        <RepaymentHierarchyTable />
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
      {isIllustrationTab && (
        <TabsPanel
          title="Illustration"
          withConfirmation={isAnyFormDirty}
        >
          {isLoanType && (
            <LoanIllustration
              productId={currentProductId}
              initialFormValues={illustrationInitValuesLoan}
              onCancel={onCancel}
            />
          )}
          {isRevolvingCreditType && (
            <RevolvingCreditIllustration
              productId={currentProductId}
              initialFormValues={illustrationInitValuesRevCredit}
              onCancel={onCancel}
            />
          )}
        </TabsPanel>
      )}
    </Tabs>
  );
};

export default EditProductForms;
