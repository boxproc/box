import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { CronFields } from './CronFields';

import { formNamesConst, modalNamesConst } from 'consts';

import { ChangeFieldValue } from 'types';

interface GenerateCronExpressionModalProps extends WithModalProps {
  change: ChangeFieldValue;
  currentCronExpression: string;
}

type GenerateCronExpressionModalAllProps = GenerateCronExpressionModalProps
  & InjectedFormProps<{}, GenerateCronExpressionModalProps>;

const modalName = modalNamesConst.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<GenerateCronExpressionModalAllProps> = ({
  change,
  closeModal,
  handleSubmit,
  currentCronExpression,
}) => {
  // const handleCloseModal = React.useCallback(
  //   () => closeModal(modalName),
  //   [closeModal]
  // );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <Modal
      name={modalName}
      title="Generate Cron Expression"
      maxContainerWidth={800}
      minContainerHeight={500}
    >
      {/* <CronGenerator
        formName={formNamesConst.DEFINE_SCHEDULER_JOB}
        fieldName="cronExpression"
        onChange={change}
        action={handleCloseModal}
        initialValue={currentCronExpression}
      /> */}
      <form onSubmit={handleSubmitForm}>
        <Tabs>
          <TabsPanel title="Seconds">
            <CronFields name="Second" />
          </TabsPanel>
          <TabsPanel title="Minutes">
            <CronFields name="Minute" />
          </TabsPanel>
          <TabsPanel title="Hours">
            <CronFields name="Hour" />
          </TabsPanel>
          <TabsPanel title="Day">
            <CronFields name="Day" />
          </TabsPanel>
          <TabsPanel title="Month">
            <CronFields name="Month" />
          </TabsPanel>
          <TabsPanel title="Year">
            <CronFields name="Year" />
          </TabsPanel>
        </Tabs>
        <Hr />
        <Flex justifyContent="flex-end">
          <Button text="Generate Cron Expression" />
        </Flex>
      </form>
    </Modal>
  );
};

export default reduxForm<{}, GenerateCronExpressionModalProps>({
  form: formNamesConst.GENERATE_CRON_EXPRESSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withModal(GenerateCronExpressionModal));
