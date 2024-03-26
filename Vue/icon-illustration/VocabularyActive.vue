<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#DAC8F9"/>
<path d="M13.8604 8.27979C13.1104 8.27979 12.4504 8.6198 12.0004 9.13981C11.5603 8.6198 10.8903 8.27979 10.1403 8.27979H6.44019V15.94H8.11024H10.1403C10.8603 15.94 11.4403 16.49 11.4403 17.1701H12.5504C12.5504 16.49 13.1304 15.94 13.8504 15.94H15.8805H17.5505V8.27979H13.8604ZM10.1403 14.83H8.11024H7.56022V9.38982H10.1503C10.8703 9.38982 11.4503 9.93984 11.4503 10.6199V15.21C11.0703 14.97 10.6203 14.83 10.1403 14.83ZM16.4405 14.83H15.8805H13.8504C13.3704 14.83 12.9204 14.97 12.5504 15.21V10.6099C12.5504 9.92983 13.1304 9.37982 13.8504 9.37982H16.4405V14.83Z" fill="#3D00C3"/>
</svg>

</template>

<script>
export default {
  name: 'VocabularyActive',
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