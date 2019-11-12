import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, CheckboxField, SelectField } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { HandleAddAdminGroupPermissions, HandleGetAdminUiItems } from 'store/domains';

import { SelectValues } from 'types';

interface EditGroupPermissionFormProps {
  addAdminGroupPermission: HandleAddAdminGroupPermissions;
  currentGroupId: number;
  getUiItems: HandleGetAdminUiItems;
  uiItemsOptions: Array<SelectValues>;
  selectedUiItem: SelectValues;
}

type EditGroupPermissionFormPropsAllProps = EditGroupPermissionFormProps &
  InjectedFormProps<{}, EditGroupPermissionFormProps>;

const EditGroupPermissionForm: React.FC<EditGroupPermissionFormPropsAllProps> = ({
  handleSubmit,
  getUiItems,
  addAdminGroupPermission,
  currentGroupId,
  uiItemsOptions,
  selectedUiItem,
}) => {
  React.useEffect(
    () => {
      getUiItems(currentGroupId);
    },
    [getUiItems, currentGroupId]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit((data) => addAdminGroupPermission({
      ...data,
      userGroupId: currentGroupId,
    })),
    [handleSubmit, addAdminGroupPermission]
  );

  const isUiItemSelected = !!selectedUiItem;

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width={[1 / 2]} pb="15px" mr="20px">
          <Field
            id="uiItem"
            name="uiItem"
            placeholder="Select Ui Item"
            component={SelectField}
            label="UI Item"
            options={uiItemsOptions}
          />
        </Box>
        <Box width="120px" pb="17px" mr="10px">
          <Field
            id="permission"
            name="permission"
            component={CheckboxField}
            label={'"Write" Allowed'}
          />
        </Box>
        <Box width={[1 / 3]} pb="21px">
          <Button
            iconName={iconNamesConst.PLUS}
            text="Add to the group"
            disabled={!isUiItemSelected}
          />
        </Box>
      </Flex>
    </form >
  );
};

export default reduxForm<{}, EditGroupPermissionFormProps>({
  form: formNamesConst.EDIT_GROUP_PERMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditGroupPermissionForm);
