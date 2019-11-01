import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, OkCancelButtons } from 'components';

import { formNamesConst } from 'consts';

import { GeneralLedger } from 'containers/ProductDesigner/Products/components';

interface GeneralLedgerFromProps {
  onCancel?: () => void;
}

type GeneralLedgerFromAllProps = GeneralLedgerFromProps &
  InjectedFormProps<{}, GeneralLedgerFromProps>;

const GeneralLedgerFrom: React.FC<GeneralLedgerFromAllProps> = ({
  handleSubmit,
  onCancel,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
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
})(GeneralLedgerFrom);
