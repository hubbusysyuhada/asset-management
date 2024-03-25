<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Drag',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M18 15.0098H6C5.45 15.0098 5 14.5598 5 14.0098C5 13.4598 5.45 13.0098 6 13.0098H18C18.55 13.0098 19 13.4598 19 14.0098C19 14.5598 18.55 15.0098 18 15.0098Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M18 11.0098H6C5.45 11.0098 5 10.5598 5 10.0098C5 9.45977 5.45 9.00977 6 9.00977H18C18.55 9.00977 19 9.45977 19 10.0098C19 10.5598 18.55 11.0098 18 11.0098Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M12.0005 7.01H14.8005C15.3405 7.01 15.6105 6.36 15.2305 5.98L12.4305 3.18C12.1905 2.94 11.8105 2.94 11.5805 3.18L8.78046 5.98C8.40046 6.36 8.67046 7.01 9.20046 7.01H12.0005Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M12.0004 17.0098H9.20036C8.66036 17.0098 8.39036 17.6598 8.77036 18.0398L11.5704 20.8398C11.8104 21.0798 12.1904 21.0798 12.4204 20.8398L15.2204 18.0398C15.6004 17.6598 15.3304 17.0098 14.8004 17.0098H12.0004Z" fill="#414042"/>
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