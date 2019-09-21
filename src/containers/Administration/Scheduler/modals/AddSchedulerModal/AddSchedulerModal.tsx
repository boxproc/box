import React from 'react';

import { Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { DefineSchedulerJobForm } from 'containers/Administration/Scheduler/forms';

import { AdminSchedulerEditableItem, HandleAddAdminSchedulerJob } from 'store/domains';

import { SelectValues } from 'types';

interface AddSchedulerModalProps extends WithModalProps {
  addAdminSchedulerJob: HandleAddAdminSchedulerJob;
  schedulerJobValues: AdminSchedulerEditableItem;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_SCHEDULER;

const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
  closeModal,
  openModal,
  addAdminSchedulerJob,
  institutionsOptions,
  isFormDirty,
  schedulerJobValues,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );
  return (
    <Modal
      name={modalName}
      title="Add Scheduler Job"
      withCloseConfirmation={isFormDirty}
    >
      <DefineSchedulerJobForm
        onCancel={handleOnCancel}
        openModal={openModal}
        defineAdminSchedulerJob={addAdminSchedulerJob}
        institutionsOptions={institutionsOptions}
        mode="add"
        initialValues={schedulerJobValues}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(
  withModal(AddSchedulerModal)
);
