import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, CheckboxField, SelectField } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { THandleAddUsersGroupPermissions, THandleGetUsersGroupUiItems } from 'store';

import { ISelectValue } from 'types';

interface IEditGroupPermissionForm {
  uiItemsOptions: Array<ISelectValue>;
  selectedUiItem: Array<ISelectValue>;
  currentUsersGroupId: number;
  isLoading: boolean;
  getUiItems: THandleGetUsersGroupUiItems;
  addGroupPermission: THandleAddUsersGroupPermissions;
}

type TEditGroupPermissionForm = IEditGroupPermissionForm &
  InjectedFormProps<{}, IEditGroupPermissionForm>;

const EditUsersGroupPermissionsForm: React.FC<TEditGroupPermissionForm> = ({
  handleSubmit,
  getUiItems,
  addGroupPermission,
  currentUsersGroupId,
  uiItemsOptions,
  selectedUiItem,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getUiItems(currentUsersGroupId);
    },
    [getUiItems, currentUsersGroupId]
  );

  const buttonText = React.useMemo(
    () => isLoading ? 'Adding...' : 'Add to the group',
    [isLoading]
  );

  const isDisabledButton = React.useMemo(
    () => !selectedUiItem || !selectedUiItem.length || isLoading,
    [selectedUiItem, isLoading]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addGroupPermission({
      ...data,
      userGroupId: currentUsersGroupId,
    })),
    [handleSubmit, addGroupPermission, currentUsersGroupId]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-start">
        <Box width={[1 / 2]} pb="15px" mr="15px">
          <Field
            id="uiItems"
            name="uiItems"
            placeholder="Select UI Item"
            component={SelectField}
            label="UI Item"
            isMulti={true}
            isDisabled={isLoading}
            options={uiItemsOptions}
          />
        </Box>
        <Box width="120px" pt="27px" mr="8px">
          <Field
            id="permission"
            name="permission"
            component={CheckboxField}
            label={'"Write" Allowed'}
            disabled={isLoading}
          />
        </Box>
        <Box width={[1 / 3]} pt="27px">
          <Button
            iconName={iconNamesConst.PLUS}
            text={buttonText}
            disabled={isDisabledButton}
          />
        </Box>
      </Flex>
    </form >
  );
};

export default reduxForm<{}, IEditGroupPermissionForm>({
  form: formNamesConst.EDIT_USERS_GROUP_PERMISSIONS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditUsersGroupPermissionsForm);
