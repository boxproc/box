import { css } from 'theme';

import { DateTimeWrapperProps } from './Calendar';

export const sharedCalendarCss = css<DateTimeWrapperProps>`
  width: 100%;

  .form-control {
    position: relative;
    width: 100%;
    height: 33px;
    padding: 7px;
    box-shadow: none;
    box-sizing: border-box;
    outline: none;
    color: ${({ theme }) => theme.colors.black};
    border-radius: 2px 0 0 2px;
    border: solid 1px ${({ theme, active, invalid, disabled }) =>
    invalid ? theme.colors.red :
      active ? theme.colors.normalAccent :
        disabled ? theme.colors.lightGray : theme.colors.gray
  };

    &:focus{
      border: solid 1px ${({ theme, invalid }) =>
    invalid ? theme.colors.red : theme.colors.normalAccent};
    }

    ::placeholder{
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray};
    }

    :disabled {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
  input {
    text-overflow: ellipsis;
  }
  table {
    border-spacing: 0ch;
  }
  thead,
  tbody,
  tr {
    display: block;
  }
  tbody {
    border-top: 1px solid ${({ theme }) => theme.colors.lightAccent};
    margin: 0 10px;
    padding: 10px 0;
  }
  thead tr:last-child {
    padding: 0px 10px;
  }
  tbody td {
    width: 27px;
  }
  .rdt {
    position: relative;
  }
  .rdtPicker {
    z-index: 1;
    display: none;
    position: absolute;
    width: 200px;
    margin-top: 7px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.normalBox};
  }
  .rdtPicker:hover {
    box-shadow: ${({ theme }) => theme.shadows.normalBox};
  }
  .rdtOpen .rdtPicker {
    display: block;
  }
  .rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }
  .rdtPicker table {
    width: 100%;
    margin: 0;
  }
  .rdtPicker table thead tr:first-child {
    background-color: ${({ theme }) => theme.colors.normalAccent};
    vertical-align: baseline;
    padding: 8px 15px;
  }
  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 26px;
  }
  .rdtPicker td {
    cursor: pointer;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
  }
  .rdtPicker td.rdtDay:hover {
    border-radius: 100%;
    background: #eeeeee;
    cursor: pointer;
  }
  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: ${({ theme }) => theme.colors.gray};
  }
  .rdtPicker td.rdtToday {
    font-weight: bold;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtToday.rtdActive,
  .rdtPicker td.rdtToday:hover,
  .rdtPicker td.rdtActive:hover {
    border-radius: 100%;
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.normalAccent};
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td span.rdtOld {
    color: ${({ theme }) => theme.colors.gray};
  }
  .rdtPicker .dow {
    height: 33px;
    width: 27px;
    border-bottom: none;
    cursor: default;
    font-weight: normal;
    font-size: 11px;
  }
  .rdtPicker th.rdtSwitch {
    min-width: 155px;
    color: white;
    font-weight: 500;
    font-size: 18px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 22px;
    color: white;
  }
  .rdtPrev span,
  .rdtNext span {
    display: block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;
  }
  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
  }
  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }
  td.rdtMonth,
  td.rdtYear {
    height: 45px;
    width: 50px;
    cursor: pointer;
  }

  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtNew {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
