import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { accountInitialFormValues } from './../../consts';
import { AccountForm } from './../../forms';

import { ISelectValue } from 'types';

interface IAddAccountModal extends IWithModal {
  institutionsOptions: Array<ISelectValue>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ACCOUNT;

const AddAccountModal: React.FC<IAddAccountModal> = ({
  institutionsOptions,
  isFormDirty,
  closeModal,
}) => {
  const initialValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions && institutionsOptions[0],
        ...accountInitialFormValues,
      };
    },
    [institutionsOptions]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add Account"
      containerWidth="1010px"
      minContainerHeight="510px"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <AccountForm
        initialValues={initialValues}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(AddAccountModal);
