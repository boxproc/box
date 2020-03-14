import React from 'react';

import { Modal, ProductImages, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { AccountStatements, Cards } from 'containers/Ledger/Accounts/components';
import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { LedgerAccountItemDetailsPrepared } from 'store/domains';

interface EditAccountModalProps extends WithModalProps {
  currentAccountAlias: string;
  currentAccount: Partial<LedgerAccountItemDetailsPrepared>;
  currentAccountAuxCounters: Partial<LedgerAccountItemDetailsPrepared>;
  currentProductType: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  currentAccountAlias,
  currentAccount,
  currentAccountAuxCounters,
  currentProductType,
  isFormDirty,
  isReadOnly,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const accountAlias = currentAccountAlias ? `: ${currentAccountAlias}` : '';

      return `Account${accountAlias}`;
    },
    [currentAccountAlias]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      containerWidth={1010}
      minContainerHeight={600}
      withCloseConfirmation={isFormDirty}
      TitleIcon={ProductImages[currentProductType]}
    >
      <Tabs>
        <TabsPanel
          title="Account information"
          hasTabs={true}
        >
          <AccountForm
            onCancel={handleOnCancel}
            isEditMode={true}
            isReadOnly={isReadOnly}
            initialValues={currentAccount}
            currentAccountAuxCounters={currentAccountAuxCounters}
          />
        </TabsPanel>
        <TabsPanel title="Cards">
          <Cards
            onCancel={handleOnCancel}
            isReadOnly={isReadOnly}
          />
        </TabsPanel>
        <TabsPanel title="Statements">
          <AccountStatements onCancel={handleOnCancel} />
        </TabsPanel>
      </Tabs>
    </Modal>
  );
};

export default withModal(EditAccountModal);
