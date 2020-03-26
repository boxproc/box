import { TApiResponse } from 'types';
import {
  IAccountStatementsData,
  IStatementAprsData,
  IStatementsData,
  IStatementTransactionsData,
} from './types';

export enum ActionTypeKeys {
  /** Filter statements action type keys */
  FILTER_STATEMENTS = 'ledger/statements/FILTER_STATEMENTS',
  FILTER_STATEMENTS_FULFILLED = 'ledger/statements/FILTER_STATEMENTS_FULFILLED',
  FILTER_STATEMENTS_REJECTED = 'ledger/statements/FILTER_STATEMENTS_REJECTED',

  /** Get statement transactions action type keys */
  GET_STATEMENT_TRANSACTIONS = 'ledger/statements/GET_STATEMENT_TRANSACTIONS',
  GET_STATEMENT_TRANSACTIONS_FULFILLED = 'ledger/statements/GET_STATEMENT_TRANSACTIONS_FULFILLED',
  GET_STATEMENT_TRANSACTIONS_REJECTED = 'ledger/statements/GET_STATEMENT_TRANSACTIONS_REJECTED',

  /** Filter statements by ID action type keys */
  FILTER_STATEMENTS_BY_ID = 'ledger/statements/FILTER_STATEMENTS_BY_ID',
  FILTER_STATEMENTS_BY_ID_FULFILLED = 'ledger/statements/FILTER_STATEMENTS_BY_ID_FULFILLED',
  FILTER_STATEMENTS_BY_ID_REJECTED = 'ledger/statements/FILTER_STATEMENTS_BY_ID_REJECTED',

  /** Get statements for account action type keys */
  GET_ACCOUNT_STATEMENTS = 'ledger/statements/GET_ACCOUNT_STATEMENTS',
  GET_ACCOUNT_STATEMENTS_FULFILLED = 'ledger/statements/GET_ACCOUNT_STATEMENTS_FULFILLED',
  GET_ACCOUNT_STATEMENTS_REJECTED = 'ledger/statements/GET_ACCOUNT_STATEMENTS_REJECTED',

  /** Get statement APRs action type keys */
  GET_STATEMENT_APRS = 'ledger/statements/GET_STATEMENT_APRS',
  GET_STATEMENT_APRS_FULFILLED = 'ledger/statements/GET_STATEMENT_APRS_FULFILLED',
  GET_STATEMENT_APRS_REJECTED = 'ledger/statements/GET_STATEMENT_APRS_REJECTED',

  /** Reset statements action type keys */
  RESET_STATEMENTS = 'ledger/statements/RESET_STATEMENTS',
}

/** Filter statements action interfaces */
export interface IFilterStatementsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_STATEMENTS;
}

export interface IFilterStatementsFulfilledAction {
  readonly payload: IStatementsData;
  readonly type: ActionTypeKeys.FILTER_STATEMENTS_FULFILLED;
}

export interface IFilterStatementsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_STATEMENTS_REJECTED;
}

/** Get statement transactions action interfaces */
export interface IGetStatementTransAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_STATEMENT_TRANSACTIONS;
}

export interface IGetStatementTransFulfilledAction {
  readonly payload: IStatementTransactionsData;
  readonly type: ActionTypeKeys.GET_STATEMENT_TRANSACTIONS_FULFILLED;
}

export interface IGetStatementTransRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_STATEMENT_TRANSACTIONS_REJECTED;
}

/** Filter statements by ID action interfaces */
export interface IFilterStatementsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_STATEMENTS_BY_ID;
}

export interface IFilterStatementsByIdFulfilledAction {
  readonly payload: IStatementsData;
  readonly type: ActionTypeKeys.FILTER_STATEMENTS_BY_ID_FULFILLED;
}

export interface IFilterStatementsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_STATEMENTS_BY_ID_REJECTED;
}

/** Get statements for account action interfaces */
export interface IGetAccountStatementsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ACCOUNT_STATEMENTS;
}

export interface IGetAccountStatementsFulfilledAction {
  readonly payload: IAccountStatementsData;
  readonly type: ActionTypeKeys.GET_ACCOUNT_STATEMENTS_FULFILLED;
}

export interface IGetAccountStatementsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_ACCOUNT_STATEMENTS_REJECTED;
}

/** Get statement APRs action interfaces */
export interface IGetStatementAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_STATEMENT_APRS;
}

export interface IGetStatementAprsFulfilledAction {
  readonly payload: IStatementAprsData;
  readonly type: ActionTypeKeys.GET_STATEMENT_APRS_FULFILLED;
}

export interface IGetStatementAprsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_STATEMENT_APRS_REJECTED;
}

/** Reset statements action interfaces */
export interface IResetStatementsAction {
  readonly type: ActionTypeKeys.RESET_STATEMENTS;
}

export type TStatementsActionTypes =
  | IFilterStatementsFulfilledAction
  | IGetStatementTransFulfilledAction
  | IFilterStatementsByIdFulfilledAction
  | IGetAccountStatementsFulfilledAction
  | IGetStatementAprsFulfilledAction
  | IResetStatementsAction;
