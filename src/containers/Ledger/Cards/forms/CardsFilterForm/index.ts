import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import CardsFilterForm from './CardsFilterForm';

import {
  handleFilterLedgerCards,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNames.LEDGER_CARDS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerCards: handleFilterLedgerCards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsFilterForm);
