<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M17 6C18.65 6 20 7.35 20 9V16C20 17.65 18.65 19 17 19H7C5.35 19 4 17.65 4 16V9C4 7.35 5.35 6 7 6H17ZM17 4H7C4.24 4 2 6.24 2 9V16C2 18.76 4.24 21 7 21H17C19.76 21 22 18.76 22 16V9C22 6.24 19.76 4 17 4Z" />
<path :style="colorStyle"  d="M12 10C13.65 10 15 11.35 15 13C15 14.65 13.65 16 12 16C10.35 16 9 14.65 9 13C9 11.35 10.35 10 12 10ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8Z" />
<path :style="colorStyle"  d="M17 9C16.45 9 16 8.55 16 8C16 7.45 16.45 7 17 7C17.55 7 18 7.45 18 8C18 8.55 17.55 9 17 9Z" />
<path :style="colorStyle"  d="M10 3H7C6.45 3 6 3.45 6 4V5H11V4C11 3.45 10.55 3 10 3Z" />
</svg>

</template>

<script>
export default {
  name: 'Camera',
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