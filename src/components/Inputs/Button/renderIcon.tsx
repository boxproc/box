import React from 'react';

import { Box } from '@rebass/grid';

import {
  DeleteIcon,
  FilterIcon,
  HelpCircleIcon,
  LogOutIcon,
  PlusIcon,
  QrcodeIcon,
  SmartphoneIcon,
  UserIcon,
} from 'components';

import { iconNamesConst } from 'consts';

export const renderIcon = (name: string) => {
  switch (name) {
    case iconNamesConst.FILTER:
      return (<FilterIcon size="18" />);
    case iconNamesConst.PLUS:
      return (<Box mt="-2px"><PlusIcon size="18" /></Box>);
    case iconNamesConst.LOGOUT:
      return (<Box mt="-2px" mr="1px"><LogOutIcon size="16" /></Box>);
    case iconNamesConst.DELETE:
      return (<Box mt="-2px"><DeleteIcon size="18" /></Box>);
    case iconNamesConst.HELP:
      return (<Box mt="-1px"><HelpCircleIcon size="16" /></Box>);
    case iconNamesConst.SMARTPHONE:
      return (<Box mt="-1px"><SmartphoneIcon size="16" /></Box>);
    case iconNamesConst.QRCODE:
      return (<Box mt="-1px" mr="3px"><QrcodeIcon size="14" /></Box>);
    case iconNamesConst.USER:
      return (<Box mt="-2px" mr="2px"><UserIcon size="12" /></Box>);
    default:
      return null;
  }
};
