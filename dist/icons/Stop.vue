<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Stop',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M10 6H14C16.2091 6 18 7.79086 18 10V14C18 16.2091 16.2091 18 14 18H10C7.79086 18 6 16.2091 6 14V10C6 7.79086 7.79086 6 10 6ZM10 8C8.89543 8 8 8.89543 8 10V14C8 15.1046 8.89543 16 10 16H14C15.1046 16 16 15.1046 16 14V10C16 8.89543 15.1046 8 14 8H10Z" fill="#414042"/>
</svg>
`
    },
    contentStyle() {
      const size = this.size || 24
      return `width: ${size}px; height: ${size}px`
    },
    colorStyle() {
      if (this.color) return `fill: ${this.color}`
      return ""
    }
  },
}
</script>