import { yesNoConst } from 'consts';

import {
  IEditableSysProp,
  IEditableSysPropToSend,
  ISysPropFilter,
  ISysPropFilterToSend,
} from './types';

export const prepareEditableSysProp = (data: IEditableSysProp): IEditableSysPropToSend => {
  if (!data) {
    return null;
  }

  const { id, currentValue, lockedFlag } = data;

  return {
    property_name: id,
    current_value: currentValue,
    locked_flag: lockedFlag ? yesNoConst.YES : yesNoConst.NO,
  };
};

export const prepareSysPropsFilter = (data: ISysPropFilter): ISysPropFilterToSend => {
  if (!data) {
    return null;
  }

  const propName = data.id;

  return { property_name: propName ? propName : null };
};
