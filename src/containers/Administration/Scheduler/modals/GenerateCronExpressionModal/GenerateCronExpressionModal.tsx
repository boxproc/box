import React from 'react';

import { CronGenerator, Modal } from 'components';

import { formNamesConst, modalNamesConst } from 'consts';
import { withModal, WithModalProps } from 'HOCs';

interface GenerateCronExpressionModalProps extends WithModalProps {
  change: (formName: string, fieldName: string, value: string) => void;
}

const modalName = modalNamesConst.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<GenerateCronExpressionModalProps> = ({
  change,
  closeModal,
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
        formName={formNamesConst.DEFINE_ADMIN_SCHEDULER_JOB}
        fieldName="cronExpression"
        onChange={change}
        action={handleCloseModal}
      />
    </Modal>
  );
};

export default withModal(GenerateCronExpressionModal);
