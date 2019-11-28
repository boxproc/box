import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { GeneralLedger } from 'containers/ProductDesigner/Products/components';

import { HandleUpdateGeneralLedger } from 'store/domains';

interface GeneralLedgerFromProps extends ExternalSpinnerProps {
  currentProductId: number;
  updateGeneralLedger: HandleUpdateGeneralLedger;
  onCancel?: () => void;
}

type GeneralLedgerFromAllProps = GeneralLedgerFromProps &
  InjectedFormProps<{}, GeneralLedgerFromProps>;

const GeneralLedgerFrom: React.FC<GeneralLedgerFromAllProps> = ({
  currentProductId,
  updateGeneralLedger,
  handleSubmit,
  onCancel,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateGeneralLedger({
      ...data,
      id: currentProductId,
    })),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <GeneralLedger />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        disabledOk={pristine}
      />
    </form>
  );
};

export default reduxForm<{}, GeneralLedgerFromProps>({
  form: formNamesConst.PRODUCT_GENERAL_LEDGER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(GeneralLedgerFrom));
