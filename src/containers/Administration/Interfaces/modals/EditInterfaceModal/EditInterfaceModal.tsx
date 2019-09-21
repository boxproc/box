import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { AdminInterfaceItemDetailsPrepared } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps extends WithModalProps {
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
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      maxContainerWidth={550}
      title="Edit Interface"
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      withCloseConfirmation={isFormDirty}
    >
      <InterfaceForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={adminCurrentInterface}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
