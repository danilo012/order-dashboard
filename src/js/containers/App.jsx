import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx'
import Panel from './Panel.jsx'
import Board from './Board.jsx'
import Login from './Login.jsx'
import { setOrders } from '../../redux/actions/orders';

export class App extends Component {
  componentWillMount() {
    this.props.dispatch(setOrders(this.props.userID));
  }

  render(){
    if(this.props.login === false){
      return (
        <Login />
      );
    }
    else{
      return (
        <React.Fragment>
          <Header />
          <Panel />
          <Board />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    userID: state.userID
  }
}

export default connect(
  mapStateToProps
)(App);
