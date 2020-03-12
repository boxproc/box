import React from 'react';

import Select, { components } from 'react-select';
import { IndicatorProps } from 'react-select/lib/components/indicators';
import { MultiValueRemoveProps } from 'react-select/lib/components/MultiValue';
import { OptionProps } from 'react-select/lib/components/Option';
import { Props as SelectProps } from 'react-select/lib/Select';

import styled from 'theme';
import { scrollbarCss } from 'theme/styles';

import { ChevronDownIcon, CloseIcon } from 'components';
import MultiSelectOption from './Option';

import { customStyles } from './customStyles';

const WithCustomScrollbar = styled.div`
  width: 100%;
  .form-select__menu-list {
    ${scrollbarCss};
  }
`;

const DropdownIndicator = <T extends {}>(props: IndicatorProps<T>) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon size="16" />
    </components.DropdownIndicator>
  );
};

const MultiValueRemove = <T extends {}>(props: MultiValueRemoveProps<T>) => {
  return components.MultiValueRemove && (
    <components.MultiValueRemove {...props}>
      <CloseIcon />
    </components.MultiValueRemove>
  );
};

interface InputValue {
  inputValue: string;
}

const loadingMessage = (obj: InputValue) => 'Options are being fetched';
const defaultNoOptionsMsg = (obj: InputValue) => 'No options';
const preventNoOptionsMsg = (): null => null;

export interface SelectInputProps<T = object> extends SelectProps<T> {
  modifySelectOption?: (data: OptionProps<T>) => void;
  isCustomSingleValue?: boolean;
  onChange?: any;
}

export const SelectInput = <T extends {}>(props: SelectInputProps<T>) => {
  const { id, isMulti, isCustomSingleValue, onChange, ...extraProps } = props;

  return (
    <WithCustomScrollbar>
      <Select
        inputId={id}
        classNamePrefix="form-select"
        styles={customStyles}
        loadingMessage={loadingMessage}
        className="form-select"
        isMulti={isMulti}
        isClearable={true}
        openMenuOnFocus={true}
        tabSelectsValue={false}
        isSearchable={true}
        closeMenuOnSelect={!isMulti}
        blurInputOnSelect={!isMulti}
        hideSelectedOptions={!isMulti}
        openMenuOnClick={!isCustomSingleValue}
        noOptionsMessage={isCustomSingleValue ? preventNoOptionsMsg : defaultNoOptionsMsg}
        onChange={onChange}
        components={
          {
            Option: isMulti ? MultiSelectOption : components.Option,
            DropdownIndicator: isCustomSingleValue ? null : DropdownIndicator,
            MultiValueRemove,
            IndicatorSeparator: null,
          }
        }
        maxMenuHeight={165}
        {...extraProps}
      />
    </WithCustomScrollbar>
  );
};

export default SelectInput;
