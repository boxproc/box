import { Props } from 'react-select/lib/Select';
import { StylesConfig } from 'react-select/lib/styles';

import { theme } from 'theme';

export interface CustomSelectProps extends Props {
  isCustomSingleValue?: boolean;
  invalid?: boolean;
}

export interface SelectState {
  isFocused: boolean;
  isDisabled: boolean;
  selectProps: CustomSelectProps;
}

export const customStyles: StylesConfig = {
  dropdownIndicator: (provided: React.CSSProperties, state: SelectState) => {
    const {
      isDisabled,
      isFocused,
      selectProps,
    } = state;

    return ({
      ...provided,
      cursor: 'pointer',
      // eslint-disable-next-line
      ['& > svg path']: {
        color: isDisabled
          ? theme.colors.lightGray
          : isFocused && !selectProps.invalid
            ? theme.colors.normalAccent
            : theme.colors.darkGray,
      },
    });
  },
  clearIndicator: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    cursor: 'pointer',
    padding: '5px',
    // eslint-disable-next-line
    ['& > svg']: {
      width: 16,
    },
    // eslint-disable-next-line
    ['& > svg path']: {
      color: theme.colors.lightGray,
    },
    // eslint-disable-next-line
    ['&:hover > svg path']: {
      color: theme.colors.gray,
    },
  }),
  placeholder: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    color: theme.colors.gray,
    fontSize: '13px',
    lineHeight: '17px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }),
  menuList: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    padding: '0 1px 1px',
    fontSize: '13px',
    lineHeight: '17px',
    borderRadius: '0 0 2px 2px',
  }),
  menu: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    marginTop: 0,
    boxShadow: 'none',
    borderRadius: '0 0 2px 2px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: state.selectProps.invalid ? theme.colors.red : theme.colors.normalAccent,
    borderTop: '0',
  }),
  control: (provided: React.CSSProperties, state: SelectState) => {
    const {
      isFocused,
      isDisabled,
      selectProps: {
        invalid,
        menuIsOpen,
      },
    } = state;

    return ({
      ...provided,
      borderRadius: menuIsOpen ? '2px 2px 0 0' : '2px',
      fontSize: 13,
      borderColor: invalid
        ? theme.colors.red
        : (isFocused || menuIsOpen)
          ? theme.colors.normalAccent
          : isDisabled
            ? theme.colors.lightGray
            : theme.colors.gray,
      backgroundColor: theme.colors.white,
      boxShadow: 'none',
      minHeight: '31px',
      // eslint-disable-next-line
      ['&:hover']: {
        borderColor: '0',
      },
    });
  },
  singleValue: (provided: React.CSSProperties, state: SelectState) => {
    const { selectProps: { isCustomSingleValue } } = state;
    return ({
      ...provided,
      fontSize: '13px',
      lineHeight: '17px',
      color: theme.colors.black,
      fontWeight: isCustomSingleValue ? 500 : 'inherit',
    });
  },
  multiValueLabel: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    color: theme.colors.black,
    padding: '3px 5px',
    paddingRight: 2,
    fontWeight: 500,
  }),
  multiValue: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.colors.lightGray,
  }),
  multiValueRemove: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.colors.lightGray,
    // eslint-disable-next-line
    [':hover']: {
      backgroundColor: theme.colors.lightGray,
      color: false,
    },
    // eslint-disable-next-line
    ['& > svg']: {
      width: 10,
      cursor: 'pointer',
      color: theme.colors.normalAccent,
    },
  }),
  noOptionsMessage: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    color: theme.colors.lightGray,
  }),
  valueContainer: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    minHeight: '31px',
  }),
  option: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.colors.white,
    // eslint-disable-next-line
    [':hover']: {
      backgroundColor: theme.colors.lightGray,
    },
  }),
};
