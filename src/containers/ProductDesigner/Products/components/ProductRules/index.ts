import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductRules from './ProductRules';

import {
  handleFilterDictionaryEventDataElemsById,
  selectDictionaryEventDataElemsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  dictionaryEventDataElemsItems: selectDictionaryEventDataElemsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterDictionaryEventDataElemsById: handleFilterDictionaryEventDataElemsById,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRules);
