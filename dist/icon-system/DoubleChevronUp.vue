<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M18.6508 19.5981C18.2314 19.9575 17.6001 19.909 17.2407 19.4896L12 13.3754L6.75924 19.4896C6.39982 19.909 5.76852 19.9575 5.34919 19.5981C4.92986 19.2387 4.8813 18.6074 5.24073 18.1881L11.0129 11.4538C11.5318 10.8485 12.4682 10.8485 12.987 11.4538L18.7592 18.1881C19.1187 18.6074 19.0701 19.2387 18.6508 19.5981Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M18.6508 13.5981C18.2314 13.9575 17.6001 13.909 17.2407 13.4896L12 7.37544L6.75924 13.4896C6.39982 13.909 5.76852 13.9575 5.34919 13.5981C4.92986 13.2387 4.8813 12.6074 5.24073 12.1881L11.0129 5.4538C11.5318 4.8485 12.4682 4.8485 12.987 5.4538L18.7592 12.1881C19.1187 12.6074 19.0701 13.2387 18.6508 13.5981Z" />
</svg>

</template>

<script>
export default {
  name: 'DoubleChevronUp',
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