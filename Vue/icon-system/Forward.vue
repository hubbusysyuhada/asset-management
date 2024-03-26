<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M3 14.2611V9.40807C3 7.32253 5.24043 6.00426 7.06352 7.01708L11.4312 9.44358C13.307 10.4857 13.307 13.1834 11.4312 14.2256L7.06352 16.652C5.24043 17.6649 3 16.3466 3 14.2611ZM5 14.2611V9.40807C5 8.8475 5.6022 8.49316 6.09223 8.7654L10.4599 11.1919C10.9641 11.472 10.9641 12.1971 10.4599 12.4772L6.09223 14.9037C5.60221 15.176 5 14.8216 5 14.2611Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M11.2441 14.2611V9.40807C11.2441 7.32253 13.4846 6.00426 15.3077 7.01708L19.6753 9.44358C21.5512 10.4857 21.5512 13.1834 19.6753 14.2256L15.3077 16.652C13.4846 17.6649 11.2441 16.3466 11.2441 14.2611ZM13.2441 14.2611V9.40807C13.2441 8.8475 13.8463 8.49316 14.3364 8.7654L18.7041 11.1919C19.2083 11.472 19.2083 12.1971 18.7041 12.4772L14.3364 14.9037C13.8463 15.176 13.2441 14.8216 13.2441 14.2611Z" />
</svg>

</template>

<script>
export default {
  name: 'Forward',
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