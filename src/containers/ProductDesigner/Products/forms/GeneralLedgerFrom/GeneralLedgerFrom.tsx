import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { GeneralLedger } from 'containers/ProductDesigner/Products/components';

import { HandleUpdateGeneralLedger } from 'store';

interface GeneralLedgerFromProps extends ExternalSpinnerProps {
  currentProductId: number;
  updateGeneralLedger: HandleUpdateGeneralLedger;
  onCancel?: () => void;
  isReadOnly: boolean;
}

type GeneralLedgerFromAllProps = GeneralLedgerFromProps &
  InjectedFormProps<{}, GeneralLedgerFromProps>;

const GeneralLedgerFrom: React.FC<GeneralLedgerFromAllProps> = ({
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

export default reduxForm<{}, GeneralLedgerFromProps>({
  form: formNamesConst.PRODUCT_GENERAL_LEDGER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(GeneralLedgerFrom));
