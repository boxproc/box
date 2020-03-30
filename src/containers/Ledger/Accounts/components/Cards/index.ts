import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  accountCardsSelector,
  activeItemIdSelector,
  handleGetAccountCards,
  handleOrderAccountCard,
  isAccountCardsLoadingSelector,
  isOrderingAccountCardSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isAccountCardsLoadingSelector(state),
  isOrderingCard: isOrderingAccountCardSelector(state),
  accountCurrentId: activeItemIdSelector(state),
  accountCards: accountCardsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAccountCards: handleGetAccountCards,
    orderAccountCard: handleOrderAccountCard,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
