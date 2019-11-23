const mockAxios = {//= >(option)//
  create: jest.fn(() =>
    (option) => {
      console.log('in mockAxios')
      console.log(option)
      // if (option.name == "get")
      return Promise.resolve({ status: 'succeed' })
      // return (option) => {
      //   console.log("read option")
      // }
    }

  ),

  // create: jest.fn(() => {
  //   interceptors: () => {}
  // }),
  get: jest.fn(() => Promise.resolve({ status: 'succeed' }))
  // get: jest.fn((strr) => (str) => {
  //   console.log("in mockAxios.get: "+str+strr)
  // })
}
export default mockAxios

// export default {
//   //get: jest.fn(() => Promise.resolve({data: {}}))
//   get: () => Promise.resolve({ data: 'value' })
// }
