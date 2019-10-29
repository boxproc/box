import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { ProductAprs } from 'containers/ProductDesigner/Products/components';

interface AprsFormProps { }

type AprsFormAllProps = AprsFormProps & InjectedFormProps<{}, AprsFormProps>;

const AprsForm: React.FC<AprsFormAllProps> = ({
  handleSubmit,
  pristine,
  dirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mb="10px">
        <Flex alignItems="flex-end">
          <ProductAprs />
          <Box pb="20px">
            <Button
              text="add APR"
              iconName={iconNamesConst.PLUS}
              onClick={() => console.log('--- adding apr')}
              withConfirmation={dirty}
              disabled={pristine}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, AprsFormProps>({
  form: formNamesConst.PRODUCT_APRS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AprsForm);
