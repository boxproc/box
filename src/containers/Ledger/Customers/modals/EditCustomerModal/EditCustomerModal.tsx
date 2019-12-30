import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { CustomerForm, RepaymentDebitCardsForm } from 'containers/Ledger/Customers/forms';

interface EditCustomerModalProps extends WithModalProps {
  isFormDirty: boolean;
  currentCustomerName: string;
}

const modalName = modalNamesConst.EDIT_LEDGER_CUSTOMER;

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  closeModal,
  isFormDirty,
  isReadOnly,
  currentCustomerName,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Edit Customer: ${currentCustomerName}`}
      maxContainerWidth={1010}
      minContainerHeight={600}
      withCloseConfirmation={isFormDirty}
    >
      <Tabs>
        <TabsPanel title="General">
          <CustomerForm
            isEditMode={true}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel title="Repayment Debit Cards">
          <RepaymentDebitCardsForm />
        </TabsPanel>
        {/* <TabsPanel title="Repayment Direct Debits">1</TabsPanel> */}
      </Tabs>
    </Modal>
  );
};

export default withModal(EditCustomerModal);
