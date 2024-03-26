<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M13 20H11V8.21C11 6.99 9.95 6 8.65 6H5C4.45 6 4 6.45 4 7V14.8C4 15.35 4.45 15.8 5 15.8H8.65V17.8H5C3.35 17.8 2 16.45 2 14.8V7C2 5.35 3.35 4 5 4H8.65C11.05 4 13 5.89 13 8.21V20Z" />
<path :style="colorStyle"  d="M13 19.9998H11C11 18.7798 9.95 17.7998 8.66 17.7998H5V15.7998H8.65C11.05 15.7998 13 17.6798 13 19.9998Z" />
<path :style="colorStyle"  d="M13 20H11V8.21C11 5.89 12.95 4 15.34 4H19C20.65 4 22 5.35 22 7V14.8C22 16.45 20.65 17.8 19 17.8H15.35V15.8H19C19.55 15.8 20 15.35 20 14.8V7C20 6.45 19.55 6 19 6H15.35C14.05 6 13 6.99 13 8.21V20Z" />
<path :style="colorStyle"  d="M13 19.9998H11C11 17.6798 12.95 15.7998 15.35 15.7998H19V17.7998H15.35C14.05 17.7998 13 18.7798 13 19.9998Z" />
</svg>

</template>

<script>
export default {
  name: 'Study',
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