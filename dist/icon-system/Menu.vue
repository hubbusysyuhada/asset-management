<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H12C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7H3C2.44772 7 2 6.55228 2 6Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M11 18C11 17.4477 11.4477 17 12 17L21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19L12 19C11.4477 19 11 18.5523 11 18Z" />
</svg>

</template>

<script>
export default {
  name: 'Menu',
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