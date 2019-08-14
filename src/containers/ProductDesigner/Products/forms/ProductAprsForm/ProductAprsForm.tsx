import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ProductAprs } from 'containers/ProductDesigner/Products/components';

interface ProductAprsFormProps {
  onCancel?: () => void;
}

type ProductAprsFormAllProps = ProductAprsFormProps &
  InjectedFormProps<{}, ProductAprsFormProps>;

const ProductAprsForm: React.FC<ProductAprsFormAllProps> = ({
  handleSubmit,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductAprs />
      <Hr />
      <OkCancelButtons
        okText="Save APRs"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
      />
    </form>
  );
};

export default reduxForm<{}, ProductAprsFormProps>({
  form: formNames.PRODUCT_LIMITS_AND_COMMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductAprsForm);
