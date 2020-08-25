import { IResponseStatus, TApiResponse } from 'types';
import {
  IAccountStatementsData,
  IChangeMinimumAmountRequestData,
  IStatementAprLogsData,
  IStatementAprsData,
  IStatementsData,
  IStatementTransactionsData,
} from './types';

export enum ActionTypeKeys {
  /** Filter statements action type keys */
  FILTER_STATEMENTS = 'statements/FILTER_STATEMENTS',
  FILTER_STATEMENTS_FULFILLED = 'statements/FILTER_STATEMENTS_FULFILLED',
  FILTER_STATEMENTS_REJECTED = 'statements/FILTER_STATEMENTS_REJECTED',

  /** Get statement transactions action type keys */
  GET_STATEMENT_TRANSACTIONS = 'statements/GET_STATEMENT_TRANSACTIONS',
  GET_STATEMENT_TRANSACTIONS_FULFILLED = 'statements/GET_STATEMENT_TRANSACTIONS_FULFILLED',
  GET_STATEMENT_TRANSACTIONS_REJECTED = 'statements/GET_STATEMENT_TRANSACTIONS_REJECTED',

  /** Filter statements by ID action type keys */
  FILTER_STATEMENTS_BY_ID = 'statements/FILTER_STATEMENTS_BY_ID',
  FILTER_STATEMENTS_BY_ID_FULFILLED = 'statements/FILTER_STATEMENTS_BY_ID_FULFILLED',
  FILTER_STATEMENTS_BY_ID_REJECTED = 'statements/FILTER_STATEMENTS_BY_ID_REJECTED',

  /** Get statements for account action type keys */
  GET_ACCOUNT_STATEMENTS = 'statements/GET_ACCOUNT_STATEMENTS',
  GET_ACCOUNT_STATEMENTS_FULFILLED = 'statements/GET_ACCOUNT_STATEMENTS_FULFILLED',
  GET_ACCOUNT_STATEMENTS_REJECTED = 'statements/GET_ACCOUNT_STATEMENTS_REJECTED',

  /** Get statement APRs action type keys */
  GET_STATEMENT_APRS = 'statements/GET_STATEMENT_APRS',
  GET_STATEMENT_APRS_FULFILLED = 'statements/GET_STATEMENT_APRS_FULFILLED',
  GET_STATEMENT_APRS_REJECTED = 'statements/GET_STATEMENT_APRS_REJECTED',

  /** Get statement APR logs action type keys */
  GET_STATEMENT_APR_LOGS = 'statements/GET_STATEMENT_APR_LOGS',
  GET_STATEMENT_APR_LOGS_FULFILLED = 'statements/GET_STATEMENT_APR_LOGS_FULFILLED',
  GET_STATEMENT_APR_LOGS_REJECTED = 'statements/GET_STATEMENT_APR_LOGS_REJECTED',

  /** Change minimum repayment action type keys */
  CHANGE_MINIMUM_REPAYMENT = 'statements/CHANGE_MINIMUM_REPAYMENT',
  CHANGE_MINIMUM_REPAYMENT_FULFILLED = 'statements/CHANGE_MINIMUM_REPAYMENT_FULFILLED',
  CHANGE_MINIMUM_REPAYMENT_REJECTED = 'statements/CHANGE_MINIMUM_REPAYMENT_REJECTED',

  /** Reset statements action type keys */
  RESET_STATEMENTS = 'statements/RESET_STATEMENTS',
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

/** Get statement APR logs action interfaces */
export interface IGetStatementAprLogsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_STATEMENT_APR_LOGS;
}

export interface IGetStatementAprLogsFulfilledAction {
  readonly payload: IStatementAprLogsData;
  readonly type: ActionTypeKeys.GET_STATEMENT_APR_LOGS_FULFILLED;
}

export interface IGetStatementAprLogsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_STATEMENT_APR_LOGS_REJECTED;
}

/** Change minimum repayment action interfaces */
export interface IChangeMinimumRepaymentAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CHANGE_MINIMUM_REPAYMENT;
}

export interface IChangeMinimumRepaymentFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.CHANGE_MINIMUM_REPAYMENT_FULFILLED;
  readonly meta: IChangeMinimumAmountRequestData;
}

export interface IChangeMinimumRepaymentRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.CHANGE_MINIMUM_REPAYMENT_REJECTED;
}

/** Reset statements action interfaces */
export interface IResetStatementsAction {
  readonly type: ActionTypeKeys.RESET_STATEMENTS;
}

export type TStatementsAction =
  | IFilterStatementsFulfilledAction
  | IGetStatementTransFulfilledAction
  | IFilterStatementsByIdFulfilledAction
  | IGetAccountStatementsFulfilledAction
  | IGetStatementAprsFulfilledAction
  | IChangeMinimumRepaymentFulfilledAction
  | IGetStatementAprLogsFulfilledAction
  | IResetStatementsAction;
