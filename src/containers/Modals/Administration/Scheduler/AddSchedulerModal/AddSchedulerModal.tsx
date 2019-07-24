import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import { CloseModal, HandleAddAdminSchedulerJob } from 'store/domains';

import DefineSchedulerJobForm from 'containers/Administration/Scheduler/DefineSchedulerJobForm';
import { SelectValues } from 'types';
interface AddSchedulerModalProps {
  closeModal: CloseModal;
  addAdminSchedulerJob: HandleAddAdminSchedulerJob;
  institutionsOptions: Array<SelectValues>;
}

const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
   closeModal,
   addAdminSchedulerJob,
   institutionsOptions,
}) => {
  return (
    <Modal
      name={modalNames.ADD_ADMIN_SCHEDULER}
      title="Add Scheduler Job"
      maxContainerWidth={800}
    >
      <DefineSchedulerJobForm
        onCancel={() => closeModal(modalNames.ADD_ADMIN_SCHEDULER)}
        defineAdminSchedulerJob={addAdminSchedulerJob}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddSchedulerModal);
