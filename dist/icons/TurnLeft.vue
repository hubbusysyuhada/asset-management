<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'TurnLeft',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071C10.0976 12.3166 10.0976 11.6834 9.70711 11.2929L6.41421 8L9.70711 4.70711C10.0976 4.31658 10.0976 3.68342 9.70711 3.29289Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M20 11C20 8.79086 18.2091 7 16 7H5C4.44771 7 4 7.44772 4 8C4 8.55228 4.44771 9 5 9H16C17.1046 9 18 9.89543 18 11V20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20V11Z" fill="#414042"/>
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