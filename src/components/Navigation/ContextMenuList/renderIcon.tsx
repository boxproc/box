import React from 'react';

import { DeleteIcon, EditIcon, LockIcon, PlusIcon, ShortTextIcon } from 'components';

import { iconNamesConst } from 'consts';

export const renderIcon = (name: string) => {
  switch (name) {
    case iconNamesConst.EDIT:
      return (<EditIcon size="13" />);
    case iconNamesConst.DELETE:
      return (<DeleteIcon size="15" />);
    case iconNamesConst.LOCK:
      return (<LockIcon size="15" />);
    case iconNamesConst.PLUS:
      return (<PlusIcon size="15" />);
    case iconNamesConst.SHORT_TEXT:
      return (<ShortTextIcon size="16" />);
    default:
      return null;
  }
};
