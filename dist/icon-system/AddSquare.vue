<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#414042" stroke-width="2" stroke-linecap="round"/>
</svg>

</template>

<script>
export default {
  name: 'AddSquare',
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