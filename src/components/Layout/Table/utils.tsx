import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { CellInfo } from 'react-table';

import { CheckedBoxIcon, UncheckedBoxIcon } from 'components';

import { codeKeys, yesNoTypes } from 'consts';

import { TableCell } from './Table';

export const renderEditableTableCell = (updateAction: (data: object) => void) =>
  (cellInfo: CellInfo) => {
    const isEditable = cellInfo.row.lockedFlag === false;

    const editableCellStyles = {
      backgroundColor: isEditable && '#fafafa',
      width: '100%',
      height: 'auto',
      alignSelf: 'flex-start',
      padding: '0 7px',
      borderRadius: '2px',
    };

    const updateCellInfo = (e: React.MouseEvent) => {
      const el = e.target as HTMLElement;
      const isChanged = cellInfo.value !== el.textContent;

      isChanged && updateAction({
        ...cellInfo.original,
        [cellInfo.column.id]: el.textContent,
      });
    };

    return (
      <TableCell
        style={editableCellStyles}
        value={cellInfo.value}
        contentEditable={isEditable}
        suppressContentEditableWarning={isEditable}
        onBlur={updateCellInfo}
        isNumber={true}
        onKeyUp={(e: React.KeyboardEvent) => {
          if (e.key === codeKeys.ENTER) {
            const el = e.target as HTMLElement;
            el.blur();
          }
        }}
      />
    );
  };

export const renderCheckBoxIconTableCell = (updateAction?: (data: object) => void) =>
  (cellInfo: CellInfo) => {
    const isLocked = cellInfo.value === true;
    const values = cellInfo.original;

    return (
      <Box width="100%">
        <Flex justifyContent="center">
          {
            isLocked
              ? (<CheckedBoxIcon />)
              : (
                <div
                  style={{ cursor: updateAction && 'pointer' }}
                  onClick={() => updateAction && updateAction({
                    ...values,
                    lockedFlag: yesNoTypes.YES,
                  })}
                >
                  <UncheckedBoxIcon />
                </div>
              )
          }
        </Flex>
      </Box>
    );
  };
