<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'DislikeHover',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1099 15.19L11.8899 13H14.0899H18.0399C18.7299 13 19.2099 12.32 18.9799 11.67L17.2299 6.67C17.0999 6.27 16.7199 6 16.2899 6H8.87988V13.54L9.15988 14.13L10.8099 17.55C10.9399 17.83 11.2199 18 11.5199 18C11.9799 18 12.3399 17.6 12.2999 17.15L12.1099 15.19Z" fill="#DBC8F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 15.19L11.89 13H14.09H18.04C18.73 13 19.21 12.32 18.98 11.67L17.23 6.67C17.1 6.27 16.72 6 16.29 6H8.88V13.54L9.16 14.13L10.81 17.55C10.94 17.83 11.22 18 11.52 18C11.98 18 12.34 17.6 12.3 17.15L12.11 15.19ZM8.85 4H7.85H6.88H6C4.34 4 3 5.34 3 7V14C3 15.1 3.9 16 5 16H7.85L9.02 18.42C9.48 19.39 10.45 20 11.52 20C13.14 20 14.42 18.61 14.29 17C14.29 16.98 14.29 16.97 14.29 16.95L14.1 15H16.11H18.05C20.12 15 21.56 12.96 20.88 11.01L19.13 6.01C18.71 4.81 17.57 4 16.3 4H8.88H8.85ZM5 14H6.85V6H6C5.45 6 5 6.45 5 7V14Z" fill="#3D00C3"/>
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