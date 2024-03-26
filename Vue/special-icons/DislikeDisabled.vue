<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'DislikeDisabled',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.85 4H7.85H6.88H6C4.34 4 3 5.34 3 7V14C3 15.1 3.9 16 5 16H7.85L9.02 18.42C9.48 19.39 10.45 20 11.52 20C13.14 20 14.42 18.61 14.29 17C14.29 16.98 14.29 16.97 14.29 16.95L14.1 15H16.11H18.05C20.12 15 21.56 12.96 20.88 11.01L19.13 6.01C18.71 4.81 17.57 4 16.3 4H8.88H8.85ZM5 14H6.85V6H6C5.45 6 5 6.45 5 7V14Z" fill="#B7B6B7"/>
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