import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { CurrencyRateForm } from './../../forms';

interface IAddCurrencyRateModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_CURRENCY_RATE;

const AddCurrencyRateModal: React.FC<IAddCurrencyRateModal> = ({
  closeModal,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add Currency Rate"
      containerWidth="500px"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <CurrencyRateForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddCurrencyRateModal);
