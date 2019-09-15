import styled from 'theme';

import 'react-cron-builder/dist/bundle.css';

export const CronGeneratorStyled = styled.div`
  margin: 0 -20px;

  .cron-builder {
    position: relative;
    display: inline-block;
    width: 100%;
    min-height: auto;
    background-color: transparent;
    padding: 0;
    color: ${({ theme }) => theme.colors.black};
    font-weight: normal;
    font-size: 12px;
    line-height: 1.35;
  }

  .cron-builder__fieldset {
    border: 0;
  }

  .cron-builder__legend {
    width: 100%;
    padding: 0;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .1);
  }

  .cron-builder__action,
  .cron-builder__preset .cron-builder__tab {
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    background: transparent;
    background-image: none;
    height: auto;
    min-height: 34px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: .2pt;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    line-height: 1.3;
    cursor: pointer;
    outline: 0;
    margin: 0;
  }

  .cron-builder__action {
    float: left;
    margin: 0 20px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.normalAccent};
    min-height: auto;
    line-height: 1.35;
  }

  .cron-builder__action:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  .cron-builder__preset .cron-builder__tab {
    font-size: 12px;
    padding: 8px 10px 7px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 2px;
    line-height: 1;
  }

  .cron-builder__preset .cron-builder__tab:not(:last-child) {
    margin-right: 8px;
  }

  .cron-builder__tab:hover:not(.cron-builder__tab--active) {
    background-image: none;
  }

  .cron-builder__preset .cron-builder__tab:hover,
  .cron-builder__preset .cron-builder__tab--active {
    border-color: ${({ theme }) => theme.colors.normalAccent};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .cron-builder__legend .cron-builder__tab {
    background-color: transparent;
    background-image: none;
    font-weight: normal;
    height: auto;
    line-height: 1.5;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 13px;
    letter-spacing: .5pt;
    border-bottom: 1px solid transparent;
    margin: 0;
  }

  .cron-builder__legend .cron-builder__tab:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  .cron-builder__legend .cron-builder__tab--active {
    border-bottom-color: ${({ theme }) => theme.colors.normalAccent};
  }

  .cron-builder__row--main {
    margin-top: 10px;
  }

  .cron-builder__row {
    display: flex;
    align-items: flex-end;
  }

  .cron-builder__row--hours-range {
    width: auto;
    justify-content: flex-start;
  }

  .cron-builder__pretty-expression {
    color: ${({ theme }) => theme.colors.gray};
    margin: 10px 20px 0;
    font-size: 13px;
    font-weight: inherit;
    line-height: 1.5;
    max-width: none;
  }

  .cron-builder__preset {
    margin: 0 20px 45px;
    min-height: 95px;
  }
  .cron-builder__preset > div {
    margin-left: 0 !important;
  }

  .cron-builder__hr {
    display: block;
    width: 100%;
    border-top: 1px solid transparent;
  }

  .cron-builder__label {
    padding-bottom: 5px;
    margin: 0;
    font-size: 12px;
    color: inherit;
  }

  .cron-builder__result {
    display: inline-block;
    height: auto;
    min-width: 150px;
    width: auto;
    border: 1px solid ${({ theme }) => theme.colors.normalAccent};
    padding: 7px;
    margin: 7px 20px 0;
    border-radius: 2px;
    background-color: transparent;
    color: inherit;
    font-weight: inherit;
    font-size: 13px;
    line-height: 1.4;
    user-select: all;
  }

  .cron-builder .Select-control,
  .cron-builder select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    cursor: default;
    font-size: 13px;
    line-height: 1.3;
    padding: 7px;
    min-height: 34px;
    box-shadow: none;
    box-sizing: border-box;
    outline: none;
    color: ${({ theme }) => theme.colors.black};
    border: solid 1px ${({ theme }) => theme.colors.gray};
    border-radius: 2px;
    /* -webkit-appearance: none; */
  }

  .cron-builder .Select-control>:last-child {
    padding: 0;
  }

  .cron-builder .Select.is-focused:not(.is-open) > .Select-control,
  .cron-builder .Select.is-searchable.is-open > .Select-control,
  .cron-builder select:focus {
    border-color: ${({ theme }) => theme.colors.normalAccent};
    box-shadow: none;
  }

  .cron-builder .Select--multi .Select-multi-value-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .cron-builder .Select--multi .Select-value {
    display: flex;
    align-items: center;
    line-height: 1.1;
    margin: 1px 2px;
    color: inherit;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    background-color: transparent;
    font-size: 11px;
  }

  .cron-builder .Select--multi .Select-value {
    border: 0;
    color: inherit;
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: 0;
  }

  .cron-builder .Select--multi .Select-value-label {
    padding-left: 0;
  }

  .cron-builder .Select--multi .Select-value-icon {
    border-right: 0;
    font-size: 14px;
    padding: 0 5px;
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  .cron-builder .Select--multi .Select-value-icon:focus,
  .cron-builder .Select--multi .Select-value-icon:hover {
    color: inherit;
    background-color: inherit;
  }

  .cron-builder .Select-clear-zone {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  .cron-builder .Select-clear-zone:hover {
    color: ${({ theme }) => theme.colors.gray};
  }

  .cron-builder .Select-arrow,
  .cron-builder .Select-arrow-zone:hover > .Select-arrow {
    border-color: ${({ theme }) => theme.colors.gray} transparent transparent;
  }

  .cron-builder .Select.is-open > .Select-control .Select-arrow {
    top: 0;
    border-color: ${({ theme }) => theme.colors.gray} transparent transparent;
    border-width: 5px 5px 2.5px;
    border-style: solid;
  }

  .cron-builder .Select-input {
    height: auto;
    padding: 0;
    margin-right: 10px;
  }

  .cron-builder .Select-input > input {
    height: 100%;
    padding: 0 2px;
  }

  .cron-builder .Select--multi.has-value .Select-input {
    margin: 0;
  }

  .cron-builder .Select-clear-zone {
    display: none;
  }

  .cron-builder .Select-menu-outer {
    border-radius: 0 0 2px 2px;
    border: 1px solid ${({ theme }) => theme.colors.normalAccent};
    border-top-color: transparent;
    box-shadow: none;
    margin-top: 0;
    padding-left: 1px;
    padding-right: 1px;
  }

  .cron-builder .Select-option.is-focused {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  .cron-builder .Select-option {
    color: ${({ theme }) => theme.colors.black};
  }

  .cron-builder .Select-menu::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border: 1px solid white;
    border-radius: 8px;
  }

  .cron-builder .Select-menu::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.normalAccent};
    border-radius: 8px;
  }

  .cron-builder .Select-menu::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.lightGray};
    -webkit-box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.lightGray};
    border-radius: 8px;
  }

  .cron-builder__input {
    min-width: 110px;
    margin-right: 8px;
  }

  .cron-builder__link {
    top: calc(100% + 10px);
    margin-top: 0;
    margin-right: 8px;
  }
`;
