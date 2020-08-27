import React from 'react';

import { Modal, withSpinner } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { SchedulerForm } from './../../forms';

import { ISchedulerJobEditable, THandleAddSchedulerJob } from 'store';
import { ISelectValue } from 'types';

interface IAddSchedulerModal extends IWithModal {
  addSchedulerJob: THandleAddSchedulerJob;
  currentSchedulerJob: ISchedulerJobEditable;
  institutionsOptions: Array<ISelectValue>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_SCHEDULER;

const AddSchedulerModal: React.FC<IAddSchedulerModal> = ({
  addSchedulerJob,
  closeModal,
  currentSchedulerJob,
  institutionsOptions,
  isFormDirty,
  openModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add Scheduler Job"
      containerWidth="1000px"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <SchedulerForm
        onCancel={handleOnCancel}
        openModal={openModal}
        schedulerJobAction={addSchedulerJob}
        institutionsOptions={institutionsOptions}
        initialValues={currentSchedulerJob}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(AddSchedulerModal));
