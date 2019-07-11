import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GetProductInfoModal from './GetProductInfoModal';

import {
  closeModal,
  createLoadingSelector,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetProductInfoModal);
