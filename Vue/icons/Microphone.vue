<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Microphone',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.79086 2 8 3.79086 8 6V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V6C16 3.79086 14.2091 2 12 2ZM14 12V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M13 18.9358C14.7697 18.7031 16.2069 17.8499 17.2296 16.5757C18.4196 15.0932 19 13.1061 19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11C17 12.7598 16.5134 14.2728 15.6699 15.3238C14.8455 16.3509 13.6338 17 12 17C10.3662 17 9.15455 16.3509 8.33011 15.3238C7.48657 14.2728 7 12.7598 7 11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11C5 13.1061 5.58044 15.0932 6.77039 16.5757C7.79311 17.8499 9.23032 18.7031 11 18.9358V20H9.00001C8.44772 20 8.00001 20.4477 8.00001 21C8.00001 21.5523 8.44772 22 9.00001 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H13V18.9358Z" fill="#414042"/>
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