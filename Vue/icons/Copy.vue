<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Copy',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M5.06673 6.49771C5.06673 5.56813 5.8337 4.81698 6.7734 4.81698H10.5467C10.5623 4.81698 10.5778 4.81771 10.5934 4.81916V6.64215C10.5934 7.28556 11.1268 7.81079 11.7801 7.81079H13.3334V11.6712C13.3334 12.5966 12.5707 13.352 11.6267 13.352H6.7734C5.8337 13.352 5.06673 12.6008 5.06673 11.6712V6.49771ZM6.7734 3.50391C5.09976 3.50391 3.7334 4.84054 3.7334 6.49771V11.6712C3.7334 13.3284 5.09976 14.665 6.7734 14.665H11.6267C13.3095 14.665 14.6667 13.3194 14.6667 11.6712V7.5613C14.6667 7.07423 14.4669 6.61685 14.1318 6.2768L14.1283 6.27329L11.8546 4.03414L11.851 4.03072C11.5058 3.70068 11.0413 3.50391 10.5467 3.50391H6.7734Z" fill="#3D00C3"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4.3735 2.6451C3.42835 2.6451 2.66683 3.39506 2.66683 4.32584V9.10542C2.66683 10.0362 3.42835 10.7862 4.3735 10.7862V12.0992C2.69197 12.0992 1.3335 10.7614 1.3335 9.10542V4.32584C1.3335 2.66987 2.69197 1.33203 4.3735 1.33203H9.6335C11.3096 1.33203 12.6668 2.67107 12.6668 4.32584V5.8884H11.3335V4.32584C11.3335 3.39385 10.5708 2.6451 9.6335 2.6451H4.3735Z" fill="#3D00C3"/>
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