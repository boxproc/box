import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, Hr, Modal, OkCancelButtons, Tabs, TabsPanel } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { formNamesConst, modalNamesConst } from 'consts';

import { CronFields } from './CronFields';

import { cronExpressionGenerator } from './cronExpressionGenerator';
import { ICronExpressionRadio, ICronValues } from './cronExpressionTypes';

import { TChangeFieldValue } from 'types';

interface IGenerateCronExpressionModal {
  changeFormValue: TChangeFieldValue;
  formValues: Partial<ICronValues>;
  cronRadioValues: ICronExpressionRadio;
}

type TGenerateCronExpressionModal = IGenerateCronExpressionModal & IWithModal
  & InjectedFormProps<{}, IGenerateCronExpressionModal>;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  font-size: 14px;

  .description {
    margin: 2px 0 3px;
    font-size: 12px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const modalName = modalNamesConst.GENERATE_CRON_EXPRESSION;

const GenerateCronExpressionModal: React.FC<TGenerateCronExpressionModal> = ({
  changeFormValue,
  closeModal,
  cronRadioValues,
  dirty,
  formValues,
  pristine,
  reset,
}) => {
  const [cronExpression, setCronExpression] = React.useState(null);

  React.useEffect(
    () => {
      if (formValues) {
        const expression = cronExpressionGenerator(formValues);

        setCronExpression(expression);
      }
    },
    [formValues]
  );

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
          formNamesConst.SCHEDULER,
          'cronExpression',
          cronExpression.value
        );
      }
      handleCloseModal();
    },
    [cronExpression, changeFormValue, handleCloseModal]
  );

  return (
    <Modal
      name={modalName}
      title="Generate Cron Expression"
      containerWidth="800px"
      minContainerHeight="560px"
      withCloseConfirmation={dirty}
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
          <div>
            <ResultWrapper>
              <div><b>Cron Expression:</b> {cronExpression.value}</div>
              <div className="description">{cronExpression.description}</div>
            </ResultWrapper>
            <Button
              text="Reset Values"
              type="reset"
              disabled={pristine}
              onClick={reset}
            />
          </div>
        )}
        <OkCancelButtons
          okText="Apply"
          cancelText="Cancel"
          onOk={handleApplyCronExpression}
          onCancel={handleCloseModal}
          withCancelConfirmation={dirty}
        />
      </Flex>
    </Modal>
  );
};

export default reduxForm<{}, IGenerateCronExpressionModal>({
  form: formNamesConst.GENERATE_CRON_EXPRESSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withModal(GenerateCronExpressionModal));
