import { connect } from 'react-redux';

import IllustrationAprsTable from './IllustrationAprsTable';

import { selectAprsIllustration } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  aprIllustration: selectAprsIllustration(state),
});

export default connect(
  mapStateToProps
)(IllustrationAprsTable);
