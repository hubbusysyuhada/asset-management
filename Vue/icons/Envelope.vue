<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Envelope',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M17 3H7C4.24 3 2 5.24 2 8V16C2 18.76 4.24 21 7 21H17C19.76 21 22 18.76 22 16V8C22 5.24 19.76 3 17 3ZM7 5H17C17.88 5 18.66 5.39 19.21 5.99L12.55 10.43C12.21 10.65 11.78 10.65 11.44 10.43L4.79 5.99C5.34 5.39 6.12 5 7 5ZM20 16C20 17.65 18.65 19 17 19H7C5.35 19 4 17.65 4 16V8C4 7.96 4.01 7.92 4.01 7.88L10.33 12.1C10.84 12.43 11.42 12.6 12 12.6C12.58 12.6 13.16 12.43 13.66 12.09L19.98 7.87C19.99 7.92 20 7.96 20 8V16Z" fill="#414042"/>
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