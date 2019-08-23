import React from 'react';

import CronGenerator from 'components/CronGenerator';
import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { HandleSetGeneratedCronExpression } from 'store/domains';

interface GenerateCronExpressionModalProps {
  currentCronExpression: string;
  setGeneratedCronExpression: HandleSetGeneratedCronExpression;
  generatedCronExpression: string;
}

const modalName = modalNames.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<GenerateCronExpressionModalProps> = ({
  currentCronExpression,
  setGeneratedCronExpression,
  generatedCronExpression,
}) => {
  return (
    <Modal
      name={modalName}
      title="Generate Cron Expression"
      maxContainerWidth={670}
    >
      <CronGenerator
        setValue={setGeneratedCronExpression}
        initialValue={generatedCronExpression ? generatedCronExpression : currentCronExpression}
      />
    </Modal>
  );
};

export default GenerateCronExpressionModal;
