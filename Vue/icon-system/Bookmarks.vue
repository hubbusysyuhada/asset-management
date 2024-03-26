<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M8 6C8 3.79086 9.79086 2 12 2H17C19.2091 2 21 3.79086 21 6V16.0514C21 17.6802 19.1571 18.626 17.8338 17.6762L16 16.3601V20.0514C16 21.6802 14.1571 22.626 12.8338 21.6762L9.5 19.2835L6.16615 21.6762C4.84287 22.626 3 21.6802 3 20.0514V10C3 7.79086 4.79086 6 7 6H8ZM10 6C10 4.89543 10.8954 4 12 4H17C18.1046 4 19 4.89543 19 6V16.0514L16 13.8983V10C16 7.79086 14.2091 6 12 6H10ZM7 8C5.89543 8 5 8.89543 5 10V20.0514L8.33385 17.6587C9.03082 17.1585 9.96918 17.1585 10.6662 17.6587L14 20.0514V10C14 8.89543 13.1046 8 12 8H7Z" />
</svg>

</template>

<script>
export default {
  name: 'Bookmarks',
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