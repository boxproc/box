export interface MessageModalFields {
  title: string;
  message: string;
  details?: string;
}

export interface ModalsData {
  name: string;
  messageModalFields?: MessageModalFields;
}

export interface ModalsState {
  isMessageModal: boolean;
  messageModalFields?: MessageModalFields;
}
