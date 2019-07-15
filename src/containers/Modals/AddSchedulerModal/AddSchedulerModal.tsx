import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import { CloseModal } from 'store/domains';

interface AddSchedulerModalProps {
  closeModal: CloseModal;
}

const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
  // closeModal,
}) => {
  return (
    <Modal
      name={modalNames.ADD_SCHEDULER}
      title="Add New"
      maxContainerWidth={700}
    >
      Add New
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddSchedulerModal);
