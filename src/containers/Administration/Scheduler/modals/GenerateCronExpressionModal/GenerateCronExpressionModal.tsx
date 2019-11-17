import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Hr, Modal, OkCancelButtons, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { formNamesConst, modalNamesConst } from 'consts';

import { CronFields } from './CronFields';

import { cronExpressionGenerator } from './cronExpressionGenerator';
import { CronExpressionRadioTypes, CronValuesTypes } from './cronExpressionTypes';

import { ChangeFieldValue } from 'types';

interface GenerateCronExpressionModalProps extends WithModalProps {
  changeFormValue: ChangeFieldValue;
  formValues: Partial<CronValuesTypes>;
  cronRadioValues: CronExpressionRadioTypes;
}

type GenerateCronExpressionModalAllProps = GenerateCronExpressionModalProps
  & InjectedFormProps<{}, GenerateCronExpressionModalProps>;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  font-size: 14px;

  .description {
    margin-top: 5px;
    font-size: 12px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const modalName = modalNamesConst.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<GenerateCronExpressionModalAllProps> = ({
  changeFormValue,
  closeModal,
  formValues,
  cronRadioValues,
}) => {
  const [cronExpression, setCronExpression] = React.useState(null);

  const handleCloseModal = React.useCallback(
    () => {
      closeModal(modalName);
    },
    [closeModal]
  );

  const handleApplyCronExpression = React.useCallback(
    () => {
      if (cronExpression) {
        changeFormValue(
          formNamesConst.DEFINE_SCHEDULER_JOB,
          'cronExpression',
          cronExpression.value
        );
      }
      handleCloseModal();
    },
    [cronExpression, changeFormValue, handleCloseModal]
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
      minContainerHeight={580}
    >
      <form>
        <Tabs>
          <TabsPanel title="Seconds">
            <CronFields
              name="Second"
              radioValue={cronRadioValues.cronSecond}
            />
          </TabsPanel>
          <TabsPanel title="Minutes">
            <CronFields
              name="Minute"
              radioValue={cronRadioValues.cronMinute}
            />
          </TabsPanel>
          <TabsPanel title="Hours">
            <CronFields
              name="Hour"
              radioValue={cronRadioValues.cronHour}
            />
          </TabsPanel>
          <TabsPanel title="Day">
            <CronFields
              name="Day"
              radioValue={cronRadioValues.cronDay}
            />
          </TabsPanel>
          <TabsPanel title="Month">
            <CronFields
              name="Month"
              radioValue={cronRadioValues.cronMonth}
            />
          </TabsPanel>
          <TabsPanel title="Year">
            <CronFields
              name="Year"
              radioValue={cronRadioValues.cronYear}
            />
          </TabsPanel>
        </Tabs>
      </form>
      <Hr />
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {cronExpression && (
          <ResultWrapper>
            <div><b>Cron Expression:</b> {cronExpression.value}</div>
            <div className="description">{cronExpression.description}</div>
          </ResultWrapper>
        )}
        <OkCancelButtons
          okText="Apply"
          cancelText="Cancel"
          onOk={handleApplyCronExpression}
          onCancel={handleCloseModal}
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
