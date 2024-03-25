<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Job',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M17 17H7C4.24 17 2 14.76 2 12V9C2 7.35 3.35 6 5 6H19C20.65 6 22 7.35 22 9V12C22 14.76 19.76 17 17 17ZM5 8C4.45 8 4 8.45 4 9V12C4 13.65 5.35 15 7 15H17C18.65 15 20 13.65 20 12V9C20 8.45 19.55 8 19 8H5Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M19 22H5C3.35 22 2 20.65 2 19V12H4V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V12H22V19C22 20.65 20.65 22 19 22Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M17 8H7C6.45 8 6 7.55 6 7C6 4.24 8.24 2 11 2H13C15.76 2 18 4.24 18 7C18 7.55 17.55 8 17 8ZM8.17 6H15.83C15.42 4.84 14.3 4 13 4H11C9.7 4 8.58 4.84 8.17 6Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M12 14C11.45 14 11 13.55 11 13V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V13C13 13.55 12.55 14 12 14Z" fill="#414042"/>
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