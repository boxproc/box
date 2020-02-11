import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { AccountStatements, Cards } from 'containers/Ledger/Accounts/components';
import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { LedgerAccountItemDetailsPrepared } from 'store/domains';

import { renderProductIcon } from 'utils/renderProductIcon';

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

  const TitleIcon = React.useMemo(
    () => currentProductType && renderProductIcon(currentProductType),
    [currentProductType]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      maxContainerWidth={1100}
      minContainerHeight={600}
      withCloseConfirmation={isFormDirty}
      TitleIcon={TitleIcon}
    >
      <Tabs>
        <TabsPanel
          title="Account information"
          hasTabs={true}
        >
          <AccountForm
            onCancel={handleOnCancel}
            mode="edit"
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
