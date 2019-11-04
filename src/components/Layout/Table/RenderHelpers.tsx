import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { CellInfo } from 'react-table';

import { CheckedBoxIcon, UncheckedBoxIcon } from 'components';

import { codeKeys, yesNoTypesCodes } from 'consts';

import { TableCell } from './Table';

export const renderEditableTableCell = (data: {
  updateAction: (data: object) => void,
  isSmaller?: boolean,
  isNumber?: boolean,
  isAlwaysEditable?: boolean,
}) =>
  (cellInfo: CellInfo) => {
    const { updateAction, isSmaller, isNumber, isAlwaysEditable } = data;
    const isEditable = cellInfo.row.lockedFlag === false || isAlwaysEditable;

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

    const handleKeyUp = (e: React.KeyboardEvent) => {
      if (e.key === codeKeys.ENTER) {
        const el = e.target as HTMLElement;
        el.blur();
      }
    };

    return (
      <TableCell
        style={editableCellStyles}
        value={cellInfo.value}
        contentEditable={isEditable}
        suppressContentEditableWarning={isEditable}
        onBlur={updateCellInfo}
        isNumber={isNumber}
        isSmaller={isSmaller}
        onKeyUp={handleKeyUp}
      />
    );
  };

export const renderCheckBoxTableCell = (updateAction?: (data: object) => void) =>
  (cellInfo: CellInfo) => {
    const isLocked = cellInfo.value === true;
    const values = cellInfo.original;

    const handleClick = () => updateAction && updateAction({
      ...values,
      lockedFlag: yesNoTypesCodes.YES,
    });

    return (
      <Box width="100%">
        <Flex justifyContent="center">
          {
            isLocked
              ? (<CheckedBoxIcon />)
              : (
                <div
                  style={{ cursor: updateAction && 'pointer' }}
                  onClick={handleClick}
                >
                  <UncheckedBoxIcon />
                </div>
              )
          }
        </Flex>
      </Box>
    );
  };
