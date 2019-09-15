export interface InvalidProp {
  invalid?: boolean;
}

interface InputProp {
  isNumber?: boolean;
}

export interface InputCommonProps extends
  InvalidProp, InputProp, React.InputHTMLAttributes<HTMLInputElement> { }
