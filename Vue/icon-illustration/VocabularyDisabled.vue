<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#F2F2F2"/>
<path d="M13.8605 8.27979C13.1104 8.27979 12.4504 8.6198 12.0004 9.13981C11.5604 8.6198 10.8904 8.27979 10.1404 8.27979H6.44025V15.94H8.1103H10.1404C10.8604 15.94 11.4404 16.49 11.4404 17.1701H12.5504C12.5504 16.49 13.1305 15.94 13.8505 15.94H15.8805H17.5506V8.27979H13.8605ZM10.1404 14.83H8.1103H7.56028V9.38982H10.1504C10.8704 9.38982 11.4504 9.93984 11.4504 10.6199V15.21C11.0704 14.97 10.6204 14.83 10.1404 14.83ZM16.4406 14.83H15.8805H13.8505C13.3705 14.83 12.9204 14.97 12.5504 15.21V10.6099C12.5504 9.92983 13.1305 9.37982 13.8505 9.37982H16.4406V14.83Z" fill="#B7B6B7"/>
</svg>

</template>

<script>
export default {
  name: 'VocabularyDisabled',
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