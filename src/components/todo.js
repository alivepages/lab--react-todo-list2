import React, { Component } from 'react';
import Buttons from './buttons';
import Rows from './rows';

export default class Todo extends Component {

  constructor(props) {
      super(props)
      this.state = {
        value: '',
        listValues: []
      }
  }

  saveText = (value) => {
      this.setState({ value: value })
  }

  addItem = () => {
    var values = this.state.listValues;
    var value = this.state.value;
    if (value !== '') {
      values.push(value)
      this.setState({
        value: '',
        listValues: values
      });
    }
  }

  removeItem = (itemIndex) => {
    var values = this.state.listValues;
    values.splice(itemIndex, 1)
    this.setState({
      value: '',
      listValues: values
    });
  }

  render() {
    return (
      <div className="todoBox">
        <h1>Todo List <small>Normal mode</small></h1>
        <Buttons addItem={this.addItem} saveText={this.saveText}/>
        <hr />
        <Rows values={this.state.listValues} removeItem={this.removeItem}/>
      </div>
      )
    }
}
