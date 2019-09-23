import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import Filter from './Filter';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  filterValues: getFormValues(formNamesConst.FILTER)(state),
});

export default connect(
  mapStateToProps
)(Filter);
