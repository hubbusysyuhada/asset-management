<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M9 15V9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15ZM8 6C6.34315 6 5 7.34315 5 9V15C5 16.6569 6.34315 18 8 18C9.65685 18 11 16.6569 11 15V9C11 7.34315 9.65685 6 8 6Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M17 15V9C17 8.44772 16.5523 8 16 8C15.4477 8 15 8.44772 15 9V15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15ZM16 6C14.3431 6 13 7.34315 13 9V15C13 16.6569 14.3431 18 16 18C17.6569 18 19 16.6569 19 15V9C19 7.34315 17.6569 6 16 6Z" />
</svg>

</template>

<script>
export default {
  name: 'Pause',
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