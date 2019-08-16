// import SelectBase from 'react-select';
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
    } = state;

    return ({
      ...provided,
      cursor: 'pointer',
      // eslint-disable-next-line
      ['& > svg path']: {
        stroke: isDisabled ? theme.lightGrayColor : theme.darkGrayColor,
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
      color: theme.lightGrayColor,
    },
    // eslint-disable-next-line
    ['&:hover > svg path']: {
      color: theme.grayColor,
    },
  }),
  placeholder: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    color: theme.grayColor,
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
    borderColor: state.selectProps.invalid ? theme.redColor : theme.normalAccentColor,
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
      borderColor: invalid ?
        theme.redColor
        :
        (isFocused || menuIsOpen) ?
          theme.normalAccentColor
          :
          isDisabled ?
          theme.lightGrayColor
          :
            theme.grayColor,
      backgroundColor: theme.whiteColor,
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
      color: isCustomSingleValue ? theme.blackColor : 'inherit',
      fontWeight: isCustomSingleValue ? 500 : 'inherit',
    });
  },
  multiValueLabel: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    color: theme.blackColor,
    padding: '3px 5px',
    paddingRight: 2,
    fontWeight: 500,
  }),
  multiValue: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.lightGrayColor,
  }),
  multiValueRemove: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.lightGrayColor,
    // eslint-disable-next-line
    [':hover']: {
      backgroundColor: theme.lightGrayColor,
      color: false,
    },
    // eslint-disable-next-line
    ['& > svg']: {
      width: 10,
      cursor: 'pointer',
    },
  }),
  noOptionsMessage: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    color: theme.lightGrayColor,
  }),
  valueContainer: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    minHeight: '31px',
  }),
  option: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    backgroundColor: theme.whiteColor,
    // eslint-disable-next-line
    [':hover']: {
      backgroundColor: theme.lightGrayColor,
    },
  }),
};
