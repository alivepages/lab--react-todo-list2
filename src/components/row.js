import React, { Component } from 'react';

export default class Row extends Component {

  handleClick = () => {
    var index = this.props.index;
    this.props.removeItem(index);
  }

  render() {
    return (

      <div className="item">
        <label>
          <input type="checkbox" value="" />
          <span>{this.props.value}</span>
        </label>
        <i className="fa fa-remove fa-2x" onClick={this.handleClick}></i>
      </div>
    )
  }
}
