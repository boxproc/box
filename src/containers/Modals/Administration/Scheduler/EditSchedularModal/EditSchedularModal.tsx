import React from 'react';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { modalNames } from 'consts';

import AddSchedulerJobForm from 'containers/Administration/Scheduler/DefineSchedulerJobForm';
import { CloseModal,
   HandleDeleteAdminSchedulerJob,
   HandleUpdateAdminSchedulerJob
   } from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  updateAdminSchedulerJob: HandleUpdateAdminSchedulerJob;
  schedulerJobId: number | string;
  schedulerJobValues: any;
}

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  deleteAdminSchedulerJob,
  schedulerJobId,
  updateAdminSchedulerJob,
  schedulerJobValues,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_ADMIN_SCHEDULER}
      title="Edit"
      maxContainerWidth={700}
    >
      <AddSchedulerJobForm
        onCancel={() => closeModal(modalNames.EDIT_ADMIN_SCHEDULER)}
        defineAdminSchedulerJob={updateAdminSchedulerJob}
        initialValues={schedulerJobValues}
        isDisabledInstitutions={true}

      />
      <Hr />
      <Button
        text="delete"
        iconName="delete"
        onClick={() => deleteAdminSchedulerJob(schedulerJobId)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditSchedulerModal);
