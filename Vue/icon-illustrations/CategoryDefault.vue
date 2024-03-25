<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'CategoryDefault',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="19" y="19" width="42.2746" height="42.2746" rx="5" fill="#989899"/>
<rect x="19" y="66.7256" width="42.2746" height="42.2746" rx="5" fill="#D1D1D2"/>
<rect x="66.7246" y="19" width="42.2746" height="42.2746" rx="5" fill="#D1D1D2"/>
<rect x="66.7246" y="66.7256" width="42.2746" height="42.2746" rx="21.1373" fill="#E8E8E8"/>
</svg>
`
    },
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