export interface IInvalidValue {
  invalid?: boolean;
}

export interface IInput {
  invalid?: boolean;
  isEditableCellStyle?: boolean;
  isNumber?: boolean;
  isRightPlaceholder?: boolean;
}

export interface ICommonInput extends IInput, React.InputHTMLAttributes<HTMLInputElement> { }
