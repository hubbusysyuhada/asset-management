<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M16.5 5.02H7.5V3.23C7.5 2.55 8.05 2 8.73 2H15.27C15.95 2 16.5 2.55 16.5 3.23V5.02Z" />
<path :style="colorStyle"  d="M17.5 3.06006V5.07006C18.91 5.31006 20 6.52006 20 8.00006V17.0001C20 18.6501 18.65 20.0001 17 20.0001H7C5.35 20.0001 4 18.6501 4 17.0001V8.00006C4 6.52006 5.09 5.31006 6.5 5.07006V3.06006C3.98 3.32006 2 5.42006 2 8.00006V17.0001C2 19.7601 4.24 22.0001 7 22.0001H17C19.76 22.0001 22 19.7601 22 17.0001V8.00006C22 5.42006 20.02 3.32006 17.5 3.06006Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M6 10.5C6 9.94772 6.44772 9.5 7 9.5H17C17.5523 9.5 18 9.94772 18 10.5C18 11.0523 17.5523 11.5 17 11.5H7C6.44772 11.5 6 11.0523 6 10.5Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M6 15C6 14.4477 6.44772 14 7 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H7C6.44772 16 6 15.5523 6 15Z" />
</svg>

</template>

<script>
export default {
  name: 'Log',
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