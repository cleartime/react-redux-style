import React, { Component } from 'react'
export default class Test extends Component {
    componentWillMount() {
    }
  render () {
      return (
      <div>
          {this.state}
          <button onclick={this.props.addTest(12)}></button>
      </div>
    )
  }
}
