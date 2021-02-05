<script lang="jsx">
export default {
  name: "MenuItem",
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const { title, icon } = props
    const vnodes = []
    if (icon) {
      vnodes.push(<i class={[icon, 'sub-el-icon']}></i>)
    }

    if (title) {
      vnodes.push(<span>{title}</span>)
    }
    return () => (
      <>
        {vnodes.map(node => node)}
      </>
    )
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1rem !important;
  height: 1rem !important;
}
</style>
