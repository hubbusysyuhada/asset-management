<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'ArrowRight',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 12.5523 4.44771 13 5 13L16.5858 13L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11L5 11C4.44772 11 4 11.4477 4 12Z" fill="#414042"/>
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