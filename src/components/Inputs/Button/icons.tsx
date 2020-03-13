import React from 'react';

import { Box } from '@rebass/grid';

import {
  ArrowDropDownIcon,
  ArrowDropUpIcon,
  DeleteIcon,
  DownloadIcon,
  FileIcon,
  FilePdfIcon,
  FilterIcon,
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

export const icons = {
  [iconNamesConst.ARROW_DOWN]: <ArrowDropDownIcon size="25" />,
  [iconNamesConst.ARROW_UP]: <ArrowDropUpIcon size="25" />,
  [iconNamesConst.DELETE]: <Box mt="-2px"><DeleteIcon size="18" /></Box>,
  [iconNamesConst.DOWNLOAD]: <Box mt="-1px" mr="2px"><DownloadIcon size="14" /></Box>,
  [iconNamesConst.FILE]: <Box mt="-1px" mr="2px"><FileIcon size="14" /></Box>,
  [iconNamesConst.FILE_PDF]: <FilePdfIcon size="22" />,
  [iconNamesConst.FILTER]: <Box mt="-1px"><FilterIcon size="18" /></Box>,
  [iconNamesConst.KEY]: <Box mt="-1px" mr="2px"><KeyIcon size="12" /></Box>,
  [iconNamesConst.LOGOUT]: <Box mt="-1px" mr="1px"><LogOutIcon size="14" /></Box>,
  [iconNamesConst.PLUS]: <Box mt="-2px"><PlusIcon size="18" /></Box>,
  [iconNamesConst.QRCODE]: <Box mt="-1px" mr="3px"><QrcodeIcon size="14" /></Box>,
  [iconNamesConst.REFRESH]: <Box mt="-1px"><RefreshIcon size="18" /></Box>,
  [iconNamesConst.SEARCH]: <Box mt="-1px" mr="2px"><SearchIcon size="12" /></Box>,
  [iconNamesConst.SHORT_TEXT]: <Box mt="-3.5px"><ShortTextIcon size="20" /></Box>,
  [iconNamesConst.SMARTPHONE]: <Box mt="-2px"><SmartphoneIcon size="18" /></Box>,
  [iconNamesConst.STOP]: <Box mt="-2.5px"><StopIcon size="18" /></Box>,
  [iconNamesConst.USER]: <Box mt="-2px" mr="2px"><UserIcon size="12" /></Box>,
};
