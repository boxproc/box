import React from 'react';

import { Modal } from 'components';
import { modalNamesConst } from 'consts';
import { IWithModal, withModal } from 'HOCs';
import { MinimumRepaymentForm } from './../../forms';

import { THandleChangeMinimumRepayment } from 'store';

interface IMinimumRepaymentModal extends IWithModal {
  changeMinimumRepayment: THandleChangeMinimumRepayment;
  isLoading: boolean;
  outstandingBalance: number;
  initialValues: {
    minimumRepayment: number;
    repaymentDate: string;
  };
}

const modalName = modalNamesConst.MINIMUM_REPAYMENT;

const MinimumRepaymentModal: React.FC<IMinimumRepaymentModal> = ({
  changeMinimumRepayment,
  closeModal,
  initialValues,
  isLoading,
  outstandingBalance,
}) => {

  const validateAmount = React.useCallback(
    (value: string | number) => {
      if (!value) {
        return undefined;
      }

      if (Number(value) < initialValues.minimumRepayment) {
        return 'Must be more than minimum amount';
      } else if (Number(value) > outstandingBalance) {
        return 'Cannot exceed outstanding balance';
      } else {
        return undefined;
      }
    },
    [initialValues.minimumRepayment, outstandingBalance]
  );

  return (
    <Modal
      name={modalName}
      title="Change Minimum Amount due Repayment"
      containerWidth="320px"
    >
      <MinimumRepaymentForm
        initialValues={initialValues}
        outstandingBalance={outstandingBalance}
        validateAmount={validateAmount}
        isLoading={isLoading}
        onCancel={() => closeModal(modalName)}
        changeMinimumRepayment={changeMinimumRepayment}
      />
    </Modal>
  );
};

export default withModal(MinimumRepaymentModal);
