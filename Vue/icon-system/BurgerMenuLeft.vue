<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M3 18C3 17.4477 3.44772 17 4 17H10C10.5523 17 11 17.4477 11 18C11 18.5523 10.5523 19 10 19H4C3.44772 19 3 18.5523 3 18Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11L16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L4 13C3.44772 13 3 12.5523 3 12Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5L20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7L4 7C3.44772 7 3 6.55228 3 6Z" />
</svg>

</template>

<script>
export default {
  name: 'BurgerMenuLeft',
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