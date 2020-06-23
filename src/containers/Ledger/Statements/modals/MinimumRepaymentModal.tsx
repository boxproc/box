import React from 'react';

import { Modal } from 'components';
import { modalNamesConst } from 'consts';
import { IWithModal, withModal } from 'HOCs';
import { MinimumRepaymentForm } from './../forms';

interface IMinimumRepaymentModal extends IWithModal { }

const modalName = modalNamesConst.MINIMUM_REPAYMENT;

const MinimumRepaymentModal: React.FC<IMinimumRepaymentModal> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Change Minimum Amount due Repayment"
      containerWidth="320px"
    >
      <MinimumRepaymentForm
        initialValues={{
          minimumRepayment: 10.00,
          repaymentDate: '27/06/2020',
        }}
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default withModal(MinimumRepaymentModal);
