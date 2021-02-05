<template>
  <div v-if="!menuItem.hidden">
    <template 
      v-if="
        hasOnlyOneChild(menuItem.children, menuItem) && 
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !menuItem.alwaysShow"
    >
      <app-link :to="resolvePathCopy(onlyOneChild.path)">
        <el-menu-item :index="resolvePathCopy(onlyOneChild.path)">
          <template #title>
            <item :title="onlyOneChild.meta && onlyOneChild.meta.title" :icon="(onlyOneChild.meta && onlyOneChild.meta.icon) || (menuItem.meta && menuItem.meta.icon)"></item>
          </template>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu 
      v-else 
      ref="subMenu"
      :index="resolvePathCopy(onlyOneChild.path)"
      popper-append-to-body
    >
      <template #title>
        <item
          v-if="menuItem.meta"
          :title="menuItem.meta.title" 
          :icon="menuItem.meta && menuItem.meta.icon"
        />
      </template>
      <sidebar-item 
        v-for="child in menuItem.children"
        :key="child.path"
        :is-nest="true"
        :menuItem="child"
        :basePath="resolvePathCopy(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { isExternal } from "utils/validate.js";
import SidebarItem from './SidebarItem.vue'
import Item from './Item.vue'
import AppLink from './Link.vue'

const props = defineProps({
  // route Object
  menuItem: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    required: true
  }
})

const onlyOneChild = ref(null)

const hasOnlyOneChild = (children = [], parent) => {
  if (!parent) return;
  const showingChildren = children.filter(item => {
    if (item.hidden) {
      return false
    } else {
      onlyOneChild.value = item
      return true
    }
  })

  if (showingChildren.length === 1) {
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

const resolve = (...paths) => {
  const hasRootPath = paths.includes('/')
  paths = paths.filter(path => path !== '/')
  return hasRootPath ? '/' + paths.join('/') : paths.join('/')
}


const resolvePathCopy = (routePath) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return resolve(props.basePath, routePath)
}

const resolvePath = (children = [], basePath, routePath = []) => {
  if (!hasOnlyOneChild(children)) {
    routePath.push(basePath)
  }

  if (children.length === 0) {
    routePath = [basePath]
  } else {
    routePath = children.reduce((prev, curr) => {
      return prev.concat(curr.path)
    }, [basePath]).filter(path => path !== '/')
  }

  return basePath === '/' ? basePath + routePath.join('/') : routePath.join('/')
  
}

</script>

<style scoped>

</style>
