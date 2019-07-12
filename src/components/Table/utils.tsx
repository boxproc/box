import React from 'react';

import { CellInfo } from 'react-table';

import { Button } from 'components/Buttons';
import { CheckedBoxIcon, UncheckedBoxIcon } from 'components/Icon';

import { codeKeys, yesNoTypes } from 'consts';
import { Cell } from './Table';

export const renderEditable = (updateAction: any) =>
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

    const updateCellInfo = (e: any) => {
      const isChanged = cellInfo.value !== e.target.textContent;

      isChanged && updateAction({
        ...cellInfo.original,
        [cellInfo.column.id]: e.target.textContent,
      });
    };

    return (
      <Cell
        style={editableCellStyles}
        value={cellInfo.value}
        contentEditable={isEditable}
        suppressContentEditableWarning={isEditable}
        onBlur={updateCellInfo}
        onKeyUp={(e: any) => {
          if (e.key === codeKeys.ENTER) {
            e.target.blur();
          }
        }}
      />
    );
  };

export const renderCheckBoxIcon = (updateAction: any) =>
  (cellInfo: CellInfo) => {
    const isLocked = cellInfo.value === yesNoTypes.YES;
    const propValues = cellInfo.original;

    return isLocked
      ? (<CheckedBoxIcon />)
      : (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => updateAction({
            ...propValues,
            lockedFlag: yesNoTypes.YES,
          })}
        >
          <UncheckedBoxIcon />
        </div>
      );
  };

export  const renderDeleteButton = (deleteAction: any) =>
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
