<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 20.7071C9.31658 21.0976 8.68342 21.0976 8.29289 20.7071L4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929C10.0976 11.6834 10.0976 12.3166 9.70711 12.7071L6.41421 16L9.70711 19.2929C10.0976 19.6834 10.0976 20.3166 9.70711 20.7071Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M20 13C20 15.2091 18.2091 17 16 17H5C4.44771 17 4 16.5523 4 16C4 15.4477 4.44771 15 5 15H16C17.1046 15 18 14.1046 18 13V4C18 3.44771 18.4477 3 19 3C19.5523 3 20 3.44771 20 4V13Z" />
</svg>

</template>

<script>
export default {
  name: 'BackLeft',
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