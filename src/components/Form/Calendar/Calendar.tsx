import React from 'react';

import moment, { Moment } from 'moment';
import Datetime from 'react-datetime';
import OnClickOut from 'react-onclickoutside';
import { WrappedFieldProps } from 'redux-form';

import styled from 'theme';

import { Calendar as CalendarIcon } from 'styled-icons/octicons/Calendar';
import { InputCommonProps } from '../Input';

import { sharedCalendarCss } from './sharedCalendarCss';

import { dateFormat as dateFormatConst } from 'consts';

import { dateUtil } from 'utils';

export interface DateTimeWrapperProps {
  active?: boolean;
  invalid?: boolean;
  disabled?: boolean;
}

type CalendarProps = Datetime.DatetimepickerProps & InputCommonProps & WrappedFieldProps;

interface CalendarState {
  isOpen: boolean;
}

const DateTimeWrapper = styled.div<DateTimeWrapperProps>`
  ${sharedCalendarCss};
`;

interface DisabledProp {
  disabled: boolean;
}

const DatepickerWrapper = styled.div<DisabledProp>`
  display: flex;

  ${({ disabled, theme }) => disabled && `
    background-color: ${theme.whiteColor};
    pointer-events: none;
  `};
`;

const IconWrapper = styled.div<DateTimeWrapperProps>`
  display: flex;
  background-color: ${({ theme }) => theme.whiteColor};
  cursor: pointer;
  padding: 9.5px;
  border: solid 1px ${({ theme, invalid, active, disabled }) =>
    invalid
      ? theme.redColor
      : active
        ? theme.normalAccentColor
        : disabled
          ? theme.lightGrayColor
          : theme.grayColor};
  border-left: none;
  border-radius: 0 2px 2px 0;
`;

const CalendarIconWrapper = styled(CalendarIcon) <CalendarState>`
  color: ${({ isOpen, theme }) => isOpen ? theme.normalAccentColor : theme.grayColor};
`;

class Calendar extends React.Component<CalendarProps, CalendarState> {
  datepicker: React.RefObject<Datetime>;

  constructor(props: CalendarProps) {
    super(props);
    this.datepicker = React.createRef();

    this.state = { isOpen: false };
  }

  render() {
    const {
      id,
      name,
      placeholder,
      invalid,
      disabled,
      locale = 'eng',
      dateFormat = dateFormatConst.FORMAT,
      input: { value },
      ...props
    } = this.props;

    const { isOpen } = this.state;

    const formattedValue =
      dateUtil.toFormattedCalendarDate(value, dateFormat as string, locale);

    return (
      <DatepickerWrapper disabled={disabled}>
        <DateTimeWrapper
          active={isOpen}
          invalid={invalid}
          disabled={disabled}
        >
          <Datetime
            {...props}
            ref={this.datepicker}
            input={true}
            inputProps={{
              id,
              autoComplete: 'off',
              name,
              placeholder,
              onDoubleClick: !formattedValue ? this.setCurrentDate : undefined,
            }}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            renderDay={this.renderDay}
            timeFormat={false}
            closeOnSelect={true}
            locale={locale}
            dateFormat={dateFormat}
            open={isOpen}
            value={formattedValue}
          />
        </DateTimeWrapper>
        <IconWrapper
          active={isOpen}
          draggable={false}
          invalid={invalid}
          disabled={disabled}
          onClick={this.toggleCalendar}
        >
          <CalendarIconWrapper
            isOpen={isOpen}
            size="24"
          />
        </IconWrapper>
      </DatepickerWrapper>
    );
  }

  onFocus = () =>
    this.setState({ isOpen: true }, () => this.props.onFocus(null))

  onBlur = () =>
    this.setState({ isOpen: false }, () => this.props.onBlur(null))

  toggleCalendar = () =>
    this.state.isOpen ? this.onBlur() : this.onFocus()

  handleClickOutside = () => this.state.isOpen && this.onBlur();

  onChange = (value: string | Moment) => {
    const date = typeof value === 'string'
      ? value : value.format(dateFormatConst.FORMAT);

    return this.props.onChange(date);
  }

  setCurrentDate = () => {
    const today = moment().format(dateFormatConst.FORMAT);

    this.props.onChange(today);
  }

  renderDay = (props: object, currentDate: Moment) => {

    const date = currentDate.date();

    return (
      <td {...props}>
        {
          (date > 0 && date < 10) ?
            `0${date}`
            :
            date
        }
      </td>
    );
  }
}

export default OnClickOut(Calendar);
