import React from 'react';

import { Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditUserGroupForms } from 'containers/Administration/Permission/UsersGroup/forms';

interface EditUsersGroupModalProps extends WithModalProps {
  groupName: string;
  institutionName: string;
}

const modalName = modalNamesConst.EDIT_USERS_GROUP;

const EditUsersGroupModal: React.FC<EditUsersGroupModalProps> = ({
  closeModal,
  groupName,
  institutionName,
}) => {
  const currentName = React.useMemo(
    () => (groupName && institutionName) ? `: "${groupName}" (${institutionName})` : '',
    [groupName, institutionName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Edit User Group${currentName}`}
      minContainerHeight={550}
    >
      <EditUserGroupForms onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(EditUsersGroupModal));
