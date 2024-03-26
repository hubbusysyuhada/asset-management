<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M6 15.3006V8.69963C6 6.41217 8.45734 4.96627 10.4569 6.07716L16.3978 9.37764C18.4552 10.5207 18.4552 13.4796 16.3978 14.6226L10.4569 17.9231C8.45734 19.034 6 17.5881 6 15.3006ZM8 15.3006V8.69963C8 7.93714 8.81911 7.45518 9.48564 7.82547L15.4265 11.126C16.1123 11.507 16.1123 12.4933 15.4265 12.8743L9.48564 16.1748C8.81911 16.5451 8 16.0631 8 15.3006Z" />
</svg>

</template>

<script>
export default {
  name: 'Play',
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