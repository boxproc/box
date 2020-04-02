import { connect } from 'react-redux';

import EditProductForms from './EditProductForms';

import { activeItemIdSelector, currentProductTypeSelector, IStoreState } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentProductType: currentProductTypeSelector(state),
  currentProductId: activeItemIdSelector(state),
});

export default connect(
  mapStateToProps
)(EditProductForms);
