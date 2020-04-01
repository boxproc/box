import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { ProductAuxiliaryCounters } from 'containers/ProductDesigner/Products/components';

import { THandleUpdateProductAuxCounters } from 'store';

interface IAuxiliaryCountersForm extends ISpinner {
  currentProductId: number;
  updateProductAuxCounters: THandleUpdateProductAuxCounters;
  onCancel?: () => void;
  isReadOnly: boolean;
}

type TAuxiliaryCountersForm = IAuxiliaryCountersForm &
  InjectedFormProps<{}, IAuxiliaryCountersForm>;

const AuxiliaryCountersForm: React.FC<TAuxiliaryCountersForm> = ({
  currentProductId,
  updateProductAuxCounters,
  handleSubmit,
  onCancel,
  pristine,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProductAuxCounters({
      ...data,
      id: currentProductId,
    })),
    [handleSubmit]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <ProductAuxiliaryCounters isReadOnly={isReadOnly} />
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

export default reduxForm<{}, IAuxiliaryCountersForm>({
  form: formNamesConst.PRODUCT_AUXILIARY_COUNTERS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AuxiliaryCountersForm));
