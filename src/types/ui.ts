export interface ContextMenuItem {
  name: string;
  description?: string;
  dataType?: string;
  icon?: string;
  withConfirmation?: boolean;
  confirmationTitle?: string;
  confirmationText?: string;
  action?: () => void;
}

export type ChangeFiledValue = (formName: string, fieldName: string, value: string) => void;
