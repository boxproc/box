import React from 'react';

import { Modal, ProductImages, Tabs, TabsPanel } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { AccountStatements, Cards } from './../../components';
import { AccountForm } from './../../forms';

import { IAccountDetails } from 'store';

interface IEditAccountModal extends IWithModal {
  currentAccAlias: string;
  currentAcc: Partial<IAccountDetails>;
  currentAccAuxCounters: Partial<IAccountDetails>;
  currentProductType: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_ACCOUNT;

const EditAccountModal: React.FC<IEditAccountModal> = ({
  closeModal,
  currentAccAlias,
  currentAcc,
  currentAccAuxCounters,
  currentProductType,
  isFormDirty,
  isReadOnly,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const accountAlias = currentAccAlias ? `: ${currentAccAlias}` : '';

      return `Account${accountAlias}`;
    },
    [currentAccAlias]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="1010px"
      minContainerHeight="600px"
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
            initialValues={currentAcc}
            currentAccAuxCounters={currentAccAuxCounters}
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
