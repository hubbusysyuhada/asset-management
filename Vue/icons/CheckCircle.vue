<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'CheckCircle',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM17.2975 8.29251C16.9074 7.89963 16.2719 7.89811 15.8804 8.28961L10 14.17L8.11568 12.293C7.72572 11.9045 7.09489 11.9051 6.70568 12.2943V12.2943C6.31594 12.6841 6.31594 13.3159 6.70568 13.7057L8.58579 15.5858C9.36684 16.3668 10.6332 16.3668 11.4142 15.5858L17.2954 9.70461C17.6849 9.31506 17.6857 8.68343 17.2975 8.29251V8.29251Z" fill="#414042"/>
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