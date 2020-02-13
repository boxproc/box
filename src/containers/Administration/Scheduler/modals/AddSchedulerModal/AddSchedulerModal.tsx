import React from 'react';

import { Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { SchedulerForm } from 'containers/Administration/Scheduler/forms';

import { AdminSchedulerEditableItem, HandleAddAdminSchedulerJob } from 'store/domains';

import { SelectValue } from 'types';

interface AddSchedulerModalProps extends WithModalProps {
  addSchedulerJob: HandleAddAdminSchedulerJob;
  schedulerJobValues: AdminSchedulerEditableItem;
  institutionsOptions: Array<SelectValue>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_SCHEDULER;

const AddSchedulerModal: React.FC<AddSchedulerModalProps> = ({
  closeModal,
  openModal,
  addSchedulerJob,
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
      containerWidth={740}
      withCloseConfirmation={isFormDirty}
    >
      <SchedulerForm
        onCancel={handleOnCancel}
        openModal={openModal}
        defineAdminSchedulerJob={addSchedulerJob}
        institutionsOptions={institutionsOptions}
        mode="add"
        initialValues={schedulerJobValues}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(AddSchedulerModal));
