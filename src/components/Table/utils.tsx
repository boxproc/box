import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { CellInfo } from 'react-table';

import { Button } from 'components/Buttons/Buttons';
import { CheckedBoxIcon, UncheckedBoxIcon } from 'components/Icon';

import { codeKeys, yesNoTypes } from 'consts';
import { Cell } from './Table';

export const renderEditable = (updateAction: (data: object) => void) =>
  (cellInfo: CellInfo) => {
    const isEditable = cellInfo.row.lockedFlag === yesNoTypes.NO;

    const editableCellStyles = {
      backgroundColor: isEditable && '#fafafa',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
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
      <Cell
        style={editableCellStyles}
        value={cellInfo.value}
        contentEditable={isEditable}
        suppressContentEditableWarning={isEditable}
        onBlur={updateCellInfo}
        onKeyUp={(e: React.KeyboardEvent) => {
          if (e.key === codeKeys.ENTER) {
            const el = e.target as HTMLElement;
            el.blur();
          }
        }}
      />
    );
  };

export const renderCheckBoxIcon = (updateAction?: (data: object) => void) =>
  (cellInfo: CellInfo) => {
    const isLocked = cellInfo.value === yesNoTypes.YES;
    const propValues = cellInfo.original;

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
                    ...propValues,
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

export const renderDeleteButton = (deleteAction: (name: string) => void) =>
  (cellInfo: CellInfo) => {
    const isLocked = cellInfo.row.lockedFlag === yesNoTypes.YES;
    const propName = cellInfo.original.propertyName;

    return !isLocked && (
      <Button
        text="Delete"
        transparent={true}
        onClick={() => deleteAction(propName)}
      />
    );
  };
