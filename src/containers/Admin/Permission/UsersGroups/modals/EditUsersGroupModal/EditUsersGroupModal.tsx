import React from 'react';

import { Modal, withSpinner } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { EditUsersGroupForms } from './../../forms';

interface IEditUsersGroupModal extends IWithModal {
  groupName: string;
  institutionName: string;
  isGeneralInfoFormDirty: boolean;
  isUsersGroupMembersFormDirty: boolean;
  isGroupPermissionFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_USERS_GROUP;

const EditUsersGroupModal: React.FC<IEditUsersGroupModal> = ({
  closeModal,
  groupName,
  institutionName,
  isGeneralInfoFormDirty,
  isUsersGroupMembersFormDirty,
  isGroupPermissionFormDirty,
  isReadOnly,
}) => {
  const modalTitle = React.useMemo(
    () => `Edit User Group: "${groupName}"${institutionName ? ` (${institutionName})` : ''}`,
    [groupName, institutionName]
  );

  const isAnyFormDirty = React.useMemo(
    () => {
      return isGeneralInfoFormDirty || isUsersGroupMembersFormDirty || isGroupPermissionFormDirty;
    },
    [isGeneralInfoFormDirty, isUsersGroupMembersFormDirty, isGroupPermissionFormDirty]
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
      minContainerHeight="580px"
      withCloseConfirmation={isAnyFormDirty}
    >
      <EditUsersGroupForms
        onCancel={handleOnCancel}
        isAnyFormDirty={isAnyFormDirty}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(EditUsersGroupModal));
