import { defineStore } from 'pinia'

export const useTestStore = defineStore({
  id: 'test', // 必填且唯一
  state: () => {
    return {
      name: 'test',
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
  },
  //使用该插件，开启数据缓存
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'test_config',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.localStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    // paths: ['name'],
  },
})
