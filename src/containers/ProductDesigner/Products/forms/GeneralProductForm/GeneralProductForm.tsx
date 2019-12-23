import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  Button,
  CheckedBoxIcon,
  ExternalSpinnerProps,
  Hr,
  Label,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { ProductGeneralInfo } from 'containers/ProductDesigner/Products/components';

import { HandleDeleteProduct, HandleGetProduct, HandleUpdateProduct } from 'store/domains';
import { SelectValues } from 'types';

interface GeneralProductFormProps extends ExternalSpinnerProps {
  getProduct: HandleGetProduct;
  updateProduct: HandleUpdateProduct;
  deleteProduct: HandleDeleteProduct;
  currentInstitution: SelectValues;
  isProductOverride: boolean;
  onCancel?: () => void;
  currentProductName: string;
  isReadOnly: boolean;
}

type GeneralProductFormAllProps = GeneralProductFormProps &
  InjectedFormProps<{}, GeneralProductFormProps>;

const GeneralProductForm: React.FC<GeneralProductFormAllProps> = ({
  getProduct,
  deleteProduct,
  updateProduct,
  handleSubmit,
  onCancel,
  dirty,
  pristine,
  isProductOverride,
  currentInstitution,
  currentProductName,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getProduct();
    },
    [getProduct]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProduct),
    [handleSubmit, updateProduct]
  );

  return (
    <React.Fragment>
      {isProductOverride && (
        <Flex alignItems="flex-start">
          <Box mr="7px" mt="5px">
            <CheckedBoxIcon />
          </Box>
          <Box mt="5px">
            <Label>Product override</Label>
          </Box>
        </Flex>
      )}
      <form onSubmit={isReadOnly ? null : handleSubmitForm}>
        <ProductGeneralInfo
          isEditMode={true}
          currentInstitution={currentInstitution}
          isReadOnly={isReadOnly}
        />
        <Hr />
        <Flex
          alignItems="center"
          justifyContent="space-between"
        >
          <div>
            {!isReadOnly && (
              <Button
                text="delete"
                iconName={iconNamesConst.DELETE}
                type="reset"
                withConfirmation={true}
                confirmationText={
                  isProductOverride
                    ? `Delete product override: "${currentProductName}"?`
                    : `Delete product: "${currentProductName}"?`
                }
                onClick={deleteProduct}
              />
            )}
          </div>
          <OkCancelButtons
            okText="Save"
            cancelText="Close"
            onCancel={onCancel}
            rightPosition={true}
            withCancelConfirmation={dirty}
            disabledOk={pristine}
            hideOk={isReadOnly}
          />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, GeneralProductFormProps>({
  form: formNamesConst.GENERAL_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(GeneralProductForm));
