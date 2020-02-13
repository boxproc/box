import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { SystemPropertyForm } from 'containers/Administration/SystemProperties/forms';

import { HandleAddAdminSysProp } from 'store/domains';

interface AddSystemPropertyModalProps extends WithModalProps {
  addAdminSysProp: HandleAddAdminSysProp;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_SYSTEM_PROPERTY;

const AddSystemPropertyModal: React.FC<AddSystemPropertyModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add System Property"
      containerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <SystemPropertyForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddSystemPropertyModal);
