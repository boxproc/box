import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { AdminInterfaceItemDetailsPrepared, CloseModal } from 'store/domains';
import { SelectValues } from 'types';
import InterfaceForm from '../../forms/InterfaceForm';

interface EditAccountModalProps {
  closeModal: CloseModal;
  adminCurrentInterface: Partial<AdminInterfaceItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
}

const modalName = modalNames.EDIT_ADMIN_INTERFACE;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  adminCurrentInterface,
  institutionsOptions,
}) => {

  return (
    <Modal
      title="Edit Interface"
      name={modalName}
      maxContainerWidth={980}
      minContainerHeight={400}
    >
      <InterfaceForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        initialValues={adminCurrentInterface}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default EditAccountModal;
