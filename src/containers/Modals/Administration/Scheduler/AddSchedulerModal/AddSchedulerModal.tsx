import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import AddSchedulerJobForm from 'containers/Administration/Scheduler/AddSchedulerJobForm';
import { CloseModal } from 'store/domains';
import { ParsedSelectValues } from 'types';
interface AddSchedulerModalProps {
  closeModal: CloseModal;
  addAdminSchedulerJob: any;
  institutionsOptions: Array<ParsedSelectValues>;
}

// eslint-disable-next-line
const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
   // tslint:disable-next-line: no-shadowed-variable
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
      <AddSchedulerJobForm
        onCancel={() => closeModal(modalNames.ADD_ADMIN_SCHEDULER)}
        addAdminSchedulerJob={addAdminSchedulerJob}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddSchedulerModal);
