import React from 'react';

import { Tabs, TabsPanel } from 'components';
import {
  AuxiliaryCountersForm,
  DetailsForm,
  GeneralLedgerFrom,
  GeneralProductForm,
  ProductRulesForm,
  RepaymentForm,
  ServicesForm,
} from 'containers/ProductDesigner/Products/forms';

import {
  Aprs,
  Fees,
  Rewards,
} from 'containers/ProductDesigner/Products/components';

import {
  LoanIllustration,
  RevolvingCreditIllustration,
} from 'containers/ProductDesigner/Products/illustration';

import {
  illustrationInitValuesLoan,
  illustrationInitValuesRevCredit,
} from 'containers/ProductDesigner/Products/consts';

import { productTypesConst } from 'consts';

interface IEditProductForms {
  currentProductId: number;
  currentProductType: string | number;
  isAnyFormDirty: boolean;
  isProductOverride: boolean;
  isReadOnly: boolean;
  onCancel: () => void;
}

const EditProductForms: React.FC<IEditProductForms> = ({
  currentProductId,
  currentProductType,
  isAnyFormDirty,
  isProductOverride,
  isReadOnly,
  onCancel,
}) => {
  const isLoanType = React.useMemo(
    () => currentProductType === productTypesConst.LOAN,
    [currentProductType]
  );

  const isRevolvingCreditType = React.useMemo(
    () => currentProductType === productTypesConst.REVOLVING_CREDIT,
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
        <DetailsForm
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
        <Aprs
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="Fees"
        withConfirmation={isAnyFormDirty}
      >
        <Fees
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="Rewards"
        withConfirmation={isAnyFormDirty}
      >
        <Rewards
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      {(isRevolvingCreditType || isLoanType) && (
        <TabsPanel title="Repayment">
          <RepaymentForm
            onCancel={onCancel}
            isReadOnly={true}
          />
        </TabsPanel>
      )}
      <TabsPanel
        title="Services"
        withConfirmation={isAnyFormDirty}
      >
        <ServicesForm
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
