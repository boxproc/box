import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { CurrencyRateForm } from './../../forms';

import { ICurrencyRateEditable } from 'store';

interface IEditCurrencyRateModal extends IWithModal {
  isFormDirty: boolean;
  currencyRate: ICurrencyRateEditable;
}

const modalName = modalNamesConst.EDIT_CURRENCY_RATE;

const EditCurrencyRateModal: React.FC<IEditCurrencyRateModal> = ({
  closeModal,
  isFormDirty,
  currencyRate,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title="Currency Rate"
      containerWidth="600px"
      withCloseConfirmation={isFormDirty}
    >
      <CurrencyRateForm
        initialValues={currencyRate}
        isEditMode={true}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(EditCurrencyRateModal);
