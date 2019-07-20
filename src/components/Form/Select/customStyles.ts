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
  dropdownIndicator: (provided: React.CSSProperties, state: SelectState) => ({
    ...provided,
    cursor: 'pointer',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
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
    padding: 0,
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
    borderColor: state.selectProps.invalid ? theme.redColor : theme.blackColor,
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
      opacity: isDisabled ? 0.5 : 1,
      borderRadius: menuIsOpen ? '2px 2px 0 0' : '2px',
      fontSize: 13,
      borderColor: invalid ?
        theme.redColor
        :
        (isFocused || menuIsOpen) ?
          theme.blackColor
          :
          theme.grayColor,
      backgroundColor: theme.whiteColor,
      boxShadow: 'none',
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
    minHeight: '44px',
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
