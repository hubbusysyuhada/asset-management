<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M18.6508 16.5991C18.2314 16.9585 17.6001 16.9099 17.2407 16.4906L12 10.3764L6.75924 16.4906C6.39982 16.9099 5.76852 16.9585 5.34919 16.5991C4.92986 16.2397 4.8813 15.6084 5.24073 15.189L11.0129 8.45477C11.5318 7.84948 12.4682 7.84948 12.987 8.45477L18.7592 15.189C19.1187 15.6084 19.0701 16.2397 18.6508 16.5991Z" />
</svg>

</template>

<script>
export default {
  name: 'ChevronUp',
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