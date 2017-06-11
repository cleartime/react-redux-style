import React, { Component } from 'react'
import handleChange from 'MIXIN/handleChange'
import Mock from 'mockjs'
export default class Test extends Component {
    constructor (props) {
        super(props)
        this.state = { inputVal: '' }
        this.handleChange = handleChange.bind(this)
    }

    handleSubmit () {
        let content = this.state.inputVal.trim()
        if (!content) return
        this.props.addTest(content)
        this.setState({ inputVal: '' }) // 清空输入框
    }
    fetchTest () {
        this.props.fetchTest(Mock.Random.region())
    }

    render () {
      return (
      <div>
          <div onClick={() => this.fetchTest()}>点我动态获取</div>
          <form onSubmit={
              (e) => {
                  e.preventDefault() // 防页面跳转
                  this.handleSubmit()
              }
          }>
              <div className="form-group">
                  <input
                      type="text"
                      className="form-control"
                      name="inputVal"
                      placeholder="请输入待办事项，敲回车确认添加"
                      required
                      value={this.state.inputVal}
                      onChange={this.handleChange} />
              </div>

          </form>
          <div>
              {this.props.tests.map(t=>
                 <div>
                     {t}
                 </div>
              )}
          </div>
      </div>
    )
  }
}
