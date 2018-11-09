# 基于webpack4构建的vue应用（SSR/SPA）


pm2 start ecosystem.config.js # uses variables from `env`
pm2 start ecosystem.config.js --env production # uses variables from `env_production`

#### Usage:

```shell
npm install

npm run dev # 开发环境

npm run build # 线上构建
```





```shell
npm install

npm run dev # 开发环境

npm run build # 线上构建
npm run start # 线上运行
```

```javascript
// movie.vue
export default {
  // 更改title
  title () {
  	return 'demo1'
  },
  // 异步获取数据
  asyncData ({ store, route }) {
    // 触发 action 后，例：请求电影、传入id
    return store.dispatch('fetchMovie', 54321)
  },
}


// store/index.js
eturn new Vuex.Store({
  state: {
    movie: {}
  },
  actions: {
    fetchMovie ({ commit }, id) {
      return new Promise((resolve, reject) => {
        // ajax去请求数据
      }).then(res => {
        commit('setMoive', { res })
      })
    }
  },
  mutations: {
    setMoive (state, { res }) {
      Vue.set(state, 'movie', res)
    }
  }
})
```
