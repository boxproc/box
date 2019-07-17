import React from 'react';

import { Button } from 'components/Buttons/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { Hr } from 'components/Text';

import { modalNames } from 'consts';

import { CloseModal, HandleDeleteAdminSchedulerJob } from 'store/domains';


interface EditSchedulerModalProps {
  closeModal: CloseModal;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  schedulerJobId: any,
}

// eslint-disable-next-line
const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  // closeModal,
  deleteAdminSchedulerJob,
  schedulerJobId,
}) => {
  console.log('---schedulerJobId', schedulerJobId.id);
  const id = schedulerJobId.id;
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
        onClick={() => deleteAdminSchedulerJob(id.toString())}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditSchedulerModal);
