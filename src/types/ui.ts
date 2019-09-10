export interface ContextMenuItem {
  name: string;
  icon?: string;
  withConfirmation?: boolean;
  confirmationTitle?: string;
  confirmationText?: string;
  action?: () => void;
}
