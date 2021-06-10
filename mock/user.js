
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: '我是一个超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: '我是一个编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '普通编辑'
  }
}

module.exports = [
  // 用户登录
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
      // 模拟错误
      if (!token) {
        return {
          code: 60204,
          message: '帐户和密码不正确'
        }
      }
      return {
        code: 20000,
        data: token
      }
    }
  },

  // 获取用户信息
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // 模拟错误
      if (!info) {
        return {
          code: 50008,
          message: '登录失败，无法获取用户详细信息'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // 用户退出
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
