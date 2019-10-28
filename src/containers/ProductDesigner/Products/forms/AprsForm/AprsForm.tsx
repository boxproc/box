import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, Hr, OkCancelButtons } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { ProductAprs } from 'containers/ProductDesigner/Products/components';

interface AprsFormProps {
  onCancel?: () => void;
}

type AprsFormAllProps = AprsFormProps & InjectedFormProps<{}, AprsFormProps>;

const AprsForm: React.FC<AprsFormAllProps> = ({
  handleSubmit,
  onCancel,
  pristine,
  dirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductAprs />
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          text="delete"
          iconName={iconNamesConst.DELETE}
          type="reset"
          withConfirmation={true}
          confirmationText="Delete APR?"
          onClick={() => console.log('deleting apr')}
        />
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          rightPosition={true}
          disabledOk={pristine}
          withCancelConfirmation={dirty}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, AprsFormProps>({
  form: formNamesConst.PRODUCT_APRS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AprsForm);
