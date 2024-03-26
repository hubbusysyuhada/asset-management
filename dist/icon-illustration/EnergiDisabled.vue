<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9997 21.9994C17.5224 21.9994 21.9994 17.5224 21.9994 11.9997C21.9994 6.47702 17.5224 2 11.9997 2C6.47702 2 2 6.47702 2 11.9997C2 17.5224 6.47702 21.9994 11.9997 21.9994Z" stroke="#B7B6B7" stroke-width="1.7142" stroke-miterlimit="10"/>
<path d="M15.5353 10.0833L12.7453 10.6933L14.1153 5.91333C14.2353 5.49333 13.6753 5.23333 13.4253 5.58333L12.1953 7.32333L7.97527 13.3233C7.77527 13.6133 8.03527 14.0033 8.38527 13.9233L10.8753 13.3133L9.51527 18.1033C9.39527 18.5133 9.94527 18.7733 10.1953 18.4333L12.1953 15.7333L15.9253 10.6933C16.1353 10.4033 15.8753 10.0033 15.5353 10.0833Z" fill="#B7B6B7"/>
<path d="M15.9253 10.6833L12.1953 15.7233V7.32333L13.4253 5.58333C13.6753 5.23333 14.2253 5.49333 14.1153 5.91333L12.7453 10.6933L15.5353 10.0833C15.8753 10.0033 16.1353 10.4033 15.9253 10.6833Z" fill="#F2F2F2"/>
</svg>

</template>

<script>
export default {
  name: 'EnergiDisabled',
  props: {
    size: {
      Type: Number,
    },
    color: {
      Type: String,
    }
  },
  computed: {
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