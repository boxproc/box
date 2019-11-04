export interface InvalidProp {
  invalid?: boolean;
}

interface InputProp {
  isNumber?: boolean;
  isRightPlaceholder?: boolean;
}

export interface InputCommonProps extends
  InvalidProp, InputProp, React.InputHTMLAttributes<HTMLInputElement> { }
