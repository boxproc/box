import React from 'react';

import { CronGenerator, Modal } from 'components';

import { formNamesConst, modalNamesConst } from 'consts';
import { withModal, WithModalProps } from 'HOCs';

import { ChangeFieldValue } from 'types';

interface GenerateCronExpressionModalProps extends WithModalProps {
  change: ChangeFieldValue;
  currentCronExpression: string;
}

const modalName = modalNamesConst.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<GenerateCronExpressionModalProps> = ({
  change,
  closeModal,
  currentCronExpression,
}) => {
  const handleCloseModal = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Generate Cron Expression"
      maxContainerWidth={670}
    >
      <CronGenerator
        formName={formNamesConst.DEFINE_SCHEDULER_JOB}
        fieldName="cronExpression"
        onChange={change}
        action={handleCloseModal}
        initialValue={currentCronExpression}
      />
    </Modal>
  );
};

export default withModal(GenerateCronExpressionModal);
