import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { GeneralLedger } from 'containers/ProductDesigner/Products/components';

import { HandleUpdateGeneralLedger } from 'store';

interface IGeneralLedgerFrom extends ISpinner {
  currentProductId: number;
  updateGeneralLedger: HandleUpdateGeneralLedger;
  onCancel?: () => void;
  isReadOnly: boolean;
}

type TGeneralLedgerFrom = IGeneralLedgerFrom & InjectedFormProps<{}, IGeneralLedgerFrom>;

const GeneralLedgerFrom: React.FC<TGeneralLedgerFrom> = ({
  currentProductId,
  updateGeneralLedger,
  handleSubmit,
  onCancel,
  pristine,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateGeneralLedger({
      ...data,
      id: currentProductId,
    })),
    [handleSubmit]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <GeneralLedger isReadOnly={isReadOnly} />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, IGeneralLedgerFrom>({
  form: formNamesConst.PRODUCT_GENERAL_LEDGER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(GeneralLedgerFrom));
