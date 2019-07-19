import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import AddSchedulerJobForm from 'containers/Administration/Scheduler/AddSchedulerJobForm';
import { CloseModal, HandleAddAdminSchedulerJob } from 'store/domains';
interface AddSchedulerModalProps {
  closeModal: CloseModal;
  addAdminSchedulerJob: HandleAddAdminSchedulerJob;
}

// eslint-disable-next-line
const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
   // tslint:disable-next-line: no-shadowed-variable
   closeModal,
   addAdminSchedulerJob,

}) => {
  return (
    <Modal
      name={modalNames.ADD_ADMIN_SCHEDULER}
      title="Add Scheduler Job"
      maxContainerWidth={800}
    >
      <AddSchedulerJobForm
        onCancel={() => closeModal(modalNames.ADD_ADMIN_SCHEDULER)}
        addAdminSchedulerJob={addAdminSchedulerJob}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddSchedulerModal);
