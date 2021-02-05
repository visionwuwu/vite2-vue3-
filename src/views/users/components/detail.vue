<template>
  <div class="app-container">
    <h3>{{ isEdit ? '更新用户' : '新建用户' }}</h3>
    <el-form :model="model" :rules="rules" ref="form">
      <el-form-item label="用户姓名" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="用户年龄" prop="age">
        <el-input v-model="model.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">{{ isEdit ? '更新' : '创建' }}</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { Message } from 'element3'
import { useRoute, useRouter } from 'vue-router'
import { useItem } from '../models/userModel'
function checkAge(rule, value, callback) {
  if (!value) {
    callback(new Error('年龄不能为空'))
  }
  setTimeout(() => {
    if (!Number.isInteger(parseInt(value))) {
      callback(new Error('请输入数字'))
    } else {
      if (value < 18) {
        callback(new Error('必须年满18岁'))
      } else {
        callback()
      }
    }
  }, 1000)
}
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const form = ref(null)
    const route = useRoute()
    const router = useRouter()
    const { id } = route.params
    const { model, updateItem, createItem } = useItem(props.isEdit, id)
    // 校验规则
    const rules = reactive({
      name: [
        { required: true, message: '请输入名称', trigger: 'blur' }
      ],
      age: [
        { required: true, message: '请输入年龄', trigger: 'blur' },
        { validator: checkAge, trigger: 'blur' }
      ]
    })
    // 重置表单
    const resetForm = () => {
      form.value.resetFields()
    }

    // 提交表单
    const submitForm = () => {
      form.value.validate(async (valid) => {
        // 校验成功
        if (valid) {
          if (props.isEdit) {
            // 更新item
            await updateItem({ id, model: { ...model.value } })
            // 操作成功提示
            Message({
              message: '更新成功',
              type: 'success',
              duration: 1000,
              onClose() {
                router.push('/users/list')
              }
            })
          } else {
            // 创建item
            await createItem({ 
              model: {
                id: +Date.now(),
                ...model.value
            }})
            // 操作成功提示
            Message({
              message: '创建成功',
              type: 'success',
              duration: 1000,
              onClose() {
                router.push('/users/list')
              }
            })
          }
        }
      })
    }

    return {
      model,
      form,
      rules,
      resetForm,
      submitForm
    }
  }
}
</script>

<style lang="scss" scoped>

</style>