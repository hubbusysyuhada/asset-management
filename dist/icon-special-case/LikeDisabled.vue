<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.85 20H7.85H6.88H6C4.34 20 3 18.66 3 17V10C3 8.9 3.9 8 5 8H7.85L9.02 5.58C9.48 4.61 10.45 4 11.52 4C13.14 4 14.42 5.39 14.29 7C14.29 7.02 14.29 7.03 14.29 7.05L14.1 9H16.11H18.05C20.12 9 21.56 11.04 20.88 12.99L19.13 17.99C18.71 19.19 17.57 20 16.3 20H8.88H8.85ZM5 10H6.85V18H6C5.45 18 5 17.55 5 17V10Z" fill="#B7B6B7"/>
</svg>

</template>

<script>
export default {
  name: 'LikeDisabled',
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