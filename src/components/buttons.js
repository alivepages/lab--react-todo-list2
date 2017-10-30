import React, { Component } from 'react';

export default class Buttons extends Component {

  _handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         this.props.addItem();
         this.refs.text.value = '';
      }
  }

  _handleClick = () => {
    this.props.addItem();
  }

  _handleChange = () => {
      this.props.saveText(this.refs.text.value);
  }

  render() {

    return (
      <div className="buttons">
        <input type="text" id="addText" ref="text" onChange={this._handleChange} onKeyPress={this._handleKeyPress} /><button type="button" name="add" onClick={this._handleClick}>+</button>
      </div>
    )
  }
}
