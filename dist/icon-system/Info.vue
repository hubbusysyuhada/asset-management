<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M11 8C11 7.44772 11.4477 7 12 7V7C12.5523 7 13 7.44772 13 8V8C13 8.55228 12.5523 9 12 9V9C11.4477 9 11 8.55228 11 8V8ZM11 12C11 11.4477 11.4477 11 12 11V11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17V17C11.4477 17 11 16.5523 11 16V12ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
</svg>

</template>

<script>
export default {
  name: 'Info',
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