import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { InstitutionForm } from 'containers/Administration/Institutions/forms';

import { AdminInstitutionsItemDetailsPrepared } from 'store/domains';

interface EditInstitutionModalProps extends WithModalProps {
  currentInstitution: AdminInstitutionsItemDetailsPrepared;
  currentInstitutionName: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_INSTITUTION;

const EditInstitutionModal: React.FC<EditInstitutionModalProps> = ({
  closeModal,
  currentInstitution,
  currentInstitutionName,
  isFormDirty,
  isReadOnly,
}) => {
  const institutionName = React.useMemo(
    () => currentInstitutionName ? `: "${currentInstitutionName}"` : '',
    [currentInstitutionName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Edit Institution${institutionName}`}
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <InstitutionForm
        initialValues={currentInstitution}
        onCancel={handleOnCancel}
        isReadOnly={isReadOnly}
        mode="edit"
      />
    </Modal>
  );
};

export default withModal(EditInstitutionModal);
