import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import { SelectField } from 'components/Form';

import {
    formNames,
} from 'consts';

import { Button } from 'components/Buttons';
import { HandleAddAdminGroupPermissions, HandleGetAdminUiItems } from 'store/domains';
import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';
interface UiItemsFormProps {
    onCancel?: () => void;
    //   adminUserGroupMemberId: number;
    addAdminGroupPermission?: HandleAddAdminGroupPermissions;
    uiItemsOption?: Array<any>;
    currentGroupId?: number;
    selectedUiItem?: SelectValues;
    getUiItems: HandleGetAdminUiItems;
}

type UiItemsFormAllProps = UiItemsFormProps &
    InjectedFormProps<{}, UiItemsFormProps>;

const ActiveUsersFormAllForm: React.FC<UiItemsFormAllProps> = ({
    handleSubmit,
    getUiItems,
    uiItemsOption,
    addAdminGroupPermission,
    currentGroupId,
    selectedUiItem,
}) => {
    React.useEffect(
        () => {
            getUiItems(currentGroupId);
        },
        [getUiItems, currentGroupId]
    );
    const handleSubmitForm = React.useCallback(
        handleSubmit(data => console.log('selectedUiItem, ', data)),
        [handleSubmit, addAdminGroupPermission]
    );
    return (
        <form onSubmit={handleSubmitForm}>
            <Box width={[1 / 2]} mb="15px">
                <Field
                    id="uiItem"
                    name="uiItem"
                    placeholder="Select Ui Item"
                    component={SelectField}
                    label="Ui Item"
                    validate={[formErrorUtil.required]}
                    options={uiItemsOption}
                />
            </Box>
            <Button
                iconName="save"
                text="Add"
                // type="reset"
            />
        </form >
    );
};

export default reduxForm<{}, UiItemsFormProps>({
    form: formNames.UI_ITEMS,
    destroyOnUnmount: true,
    enableReinitialize: true,
})(ActiveUsersFormAllForm);
