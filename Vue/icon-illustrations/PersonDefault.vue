<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'PersonDefault',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.4318 65.4785H68.7295C84.4026 65.4785 97.1613 78.2372 97.1613 93.9104V109.001H30V93.9104C30 78.1725 42.7587 65.4785 58.4318 65.4785Z" fill="#989899"/>
<rect x="30" y="100.288" width="66.7733" height="8.70956" fill="#D1D1D2"/>
<path d="M85.6198 40.9553C85.6198 43.6107 85.1665 46.2661 84.195 48.7919C79.9205 60.1905 67.2266 65.9546 55.8279 61.6801C44.4293 57.4056 38.6652 44.7117 42.9397 33.3131C46.178 24.6993 54.4031 19 63.5997 19C75.7108 19 85.6198 28.8443 85.6198 40.9553Z" fill="#D1D1D2"/>
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