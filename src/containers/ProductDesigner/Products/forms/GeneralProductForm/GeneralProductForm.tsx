import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  Button,
  CheckedBoxIcon,
  Hr,
  ISpinner,
  Label,
  OkCancelButtons,
  withSpinner,
} from 'components';
import { formNamesConst, iconNamesConst } from 'consts';
import { ProductGeneralInfo } from 'containers/ProductDesigner/Products/components';
import {
  THandleDeleteProduct,
  THandleGetProduct,
  THandleUpdateProduct,
} from 'store';
import { ISelectValue } from 'types';

interface IGeneralProductForm extends ISpinner {
  currentProductName: string;
  deleteProduct: THandleDeleteProduct;
  enabledForCustomerLimitValue: boolean;
  getProduct: THandleGetProduct;
  institutionValue: ISelectValue;
  isProductOverride: boolean;
  isReadOnly?: boolean;
  isUpdatingOrDeleting: boolean;
  onCancel?: () => void;
  statementCycleTypeValue: ISelectValue;
  updateProduct: THandleUpdateProduct;
}

type TGeneralProductForm = IGeneralProductForm & InjectedFormProps<{}, IGeneralProductForm>;

const GeneralProductForm: React.FC<TGeneralProductForm> = ({
  currentProductName,
  deleteProduct,
  dirty,
  enabledForCustomerLimitValue,
  getProduct,
  handleSubmit,
  institutionValue,
  isProductOverride,
  isReadOnly,
  isUpdatingOrDeleting,
  onCancel,
  pristine,
  statementCycleTypeValue,
  updateProduct,
}) => {
  React.useEffect(
    () => {
      getProduct();
    },
    [getProduct]
  );

  const deleteConfirmationText = React.useMemo(
    () => isProductOverride
      ? `Delete product override: "${currentProductName}"?`
      : `Delete product: "${currentProductName}"?`,
    [isProductOverride, currentProductName]
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
          enabledForCustomerLimitValue={enabledForCustomerLimitValue}
          institutionValue={institutionValue}
          statementCycleTypeValue={statementCycleTypeValue}
          isReadOnly={isReadOnly || isUpdatingOrDeleting}
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
                confirmationText={deleteConfirmationText}
                classNames={['is-bordered']}
                onClick={deleteProduct}
              />
            )}
          </div>
          <OkCancelButtons
            okText="Save"
            cancelText="Close"
            onCancel={onCancel}
            withCancelConfirmation={dirty}
            disabledOk={pristine}
            hideOk={isReadOnly}
          />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, IGeneralProductForm>({
  form: formNamesConst.GENERAL_PRODUCT,
  destroyOnUnmount: true,
  enableReinitialize: true,
  // keepDirtyOnReinitialize: true,
})(withSpinner()(GeneralProductForm));
