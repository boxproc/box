import { connect } from 'react-redux';

import EditProductForms from './EditProductForms';

import {
  selectCurrentProductId,
  selectCurrentProductType,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  currentProductId: selectCurrentProductId(state),
  currentProductType: selectCurrentProductType(state),
});

export default connect(
  mapStateToProps
)(EditProductForms);
