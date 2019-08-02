import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header, Table } from 'components/Table';

import {
    AdminGroupPermissionItem,
    HandleDeleteAdminGroupPermissions,
    HandleGetAdminGroupPermissions,
} from 'store/domains/administration/permissions/usersGroups';

import { Button } from 'components/Buttons';
import { CellInfo } from 'react-table';

import { TableCell } from 'types';

interface UsersGroupMembersProps {
    adminUserGroupMemberId: number;
    getAdminGroupPermission: HandleGetAdminGroupPermissions;
    deleteAdminGroupPermission: HandleDeleteAdminGroupPermissions;
    adminGroupPermissions: Array<any>;
}

type SCell<T extends keyof AdminGroupPermissionItem> = TableCell<AdminGroupPermissionItem[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
    getAdminGroupPermission,
    adminUserGroupMemberId,
    adminGroupPermissions,
    deleteAdminGroupPermission,
}) => {
    React.useEffect(
        () => {
            getAdminGroupPermission(adminUserGroupMemberId);
        },
        [getAdminGroupPermission, adminUserGroupMemberId]
    );

    const columns = [
       {
            Header: <Header title="Ui Items" showSortIcons={true} />,
            accessor: 'uiItem',
            Cell: (props: SCell<'uiItem'>) => (
                <Cell
                    value={props.value}
                />
            ),
        },
        {
            Header: <Header title="Permission" showSortIcons={true} />,
            accessor: 'permission',
            Cell: (props: SCell<'permission'>) => (
                <Cell
                    value={props.value}
                />
            ),
        },
        {
            maxWidth: 100,
            accessor: 'deleteButton',
            Cell: (cellInfo: CellInfo) => (
                <Button
                    iconName="delete"
                    text="Delete"
                    type="reset"
                    onClick={() =>
                        deleteAdminGroupPermission(
                            cellInfo.original.user_group_id,
                            cellInfo.original.ui_item,
                            cellInfo.original.permission
                        )
                    }
                />
            ),
        },
    ];

    return (
        <Table
            title="User Group Members"
            data={adminGroupPermissions}
            columns={columns}
        // addNewModalName={modalNames.ADD_ADMIN_USERS_GROUP}
        />
    );
};

export default withSpinner({
    isFixed: true,
})(UsersGroupMembers);
