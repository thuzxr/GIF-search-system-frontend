import Mock from 'mockjs'

const url = 'http://49.233.71.202/backend_search'

Mock.mock(RegExp(url + ".*"), 'get', {
  title: 'this is a test',
  value: 321321,
  response: "fake response",
  status: 'succeed'
})

export default Mock;