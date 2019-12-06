import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { ProductAuxiliaryCounters } from 'containers/ProductDesigner/Products/components';

import { HandleUpdateProductAuxCounters } from 'store/domains';

interface AuxiliaryCountersFormProps extends ExternalSpinnerProps {
  currentProductId: number;
  updateProductAuxCounters: HandleUpdateProductAuxCounters;
  onCancel?: () => void;
}

type AuxiliaryCountersFormAllProps = AuxiliaryCountersFormProps &
  InjectedFormProps<{}, AuxiliaryCountersFormProps>;

const AuxiliaryCountersForm: React.FC<AuxiliaryCountersFormAllProps> = ({
  currentProductId,
  updateProductAuxCounters,
  handleSubmit,
  onCancel,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateProductAuxCounters({
      ...data,
      id: currentProductId,
    })),
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
})(withSpinner()(AuxiliaryCountersForm));
