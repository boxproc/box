import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, OkCancelButtons } from 'components';

import { formNamesConst } from 'consts';

import { ProductAuxiliaryCounters } from 'containers/ProductDesigner/Products/components';

interface AuxiliaryCountersFormProps {
  onCancel?: () => void;
}

type AuxiliaryCountersFormAllProps = AuxiliaryCountersFormProps &
  InjectedFormProps<{}, AuxiliaryCountersFormProps>;

const AuxiliaryCountersForm: React.FC<AuxiliaryCountersFormAllProps> = ({
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
      <ProductAuxiliaryCounters />
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

export default reduxForm<{}, AuxiliaryCountersFormProps>({
  form: formNamesConst.PRODUCT_AUXILIARY_COUNTERS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AuxiliaryCountersForm);
