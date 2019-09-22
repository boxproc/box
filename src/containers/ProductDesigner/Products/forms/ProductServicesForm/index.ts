import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductServicesForm from './ProductServicesForm';

import {
    createLoadingSelector,
    handleUpdateCardService,
    ProductsActionTypes,
    selectActiveItemId
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
    ProductsActionTypes.UPDATE_CARD_SERVICES,
  ]);
const mapStateToProps = (state: StoreState) => ({
    currentGroupId:  selectActiveItemId(state),
    isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {

    updateCardService: handleUpdateCardService,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductServicesForm);
