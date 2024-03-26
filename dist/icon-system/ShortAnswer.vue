<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M22 22L19.1 19.04C20.89 17.23 22 14.75 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C12.06 22 12.12 21.99 12.17 21.99L12.16 22H22ZM4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12Z" />
<path :style="colorStyle"  d="M14.2899 16H16.3299L13.2299 7H10.7799L7.66992 16H9.70992L10.3799 13.95H13.6299L14.2899 16ZM10.8599 12.46L11.9699 9.05H12.0399L13.1499 12.46H10.8599Z" />
</svg>

</template>

<script>
export default {
  name: 'ShortAnswer',
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