<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 16C11 15.4477 11.4477 15 12 15V15C12.5523 15 13 15.4477 13 16V16C13 16.5523 12.5523 17 12 17V17C11.4477 17 11 16.5523 11 16V16ZM11 8C11 7.44772 11.4477 7 12 7V7C12.5523 7 13 7.44772 13 8V12C13 12.5523 12.5523 13 12 13V13C11.4477 13 11 12.5523 11 12V8Z" />
</svg>

</template>

<script>
export default {
  name: 'Error',
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