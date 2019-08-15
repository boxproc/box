import React from 'react';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { modalNames } from 'consts';

import { DefineSchedulerJobForm } from 'containers/Administration/Scheduler/forms';
import {
  AdminSchedulerEditableItem,
  CloseModal,
  HandleDeleteAdminSchedulerJob,
  HandleUpdateAdminSchedulerJob
} from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  updateAdminSchedulerJob: HandleUpdateAdminSchedulerJob;
  schedulerJobId: number | string;
  schedulerJobValues: AdminSchedulerEditableItem;
}

const modalName = modalNames.EDIT_ADMIN_SCHEDULER;

const EditSchedulerModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  deleteAdminSchedulerJob,
  schedulerJobId,
  updateAdminSchedulerJob,
  schedulerJobValues,
}) => {
  return (
    <Modal
      name={modalName}
      title="Edit"
    >
      <DefineSchedulerJobForm
        onCancel={() => closeModal(modalName)}
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
