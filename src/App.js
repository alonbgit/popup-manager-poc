import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopupManager from './components/popup-manager';
import './App.scss';
import * as appPopups from './helpers/app-popups';
import * as actions from './store/popup-manager/actions';

class App extends Component {

  render() {

    return (
      <div className='background'>
        <PopupManager />
        <div className='buttons-container'>
          <button onClick={() => appPopups.showLoginPopup()}>Show LoginPopup</button>
          <button onClick={() => appPopups.showUserDetailsPopup()}>Show UserDetailsPopup</button>
          <button onClick={() => appPopups.showRegisterPopup()}>Show RegisterPopup</button>
          <button onClick={() => this.props.changeLoginEmail('otheremail@gmail.com')}>Change Login email</button>
          </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  changeLoginEmail: (email) => dispatch(actions.changeLoginEmail(email))
});

export default connect(null, mapDispatchToProps)(App);