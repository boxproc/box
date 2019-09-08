import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Delimiter';

import { formNames } from 'consts';

import { ProductAuxiliaryCounters } from 'containers/ProductDesigner/Products/components';

interface ProductAuxiliaryCountersFormProps {
  onCancel?: () => void;
}

type ProductAuxiliaryCountersFormAllProps = ProductAuxiliaryCountersFormProps &
  InjectedFormProps<{}, ProductAuxiliaryCountersFormProps>;

const ProductAuxiliaryCountersForm: React.FC<ProductAuxiliaryCountersFormAllProps> = ({
  handleSubmit,
  onCancel,
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
      />
    </form>
  );
};

export default reduxForm<{}, ProductAuxiliaryCountersFormProps>({
  form: formNames.PRODUCT_AUXILIARY_COUNTERS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductAuxiliaryCountersForm);
