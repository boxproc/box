import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { InstitutionForm } from 'containers/Administration/Institutions/forms';

interface AddInstitutionModalProps extends WithModalProps {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_INSTITUTION;

const AddInstitutionModal: React.FC<AddInstitutionModalProps> = ({
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
      title="Add Institution"
      containerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <InstitutionForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddInstitutionModal);
