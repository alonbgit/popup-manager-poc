import { connect } from 'react-redux';
import Login from './login.component';

const mapStateToProps = state => {
	return {
		email: state.email
	};
};
  
export default connect(mapStateToProps)(Login);