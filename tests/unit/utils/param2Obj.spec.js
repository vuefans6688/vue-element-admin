import { paramObject } from '@/utils/index.js'
describe('Utils:paramObject', () => {
  const url = 'https://github.com/PanJiaChen/vue-element-admin?name=bill&age=29&sex=1&field=dGVzdA==&key=%E6%B5%8B%E8%AF%95'

  it('paramObject test', () => {
    expect(paramObject(url)).toEqual({
      name: 'bill',
      age: '29',
      sex: '1',
      field: window.btoa('test'),
      key: '测试'
    })
  })
})
