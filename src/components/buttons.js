import React, { Component } from 'react';

export default class Buttons extends Component {

  handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         this.props.addItem();
      }
  }

  handleClick = () => {
    this.props.addItem();
  }

  handleChange = (event) => {
    this.props.saveText(event.target.value)
  }

  render() {

    return (
      <div className="buttons">
        <input type="text" id="addText" value={this.props.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} /><button type="button" name="add" onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
