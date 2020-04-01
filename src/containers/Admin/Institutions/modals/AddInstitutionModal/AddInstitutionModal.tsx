import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { InstitutionForm } from '../../forms';

interface IAddInstitutionModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_INSTITUTION;

const AddInstitutionModal: React.FC<IAddInstitutionModal> = ({
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
      containerWidth="550px"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <InstitutionForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddInstitutionModal);
