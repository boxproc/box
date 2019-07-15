import React from 'react';

import { Button } from 'components/Buttons/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { Hr } from 'components/Text';

import { modalNames } from 'consts';

import { CloseModal } from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
}

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  // closeModal,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_SCHEDULER}
      title="Edit"
      maxContainerWidth={700}
    >

      <Hr />

      <Button
        text="delete"
        iconName="delete"
        transparent={true}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditSchedulerModal);
