import React, { Component } from 'react';
import Row from './row'

export default class Rows extends Component {

  render() {
    let removeItem=this.props.removeItem;
    let rows = this.props.values.map(function(value, index){
      return <Row value={value} key={index} index={index} removeItem={removeItem}/>
    })
    return (

      <div className="rows">
        {rows}
      </div>
    )
  }
}
