<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.885 11.0998H17.5474C18.6367 11.0998 19.1768 9.78543 18.4116 9.02024L12.7492 3.35784C12.2721 2.88072 11.4979 2.88072 11.0208 3.35784L5.3584 9.02024C4.59321 9.78543 5.13335 11.0998 6.22262 11.0998H11.885Z" fill="#414042"/>
<path d="M11.885 12.9004H6.22262C5.13335 12.9004 4.59321 14.2147 5.3584 14.9799L11.0208 20.6423C11.4979 21.1194 12.2721 21.1194 12.7492 20.6423L18.4116 14.9799C19.1768 14.2147 18.6367 12.9004 17.5474 12.9004H11.885Z" fill="#414042"/>
</svg>

</template>

<script>
export default {
  name: 'SortDefault',
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