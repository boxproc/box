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
  indicatorsContainer: (provided: React.CSSProperties) => ({
    ...provided,
    alignItems: 'flex-start',
  }),
  dropdownIndicator: (provided: React.CSSProperties, state: SelectState) => {
    const {
      isDisabled,
      isFocused,
      selectProps,
    } = state;

    return ({
      ...provided,
      cursor: 'pointer',
      padding: selectProps.isEditableCellStyle ? '5px' : '8px',
      // eslint-disable-next-line
      ['& > svg path']: {
        color: isDisabled
          ? theme.colors.lightGray
          : isFocused && !selectProps.invalid
            ? theme.colors.normalAccent
            : selectProps.isEditableCellStyle ? theme.colors.gray : theme.colors.darkGray,
      },
    });
  },
  clearIndicator: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    cursor: 'pointer',
    margin: '6px 0',
    padding: 0,
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
    fontSize: state.selectProps.isEditableCellStyle ? '12px' : '13px',
    lineHeight: '17px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }),
  menuList: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    padding: '0 1px 1px',
    fontSize: state.selectProps.isEditableCellStyle ? '12px' : '13px',
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
    zIndex: 2,
  }),
  control: (provided: React.CSSProperties, state: SelectState) => {
    const {
      isFocused,
      isDisabled,
      selectProps: {
        invalid,
        menuIsOpen,
        isEditableCellStyle,
      },
    } = state;

    return ({
      ...provided,
      borderRadius: menuIsOpen ? '2px 2px 0 0' : '2px',
      fontSize: isEditableCellStyle ? 12 : 13,
      borderColor: invalid
        ? theme.colors.red
        : (isFocused || menuIsOpen)
          ? theme.colors.normalAccent
          : isDisabled
            ? theme.colors.lightGray
            : isEditableCellStyle ? theme.colors.lightGray : theme.colors.gray,
      backgroundColor: theme.colors.white,
      boxShadow: 'none',
      minHeight: isEditableCellStyle ? '25px' : '31px',
      // eslint-disable-next-line
      ['&:hover']: {
        borderColor: '0',
      },
    });
  },
  singleValue: (provided: React.CSSProperties, state: SelectState) => {
    const {
      selectProps: {
        isCustomSingleValue,
        isEditableCellStyle,
      },
    } = state;

    return ({
      ...provided,
      fontSize: isEditableCellStyle ? '12px' : '13px',
      lineHeight: '17px',
      color: theme.colors.black,
      fontWeight: isCustomSingleValue ? 500 : 'inherit',
    });
  },
  multiValueLabel: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    color: theme.colors.darkGray,
    padding: '3px 5px',
    paddingRight: 2,
    fontWeight: 500,
  }),
  multiValue: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.colors.lighterGray,
  }),
  multiValueRemove: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.colors.lighterGray,
    // eslint-disable-next-line
    [':hover']: {
      backgroundColor: theme.colors.lightGray,
      color: false,
      cursor: 'pointer',
    },
    // eslint-disable-next-line
    ['& > svg']: {
      width: 10,
      height: 10,
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
    minHeight: state.selectProps.isEditableCellStyle ? '25px' : '31px',
    height: state.selectProps.isEditableCellStyle ? '25px' : 'auto',
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
