import React from 'react';

import { Box } from '@rebass/grid';

import {
  DeleteIcon,
  DownloadIcon,
  FileCsvIcon,
  FileIcon,
  FilterIcon,
  HelpCircleIcon,
  KeyIcon,
  LogOutIcon,
  PlusIcon,
  QrcodeIcon,
  RefreshIcon,
  SearchIcon,
  ShortTextIcon,
  SmartphoneIcon,
  StopIcon,
  UserIcon,
} from 'components';

import { iconNamesConst } from 'consts';

export const renderIcon = (name: string, size?: string) => {
  switch (name) {
    case iconNamesConst.FILTER:
      return (<FilterIcon size={size ? size : '18'} />);
    case iconNamesConst.PLUS:
      return (<Box mt="-2px"><PlusIcon size={size ? size : '18'} /></Box>);
    case iconNamesConst.LOGOUT:
      return (<Box mt="-1px" mr="1px"><LogOutIcon size={size ? size : '14'} /></Box>);
    case iconNamesConst.DELETE:
      return (<Box mt="-2px"><DeleteIcon size={size ? size : '18'} /></Box>);
    case iconNamesConst.HELP:
      return (<Box mt="-1px"><HelpCircleIcon size={size ? size : '16'} /></Box>);
    case iconNamesConst.SMARTPHONE:
      return (<Box mt="-1px"><SmartphoneIcon size={size ? size : '16'} /></Box>);
    case iconNamesConst.QRCODE:
      return (<Box mt="-1px" mr="3px"><QrcodeIcon size={size ? size : '14'} /></Box>);
    case iconNamesConst.USER:
      return (<Box mt="-2px" mr="2px"><UserIcon size={size ? size : '12'} /></Box>);
    case iconNamesConst.STOP:
      return (<Box mt="-3.5px"><StopIcon size={size ? size : '20'} /></Box>);
    case iconNamesConst.SHORT_TEXT:
      return (<Box mt="-3.5px"><ShortTextIcon size={size ? size : '20'} /></Box>);
    case iconNamesConst.REFRESH:
      return (<Box mt="-1px"><RefreshIcon size={size ? size : '18'} /></Box>);
    case iconNamesConst.KEY:
      return (<Box mt="-1px" mr="2px"><KeyIcon size={size ? size : '12'} /></Box>);
    case iconNamesConst.DOWNLOAD:
      return (<Box mt="-1px" mr="2px"><DownloadIcon size={size ? size : '14'} /></Box>);
    case iconNamesConst.FILE:
      return (<Box mt="-1px" mr="2px"><FileIcon size={size ? size : '14'} /></Box>);
    case iconNamesConst.FILE_CSV:
      return (<Box mt="-1px" mr="2px"><FileCsvIcon size={size ? size : '14'} /></Box>);
    case iconNamesConst.SEARCH:
      return (<Box mt="-1px" mr="2px"><SearchIcon size={size ? size : '12'} /></Box>);
    default:
      return null;
  }
};
