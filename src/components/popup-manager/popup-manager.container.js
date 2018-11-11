import { connect } from 'react-redux';
import PopupManager from './popup-manager.component';

const mapStateToProps = state => {
	return {
		popups: state.popups
	};
};
  
export default connect(mapStateToProps)(PopupManager);