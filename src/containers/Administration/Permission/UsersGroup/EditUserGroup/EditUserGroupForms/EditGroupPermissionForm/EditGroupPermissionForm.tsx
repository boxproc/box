import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from 'components/Buttons';

import { formNames } from 'consts';

import { HandleAddAdminGroupPermissions, HandleGetAdminUiItems } from 'store/domains';

import { CheckboxField, SelectField } from 'components/Form';

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
      <Flex alignItems="center">
        <Box width={[1 / 2]} mb="15px" mr="20px">
          <Field
            id="uiItem"
            name="uiItem"
            placeholder="Select Ui Item"
            component={SelectField}
            label="Ui Item"
            options={uiItemsOptions}
          />
        </Box>
        <Box width={[1 / 2]}>
          <Field
            id="permission"
            name="permission"
            component={CheckboxField}
            label="Permission Read/Write"
          />
        </Box>
      </Flex>
      <Button
        iconName="save"
        text="Add"
        disabled={!isUiItemSelected}
      />
    </form >
  );
};

export default reduxForm<{}, EditGroupPermissionFormProps>({
  form: formNames.EDIT_GROUP_PERMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditGroupPermissionForm);
