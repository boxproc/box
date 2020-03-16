export interface InvalidProp {
  invalid?: boolean;
}

export interface InputProps {
  invalid?: boolean;
  isEditableCellStyle?: boolean;
  isNumber?: boolean;
  isRightPlaceholder?: boolean;
}

export interface InputCommonProps extends
  InputProps, React.InputHTMLAttributes<HTMLInputElement> { }
