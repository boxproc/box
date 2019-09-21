import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CardsFilterForm from './CardsFilterForm';

import { handleFilterLedgerCards } from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerCards: handleFilterLedgerCards,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(CardsFilterForm);
