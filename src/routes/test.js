import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
  path: 'test',

  /* 布局基页 */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('VIEW/test').default)
    }, 'test')
  },

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        // 注入 Reducer
        injectReducer('test', require('REDUCER/test').default)

        /* 组件连接 state */
        const TodoContainer = createContainer(
          ({ todos }) => ({ todos }),        // mapStateToProps,
          require('ACTION/test').default,    // mapActionCreators,
          require('COMPONENT/test/').default // 木偶组件
        )

        cb(null, TodoContainer)
      }, 'test')
    }
  }
}

/**
 * 【拓展】
 * 在 msg 的路由中，Reducer 是在 布局基页 中注入
 * 而在这里就可以在 indexRoute 中注入
 * 这主要取决于 Reducer 的作用范围
 */
