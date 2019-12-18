import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AprsTable from './AprsTable';

import {
  createLoadingSelector,
  handleDeleteProductApr,
  handleGetProductAprs,
  handleUpdateProductApr,
  ProductsActionTypes,
  selectProductAprs,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_APRS,
  ProductsActionTypes.DELETE_PRODUCT_APR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productAprs: selectProductAprs(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductAprs: handleGetProductAprs,
    deleteProductApr: handleDeleteProductApr,
    updateProductApr: handleUpdateProductApr,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AprsTable);
