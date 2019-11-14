import { SelectValues } from 'types';

export interface ContextMenuItemProps {
  name: string;
  description?: string;
  icon?: string;
  withConfirmation?: boolean;
  confirmationTitle?: string;
  confirmationText?: string;
  action?: () => void;
  noDataStr?: string;
  isDivider?: boolean;
}

interface ContextSubMenuItem {
  title: string;
  items: Array<ContextMenuItemProps>;
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
  value: string | number | SelectValues
) => void;
