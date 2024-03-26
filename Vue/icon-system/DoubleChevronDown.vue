<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M5.34923 5.24076C5.76855 4.88134 6.39985 4.9299 6.75927 5.34923L12 11.4634L17.2408 5.34923C17.6002 4.9299 18.2315 4.88134 18.6508 5.24076C19.0701 5.60018 19.1187 6.23148 18.7593 6.65081L12.9871 13.3851C12.4682 13.9904 11.5318 13.9904 11.013 13.3851L5.24076 6.65081C4.88134 6.23148 4.9299 5.60018 5.34923 5.24076Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M5.34923 11.2408C5.76855 10.8813 6.39985 10.9299 6.75927 11.3492L12 17.4634L17.2408 11.3492C17.6002 10.9299 18.2315 10.8813 18.6508 11.2408C19.0701 11.6002 19.1187 12.2315 18.7593 12.6508L12.9871 19.3851C12.4682 19.9904 11.5318 19.9904 11.013 19.3851L5.24076 12.6508C4.88134 12.2315 4.9299 11.6002 5.34923 11.2408Z" />
</svg>

</template>

<script>
export default {
  name: 'DoubleChevronDown',
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