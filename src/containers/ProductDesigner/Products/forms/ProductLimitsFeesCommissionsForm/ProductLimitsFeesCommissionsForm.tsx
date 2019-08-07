import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

// tslint:disable-next-line: max-line-length
import { ProductLimitsFeesCommissions } from 'containers/ProductDesigner/Products/productComponents';

interface ProductLimitsFeesCommissionsFormProps {
  onCancel?: () => void;
}

type ProductLimitsFeesCommissionsFormAllProps = ProductLimitsFeesCommissionsFormProps &
  InjectedFormProps<{}, ProductLimitsFeesCommissionsFormProps>;

const ProductLimitsFeesCommissionsForm: React.FC<ProductLimitsFeesCommissionsFormAllProps> = ({
  handleSubmit,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductLimitsFeesCommissions />
      <Hr />
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <OkCancelButtons
          okText="Save Limits Fees and Commissions"
          cancelText="Close"
          onCancel={onCancel}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, ProductLimitsFeesCommissionsFormProps>({
  form: formNames.PRODUCT_LIMITS_AND_COMMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductLimitsFeesCommissionsForm);
