import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal, Paragraph, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { CronFields } from './CronFields';

import { formNamesConst, modalNamesConst } from 'consts';

import { ChangeFieldValue } from 'types';
import { cronExpressionGenerator } from './cronExpressionGenerator';

interface GenerateCronExpressionModalProps extends WithModalProps {
  changeFormValue: ChangeFieldValue;
  formValues: any;
}

type GenerateCronExpressionModalAllProps = GenerateCronExpressionModalProps
  & InjectedFormProps<{}, GenerateCronExpressionModalProps>;

const modalName = modalNamesConst.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<GenerateCronExpressionModalAllProps> = ({
  changeFormValue,
  closeModal,
  formValues,
}) => {
  const [cronExpression, setCronExpression] = React.useState(null);

  const handleCloseModal = React.useCallback(
    () => {
      if (cronExpression) {
        changeFormValue(formNamesConst.DEFINE_SCHEDULER_JOB, 'cronExpression', cronExpression);
      }
      closeModal(modalName);
    },
    [closeModal, cronExpression, changeFormValue]
  );

  React.useEffect(
    () => {
      if (formValues) {
        const expression = cronExpressionGenerator(formValues);

        setCronExpression(expression);
      }
    },
    [formValues]
  );

  return (
    <Modal
      name={modalName}
      title="Generate Cron Expression"
      maxContainerWidth={800}
      minContainerHeight={500}
    >
      <form>
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
      </form>
      <Hr />
      <Flex
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Paragraph><b>Cron Expression:</b> {cronExpression}</Paragraph>
        <Button
          text="Apply"
          onClick={handleCloseModal}
        />
      </Flex>
    </Modal>
  );
};

export default reduxForm<{}, GenerateCronExpressionModalProps>({
  form: formNamesConst.GENERATE_CRON_EXPRESSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withModal(GenerateCronExpressionModal));
