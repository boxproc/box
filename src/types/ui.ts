import { SelectValue } from './common';

export interface ContextMenuItemProps {
  name: string | number;
  value?: string | number;
  shiftCharCount?: number;
  description?: string;
  icon?: string;
  withConfirmation?: boolean;
  confirmationTitle?: string;
  confirmationText?: string;
  action?: () => void;
  noDataStr?: string;
  isDivider?: boolean;
  isDisabled?: boolean;
}

export interface ContextSubMenuItem {
  title: string;
  items?: Array<ContextMenuItemProps>;
  subItems?: Array<ContextSubMenuItem>;
  noDataStr?: string;
}

export type ContextSubMenuType = Array<ContextSubMenuItem>;

export interface LogData {
  log_file: string;
  log_file_path?: string;
}

export type ChangeFieldValue = (
  formName: string,
  fieldName: string,
  value: string | number | SelectValue
) => void;
