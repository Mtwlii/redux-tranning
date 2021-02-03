import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {


  render() {
    console.log(this.props)
    return (
      <div className="container">
        <button className="badge-success" onClick={this.props.increase}>  + </button>
        <div> {this.props.count} </div>
        <button className="badge-danger" onClick={this.props.decrease}> - </button>
        <p>{this.props.connect}</p>
      </div>
    )
  }     
}
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({ type: 'INCREASE' }),
    decrease: () => dispatch({ type: 'DECREASE' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
