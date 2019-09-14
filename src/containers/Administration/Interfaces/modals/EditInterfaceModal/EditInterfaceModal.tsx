import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { AdminInterfaceItemDetailsPrepared, CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps {
  closeModal: CloseModal;
  adminCurrentInterface: Partial<AdminInterfaceItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_ADMIN_INTERFACE;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  adminCurrentInterface,
  institutionsOptions,
  isFormDirty,
}) => {

  return (
    <Modal
      maxContainerWidth={550}
      title="Edit Interface"
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      withCloseConfirmation={isFormDirty}
    >
      <InterfaceForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        initialValues={adminCurrentInterface}
        institutionsOptions={institutionsOptions}
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default EditAccountModal;
