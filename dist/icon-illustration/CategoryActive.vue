<template>
<svg :style="contentStyle" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="19" y="19" width="42.2746" height="42.2746" rx="5" fill="#3D00C3"/>
<rect x="19" y="66.7256" width="42.2746" height="42.2746" rx="5" fill="#7D5BCA"/>
<rect x="66.7246" y="19" width="42.2746" height="42.2746" rx="5" fill="#7D5BCA"/>
<rect x="66.7246" y="66.7256" width="42.2746" height="42.2746" rx="21.1373" fill="#FFC401"/>
</svg>

</template>

<script>
export default {
  name: 'CategoryActive',
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