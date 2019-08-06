import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

// tslint:disable-next-line: max-line-length
import ProductAuxiliaryCounters from 'containers/ProductDesigner/Products/productComponents/ProductAuxiliaryCounters';

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
        okText="Save Auxiliary counters"
        cancelText="Close"
        onCancel={onCancel}
      />
    </form>
  );
};

export default reduxForm<{}, ProductAuxiliaryCountersFormProps>({
  form: formNames.PRODUCT_AUXILIARY_COUNTERS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductAuxiliaryCountersForm);
