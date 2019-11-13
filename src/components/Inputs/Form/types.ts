export interface InvalidProp {
  invalid?: boolean;
}

export interface InputProps {
  isNumber?: boolean;
  isRightPlaceholder?: boolean;
  isEditableCellStyle?: boolean;
  invalid?: boolean;
}

export interface InputCommonProps extends
  InputProps, React.InputHTMLAttributes<HTMLInputElement> { }
