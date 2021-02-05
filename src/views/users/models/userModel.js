import { reactive, ref, onMounted } from 'vue'
import { 
  reqUserList, 
  reqUserById, 
  delUserById, 
  updateUserById, 
  createUser 
} from 'apis/user'

// 用户列表逻辑抽离
export function useList() {
  // 列表所需的数据
  const state = reactive({
    loading: false,
    list: [],
    total: 0,
    listQuery: {
      page: 1,
      limit: 2
    }
  })

  // 获取列表
  const getList = () => {
    state.loading = true

    setTimeout(() => {
      reqUserList(state.listQuery)
      .then((res) => {
        // 数据获取成功更新state
        const { data, total } = res
        state.list = data
        state.total = total
      })
      .finally(() => {
        state.loading = false
      })
    }, 300)
    
  }

  // 删除列表项
  const delItem = (params) => {
    state.loading = true
    return delUserById(params)
      .finally(() => {
        state.loading = false
      })
  }

  // 获取用户列表数据
  getList()

  return {
    state,
    getList,
    delItem
  }
}

const defaultItem = {
  name: '',
  age: ''
}

// 列表项逻抽离
export function useItem(isEdit, id) {
  const model = ref(Object.assign({}, defaultItem))

  // 如果是编辑就获取当前id对应的列表项
  onMounted(() => {
    if (isEdit && id) {
      reqUserById({id})
      .then((res) => {
        model.value = res.data
      })
    }
  })

  // 更新某项列表
  const updateItem = (params) => {
    console.log(params)
    return updateUserById(params)
  }

  // 创建列表项
  const createItem = (params) => {
    return createUser(params)
  }

  return {
    model,
    updateItem,
    createItem
  }
}