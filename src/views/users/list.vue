<template>
  <div class="app-container">
    <!-- 创建用户按钮 -->
    <div class="btn-container">
      <el-button
        type="success"
        icon="el-icon-edit"
        size="small"
        @click="handleEditOrCreateItem"
      >创建用户</el-button>
    </div>

    <!-- 用户表格容器 -->
    <div class="table-container">
      <el-table
        v-loading="loading"
        :data="list"
        border
        fit
        highlight-current-row
        style="wdith: 100%"
      >
        <el-table-column prop="id" label="ID" align="center"></el-table-column>
        <el-table-column prop="name" label="Name" align="center"></el-table-column>
        <el-table-column prop="age" label="Age" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template v-slot="scope">
            <el-button @click="handleEditOrCreateItem(scope.row)" type="primary" size="small" icon="el-icon-edit">编辑</el-button>
            <el-button @click="handleDelItem(scope.row)" type="danger" size="small" icon="el-icon-remove">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <pagination
        :pageSizes="[1, 2, 3, 4, 5]"
        v-model:page="listQuery.page"
        v-model:limit="listQuery.limit"
        :total="total"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { Message } from 'element3'
import Pagination from 'comps/Pagination/index.vue'
import { useList } from './models/userModel'

export default {
  name: 'UserList',
  components: {
    Pagination
  },
  setup () {
    console.log('list setup')
    // 用户列表数据
    const router = useRouter()
    const { state, getList, delItem } = useList()

    // 处理编辑或创建用户
    const handleEditOrCreateItem = ({ id }) => {
      if (id) {
        router.push(`/users/edit/${id}`)
      } else {
        router.push(`/users/create`)
      }
    }

    // 处理删除用户
    const handleDelItem = ({ id }) => {
      if (id) {
        delItem({ id })
          .then(res => {
            // TODO 一些业务处理
            // 提示用户
            Message.error({
              message: '删除成功！'
            })
          })
      }
    }

    return {
      ...toRefs(state),
      getList,
      handleEditOrCreateItem,
      handleDelItem
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-container {
  margin: 15px 0;
}
</style>