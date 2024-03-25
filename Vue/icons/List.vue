<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'List',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7 10C7 9.44772 7.44772 9 8 9L16 9C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11L8 11C7.44772 11 7 10.5523 7 10Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7 14C7 13.4477 7.44772 13 8 13L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L8 15C7.44772 15 7 14.5523 7 14Z" fill="#414042"/>
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