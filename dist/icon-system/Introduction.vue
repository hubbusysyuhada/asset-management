<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M12 9C11.45 9 11 9.45 11 10V13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V10C13 9.45 12.55 9 12 9Z" />
<path :style="colorStyle"  d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" />
<path :style="colorStyle"  d="M19.38 17.65C20.34 17.15 21 16.15 21 15V5C21 3.34 19.66 2 18 2H6C4.34 2 3 3.34 3 5V18.94C3 20.6 4.34 21.94 6 21.94H20.03C20.57 21.94 21 21.51 21 20.97C21 20.43 20.57 20 20.03 20H19.15C18.78 18.92 19.22 17.95 19.38 17.65ZM5 5C5 4.45 5.45 4 6 4H18C18.55 4 19 4.45 19 5V15C19 15.55 18.55 16 18 16H5V5ZM6 20C5.45 20 5 19.55 5 19C5 18.45 5.45 18 6 18H17.14C17 18.57 16.95 19.26 17.09 20H6Z" />
</svg>

</template>

<script>
export default {
  name: 'Introduction',
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