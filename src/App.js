import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    show: false
  }

  popup = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    return (
      <div className="">
        <h2>Popup</h2>
        <div 
          className="popup" 
          onMouseOver={this.popup}
          onMouseOut={this.popup}>Click me to toggle the popup!
          <span className={this.state.show ? 'show popuptext' : 'popuptext' } id="myPopup">A Simple Popup!</span>
        </div>
      </div>
    );
  }
}

export default App;
