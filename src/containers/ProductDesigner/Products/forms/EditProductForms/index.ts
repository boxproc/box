import { connect } from 'react-redux';

import EditProductForms from './EditProductForms';

import { selectActiveItemId, selectCurrentProductType } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  currentProductType: selectCurrentProductType(state),
  currentProductId: selectActiveItemId(state),
});

export default connect(
  mapStateToProps
)(EditProductForms);
