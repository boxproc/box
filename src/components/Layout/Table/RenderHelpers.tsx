import React from 'react';
import { CellInfo } from 'react-table';

import styled from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from './../../Icons';

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const renderCheckBoxTableCell = () => (cellInfo: CellInfo) => {
  const isChecked = cellInfo.value === true;

  return (
    <CheckBoxWrapper>
      {isChecked ? (<CheckedBoxIcon />) : (<UncheckedBoxIcon />)}
    </CheckBoxWrapper>
  );
};
